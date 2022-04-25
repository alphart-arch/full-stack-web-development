/// <reference types="@sveltejs/kit" />

type Todo={
    uid:string;
    created_at:Date;
    text:String;
    done:boolean;
}