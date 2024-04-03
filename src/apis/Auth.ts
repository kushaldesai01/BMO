import { POST } from "./fetch";
import { AUTH } from "../config/apiUrl";
import { Notification } from "../components/Notification";

export const signup = async (values: any) => {
  try{
    const response = await POST(AUTH.SIGNUP, values);
    return response;
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null)}
}

export const login = async (values: any) => {
  try{
    const response = await POST(AUTH.LOGIN, values);
    return response;
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null)}
}

export const logout = async () => {
  try{
    localStorage.removeItem("token");
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null)}
}

export const checkToken = async () => {
  try{
    const response = await POST(AUTH.CHECK_TOKEN, {});
    return response;
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null)}
}