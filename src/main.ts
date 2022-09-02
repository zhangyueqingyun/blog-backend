import { NestFactory } from '@nestjs/core';
import { AppModule } from './module';
import {key, pem} from '../config/cert'

const httpsOptions = {
  key: key,
  cert: pem,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {httpsOptions});
  app.enableCors();
  app.setGlobalPrefix('api')
  await app.listen(9000);
}
bootstrap();
