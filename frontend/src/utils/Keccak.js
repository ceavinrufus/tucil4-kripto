class Keccak {
  constructor(outputLength = 256) {
    // Inisialisasi state array yang merepresentasikan matriks dengan 25 nol
    this.state = new Array(25).fill("0000000000000000");

    // Set capacity dan rate berdasarkan outputLength
    this.outputLength = outputLength;
    this.capacity = 2 * outputLength;
    this.rate = 1600 - this.capacity;

    this.buffer = [];
    this.suffix = 0x01; // Atau 06 untuk SHA-3
  }

  // Buat debugging
  // dec2bin(arr) {
  //   for (let i = 0; i < arr.length; i++) {
  //     console.log(i, ":", arr[i].toString(16));
  //   }
  // }

  hexToBigInt(hex) {
    return BigInt("0x" + hex);
  }

  bigIntToHex(bigint) {
    return bigint.toString(16).slice(-16).padStart(16, "0");
  }

  transpose(matrix, rows, cols) {
    let transposed = new Array(matrix.length);

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        transposed[col * rows + row] = matrix[row * cols + col];
      }
    }

    return transposed;
  }

  keccakF() {
    // Konstanta yang akan dipakai dalam Keccak-f[1600] permutation
    const R = [
      [0, 36, 3, 41, 18],
      [1, 44, 10, 45, 2],
      [62, 6, 43, 15, 61],
      [28, 55, 25, 21, 56],
      [27, 20, 39, 8, 14],
    ];
    const ROUND_CONSTANTS = [
      0x0000000000000001n,
      0x0000000000008082n,
      0x800000000000808an,
      0x8000000080008000n,
      0x000000000000808bn,
      0x0000000080000001n,
      0x8000000080008081n,
      0x8000000000008009n,
      0x000000000000008an,
      0x0000000000000088n,
      0x0000000080008009n,
      0x000000008000000an,
      0x000000008000808bn,
      0x800000000000008bn,
      0x8000000000008089n,
      0x8000000000008003n,
      0x8000000000008002n,
      0x8000000000000080n,
      0x000000000000800an,
      0x800000008000000an,
      0x8000000080008081n,
      0x8000000000008080n,
      0x0000000080000001n,
      0x8000000080008008n,
    ];

    // Fungsi bitwise rotation
    const ROT = (x, n) => (x << BigInt(n)) | (x >> (64n - BigInt(n)));

    // Convert state ke BigInts untuk processing
    let state = this.transpose(this.state.map(this.hexToBigInt), 5, 5);

    // Melakukan permutasi Keccak-f[1600] 24 kali
    for (let round = 0; round < 24; round++) {
      // Theta step
      let C = new Array(5).fill("0000000000000000");
      for (let x = 0; x < 5; x++) {
        C[x] = this.bigIntToHex(
          state[x * 5] ^
            state[x * 5 + 1] ^
            state[x * 5 + 2] ^
            state[x * 5 + 3] ^
            state[x * 5 + 4]
        );
      }

      let D = new Array(5).fill("0000000000000000");
      for (let x = 0; x < 5; x++) {
        D[x] = this.bigIntToHex(
          this.hexToBigInt(C[(x + 4) % 5]) ^
            ROT(this.hexToBigInt(C[(x + 1) % 5]), 1)
        );
        for (let y = 0; y < 5; y++) {
          state[x * 5 + y] ^= this.hexToBigInt(D[x]);
        }
      }

      // Rho and Pi steps
      let B = new Array(25).fill("0000000000000000");
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          B[y * 5 + ((2 * x + 3 * y) % 5)] = this.bigIntToHex(
            ROT(state[x * 5 + y], R[x][y])
          );
        }
      }

      // Chi step
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          const B1 = this.hexToBigInt(B[x * 5 + y]);
          const B2 = this.hexToBigInt(B[((x + 1) % 5) * 5 + y]);
          const B3 = this.hexToBigInt(B[((x + 2) % 5) * 5 + y]);
          state[x * 5 + y] = B1 ^ (~B2 & B3);
        }
      }

      // Iota step
      state[0] = state[0] ^ ROUND_CONSTANTS[round];
    }

    // Convert state kembali ke hexadesimal
    this.state = state.map(this.bigIntToHex);
  }

  pad(buffer) {
    // Menambahkan suffix byte pada buffer
    buffer.push(this.suffix);

    // Pad dengan 0 sampai panjang buffer habis dibagi dengan rate (r)
    while ((buffer.length * 8) % this.rate !== 0) {
      buffer.push(0x00);
    }
    // XOR dengan 0x08
    buffer[buffer.length - 1] ^= 0x80;

    return buffer;
  }

  absorb(buffer) {
    // Membagi buffer ke dalam blok blok sesuai rate
    const blocks = [];
    for (let i = 0; i < buffer.length; i += this.rate / 8) {
      blocks.push(buffer.slice(i, i + this.rate / 8));
    }

    // Absorb setiap blok ke dalam state
    for (let block of blocks) {
      for (let i = 0; i < block.length; i++) {
        const stateIndex = Math.floor(i / 8);
        const bitShift = BigInt((i % 8) * 8);
        this.state[stateIndex] = this.bigIntToHex(
          this.hexToBigInt(this.state[stateIndex]) ^
            (BigInt(block[i]) << bitShift)
        );
      }

      this.keccakF();
    }
  }

  squeeze() {
    // Squeezing phase
    let state = this.transpose(this.state, 5, 5);

    let output = [];
    while (output.length * 8 < this.outputLength) {
      for (let i = 0; i < this.rate / 8; i++) {
        output.push(
          Number(
            (this.hexToBigInt(state[Math.floor(i / 8)]) >>
              BigInt((i % 8) * 8)) &
              0xffn
          )
        );
      }
      if (output.length * 8 >= this.outputLength) {
        break;
      } else {
        this.keccakF();
      }
    }
    return output.slice(0, this.outputLength / 8);
  }

  hash() {
    this.buffer = this.pad(this.buffer);
    this.absorb(this.buffer);
    const output = this.squeeze();

    // Menampilkan output dalam bentuk heksadesimal
    return output.map((byte) => byte.toString(16).padStart(2, "0")).join("");
  }

  update(data) {
    // Convert input string ke byte array
    for (let i = 0; i < data.length; i++) {
      this.buffer.push(data.charCodeAt(i));
    }
  }
}

