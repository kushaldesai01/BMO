import { Notification } from "../components/Notification";

export const POST = async (
  requestURL: any,
  body: any
  ) => {
  try{
    let token: any = localStorage.getItem("token");
    let headerOption: any = token ? {"Authorization": token, "Content-Type": "application/json"} : {"Content-Type": "application/json"}
    const response = await (await fetch(
      requestURL,
      {
        method: "POST",
        headers: headerOption,
        body: JSON.stringify(body)
      }
    )).json();
    return response;
  }
  catch(err: any){Notification.error("bottomLeft", err.message, null);}
}