import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put } from '@nestjs/common';
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

    @Get(':id')
    async editEmployee(@Param('id') id: number) {
        const employee = await this.employeeService.edit(id);

        return {
            statusCode: HttpStatus.OK,
            message: "Employee record fetched successfully",
            employee
        };
    }

    @Put(':id')
    async updateEmployee(@Param('id') id: number, @Body() employeeDTO: EmployeesDTO) {
        const employee = await this.employeeService.update(id, employeeDTO);

        return {
            statusCode: HttpStatus.OK,
            message: "Employee record updated successfully",
            employee
        };
    }

    @Delete(':id')
    async deleteEmployee(@Param('id') id: number) {
        return await this.employeeService.delete(id);
    }
}
