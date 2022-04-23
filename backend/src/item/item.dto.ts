import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsObject } from 'class-validator';
import { Item } from '../model/item.entity';

export class ItemDTO implements Readonly<ItemDTO> {
  @ApiProperty({ required: true })
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ default: true })
  @IsBoolean()
  status: boolean;

  @ApiProperty()
  @IsString()
  location: string;

  @ApiProperty()
  @IsString()
  organization: string;

  @ApiProperty({ required: true, default: false })
  @IsBoolean()
  isFavorite: boolean;

  @ApiProperty({
    description: `A list of tags associated with contact`,
    type: [String],
    example: ['client'],
  })
  @IsObject()
  tags: string[] = [];

  public static from(dto: Partial<ItemDTO>) {
    const it = new ItemDTO();
    // it.id = dto.id;
    it.name = dto.name;
    it.phoneNumber = dto.phoneNumber;
    it.status = dto.status;
    it.location = dto.location;
    it.organization = dto.organization;
    it.isFavorite = dto.isFavorite;
    it.tags = dto.tags;
    return it;
  }

  public static fromEntity(entity: Item) {
    return this.from({
      // id: entity.id,
      name: entity.name,
      phoneNumber: entity.phoneNumber,
      status: entity.status,
      location: entity.location,
      organization: entity.organization,
      isFavorite: entity.isFavorite,
    });
  }
}
