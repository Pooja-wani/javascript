

// function calArea(radius){
//     return{
//         radius,
        
//         printArea:function(){
//             console.log(3.14*2*2);
//         }

//     };
// }

// const calArea=area_circle(2);
// area_circle.printArea();


//square calculation
function square(number){
    return number*number;
    
}

console.log(square(2));

//applying length parametre
let selectedColour=['red','blue'];
console.log(selectedColour);
console.log(selectedColour.length);
selectedColour[2]='green';
console.log(selectedColour);
console.log(selectedColour.length);


const abji={
    class:'XI',
    age:17,
    stu:'math'

};
console.log(abji);
//function of traingle

function Traingle(side){
    return 0.5*side*side;
    }

let Fig=new Traingle(2);
console.log(Fig);

//calculating interest
function Interest(rate,interest){
    this.rate=0.3;
    this.interest=rate*12*0.05;
    console.log(interest);
    return interest;
}


const aunty=  new Interest(2);
console.log(aunty);

// function Circle(radius){
//     this.radius=radius;
//     this.draw=function(){
//         console.log('draw');
//     }
// }

// const circle=new Circle(10);
// circle.location={x:1};
// for(let key in circle){
//     // if(typeof circle[key]!=='function')
//     if('radius' in circle)
//     console.log(key,circle[key]);
// }
// const key=Object.key(circle);
// console.log(key);

//getter setter method
// function Circle(radius){
//     this.radius=radius ;
//     let defaultLocation={x:0,y:0};
//     let computeOptimumLocation=function(factor){

//     }
//     this.draw=function(){
//         console.log('draw');

//     }
//     Object.defineProperties(this,'defaultLocation',{
//         get:function(){
//             return defaultLocation;
//         },
//         set:function(value){
//             if(!value.x|| !value.y)
//             throw new Error('invalid location.');
//             defaultLocation = value; 
//         }
//     });
// }

// const circle=new Circle(10);
// circle.defaultLocation=1;
// circle.draw();
//creating object of shops name
let shops={
    s1:'vinayak',
    s2:'gurunanak',
    s3:'gurukripa'
}
console.log(shops.s1);
//additon of two elements
function add(n1,n2){
    return (n1+n2);
}

const addition=add(21,22);
console.log(addition());

//using if else and applying for loop m=1,n=10
function mod(n){
    const arr=[10,20,30,40];
    for(let m=0;m<=n;m++){
    const modu=arr[m]%2;
    arr.push(modu);
    }
return arr;
}
 const lmn=new mod(10);
 const mn=new arr[10,20,30,40];
 console.log(lmn);


//use of for in loop
function  Circl(radius){
    this.radius=radius;
    this.draw=function(){
        console.log('draw');

    }
}
const circl=new Circl(10);
if('radius' in circl)
console.log('circl has a radius');

//get set
function Yllw(du){
    this.du=du;
    let deafaultloaction={x:0,y:0};
    this.paint=function(){
        console.draw('draw');
       
    };
    Object.defineProperty(this,'defaultLocation',{
        get:function(){
            return defaultLocation;
        }
    ,

        set:function(value){
        if(!value.x||!value.y)
        throw new Error('Invalid Loaction');
        defaultLocation=value;
     }}
    
    
    );
}

const yllw=new Yllw(12);
console.log(Yllw.draw());
yllw.defaultLocation=2;

//same 

function cal(tiff){
    this.tiff=tiff;
    let bottle={x:1,y:1};
    Object.defineProperty(this,bottle,{
        get:function(){
            return bottle; 
        },
        set:function(value){
            if(!value.x||!value.y)
            throw new Error('BOTTLES NOT COUNTED PROPERLY');
        bottle=value;
        }

        })
    
         
    }
    const  Cal=new cal(10);
    console.log(cal.tiff);
    cal.bottle=2;


const person={
    firstName:'mosh',
    lastName:'hamedani',
    get fullName(){
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts=value.split(' ');
        this.firstName=parts[0];
        this.lastName=parts[1];
    }
};
person.fullName='john smith';

