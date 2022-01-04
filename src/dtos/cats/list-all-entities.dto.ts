import { IsNumberString } from 'class-validator';

export class ListAllEntities {
  limit: number;
}

export class FindOneParams {
  @IsNumberString()
  id: number;
}
