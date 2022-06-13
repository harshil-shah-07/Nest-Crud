import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { DepartmentEntity } from "./departments.entity";

@Entity('employees')
export class EmployeeEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({name: 'first_name'})
    firstName: string;

    @Column({name: 'last_name'})
    lastName: string;

    @Column()
    experience: string;

    @ManyToOne(
        () => DepartmentEntity,
        department => department.employees
    )
    @JoinColumn({name: 'department_id'})
    departmentId: DepartmentEntity;
}