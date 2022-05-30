import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { DataInterface } from '../abilities.interface';
import { ChildrensService } from './childrens.service';

@Controller()
export class ChildrensController {
  constructor(private readonly childrensService: ChildrensService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Param() params: any, @Body() createDto: DataInterface) {
    return this.childrensService.create(params.category_id, params.item_id, createDto);
  }

  @Get()
  findAll(@Param() params: any) {
    return this.childrensService.findAll(params.category_id, params.item_id);
  }

  @Get(':children_id')
  findOne(@Param() params: any, @Param('children_id') children_id: string) {
    return this.childrensService.findOne(params.category_id, params.item_id, children_id);
  }

  @Patch(':children_id')
  @UseGuards(AuthGuard)
  update(@Param() params: any, @Param('children_id') children_id: string, @Body() updateDto: DataInterface) {
    return this.childrensService.update(params.category_id, params.item_id, children_id, updateDto);
  }

  @Delete(':children_id')
  @UseGuards(AuthGuard)
  remove(@Param() params: any, @Param('children_id') children_id: string) {
    return this.childrensService.remove(params.category_id, params.item_id, children_id);
  }
}
