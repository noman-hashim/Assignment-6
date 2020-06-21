
        //chapter 21-25 : STRING METHODS 

//task 1
/* var firstname = prompt("Enter your first name : ","First name");
var lastname = prompt("Enter your last name :","Last name");
var fullname= (firstname+" "+lastname);
document.write("Welcome to our website " +fullname); */

//task 2
/* var fvrt = prompt("Enter your favorite Mobile phone name : ");
document.write("My favorite phone is : " +fvrt);
document.write("<br>Length of string is : "+ (fvrt.length)); */

//task 3
/* var word = "pakistani";
document.write("String is : "+ word);
document.write("<br>Index of 'n' is : "+ word.indexOf("n")); */

//task 4
/* var word = "Hello World";
document.write("string is : "+word);
document.write("<br>Last index of 'l' is : "+word.lastIndexOf("l")); */

//task 5
/* var word = "pakistani";
document.write("String is : "+ word);
document.write("<br>Character at inex 3 is : "+ word.charAt(3)); */

//task 6
/* var firstname = prompt("Enter your first name : ","First name");
var lastname = prompt("Enter your last name :","Last name");
document.write("Welcome to our website " +firstname.concat(" " ,lastname)); */

// task 7
/* var word = "Hyderabad";
document.write("City : "+ word);
document.write("<br>After replacement : "+ word.replace("Hyder","Islam")); */

//task 8
/* var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message+"<br><br>After replacement : "+message.replace(/and/g,"&") ); */

//task 9
/* var nmbr="472";
document.write("Value : "+nmbr);
document.write("<br>Type : "+ typeof(nmbr));
document.write("<br>Value : "+parseInt(nmbr));
document.write("<br>Type : "+ typeof(parseInt(nmbr))); */

//task 10
/* var word =prompt("Enter any word to convert into uppercase : ","Enter word here");
document.write("User input : "+word);
document.write("<br>Upper case : "+ word.toUpperCase()); */

//task 11
/* var word =prompt("Enter any word : ","Enter word here");
document.write("User input : "+word);
var after = word.slice(0,1);
word = (after.toUpperCase().concat(word.slice(1)));
document.write("<br>Title case : "+word); */

//task 12
/* var nmbr = "35.36"
document.write("Number : "+nmbr);
var num2 = nmbr.replace(".","");
document.write("<br>Result : "+ num2.toString()); */

//task 13
/* var user = prompt("Enter your name : ");
for(var i=0;i<=user.length;i++){
        if((user[i]=='!') || (user[i]==',')||(user[i]=='.')||(user[i]=='@')){
                alert("Enter correct user name.");  
                break;
        }
} */
    
//task 14
/* 
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Enter item name you want to search : ","Enter name ");
var item = A.indexOf(search.toLowerCase());
if(item>=0){
document.write(search+ " is available at index "+item+" in our bakery");
}
else{
        document.write("We are sorry "+search+" is not available in our bakery");
} */

//task 15
/* var password = prompt("Enter your password : ");
if(password.charAt(0)>=0 || password.charAt(0)<=9 ){
        document.write("Password must be start with an alphabet.");
}
else if(password.length<6){
        document.write("Password must be atleast 6 character long.");
}
for(var i=0;i<password.length; i++){
        if((password[i] >= "A" && password[i] <= "Z") || (password[i] >= "a" && password[i] <= "z") && (password[i]>="0" || password[i]<="9" ) ){
                 document.write("Password  should contain alphabets and numbers.");  
                 break; 
        }
}
 */

 //task 16
/*  var  university = "University of Karachi";
var array = university.split("");
for(var i =0;i<array.length;i++){
        document.write(array[i]+"<br>");
} */

//task 17
/* var input = prompt("Enter any word : ");
document.write("User input : "+input);
document.write("<br> Last character of input is: "+ input.substr(input.length - 1)); */

//task 18
/* var text = "The quick brown fox jumps over the lazy dog";
var text2 = text.toLowerCase();
document.write("Text : The quick brown fox jumps over the lazy dog.")
document.write("<br> There are "+(text2.match(/the/g)).length+" of accurance(s) of word 'the' "); */

                        //chapter 26-30 : MATH METHODS

//task 1
/* var number = prompt("Enter any positive decimal number : ");
document.write("Number : "+number);
document.write("<br>Round of value : "+ Math.round(number));
document.write("<br>floor value : " + Math.floor(number));
document.write("<br>ceil value : "+ Math.ceil(number)); */

