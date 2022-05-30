import { Controller, Get } from '@nestjs/common';
import { AbilitiesService } from './abilities.service';

@Controller()
export class AbilitiesController {
  constructor(private readonly abilitiesService: AbilitiesService) {}

  @Get()
  findAll() {
    return this.abilitiesService.findAll();
  }
}
