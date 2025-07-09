export class Employee {

    id: string;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;

    constructor(
        id: string,
        name: string,
        job: string,
        admission_date: string,
        phone: string,
        image: string,

    ) {
        this.id = id;
        this.name = name;
        this.job = job;
        this.admission_date = admission_date;
        this.phone = phone;
        this.image = image;
    }

    static map(array: any[]): Array<Employee> {
        const employees = array.map((employee: any) => {
            return new Employee(
                employee.id,
                employee.name,
                employee.job,
                employee.admission_date,
                employee.phone,
                employee.image,
            );
        });
        return employees;
    }

}

