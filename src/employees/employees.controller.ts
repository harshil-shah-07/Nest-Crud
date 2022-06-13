import { Body, Controller, Get, HttpStatus, Post } from '@nestjs/common';
import { EmployeesDTO } from './employees.dto';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
    constructor(private employeeService: EmployeesService) { }

    @Get()
    async showAllEmployees() {
        const employees = await this.employeeService.showAll();

        return {
            statusCode: HttpStatus.OK,
            message: "Employees fetched successfully",
            employees
        };
    }

    @Post()
    async createEmployee(@Body() employeeData: EmployeesDTO) {
        const employee = await this.employeeService.create(employeeData);

        return {
            statusCode: HttpStatus.OK,
            message: "Employee record created successfully",
            employee
        };
    }
}
