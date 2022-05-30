import { Module } from '@nestjs/common';
import { AbilitiesController } from './abilities.controller';
import { AbilitiesService } from './abilities.service';

@Module({
  controllers: [AbilitiesController],
  providers: [AbilitiesService]
})
export class AbilitiesModule {}
