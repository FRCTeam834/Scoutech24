// export function load(){

// }

/** @type {import('./$types').Actions} */
export const actions = {
    create: async ({cookies, request}) => {
        const data = await request.formData();
        const formMap = new Map(data.entries())
        console.log(formMap);
        // console.log(formMap.values());
        // console.log(formMap.values());


    }
};