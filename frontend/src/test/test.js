/* eslint-disable no-undef */
import { expect } from "chai";
import pkg from "js-sha3";
const { keccak224, keccak256, keccak384, keccak512 } = pkg;
import Keccak from "../utils/Keccak.js";

describe("Keccak", function () {
  const inputData = "kocak";

  it("keccak224", function () {
    const expectedHash = keccak224(inputData);
    const keccak = new Keccak(224);

    keccak.update(inputData);
    const actualHash = keccak.hash();

    expect(actualHash).to.equal(expectedHash);
  });
  it("keccak256", function () {
    const expectedHash = keccak256(inputData);
    const keccak = new Keccak(256);

    keccak.update(inputData);
    const actualHash = keccak.hash();

    expect(actualHash).to.equal(expectedHash);
  });
  it("keccak384", function () {
    const expectedHash = keccak384(inputData);
    const keccak = new Keccak(384);

    keccak.update(inputData);
    const actualHash = keccak.hash();

    expect(actualHash).to.equal(expectedHash);
  });
  it("keccak512", function () {
    const expectedHash = keccak512(inputData);
    const keccak = new Keccak(512);

    keccak.update(inputData);
    const actualHash = keccak.hash();

    expect(actualHash).to.equal(expectedHash);
  });
});
