import { DeepPartial } from "typeorm";
import { DepartmentEntity } from "./departments.entity";

export interface EmployeesDTO {
    id?: number;
    firstName: string;
    lastName: string;
    experience: number;
    departmentId: DeepPartial<DepartmentEntity>
}
