import * as db from '$lib/server/database.js';

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({cookies, request}) => {
        var object = {}
        const formData = await request.formData();
        formData.forEach((value, key) => object[key] = value);

        // const formMap = new Map(formData.entries());
        console.log(object);
        // return {
        //     post: await db.sendData(formMap)
        // };
    }
};