//task 2
/* var number = prompt("Enter any negative decimal number : ");
document.write("Number : "+number);
document.write("<br>Round of value : "+ Math.round(number));
document.write("<br>floor value : " + Math.floor(number));
document.write("<br>ceil value : "+ Math.ceil(number)); */

//task 3
/* var number = prompt("Enter any number to find absolute : ");
document.write("Absolute value of "+number+ " is : " + Math.abs(number)); */

//task 4
/* var nmber = Math.random();
nmber=Math.round(((nmber * 5) + 1));
document.write("Random dice number is : "+nmber ); */

//task 5
/* var coin = Math.random();
coin = Math.round(coin);
coin = (coin*1)+1;
if(coin === 2){
        document.write(coin);
        document.write("<br>ceil value : Heads");      
}
else{
        document.write(coin);
        document.write("<br>ceil value : Tails");       
} */

//task 6
/* var nmber = Math.random();
nmber=Math.round((nmber * 99)+1);
document.write("Random number beween 1 to 100 is : "+ nmber);  */

//task 7
/* var weight = prompt("Enter your age in kilogram : ");
var add ="";
for(var i=0;i<weight.length;i++){
        if(weight[i]>="0" && weight[i]<="9"){
               add= add.concat(weight[i]);
        }
}
document.write("The weight of user is "+add+ " kilograms"); */

//task 8
/* var nmber = Math.random();
nmber=Math.round((nmber * 9)+1);
var gues = +prompt("Guess the secret number form 1 to 10 ");
if(gues===nmber){
        document.write("congratulations!");
} 
else{
        document.write(nmber+ " Sorry! Try again");
} */

                // chapter 31-34 : DATE METHODS

//task 1
/* document.write(new Date()); */

//task 2
/* var month = new Date();
var mnthname = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var curentmnth = month.getMonth();
document.write("Current month is : "+mnthname[curentmnth]); */

//task 3
/* var day = new Date();
var dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curentday = day.getDay();
document.write("Current month is : "+dayname[curentday]); */

//task 4
/* var day = new Date();
var dayname = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var curentday = day.getDay();
if(dayname[curentday]==="Sunday" || dayname[curentday]==="Saturday"){
document.write("Its fun day !");
} */

//task 5
/* var date = new Date();
var curentdate = date.getDate();
if(curentdate<16){
        document.write("First fifteen days of the month");
}
else{
        document.write("Last days of the month");
} */

//task 6
/* var date = new Date();
document.write("Current date : "+ date);
var ms = date.getTime();
var mints = Math.floor(ms/60000);
document.write("<br>Elapsed miliseconds since January 1, 1970 : "+ ms);
document.write("<br>Elapsed minuts since January 1, 1970 : "+ mints); */

//task 7 
/* var time = new Date();
var hrs = time.getHours();
if(hrs>12){
        document.write("Its PM");
}
else{
        document.write("Its AM");
} */

//task 8
/* var laterdate =  new Date("dec 31, 2020");
document.write("Later Date : "+laterdate); */

//task 9
/* var d1 = new Date("jun 18, 2015");
var d2 =  new Date("jun 19, 2020");
var dfft = d2.getTime()-d1.getTime();
var dffd = dfft/(1000*60*60*24);
document.write(dffd+" days have passed since 1st Ramadan, 2015"); */


//task 10
/* var newdate = new Date();
var refdate = new Date("dec 05, 2015 20:15:16");
var dff = Math.abs(newdate-refdate)/1000;
document.write("From refrence date : "+refdate+"<br>"+ Math.ceil(dff)+" Seconds had passed since beginning of 2015");
 */

//task 14
/* var name =prompt("Enter your name : ");
var mnth = prompt("Enter curent month : ");
var units = prompt("Enter units : ");
var charges = prompt("Enter charges : ");
var billwdd = units*charges;
var billadd = billwdd+350;
document.write("Customer Name : "+name);
document.write("<br>Month : "+mnth);
document.write("<br>Number per units : "+ units);
document.write("<br><br>Net Amount Payable(within due date) : "+ billwdd.toFixed(2));
document.write("<br>Net Amount Payable (After due date) : "+billadd.toFixed(2)); */

                // chapter 35-38 : Function

//task 1
/* function date(){
        document.write("Current Date : "+ new Date());
}
date(); */

