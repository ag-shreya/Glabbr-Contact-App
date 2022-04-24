import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ItemService } from './item.service';
import { ItemController, FavoriteContactController } from './item.controller';
import { Item } from '../model/item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [ItemController, FavoriteContactController],
  exports: [],
})
export class ItemModule {}
