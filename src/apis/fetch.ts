import { Notification } from "../services/Notification";

export const POST = async (
  requestURL: any,
  body: any
  ) => {
  try{
    let token: any = localStorage.getItem("token");
    const response = await (await fetch(
      requestURL,
      {
        method: "POST",
        headers: {"Authorization": token, "Content-Type": "application/json"},
        body: JSON.stringify(body)
      }
    )).json()
    if(response.status == true){ Notification.success("bottomLeft", response?.message?.[0], null) }
    else if(response.status == false){ Notification.error("bottomLeft", response?.message?.[0], null) }
    return response;
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null);}
}