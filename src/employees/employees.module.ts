import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './employees.entity';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { DepartmentEntity } from './departments.entity';

@Module({
    imports: [TypeOrmModule.forFeature([EmployeeEntity, DepartmentEntity])],
    providers: [EmployeesService],
    controllers: [EmployeesController]
})
export class EmployeesModule {}
