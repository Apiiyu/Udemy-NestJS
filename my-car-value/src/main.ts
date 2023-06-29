import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // ? Remove all properties that are not defined in the DTO. Or if we explain it as technical, It will remove all properties (extraneous properties) that are not defined in the DTO.
    }),
  );
  await app.listen(1337, () => {
    console.log('Listening at http://localhost:1337');
  });
}
bootstrap();
