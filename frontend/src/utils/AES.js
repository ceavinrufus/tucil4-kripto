import CryptoJS from "crypto-js";

class AES {
  constructor(key) {
    this.key = CryptoJS.enc.Utf8.parse(key); // Ensure the key is in WordArray format
  }

  // Convert Uint8Array to WordArray
  uint8ArrayToWordArray(uint8Array) {
    const words = [];
    for (let i = 0; i < uint8Array.length; i++) {
      words[i >>> 2] |= uint8Array[i] << (24 - (i % 4) * 8);
    }
    return CryptoJS.lib.WordArray.create(words, uint8Array.length);
  }

  // Convert WordArray to Uint8Array
  wordArrayToUint8Array(wordArray) {
    const uint8Array = new Uint8Array(wordArray.sigBytes);
    for (let i = 0; i < wordArray.sigBytes; i++) {
      uint8Array[i] = (wordArray.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
    }
    return uint8Array;
  }

  encrypt(uint8Array) {
    const wordArray = this.uint8ArrayToWordArray(uint8Array);
    const encrypted = CryptoJS.AES.encrypt(wordArray, this.key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    });
    return this.wordArrayToUint8Array(encrypted.ciphertext);
  }

  decrypt(encryptedUint8Array) {
    const encryptedWordArray = this.uint8ArrayToWordArray(encryptedUint8Array);
    const decrypted = CryptoJS.AES.decrypt(
      { ciphertext: encryptedWordArray },
      this.key,
      { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 }
    );
    return this.wordArrayToUint8Array(decrypted);
  }
}

export default AES;
// Usage example
// const key = "halohalo"; // 16-byte key for AES-128
// const aes = new AES(key);

// const data = new Uint8Array([72, 101, 108, 108, 111]); // Uint8Array containing 'Hello'
// const encrypted = aes.encrypt(data);
// console.log("Encrypted:", encrypted);

// const decrypted = aes.decrypt(encrypted);
// console.log("Decrypted:", new TextDecoder().decode(decrypted)); // Should print 'Hello'