console.log(person);
//time project
function time(hour){
    if(hour>=6&&hour<=12){
        console.log('goodmorning\nyou are welcomed');
    }
    else if(hour>=12&&hour<=17){
        console.log('its Good afternoon');
    }
    else if(hour>=17&&hour<=22){
        console.log('yeh shaamm mastaaani\nmadahosh kiye jaeee...\n mujhe dor koi khiche\n teri orrr liye jaaee.... ');
    }
    else if(hour>=22&&hour<=24){
        console.log('good night guyss itzzz sleeping time');
    }
    else{
        console.log('you had entered wrong digit\nThankyou');
    }


}
const tym=new time(12);
console.log(tym);
//var amd let difference  part
function start(color){
    for(var i=0;i<5;i++){
        if(true){
            let color='red';
        }
    }
    console.log(color);
}
console.log(start());
    
//OBJECT CLONING
//older method of object cloning
//object creted on qualities of person
const qualities={
    humble:29,
    calm:34,
    responsible:67,
    angerIssues:59
};
const qwlty={};
for(let key in qualities){
    qwlty[key]=qualities[key];
    
}
console.log(qwlty);
//new method
//in place of const qwlty and using for loop we use
const qwlty=Object.assign({},qualities);
console.log(qwlty);
         //OR
const qwlty={...qualities};
console.log(qwlty);

//SCOPE global object and methods
const video={
    title:'a';
    play(){
        console.log(this);
    }
}
function video(title){
    this.title=title;
    console.log(this);
}
const V =new video('b');



//checking which value jis modulas of 2
const arr=[20,40,60,80];
const modulas=arr.filter(function(value){
    return value%2==0;
});
console.log(modulas)

//MAPPING AN ARRAY
 const inst=[2,3,4,5,6,7,8,9];
 const insta=inst.filter(n=>n%2==0);
 const instag=insta.map(n=>'html '+n+' mysql '+'javascript');
 console.log(instag);

const inst=[2,3,4,5,6,7,8,9];
const instag=inst.filter(n=>n%2==0).map(n=>'html '+ n + ' mysql ' +' javascript \n ');
const lang='<ul> '+instag.join(' ')+'</ul>';
console.log(lang);

const numbers=[1,-1,2,3];
const items=numbers
.filter(n=> n >= 0)
.map(n=>({value:n}))
.filter(obj =>obj.value >1)
.map(obj => obj.value);
console.log(items);

//STRING LITERAL
// const message=`this is my
//  first message`;
//  const name='riya';
//  const lastName='chakravarti';
// const con=`hii ${lastName} we are neet to meet you`;

 const mail=`Hii  Pooja!!
 we are glad to meet you 
 hope you are ready with your projects when we meet 
 i am so excited to look up for the new project
 we are going to meet soon 
 just hope... `;
 //array reduce # for additon of array elements

const itme=uhh.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(itme);

//programm to print the sum of those no.s in array which are even
const padhai=[12,13,14,15,16];
const padh=padhai.filter(n=>n%2==0).reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(padh);
//use of bind 
const person={
    naam:'mosh',
    walk(){
        console.log(this);
    }
};
person.walk();
const walk=person.walk.bind(person);
walk();
//litte older way
const square=function(y){
    return y*y;
};
console.log(square(5));
//newer way
const sqr=number=>number+number;
console.log(sqr(9));
//object cloning as well as we canalso use spread operator
const frnds={
    ishu:'chutiya',
    manshi:'chutiya',
    khushi:'gandu',
    nishi:'bc',
    soumya(){
        console.log('chuza');
}
};
const teachers={
    bappa(){
        console.log('ganpati bappa!!');

    },
    saraswatiMata:"teacher"
};
const bff=Object.assign({},{},teachers,frnds);
const bestFrnds={...frnds,...teachers};
console.log(bff);
console.log(bestFrnds);

//Inhertitance 
class Dryfruits
{
    constructor(dryfruts,badam){
        this.dryfruts=dryfruts;
        this.badam=badam;}
        akhrod(){
            console.log('sorrry yar abhi akhrod khtm nhi hue');
        }
    
}
class Rotien extends Dryfruits
{
    constructor(fish,egg,badam,akhrod)
    {
        super(badam,akhrod);
        this.fish=fish;
        this.egg=egg;
        daals()
        {
            console.log('tastyyy');
        }

    }
}
const Rotien=new rotn;
console.log(rotn);
