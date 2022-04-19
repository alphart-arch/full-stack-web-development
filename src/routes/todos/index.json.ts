import type { RequestHandler } from "@sveltejs/kit";

export const get: RequestHandler = () =>{ 
    return{
        status:200,
        body:"hello from API."

    }
}

export const post: RequestHandler<{}, FormData>  = (request) => {
    console.log(request.body.get("text"));
    return{
        status:200,
        body: request.body.get("text")
    }
}