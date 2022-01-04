import {
  IsNotEmpty,
  IsNumberString,
  ArrayUnique,
  ArrayMaxSize,
  ArrayMinSize,
} from 'class-validator';

export class CreateCatDto {
  name: string;

  @IsNumberString()
  age: number;

  breed: string;
}

export class CreateBulkCatDto {
  @ArrayMinSize(5)
  @ArrayMaxSize(10)
  @ArrayUnique()
  @IsNotEmpty()
  cats: CreateCatDto[];
}