// Cara penggunaan:
// const keccak_224 = new Keccak(224);
// keccak_224.update("kocak");
// const hash224 = keccak_224.hash();
// console.log("keccak-224:", hash224);

// const keccak_256 = new Keccak(256);
// keccak_256.update("kocak");
// const hash256 = keccak_256.hash();
// console.log("keccak-256:", hash256);

// const keccak_256 = new Keccak(256);
// keccak_256.update(
//   "18221162Ceavin Rufus De Prayer PurbaII2221Manajemen Proyek STIA3II3220Arsitektur EnterpriseA3II3230Keamanan InformasiA3II3240Rekayasa Sistem dan Teknologi InformasiA3II3260Platform dan Pengembangan Aplikasi MobileA3II4031Kriptografi dan KodingA2II4035Sistem CerdasA2II4035Manajemen ProdukA2II4472Komunikasi InterpersonalA2II4090Kerja PraktekA24.00"
// );
// const hash256 = keccak_256.hash();
// console.log("keccak-256:", hash256);

// const keccak_384 = new Keccak(384);
// keccak_384.update("halo");
// const hash384 = keccak_384.hash();
// console.log("keccak-384:", hash384);

// const keccak_512 = new Keccak(512);
// keccak_512.update("halo");
// const hash512 = keccak_512.hash();
// console.log("keccak-512:", hash512);
export default Keccak;
