import connectDb from "./app/lib/mongodb";
export function register(){
    connectDb();
}