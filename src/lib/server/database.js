import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

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