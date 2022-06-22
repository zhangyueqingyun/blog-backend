import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(8000);
}
bootstrap();
