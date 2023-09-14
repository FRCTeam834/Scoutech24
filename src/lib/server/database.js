// import { DATABASE_URL } from '$env/static/private';

import postgres from 'postgres';

let DATABASE_URL = process.env.DATABASE_URL;
const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM test`;
	return posts;
}


export async function sendData() {
	const posts = await sql`Insert into test Values(`;
	return posts;
}