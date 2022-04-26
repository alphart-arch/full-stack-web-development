import type { RequestHandler } from "@sveltejs/kit";
import {api} from "./_api";

export const get:RequestHandler =(request) => {
    return api(request);
}

export const post:RequestHandler = async({request}) =>{
    //console.log(request.body.get("text"));
    const formData = await request.formData();
    return api(request ,{
        uid: '${Date.now()}',
        created_at:new Date(),
        text:formData.get('text'),
        done:false
    });
  /*  todos.push({
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

    }*/
}


/*Type 'FormData' does not satisfy the constraint 'ResponseBody'.
Type 'FormData' is not assignable to type 'JSONObject'.
  Index signature for type 'string' is missing in type 'FormData'.
  Property 'get' does not exist on type 'ReadableStream<Uint8Array>'.*/