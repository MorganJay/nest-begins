import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { CustomOptions, DocumentOptions } from './openapi.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Animals example')
    .setDescription('The animals API description')
    .setVersion('1.0')
    .addTag('animals')
    .build();
  const document = SwaggerModule.createDocument(app, config, DocumentOptions);
  SwaggerModule.setup('api', app, document, CustomOptions);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      //disableErrorMessages: true,
    }),
  );
  await app.listen(3200);
}
bootstrap();
