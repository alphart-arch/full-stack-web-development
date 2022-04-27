import type { Request } from "@sveltejs/kit";
import PrismaClient from "$lib/prisma";
import type { Prisma } from "@prisma/client";
//let todos:Todo[]=[];
const prisma = new PrismaClient();

export const api = async(request:Request , data?:Record<string , unknown >) => {
   let body={};
   let status=500;
    switch (request.method.toUppercase()) {
        case "GET":
            body=await prisma.todo.findMany();
            status=200;
            break;
        case "POST":
            body =await prisma.todo.create({
                data:{
                    created_at:data.created_at as Date,
                    done:data.done as boolean,
                    text:data.text as string
                }
            });
            
        //todos.push(data as Todo);
            //body=data;
            status=201;
            break; 
        case "DELETE":
            body = await prisma.todo.delete({
                where:{
                    uid:request.params.uid
                }
            })
            //todos=todos.filter(todo => todo.uid !== request.params.uid)
            status=200;    
            break;
        case "PATCH":
            /*todos=todos.map(todo =>{
                if(todo.uid === request.params.uid){
                    todo.text=data.text as string;
                }
                else{
                    todo.done=data.done as boolean;
                }
                return todo;

            });*/
            body = await prisma.todo.update({
                where:{
                    uid:request.params.uid
                },
                data:{
                    done:data.done,
                    text:data.text
                }
            })
            status=200;
            //body=todos.find(todo => todo.uid === request.params.uid);
            break;
    
        default:
            break;
    }
    if(request.method.toUppercase() !=="GET" &&
       request.headers.accept !== "application/json"){
        return{
            status:303,
            //body:"hello",
            headers:{
                location:"/"
            }
    
        }
    }
    return{
        status,
        body
    }

}

//Module '"@sveltejs/kit"' has no exported member 'Request'.