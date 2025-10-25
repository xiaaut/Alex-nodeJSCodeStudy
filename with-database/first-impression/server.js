import { Client } from 'pg'
const client = new Client({
    user: 'postgres.dkimiatbcycasqomluqt',
    password: 'nodeJS123',
    host: 'aws-1-ap-south-1.pooler.supabase.com',
    port: 6543,
    database: 'postgres',
})
await client.connect()

const res = await client.query('SELECT $1::text as message', ['Hello world!'])
console.log(res.rows[0].message) // Hello world!
await client.end()