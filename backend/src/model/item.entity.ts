import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @Column({ type: 'varchar', length: 10 })
  phoneNumber: string;

  @Column({ type: 'boolean', default: true })
  status: boolean;

  @Column({ type: 'varchar', length: 300 })
  location: string;

  @Column({ type: 'varchar', length: 300 })
  organization: string;

  @Column({ type: 'boolean', default: false })
  isFavorite: boolean;

  // @Column({ type: 'varchar', length: 300, nullable: true })
  // tags: object | null;
}
