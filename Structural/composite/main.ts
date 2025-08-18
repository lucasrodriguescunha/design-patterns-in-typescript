interface Employee {
    getName(): string;

    getSalary(): number;

    showDetails(indent?: string): void;
}

class Developer implements Employee {
    constructor(private name: string, private salary: number) {
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    showDetails(indent: string = ""): void {
        console.log(`${indent}👨‍💻 Dev: ${this.name} | Salário: R$${this.salary}`);
    }
}

class Manager implements Employee {
    private subordinates: Employee[] = [];

    constructor(private name: string, private salary: number) {
    }

    add(employee: Employee): void {
        this.subordinates.push(employee);
    }

    remove(employee: Employee): void {
        this.subordinates = this.subordinates.filter(e => e !== employee);
    }

    getName(): string {
        return this.name;
    }

    getSalary(): number {
        return this.salary;
    }

    showDetails(indent: string = ""): void {
        console.log(`${indent}👔 Manager: ${this.name} | Salário: R$${this.salary}`);
        this.subordinates.forEach(sub => sub.showDetails(indent + "   "));
    }
}

const dev1 = new Developer("Lucas", 5000);
const dev2 = new Developer("Mariana", 6000);
const dev3 = new Developer("João", 5500);

const techManager = new Manager("Carla", 12000);
techManager.add(dev1);
techManager.add(dev2);

const director = new Manager("Roberto", 20000);
director.add(techManager);
director.add(dev3);

director.showDetails();