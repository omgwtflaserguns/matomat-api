import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder, SwaggerDocument } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

function setupSwagger(app: INestApplication): SwaggerDocument  {
  const options = new DocumentBuilder()
    .setTitle('Matomat API')
    .setDescription('The matomat backend API')
    .setVersion('0.1')
    .addTag('stocktakes')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('spec', app, document);
  return document;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  setupSwagger(app);
  await app.listen(3000);
}
bootstrap();
