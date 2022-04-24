import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Patch,
  Body,
  Param,
} from '@nestjs/common';
import { ItemService } from './item.service';
import { ItemDTO } from './item.dto';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}
  @Post()
  public async post(@Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.service.create(dto);
  }

  @Get()
  public async getAll(): Promise<ItemDTO[]> {
    return await this.service.getAll();
  }

  @Get(':id')
  public async getItemById(@Param('id') id: string): Promise<ItemDTO[]> {
    return await this.service.getItemById(id);
  }

  @Delete(':id')
  public async removeItemById(@Param('id') id: string): Promise<ItemDTO[]> {
    return await this.service.removeItemById(id);
  }

  @Put(':id')
  public async updateItemById(@Param('id') id: string, @Body() dto: ItemDTO) {
    return await this.service.updateItemById(id, dto);
  }
}

@Controller('favorite')
export class FavoriteContactController {
  constructor(private service: ItemService) {}

  @Get()
  public async getAllFavoriteContacts(): Promise<ItemDTO[]> {
    return await this.service.getAllFavoriteContacts();
  }

  @Patch(':id')
  public async patchFavoriteContacts(
    @Param('id') id: string,
    @Body() dto: ItemDTO,
  ) {
    return await this.service.patchFavoriteContacts(id, dto);
  }
}
