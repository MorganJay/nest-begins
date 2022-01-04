import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateDogDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  breed: string;
}
