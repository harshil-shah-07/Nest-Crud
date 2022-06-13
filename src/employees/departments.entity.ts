import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { EmployeeEntity } from "./employees.entity";

@Entity()
export class DepartmentEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(
        () => EmployeeEntity,
        employee => employee.department,
    )
    employees: EmployeeEntity;

}