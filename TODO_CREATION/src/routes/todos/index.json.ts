import type { RequestHandler } from "@sveltejs/kit";
let todos:Todo[]=[];
export const get:RequestHandler =() => {
    return{
        status:200,
        body:todos
    }
}

export const post:RequestHandler<{},FormData> = (request) =>{
    //console.log(request.body.get("text"));
    todos.push({
        created_at:new Date(),
        text:request.body.get("text"),
        done:false
    });
    return{
        status:303,
        //body:"hello",
        headers:{
            location:"/"
        }

    }
}


/*Type 'FormData' does not satisfy the constraint 'ResponseBody'.
Type 'FormData' is not assignable to type 'JSONObject'.
  Index signature for type 'string' is missing in type 'FormData'.
  Property 'get' does not exist on type 'ReadableStream<Uint8Array>'.*/