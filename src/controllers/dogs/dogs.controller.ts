import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseArrayPipe,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { CreateDogDto } from '../../dtos/dogs/create-dog.dto';
import { UpdateDogDto } from '../../dtos/dogs/update-dog.dto';

@Controller('dogs')
export class DogsController {
  constructor(private readonly dogsService: DogsService) {}

  @Post()
  create(@Body() createDogDto: CreateDogDto) {
    return this.dogsService.create(createDogDto);
  }

  @Post('bulk')
  createBulk(
    @Body(new ParseArrayPipe({ items: CreateDogDto }))
    createDogDtos: CreateDogDto[],
  ) {
    return createDogDtos.map((createDogDto) =>
      this.dogsService.create(createDogDto),
    );
  }

  @Get()
  findAll() {
    return this.dogsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dogsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDogDto: UpdateDogDto) {
    return this.dogsService.update(+id, updateDogDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dogsService.remove(+id);
  }
}
