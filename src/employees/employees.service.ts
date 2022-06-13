import { HttpStatus, Injectable } from '@nestjs/common';
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

    async edit(id: number): Promise<EmployeeEntity> {
        const employee = await this.repo.findOne({
            where: { id }
        });

        return employee;
    }

    async update(id: number, employeeData: EmployeesDTO) {
        await this.repo.update({ id }, employeeData);
        return await this.repo.findOne({ where: { id } });
    }

    async delete(id: number) {
        const employee = await this.repo.findOneBy({id});
        await this.repo.remove(employee);

        return {
            statusCode: HttpStatus.OK,
            message: "Employee record deleted successfully",
            employee
        };
    }
}
