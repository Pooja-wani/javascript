import{Person} from'./person';
export class Teacher extends Person{
    constructor(name,degree){
        super(name);
        this.degree=degree;
    }
    teaches(){
        console.log('teach');
    }
}

const teacher= new Teacher('shruti','btech');
console.log(teacher);