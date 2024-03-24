import { POST } from "../services/requests";
import { AUTH } from "../config/apiUrl";

export const signup = async (values: any) => {
  try{
    const response = await POST(AUTH.SIGNUP, null, values);
    console.log(response, "resresrersrersrersrer")
    return response;
  }
  catch(err: any){console.log(err.message)}
}