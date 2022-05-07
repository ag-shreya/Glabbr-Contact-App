import { Repository } from 'typeorm';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Item } from '../entities/item.entity';

@EntityRepository(Item)
export class ItemRepository extends Repository<Item> {}
