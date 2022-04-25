import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api";
export  const del: RequestHandler =(request) =>{
    /*return{
        status:200,
        body:request.params.uid
    }*/
    return api(request);
}