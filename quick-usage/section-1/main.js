import { readFile, writeFile, appendFile } from 'node:fs/promises';
const data = await readFile('./data.json', 'utf-8')

// await writeFile('./data.json', 'test-node', 'utf8')

await appendFile('./data.json', 'test-node', 'utf8')

console.log(data);

