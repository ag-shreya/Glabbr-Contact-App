import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Item } from '../model/item.entity';
import { Repository } from 'typeorm';
import { ItemDTO } from './item.dto';
import { PageDto, PageMetaDto, PageOptionsDto } from '../common/dtos';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item) private readonly repo: Repository<Item>,
  ) {}
  // create new contact
  public async create(dto: ItemDTO): Promise<ItemDTO> {
    return this.repo.save(ItemDTO.from(dto)).then((e) => ItemDTO.fromEntity(e));
  }

  // get paginated data
  public async getContacts(
    pageOptionsDto: PageOptionsDto,
  ): Promise<PageDto<ItemDTO>> {
    const queryBuilder = this.repo.createQueryBuilder('item');

    queryBuilder
      .orderBy('item.id', pageOptionsDto.order)
      .skip(pageOptionsDto.skip)
      .take(pageOptionsDto.take);

    const itemCount = await queryBuilder.getCount();
    const { entities } = await queryBuilder.getRawAndEntities();

    const pageMetaDto = new PageMetaDto({ itemCount, pageOptionsDto });

    return new PageDto(entities, pageMetaDto);
  }

  // get all contact information
  public async getAll(): Promise<ItemDTO[]> {
    return await this.repo
      .find()
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }

  // get contact information (by id)
  public async getItemById(id: string): Promise<ItemDTO[]> {
    return await this.repo
      .query(`SELECT * FROM public.item WHERE id = '${id}';`)
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }

  // delete contact information (by id)
  public async removeItemById(id: string): Promise<ItemDTO[]> {
    return await this.repo
      .query(`DELETE FROM public.item WHERE id = '${id}';`)
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }

  // update contact information (by id)
  public async updateItemById(id: string, dto: ItemDTO): Promise<ItemDTO> {
    const item = await this.repo.query(
      `SELECT * FROM public.item WHERE id = '${id}';`,
    );
    return await this.repo
      .save({
        ...dto,
        ...item,
      })
      .then((e) => ItemDTO.fromEntity(e));
  }

  // get all favorite contact information
  public async getAllFavoriteContacts(): Promise<ItemDTO[]> {
    return await this.repo
      .query('select * from public.item where "isFavorite" IS TRUE;')
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }

  // toggle favorite contact's idFavorite (by id)
  public async patchFavoriteContacts(
    id: string,
    dto: ItemDTO,
  ): Promise<ItemDTO[]> {
    return await this.repo
      .query(
        `UPDATE PUBLIC.ITEM SET "isFavorite" = ${dto.isFavorite} WHERE ID = '${id}';`,
      )
      .then((items) => items.map((e) => ItemDTO.fromEntity(e)));
  }
}
