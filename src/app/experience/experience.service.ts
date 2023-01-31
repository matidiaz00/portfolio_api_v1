import { ExperienceType } from "./experience.model";
import fetch from "node-fetch";
import { CustomError } from "./../error/error.model";


//: ExperienceType
const getEndpoint = async (data: any): Promise<any> => {
  const headersRequest = { 'Authorization': `Bearer ${data.token}`, 'Accept': 'application/json', "User-Agent": "node-fetch" };
  let query = '?';
  for (let val of data.query) { query += `${val.name}=${val.data}&` }
  return await fetch( `${data.endpoint}${query}`, { method: "GET", headers: headersRequest } );
}

export const findAll = async (data: any): Promise<any> => {
  try {
    const call = await getEndpoint(data);
    const res = await call.json();
    return res
  } catch (err) {
    return new CustomError(500, err);
  }
}