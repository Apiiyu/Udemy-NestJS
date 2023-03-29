import { Module } from '@nestjs/common';

// Controller imports
import { AppController } from './controllers/app.controller';

// Service imports
import { AppService } from './services/app.service';

// Module imports
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from '../users/users.module';
import { ReportsModule } from '../reports/reports.module';

// Entity imports
import { UserEntity } from 'src/users/entities/user.entity';
import { ReportEntity } from 'src/reports/entities/report.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', // ? Type of database
      database: 'database.sqlite', // ? Name of the database file
      entities: [UserEntity, ReportEntity], // ? Path to the entities
      synchronize: true, // ? Synchronize the database with the entities
    }),
    UsersModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
