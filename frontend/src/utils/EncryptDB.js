import ModifiedRC4 from "./ModifiedRC4";

const encryptionKey = "halohalo";

export function encryptRecord(record) {
  const rc4 = new ModifiedRC4(encryptionKey);
  let encryptedRecord = {};

  for (let field in record) {
    if (Object.prototype.hasOwnProperty.call(record, field)) {
      encryptedRecord[field] = rc4.encrypt(record[field].toSring());
    }
  }

  return encryptedRecord;
}
