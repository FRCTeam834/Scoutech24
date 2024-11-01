import { DATABASE_URL } from '$env/static/private';
import postgres from 'postgres';

const sql = postgres(DATABASE_URL, {
	ssl: 'require'
});

export async function getPosts() {
	const posts = await sql`SELECT * FROM offseason1_24`.values();
	return posts;
}

export async function getPitPosts() {
	const posts = await sql`SELECT * FROM offseason_pit_24`.values();
	return posts;
}

export async function getPitScoutedTeams() {
	const posts = await sql`SELECT team_number FROM offseason_pit_24`.values();
	return posts;
}

/**
 * @param {Object<string, string|number>} entry
 */
export async function sendData(entry) {
	const posts = await sql `INSERT INTO offseason1_24 ${sql(entry, Object.keys(entry))}`;
	console.log(entry);
	return posts;

}

/**
 * @param {Object<string, string|number>} entry
 */
export async function sendPitData(entry) {
	const posts = await sql `INSERT INTO offseason_pit_24 ${sql(entry, Object.keys(entry))}`;
	return posts;

}
