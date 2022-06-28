import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api')
  await app.listen(8000);
}
bootstrap();
