import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM leghigh_24`.values();
	return posts;
}

export async function getPitPosts() {
	const posts = await sql`SELECT * FROM lehigh_pit_24`.values();
	return posts;
}

export async function getPitScoutedTeams() {
	const posts = await sql`SELECT team_number FROM lehigh_pit_24`.values();
	return posts;
}

/**
 * @param {Object<string, string|number>} entry
 */
export async function sendData(entry) {
	const posts = await sql `INSERT INTO leghigh_24 ${sql(entry, Object.keys(entry))}`;
	console.log(entry);
	return posts;

}

/**
 * @param {Object<string, string|number>} entry
 */
export async function sendPitData(entry) {
	const posts = await sql `INSERT INTO lehigh_pit_24 ${sql(entry, Object.keys(entry))}`;
	return posts;

}
