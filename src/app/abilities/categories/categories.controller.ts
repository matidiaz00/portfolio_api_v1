import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { DataInterface } from './../abilities.interface';
import { CategoriesService } from './categories.service';

@Controller()
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Body() createDto: DataInterface) {
    return this.categoriesService.create(createDto);
  }

  @Get()
  findAll() {
    return this.categoriesService.findAll();
  }

  @Get(':category_id')
  findOne(@Param('category_id') category_id: string) {
    return this.categoriesService.findOne(category_id);
  }

  @Patch(':category_id')
  @UseGuards(AuthGuard)
  update(@Param('category_id') category_id: string, @Body() updateDto: DataInterface) {
    return this.categoriesService.update(category_id, updateDto);
  }

  @Delete(':category_id')
  @UseGuards(AuthGuard)
  remove(@Param('category_id') category_id: string) {
    return this.categoriesService.remove(category_id);
  }
}