//task 2
/* function greet(){
        var frstname = prompt("Enter first name : ");
        var lstname = prompt("Enter last name : ");
        document.write("Welcom to our website "+frstname+" "+lstname);
}
greet(); */

//task 3
/* function sum(){
        var n1 = + prompt("Enter first number : ");
        var n2 = + prompt("Enter second number :");
        var sum = n1+n2;
        return sum;
} 
document.write("Sum : "+ sum()); */

//task 4
/* function operation(n1, n2 , op){
        if(op=='+'){
             return (n1+n2);
        }
        else if(op=='-'){
               return (n1-n2);
        }
        else if(op=='*'){
                return (n1*n2);
        }
        else if(op=='/'){
                return (n1/n2);
        }
        else if(op=='%'){
                return (n1%n2);
        }
}
var n1 = + prompt("Enter first number : ");
var n2 = + prompt("Enter second number :");
var op = prompt("Enter operator : ");
document.write("Required answer is : " +operation(n1,n2,op)); */


//task 5
/* function abc(n1){
        return (n1*n1);
}
document.write("Square of 5 is : "+abc(5)); */

//task 6
/* var fact = + prompt("Enter number for factorial : ");
function abc (fact){
        var count=1;
        for(var i=fact; i>0; i--){
                count = count*i;
        }
        return count;
}
document.write("Factorial of "+fact+" is " +abc(fact)); */

//task 7
/* function counting (strt , end){
        for(var i=strt ; i<=end;i++){
                document.write(i+"<br>");
        }
}
var strt = + prompt("Enter starting value : ");
var end = + prompt("Enter end value : ");
counting(strt,end); */

//task 8
/* var base = +prompt("Enter base : ");
var perp = +prompt("Enter perpendicular : ");
function hypo(base , perp){
        var bs2 = sqr(base);
        var pr2 = sqr(perp);
        var h1 = bs2+pr2;
        function sqr( arg1){
                return(arg1*arg1);
        }
        return h1;
}
document.write("Hypotenuse is : "+ hypo(base,perp)); */

//task 9
/* var width = +prompt("Enter width : ");
var height = +prompt("Enter height : ");
function area(width, height){
        var a = width*height
        return a;
}
document.write("Argument as variable : Area = "+ area(width,height));
document.write("<br>Argument as value : width(4) : height(5) then Area is =  "+ area(4,5)); */

//task 10
/* var a = "madam";
var b="";
function palindrome(a){
        for(var i=(a.length-1); i>=0; i--){
                b = b.concat(a[i]);
        }
        if(b===a){
                return true;
        }
        else{
                return false;
        }
}
if (palindrome(a)===true){
        document.write(a+" is palindrome");
}
else{
        document.write(a+" is not palindrom");
} */

//task 11
/* var str = "the quick brown fox";
function frstword(str)
{
  var array = str.split(' ');
  var newarray = [];
    
  for(var x = 0; x < array.length; x++){
      newarray.push(array[x].charAt(0).toUpperCase()+array[x].slice(1));
  }
  return newarray.join(' ');
}
document.write(frstword("the quick brown fox")); */


//task 12
/* var str = "Web Development Tutorial";
function findLongestWord(str) {
        var strSplit = str.split(' ');
        var longestWord = 0;
        var word ="";
        for(var i = 0; i < strSplit.length; i++){
          if(strSplit[i].length > longestWord){
              longestWord = strSplit[i].length;
              word = strSplit[i];
           }
        }
        return word;
      }
var lrgword = findLongestWord("Web Development Tutorial");
document.write("Given string is : " +str);
document.write("<br>Longest word is : " +lrgword); */

//task 13
/* function countletr(str ,letr){
        var occu=0;
        for(var i=0;i<str.length;i++){
                if(str[i]=== letr ){
                        occu = occu+1;
        }
   }
   return occu; 
}
document.write("Sample argument: JSResourceS.com ");
document.write("<br>Number of occurance of leter a is : " + countletr("JSResourceS.com","o")); */

//task 14
/* function calcCircumference(radius){
        var cirum = 2*3.146*radius;
        return cirum;
        }
function calcArea(radius){
        var area = 3.146*radius;
        return area;
}
var radius = 5;
document.write("The circumference is : " + calcCircumference(radius));
document.write("<br>The area is : " +calcArea(radius)); */