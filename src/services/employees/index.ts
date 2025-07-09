import { Employee } from "../../models/employee";

export const employeesService = async (): Promise<Employee[]> => {

    try {
        const response = await fetch('http://localhost:3000/employees');

        if (!response.ok) {
            throw new Error('Something went wrong');
        }

        const data = await response.json();
        return Employee.map(data);

    } catch (error) {
        throw error;
    }

}