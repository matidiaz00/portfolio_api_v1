import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { ItemsService } from './items.service';

interface DataInterface {
  title: string;
  description: string;
  order: number;
}

@Controller()
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Param() params: any, @Body() createDto: DataInterface) {
    return this.itemsService.create(params.category_id, createDto);
  }

  @Get()
  findAll(@Param() params: any) {
    return this.itemsService.findAll(params.category_id);
  }

  @Get(':item_id')
  findOne(@Param() params: any, @Param('item_id') item_id: string) {
    return this.itemsService.findOne(params.category_id, item_id);
  }

  @Patch(':item_id')
  @UseGuards(AuthGuard)
  update(@Param() params: any, @Param('item_id') item_id: string, @Body() updateDto: DataInterface) {
    return this.itemsService.update(params.category_id, item_id, updateDto);
  }

  @Delete(':item_id')
  @UseGuards(AuthGuard)
  remove(@Param() params: any, @Param('item_id') item_id: string) {
    return this.itemsService.remove(params.category_id, item_id);
  }
}
