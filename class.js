class Student{
    constructor(sId, sName){
        this.id= sId;
        this.name= sName;
        this.school = "kolimuddi"
    }
}

const student1 = new Student(12, "nasa");
const Student2 = new Student(13, "Release");

console.log(student1, Student2);