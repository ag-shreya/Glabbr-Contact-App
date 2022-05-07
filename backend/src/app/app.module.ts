import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { configService } from '../config/config.service';
import { ItemModule } from '../item/modules/item.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    ItemModule,
  ],
})
export class AppModule {}
