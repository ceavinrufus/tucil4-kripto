// Referensi: https://keccak.team/keccak_specs_summary.html
class SHA3 {
  constructor(outputLength = 256) {
    // Inisialisasi state array yang merepresentasikan matriks dengan 25 nol
    this.state = new Array(25).fill(BigInt(0));

    // Set capacity dan rate berdasarkan outputLength
    this.outputLength = outputLength;
    this.capacity = 2 * outputLength;
    this.rate = 1600 - this.capacity;

    this.buffer = "";
    this.suffix = 0x06;
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

    // Bitwise rotation function
    const ROT = (x, n) => (x << BigInt(n)) | (x >> (64n - BigInt(n)));

    // Perform the Keccak-f[1600] permutation for 24 rounds
    for (let round = 0; round < 24; round++) {
      // Theta step
      let C = new Array(5).fill(0n);
      for (let x = 0; x < 5; x++) {
        C[x] =
          this.state[x] ^
          this.state[x + 5] ^
          this.state[x + 10] ^
          this.state[x + 15] ^
          this.state[x + 20];
      }

      let D = new Array(5).fill(0n);
      for (let x = 0; x < 5; x++) {
        D[x] = C[(x + 4) % 5] ^ ROT(C[(x + 1) % 5], 1);
        for (let y = 0; y < 5; y++) {
          this.state[x + 5 * y] ^= D[x];
        }
      }

      // Rho and Pi steps
      let B = new Array(25).fill(0n); // Merepresentasikan matriks dalam bentuk array
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          B[y + 5 * ((2 * x + 3 * y) % 5)] = ROT(
            this.state[x + 5 * y],
            R[x][y]
          );
        }
      }

      // Chi step
      for (let x = 0; x < 5; x++) {
        for (let y = 0; y < 5; y++) {
          this.state[x + 5 * y] =
            B[x + 5 * y] ^
            (~B[((x + 1) % 5) + 5 * y] & B[((x + 2) % 5) + 5 * y]);
        }
      }

      // Iota step
      this.state[0] ^= ROUND_CONSTANTS[round];
    }
  }

  pad(buffer) {
    // Menambahkan suffix byte pada buffer
    buffer += String.fromCharCode(this.suffix);

    // Pad dengan 0 sampai panjang buffer habis dibagi dengan rate (r)
    while ((buffer.length * 8) % this.rate !== 0) {
      buffer += String.fromCharCode(0x00);
    }
    // Append a 1 bit at the end of the buffer
    buffer =
      buffer.slice(0, -1) +
      String.fromCharCode(buffer.charCodeAt(buffer.length - 1) ^ 0x80);
    return buffer;
  }

  absorb(buffer) {
    // Membagi buffer ke dalam blok blok sesuai rate (r)
    const blocks = [];
    for (let i = 0; i < buffer.length; i += this.rate / 8) {
      blocks.push(buffer.slice(i, i + this.rate / 8));
    }
    // Absorb setiap blok ke dalam state
    for (let block of blocks) {
      for (let i = 0; i < block.length; i++) {
        this.state[Math.floor(i / 8)] ^=
          BigInt(block.charCodeAt(i)) << BigInt((i % 8) * 8);
      }
      this.keccakF();
    }
  }

  squeeze() {
    // Squeezing phase
    let output = "";
    while (output.length * 8 < this.capacity) {
      for (let i = 0; i < this.rate / 8; i++) {
        output += String.fromCharCode(
          Number((this.state[Math.floor(i / 8)] >> BigInt((i % 8) * 8)) & 0xffn)
        );
      }
      this.keccakF();
    }
    return output;
  }

  hash() {
    this.buffer = this.pad(this.buffer);
    this.absorb(this.buffer);
    const output = this.squeeze();

    // Menampilkan output dalam bentuk heksadesimal
    return output
      .slice(0, this.outputLength / 8)
      .split("")
      .map((c) => c.charCodeAt(0).toString(16).padStart(2, "0"))
      .join("");
  }

  update(data) {
    this.buffer += data;
  }
}

// Cara penggunaan:
// const sha3_256 = new SHA3(256);
// sha3_256.update("halo");
// const hash256 = sha3_256.hash();
// console.log("SHA3-256:", hash256);

// const sha3_384 = new SHA3(384);
// sha3_384.update("halo");
// const hash384 = sha3_384.hash();
// console.log("SHA3-384:", hash384);

// const sha3_512 = new SHA3(512);
// sha3_512.update("halo");
// const hash512 = sha3_512.hash();
// console.log("SHA3-512:", hash512);
export default SHA3;
