import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  Res,
  HttpStatus,
  UsePipes,
  ValidationPipe,
  ParseBoolPipe,
  ParseIntPipe,
  ParseArrayPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { Observable, of } from 'rxjs';

import {
  FindOneParams,
  ListAllEntities,
} from 'src/dtos/cats/list-all-entities.dto';
import { UpdateCatDto } from 'src/dtos/cats/update-cat.dto';
import { CreateBulkCatDto, CreateCatDto } from '../../dtos/cats/create-cat.dto';

@Controller('cats')
export class CatsController {
  // @Get()
  // @Redirect('https://nestjs.com', 301)
  // findAll(): string {
  //   return 'This action returns all cats';
  // }

  @Get()
  findAll(
    @Query() query: ListAllEntities,
    @Res({ passthrough: true }) response: Response,
  ) {
    // return `This action returns all cats (limit: ${query.limit} items)`;
    response
      .status(HttpStatus.OK)
      .send(`This action returns all cats (limit: ${query.limit} items)`);
    //.json([]);
    //return [];
  }

  @Get('ids')
  findByIds(
    @Query('ids', new ParseArrayPipe({ items: Number, separator: ',' }))
    ids: number[],
  ) {
    return `This action returns cats by ids ${[...ids]}`;
  }

  @Post()
  @HttpCode(204)
  @UsePipes(new ValidationPipe({ transform: true }))
  @Header('Cache-Control', 'none')
  async create(
    @Body() createCatDto: CreateCatDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    //return `'This action adds a new cat'${createCatDto}`;
    response
      .status(HttpStatus.CREATED)
      .send(`This action adds a new cat ${JSON.stringify(createCatDto)}`);
    //.json();
  }

  @Post('bulk')
  createBulk(@Body() createBulkCats: CreateBulkCatDto) {
    return `This action adds ${createBulkCats.cats.length} new cats`;
  }

  @Get(':id')
  findOne(
    @Param('id') id: FindOneParams,
    @Query('sort', ParseBoolPipe) sort: boolean,
  ): string {
    console.log(typeof id === 'number');
    console.log(typeof sort === 'boolean');
    return `This action returns a #${id} cat`;
  }

  @Get('promises/hmm')
  async findAllPromises(): Promise<any[]> {
    return [];
  }

  @Get('rxjs/see')
  findAllObservables(): Observable<any[]> {
    return of([]);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCatDto: UpdateCatDto,
  ) {
    return `This action updates a #${id} cat with ${updateCatDto}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
