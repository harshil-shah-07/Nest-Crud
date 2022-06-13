import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employees.entity';
import { EmployeesService } from './employees.service';

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity])],
    providers: [EmployeesService]
})
export class EmployeesModule {}
