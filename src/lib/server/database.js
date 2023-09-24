import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM test`;
	return posts;
}


/**
 * @param {Map<string, FormDataEntryValue>} dataMap
 */
// export async function sendData(dataMap) {
// 	// const columns = new Array(dataMap.keys());
// 	const posts = await sql `INSERT INTO test ${dataMap)}`;
// 	return posts;

// }

