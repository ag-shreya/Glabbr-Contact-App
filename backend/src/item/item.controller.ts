import { Controller, Get, Post, Body } from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.service.getAll();
  }

  @Post()
  public async post(@Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.service.create(dto);
  }
}
