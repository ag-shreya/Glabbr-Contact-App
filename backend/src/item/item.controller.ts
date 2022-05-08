import {
  Controller,
  HttpCode,
  HttpStatus,
  Query,
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
import { PageDto, PageOptionsDto } from '../common/dtos';

@Controller('item')
export class ItemController {
  constructor(private service: ItemService) {}
  @Post()
  public async post(@Body() dto: ItemDTO): Promise<ItemDTO> {
    return this.service.create(dto);
  }

  // @Get()
  // public async getAll(): Promise<ItemDTO[]> {
  //   return await this.service.getAll();
  // }

  @Get()
  @HttpCode(HttpStatus.OK)
  async getContacts(
    @Query() pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<ItemDTO>> {
    return this.service.getContacts(pageOptionsDto);
  }

  @Get(':id')
  public async getItemById(@Param('id') id: string): Promise<ItemDTO[]> {
    return await this.service.getItemById(id);
  }

  @Delete()
  public async removeItemById(
    @Query() query: { id: string },
  ): Promise<ItemDTO[]> {
    return await this.service.removeItemById(query.id);
  }

  @Put()
  public async updateItemById(@Body() dto: ItemDTO) {
    return await this.service.updateItemById(dto);
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
