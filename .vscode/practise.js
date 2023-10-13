//calculating modulas

// function Modulas(arr){
//     const emptyArr=[];
//     for(let i=0;i<=arr.length;i++){
//         const mod=arr[i]%2;
//         emptyArr.push(mod);

        
//     }
// return emptyArr;    

// }
// const arr=[10,20,30,40];
// const modulas= Modulas([10,20,30,40]);
// console.log(modulas);

//checking which value is modulas of 2
const array=[20,40,60,50,89];
const mod=array.filter(n=>n%2==0);
console.log(mod);



//MAPPING AN ARRAY
 const inst=[2,3,4,5,6,7,8,9];
 const insta=inst.filter(n=>n%2==0);
 const instag=insta.map(n=>'html '+n+' mysql '+'javascript');
 console.log(instag);

const inst=[2,3,4,5,6,7,8,9];
const instag=inst.filter(n=>n%2==0).map(n=>'html '+ n + ' mysql ' +' javascript \n ');
const lang='<ul> '+instag.join(' ')+'</ul>';
console.log(lang);
//..........................................
const numbers=[1,-1,2,3];
const items=numbers
.filter(n=> n >= 0)
.map(n=>({value:n}))
.filter(obj =>obj.value >1)
.map(obj => obj.value);
console.log(items);
//.....................................
class Person{
    constructor(name){
        this.name=name;
    }
    walk(){
        console.log('walk');
    }
}
// const person=new Person;

class Teacher extends Person{
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
////............................

const enrllNo=[22,8,44,34,51,64,75,67,89];
const filt=enrllNo.filter(n=>n==8).map(n=>'pooja'+'wani'+'_'+n);
console.log(filt);
//.................................

const uhh=[8,16,24,32,40,48,56,64];
const me=uhh.filter(m=>(m%2==0&&m<=40)).map(n=>{const obhj={value:n};
return obhj;
});
//...................................
//array reduce # for additon of array elements

const itme=uhh.reduce((accumulator,currentValue)=>accumulator+currentValue);
console.log(itme);
//...............................
//using bind keyword
const  johny={
    items:'ribbon',
    eyesColor:'bluishBlack',
    comfort(){
        console.log(this);}
};
johny.comfort();
const comfort=johny.comfort.bind(johny);
johny.items='perfection';
//.........................................
//using arrow => 
const square=number=>number*number;
console.log(square(5));
//.............
const res=[
   { id:'it',isActive:true},
   {id:'infosys',isActive:true},
   {id:'jio',isAvtive:false}
];

const activeJobs=res.filter(job=>job.isActive);

//checking whether the restuarants are open or not
const res=[
    {nm:'gurukripa',isOpen:true},
    {nm:'vrindawan',isOpen:true},
    {nm:'dwarkaTastes',isOpen:false}
];
const openRestaurant=res.filter(rest=>rest.isOpen);
console.log(openRestaurant);

//....................
function cunt(){
const string=`hello what is this behaviour sujita if you dont 
work well nd good from next time you are fired`;
const word='what';
const count=0;
for(let i in string){
    if(word==string[i]){
        count=count+1;
        console.log(count);
        return count;
    }

}
}
console.log(cunt());
//....................
const shampoo=['vatika','dove','sunsilk','patanjali','clinicplus','sesa'];
const pqr=shampoo.filter(n=>n=='sunsilk').map(n=>'i am very satisfied by using '+n+'shammpoo');
console.log(pqr);
//...........................................
const chocolates=['parleg','fiveStar','munch','perk','dairyMilk'];
const choco=chocolates.filter(n=>n=='dairyMilk').map(n=>{const obj={value:n};
return obj;});
chocolates[5]='dairyMilk';
console.log(choco);
//caluclating  factorial of 7....................
const wi=[1,2,3,4,5,6,7];
const fac=wi.reduce((accumulator,currentValue)=>{return accumulator*currentValue;},0);
console.log(fac);

//table of 3
function tbl (){
    thr=[1,2,3,4,5,6,7,8,9,10];
    for(let i in thr){
        return 3*thr[i];
    }
}

function Pooja(nice){
    this.nice=nice;
    this.kind=function(){
        console.log('pooja is a kind girl');}
        let anger=101;

        Object.defineProperty(this,'anger',{get:function(){
            return anger;
        },
        set:function(value){
            if(anger==100)
            throw new Error('you are such a fool person');
            anger=value;
        }    });

}
const pooja=new Pooja(78);
pooja.anger=109;
console.log(pooja);

