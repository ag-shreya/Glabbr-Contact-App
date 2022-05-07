import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../common/entities';

@Entity({ name: 'tag' })
export class Tag extends BaseEntity {
  @Column({ type: 'varchar', length: 20 })
  color: string;
}
