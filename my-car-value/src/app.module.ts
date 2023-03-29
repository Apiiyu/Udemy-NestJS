import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // ? Type of database
      database: 'database.sqlite', // ? Name of the database file
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // ? Path to the entities
      synchronize: true, // ? Synchronize the database with the entities
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
