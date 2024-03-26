import * as db from '$lib/server/database.js';

export async function load() {
	return {
		post: await db.getPitScoutedTeams()
	};
}

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({cookies, request}) => {
        /**
         * @type {Object<string, any>}
         */
        const entry = {}
        const formData = await request.formData();
        formData.forEach((value, key) => {
            const isString = key.slice(-1) === "S"
            
            value = value.toString()
            const val = isString ? value : parseInt(value) 
            entry[key.slice(0, -1)] = val
        });

        return {
            post: await db.sendPitData(entry)
        };
    }
};