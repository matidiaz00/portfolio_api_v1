import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { EnpointInterface } from './experience.interface';

@Injectable()
export class ExperienceService {

  constructor(
    private _httpService: HttpService
  ) {}

  findAll_official(): Observable<AxiosResponse<any>> {
    return this.getEndpoint({
      endpoint: 'https://api.linkedin.com/v2/me',
      query: [
        { name: 'fields', data: 'id' }, // si agregamos positions devuelve error de acceso
      ],
      token: process.env.LINKEDIN_ACCESS_TOKEN
    }).pipe( map(response => response.data) );
  }

  findAll(): Observable<AxiosResponse<any>> {
    return this.getEndpoint({
      endpoint: 'https://nubela.co/proxycurl/api/v2/linkedin',
      query: [
        { name: 'url', data: `https://www.linkedin.com/in/${process.env.LINKEDIN_USER}` },
        { name: 'use_cache', data: `if-present` }
      ],
      token: process.env.NUBELA_ACCESS_TOKEN
    }).pipe( map(response => response.data.experiences) );
  }

  getEndpoint(data: EnpointInterface): Observable<AxiosResponse<any>> {
    const headersRequest = { 'Authorization': `Bearer ${data.token}` };
    let query = '?';
    for (let val of data.query) { query += `${val.name}=${val.data}&` }
    return this._httpService.get( `${data.endpoint}${query}`, { headers: headersRequest } );
  }

}