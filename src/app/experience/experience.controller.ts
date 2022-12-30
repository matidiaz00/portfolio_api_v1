import { environment } from "./../../environment/environment";
import { Request, Response, NextFunction } from "express";
import { ExperienceType } from "./experience.model";
import { findAll } from "./experience.service";

const official: ExperienceType = {
  endpoint: 'https://api.linkedin.com/v2/me',
  query: [
    { name: 'fields', data: 'id' }, // si agregamos positions devuelve error de acceso
  ],
  token: environment.LINKEDIN_ACCESS_TOKEN
}

const nubela: ExperienceType = {
  endpoint: 'https://nubela.co/proxycurl/api/v2/linkedin',
  query: [
    { name: 'url', data: `https://www.linkedin.com/in/${environment.LINKEDIN_USER}/` },
    { name: 'fallback_to_cache', data: 'on-error' },
    { name: 'use_cache', data: `if-present` }
  ],
  token: environment.NUBELA_ACCESS_TOKEN
}

const ExperienceController = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
  try {
    const res = await findAll(nubela);
    response.json(res.experiences);
  } catch (err) {
    next(err)
  }
}

const FindByTypeController = async (request: Request, response: Response, next: NextFunction): Promise<void> => { 
  try {
      const category = String(request.params.category);
      const type = category == 'linkedin' ? official : nubela;
      const res = await findAll(type);
      response.json(category == 'linkedin' ? res : res.experiences);
  } catch (err) {
      next(err)
  }
}
 
export { ExperienceController, FindByTypeController };