var Developer = /** @class */ (function () {
    function Developer(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Developer.prototype.getName = function () {
        return this.name;
    };
    Developer.prototype.getSalary = function () {
        return this.salary;
    };
    Developer.prototype.showDetails = function (indent) {
        if (indent === void 0) { indent = ""; }
        console.log("".concat(indent, "\uD83D\uDC68\u200D\uD83D\uDCBB Dev: ").concat(this.name, " | Sal\u00E1rio: R$").concat(this.salary));
    };
    return Developer;
}());
var Manager = /** @class */ (function () {
    function Manager(name, salary) {
        this.name = name;
        this.salary = salary;
        this.subordinates = [];
    }
    Manager.prototype.add = function (employee) {
        this.subordinates.push(employee);
    };
    Manager.prototype.remove = function (employee) {
        this.subordinates = this.subordinates.filter(function (e) { return e !== employee; });
    };
    Manager.prototype.getName = function () {
        return this.name;
    };
    Manager.prototype.getSalary = function () {
        return this.salary;
    };
    Manager.prototype.showDetails = function (indent) {
        if (indent === void 0) { indent = ""; }
        console.log("".concat(indent, "\uD83D\uDC54 Manager: ").concat(this.name, " | Sal\u00E1rio: R$").concat(this.salary));
        this.subordinates.forEach(function (sub) { return sub.showDetails(indent + "   "); });
    };
    return Manager;
}());
var dev1 = new Developer("Lucas", 5000);
var dev2 = new Developer("Mariana", 6000);
var dev3 = new Developer("João", 5500);
var techManager = new Manager("Carla", 12000);
techManager.add(dev1);
techManager.add(dev2);
var director = new Manager("Roberto", 20000);
director.add(techManager);
director.add(dev3);
director.showDetails();
