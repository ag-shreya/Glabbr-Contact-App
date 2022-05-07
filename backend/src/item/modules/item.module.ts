import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item } from '../entities/item.entity';
import { ItemService } from '../services/item.service';
import {
  ItemController,
  FavoriteContactController,
} from '../controllers/item.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [ItemController, FavoriteContactController],
  exports: [],
})
export class ItemModule {}
