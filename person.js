class Person{
    constructor(name,age,occupation){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getName(){
        console.log(this.name);
    }
    displayInfo(){
        console.log("Name: " + this.name);
        console.log("Age: " + this.age);
        console.log("Occupation: " + this.occupation);
        console.log("-----------------");
    }
}

const person1 = new Person("Coco Martin",24,"Macho Dancer");
const person2 = new Person("Tanggol",29,"Ex Mayor");

person1.getName();
person2.getName();