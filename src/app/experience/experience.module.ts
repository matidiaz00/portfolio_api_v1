import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [ExperienceController],
  providers: [ExperienceService]
})
export class ExperienceModule {}
