export const POST = async (
  requestURL: any,
  headers: any,
  body: any
  ) => {
  try{
    return(
      await (await fetch(
        requestURL,
        {
          method: "POST",
          headers: {"Authorization": headers, "Content-Type": "application/json"},
          body: JSON.stringify(body)
        }
      )).json()
    );
  }
  catch(err: any){console.log(err.message)}
}