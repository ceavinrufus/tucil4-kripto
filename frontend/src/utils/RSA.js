/* eslint-disable no-undef */
class RSA {
  constructor() {
    this.p = null;
    this.q = null;
    this.n = null;
    this.phiN = null;
    this.publicKey = null;
    this.privateKey = null;
    this.initialize();
  }

  initialize() {
    this.pickTwoDistinctNumbers();
    this.n = this.p * this.q;
    this.phiN = (this.p - 1) * (this.q - 1);
    this.generateKeys();
  }

  pickTwoDistinctNumbers() {
    const numbers = [599, 619, 677, 277, 887, 2039, 2081]; //random 3and4 digit prime keys hardcoded by us
    const firstIndex = Math.floor(Math.random() * numbers.length);
    this.p = numbers[firstIndex];

    const filteredNumbers = numbers
      .slice(0, firstIndex)
      .concat(numbers.slice(firstIndex + 1));
    const secondIndex = Math.floor(Math.random() * filteredNumbers.length);
    this.q = filteredNumbers[secondIndex];
  }

  gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  modPow(base, exponent, modulus) {
    let result = 1;
    base = base % modulus;
    while (exponent > 0) {
      if (exponent % 2 === 1) {
        result = (result * base) % modulus;
      }
      exponent = exponent >> 1;
      base = (base * base) % modulus;
    }
    return result;
  }

  modInverse(a, m) {
    a = ((a % m) + m) % m;
    for (let x = 1; x < m; x++) {
      if ((a * x) % m === 1) {
        return x;
      }
    }
    return 1;
  }

  generateKeys() {
    let e = 2;
    while (e < this.phiN && this.gcd(e, this.phiN) !== 1) {
      e++;
    }
    const d = this.modInverse(e, this.phiN);
    this.publicKey = { e, n: this.n };
    this.privateKey = { d, n: this.n };
  }

  encrypt(plaintext, privateKey) {
    const { d, n } = privateKey;
    const encrypted = [];
    for (let i = 0; i < plaintext.length; i++) {
      const charCode = plaintext.charCodeAt(i);
      const encryptedCharCode = this.modPow(charCode, d, n);
      encrypted.push(encryptedCharCode.toString());
    }
    return encrypted.join(" ");
  }
  decrypt(ciphertext, publicKey) {
    const { e, n } = publicKey;
    const decrypted = [];
    const encryptedCodes = ciphertext.split(" ");
    for (let i = 0; i < encryptedCodes.length; i++) {
      const encryptedCharCode = encryptedCodes[i];
      const decryptedCharCode = this.modPow(encryptedCharCode, e, n);
      decrypted.push(String.fromCharCode(Number(decryptedCharCode)));
    }
    return decrypted.join("");
  }
}

// Contoh penggunaan:
// const rsa = new RSA(); // Contoh angka prima untuk demonstrasi
// console.log("Public Key:", rsa.publicKey);
// console.log("Private Key:", rsa.privateKey);

// const plaintext = "haii";
// const encrypted = rsa.encrypt(plaintext, { d: 399291, n: 600499 });
// console.log("Encrypted Message:", encrypted);

// const decrypted = rsa.decrypt(encrypted, { e: 3, n: 600499 });
// console.log("Decrypted Message:", decrypted);
export default RSA;
