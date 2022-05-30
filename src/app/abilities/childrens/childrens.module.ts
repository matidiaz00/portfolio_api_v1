import { Module } from '@nestjs/common';
import { ChildrensService } from './childrens.service';
import { ChildrensController } from './childrens.controller';

@Module({
  controllers: [ChildrensController],
  providers: [ChildrensService]
})
export class ChildrensModule {}
