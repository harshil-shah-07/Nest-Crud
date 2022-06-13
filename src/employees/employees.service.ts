import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeesDTO } from './employees.dto';
import { EmployeeEntity } from './employees.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(EmployeeEntity)
        private repo: Repository<EmployeeEntity>,
    ) { }

    async showAll(): Promise<EmployeeEntity[]> {
        return await this.repo.find();
    }

    async create(employeeData: EmployeesDTO): Promise<EmployeeEntity> {
        const employee = this.repo.create(employeeData);

        await this.repo.save(employee);
        return employee;
    }
}
