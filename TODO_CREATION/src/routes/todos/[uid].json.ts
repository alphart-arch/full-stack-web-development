import type { RequestHandler } from "@sveltejs/kit"
import { api } from "./_api";
export  const del: RequestHandler =(request) =>{
    /*return{
        status:200,
        body:request.params.uid
    }*/
    return api(request);
}
export const patch:RequestHandler = async({request}) =>{
    const formData=await request.formData();
    return api(request,{
        text:formData.get('text'),
        done:formData.has("done") ? !!formData.get("done") : undefined
    });
    return{

    }
}