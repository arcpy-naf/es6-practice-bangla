class Parent{
    constructor(){
        this.fatherName= "dev";
    }
}


class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child ("thakur");
const baby2 = new Child ("Munsi");
console.log(baby.getFullName(), baby2.getFullName());