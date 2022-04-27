import { api } from "./_api";
export const del = (request) => {
    /*return{
        status:200,
        body:request.params.uid
    }*/
    return api(request);
};
export const patch = async ({ request }) => {
    const formData = await request.formData();
    return api(request, {
        text: formData.get('text'),
        done: formData.has("done") ? !!formData.get("done") : undefined
    });
    return {};
};
//# sourceMappingURL=%5Buid%5D.json.js.map