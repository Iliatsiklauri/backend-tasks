import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Auth } from './expenses/expenses.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalGuards(new Auth());
  await app.listen(3000);
}
bootstrap();
