import { ExperienceType } from './experience.model';

const getEndpoint = async (data: ExperienceType): Promise<any> => {
  const headersRequest = { 'Authorization': `Bearer ${data.token}` };
  let query = '?';
  for (let val of data.query) { query += `${val.name}=${val.data}&` }
  return await fetch( `${data.endpoint}${query}`, { headers: headersRequest } );
}

export const findAll = (data: ExperienceType): Promise<any> => {
    return getEndpoint(data);
    //.pipe( map(response => response.data) );
    //.pipe( map(response => response.data.experiences) );
}