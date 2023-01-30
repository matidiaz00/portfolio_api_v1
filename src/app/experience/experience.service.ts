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
  return await getEndpoint(data)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err: Error) => new CustomError(500, err));
}