var mod="sad";
var age=34;
var example1 = Array(4);
var example2 = Array();//declare array without specifing size
//assign each variable
/*var beatles=Array(4);
beatles[0]="A";
beatles[1]="B";
beatles[2]="C";
beatles[3]="D";*/

var abc=Array("A","B","C"); //initialize array when declaring
var cde=["C","D","E"]; //even this is working!
var years=[1998,1999,2000]; //array of integer
var mix=["A",1998,true]; //array of mix type

var array_of_array[abc,cde,years,mix]; //array of array

//use String instead of number, as indicator of the array. no a good way! use Object instead!
var person=Array();
person["name"]="john";
person["age"]=1989;
person["living"]=true;

//use Object
var person1=Object();
person1.name="Kohn";
person1.year=1989;
person1.living=true;

//syntatical sugar of Object
var person2={name:"Kohn",year:1989,living:true};

//new way to declare beatles
var beatles=Array();
beatles[0]=person1;

//even better way!!
var beatles={};
beatles.vocalist=person1;

function shout(){
    for(var i=0;i<years.length;i++){
        alert(years[i]);
    }
}

function multiply(num1,num2){
    var total=num1*num2;
    alert(total);
}

function myFunction(){
    document.getElementById("demo").innerHTML = Date();
}