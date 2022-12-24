import { EnpointInterface } from './experience.model';
import { environment } from '../../environment/environment'

export const findAll_official = (): Promise<any> => {
    return getEndpoint({
      endpoint: 'https://api.linkedin.com/v2/me',
      query: [
        { name: 'fields', data: 'id' }, // si agregamos positions devuelve error de acceso
      ],
      token: environment.LINKEDIN_ACCESS_TOKEN
    })//.pipe( map(response => response.data) );
}

export const findAll = (): Promise<any> => {
    return getEndpoint({
      endpoint: 'https://nubela.co/proxycurl/api/v2/linkedin',
      query: [
        { name: 'url', data: `https://www.linkedin.com/in/${environment.LINKEDIN_USER}` },
        { name: 'use_cache', data: `if-present` }
      ],
      token: environment.NUBELA_ACCESS_TOKEN
    })//.pipe( map(response => response.data.experiences) );
}

const getEndpoint = async (data: EnpointInterface): Promise<any> => {
    const headersRequest = { 'Authorization': `Bearer ${data.token}` };
    let query = '?';
    for (let val of data.query) { query += `${val.name}=${val.data}&` }
    return await fetch( `${data.endpoint}${query}`, { headers: headersRequest } );
}