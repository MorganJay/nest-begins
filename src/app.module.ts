import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsController } from './controllers/cats/cats.controller';
import { DogsController } from './controllers/dogs/dogs.controller';
import { DogsModule } from './controllers/dogs/dogs.module';
import { DogsService } from './controllers/dogs/dogs.service';

@Module({
  imports: [DogsModule],
  controllers: [DogsController, CatsController, AppController],
  providers: [DogsService, AppService],
})
export class AppModule {}
