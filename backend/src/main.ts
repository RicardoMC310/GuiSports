import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from "cookie-parser";
import AppErrorFilter from './shared/filters/app-error.filter';
import { TypeOrmExceptionFilter } from './shared/filters/typeorm-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new AppErrorFilter());
  app.useGlobalFilters(new TypeOrmExceptionFilter());

  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true
  }));

  app.use(cookieParser(process.env.COOKIE_SECRET));

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
