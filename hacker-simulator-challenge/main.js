/*
  1. Read files
  2. Decrypt data
  3. Write it into a new file
*/

import { readFile, writeFile } from "node:fs/promises";

const keychain = await readFile('./keychain.txt', 'utf8');
const data = await readFile('./data.txt', 'utf8');

const A = data.split('')
console.log(A)
// A.map(a => return a)
// console.log(data.split('').map());


const leftMoveDecryptedData = data.split('').map(current => {
  const decryptedCharCode = current.charCodeAt(0) - keychain
  return String.fromCharCode(decryptedCharCode)
}).join('')


console.log(leftMoveDecryptedData);

await writeFile('./decrypted.txt', leftMoveDecryptedData, 'utf-8')
