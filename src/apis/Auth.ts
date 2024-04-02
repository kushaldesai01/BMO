import { POST } from "./fetch";
import { AUTH } from "../config/apiUrl";

export const signup = async (values: any) => {
  try{
    const response = await POST(AUTH.SIGNUP, values);
    console.log(response, "res")
    return response;
  }
  catch(err: any){console.log(err.message)}
}