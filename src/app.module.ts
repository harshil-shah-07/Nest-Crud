import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeesModule } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { environment } from './environment/environment';

@Module({
  imports: [TypeOrmModule.forRoot(environment.DATABASE_CONFIG), EmployeesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
