import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';
import { AccesType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}

export class CreateCategoryDto implements ICreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  @Length(4, 140)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccesType)
  accesss?: AccesType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();

    dto.name = 'Juan Carlos';
    dto.image = 'https://api.escuelajs.co/api/v1/products'

    await validateOrReject(dto);
  } catch (error) {
    console.error(error);
  }
})();
