//change the border of images in testimonails of home page.

window.onload = function changeBorder()
{
 let colorarr=new Array('red','green','pink', 'yellow');
 let color = colorarr[Math.floor(Math.random()*(colorarr.length))];
 let len = document.getElementsByClassName("testimonials").length;
 for (let i=0; i<len; i++){
  let personImage = document.getElementsByClassName("testimonials")[i].getElementsByTagName("img")[0];
  personImage.style.border = `5px solid ${color}`;
 }
}
// alternate
// document.getElementsByTagName("body").addEventListener("load" , changeBorder());

//show random email, name, age, hobbies pair in footer on each page.
const person= [
  {
    email: "apple@gmail.com",
    name:"apple-iphone",
    age:16,
    hobbies : ["cricket" , "anchoring"]
  },
  {
    email: "orange@gmail.com",
    name:"orange-fruit",
    age:26,
    hobbies : ["cricket" , "ornaments"]
  },
  {
    email: "c@gmail.com",
    name:"chandra",
    age:20,
    hobbies : ["cricket" , "carrom"]
  },
  {
    email: "d@gmail.com",
    name:"drone",
    age:24,
    hobbies : ["cricket" , "dancing"]
  },
  {
    email: "e@gmail.com",
    name:"eshaan",
    age:16,
    hobbies : ["cricket" , "enacting"]
  },
];

const random = Math.floor(Math.random() * person.length);
document.getElementById("putName").value= person[random].name;
document.getElementById("putEmail").value= person[random].email;
document.getElementById("putAge").value= person[random].age;
document.getElementById("putHobbies").value= person[random].hobbies;

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

//make navbar fixed or static
window.onscroll = () => { if (window.pageYOffset > sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }};

//use if statement for some code to run only on current page and put that code in if{} block.
// get the name of current page in header-text. like on home page ,on features page.
let pageName = document.getElementById("pageNameInHeader").innerText;
//if element exists for current page then only Function will run.  
if( pageName != null) {   
  function headerText(id , str){
    document.getElementById(id).innerHTML = pageName + str;
  }
  headerText("intro", " page added by js.");
}

//in features section of home page count the sub-elements or childs.
let count= document.getElementById("features-list");
if(count != null){  //if the current page has this element.
  count = count.childElementCount; //count of child elements
  document.getElementById("features-count").innerHTML= "Our Product has "+ count + " Features.";    
}
 
//on home page, form validation in contact section
function validateForm() {
    let x = document.getElementById("first-name").value;
    let y = document.getElementById("last-name").value;
    let z = document.getElementById("address1").value;
    let w = document.getElementById("address2").value;
    let v = document.getElementById("message").value;
    //if any field is empty then alert.
    if (x != "" && y != "" && z != "" && w != "" && v != "") {
      alert("You have entered all the fields, thank you");
    }else{
      //alert if all fileds filled
      alert("All fields are Compulsory.");
    }
}

//gets the current date on home page.
var d= new Date();   //d is the function which will give date.
let dom = d.getDate();  //current date
var m_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
function dateOrdinal(dom) {
  if (dom == 31 || dom == 21 || dom == 1) return dom + " st ";
  else if (dom == 22 || dom == 2) return dom + " nd ";
  else if (dom == 23 || dom == 3) return dom + " rd ";
  else return dom + "th";
};
let today = document.getElementById("date");
//run the below code only when element exists in the current page else code will not run and our code will not break.
if(today !=null)  
{today.innerHTML ="Today is " + dateOrdinal(dom) + " " + m_names[d.getMonth()]+ " "+ d.getFullYear();
}

//features page js 
// pie chart in features page.
if( document.getElementById("pageNameInHeader").innerText ==="Features"){
var xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
var yArray = [55, 49, 44, 24, 15];

var layout = {title:"World Wide Wine Production"};

var data = [{labels:xArray, values:yArray, type:"pie"}];

Plotly.newPlot("myPlot", data, layout);
}
// fn for adding a row.
function show(){
  let e = document.getElementById("addInTable");
  e.classList.add("showForm");
}

function createRow(){
  var table = document.getElementById("myTable");
  var row = table.insertRow(2);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  let e = document.getElementById("addInTable");

  cell0.innerHTML = `<input type="checkbox" name="name" class="rowcheck"/>`;
  cell1.innerHTML = document.getElementById("feature").value;
  cell2.innerHTML = document.getElementById("advantage").value;
  
  //make form invisible again.
  e.classList.remove("showForm");
  //checkbox = document.querySelectorAll("input[type=checkbox]");

  //row.classList.add("tableFeature");
  cell0.addEventListener("change", function(){
    checkedCounts();
  });
}

//set the source checkbox to all of the checkboxes.
function setAllCheckboxes( elements, sourceCheckbox) {
  elements = document.querySelectorAll("input[type=checkbox]");  //nodelist
  for (let i = 0; i < elements.length; i++) {
    //set the source checkbox to current checkbox.
      elements[i].checked = sourceCheckbox.checked;
  }
  //now update the countOfChecks variable and styles through "checkedCounts()" function.
  checkedCounts();
};

//counts the checked checkboxes count in features page

var checkbox = document.querySelectorAll("input[type=checkbox]");  //array of all checkbox elements

 for(let i=1; i<checkbox.length; i++){
  // change event for checking and unchecking of "current" checkbox and update the count.
  checkbox[i].addEventListener( 'change', function() {
        checkedCounts();
        });       
}

//function which give the final value of countOfChecks and regarding styles.
function checkedCounts(){
  let countOfChecks = 0;
  let c= document.getElementById("countOfChecks");
  let checkbox = document.querySelectorAll("input[type=checkbox]");  //array of all checkbox elements
  for(i=1;i<checkbox.length;i++){
    if(checkbox[i].checked){
      countOfChecks++;
      checkbox[i].parentElement.parentElement.setAttribute("style", "background-color: #2484e4;color:white;");
    }else{
      checkbox[i].parentElement.parentElement.setAttribute("style", "background-color: white;color:black;");
    }
  }
  if(countOfChecks == checkbox.length - 1){
      countOfChecks = "All";
  }
  c.innerText = countOfChecks;
}


// in contact page change addresses.
let address = document.getElementById("address"); 
if(address){
  let address1 = document.getElementById("address1");
  let address2 = document.getElementById("address2");
  let temp1 = document.getElementById("address3").value;
  let temp2 = document.getElementById("address4").value;
  
  address.addEventListener("change",function(){
  let address3= document.getElementById("address3");
  let address4= document.getElementById("address4");
  if(this.checked){
    //change the value and disable the field.

    address3.disabled = true; 
    address3.value = address1.value;
    address4.disabled = true;
    address4.value = address2.value;
    // address1.addEventListener('change', function(){
    // address3.value = address1.value;
    // });
    // address2.addEventListener('change', function(){
    // address4.value = address2.value;
    // });
  }
  else{
    //restore the inputted value and enable the field.
    address3.value = temp1;
    address3.disabled = false;

    address4.value = temp2;
    address4.disabled = false;
  }
  });
}

//in contact page, if user selects "Report Problem" => show two more textboxes.
function checkvalue(val)
{
  let p = document.getElementById("inVisible");
      if(val==="Report problem"){
        p.style.display='flex';
    }
    else{
      p.style.display='none';
    }

}


//in contact page count the length od msg field.
function count_it(){
  document.getElementById('counter').innerHTML = document.getElementById('message').value.length + "/280";
}

//form validation on contact page.
// const submit = document.getElementById("submit");

// submit.addEventListener('click', validate);

// function validate(e) {
//   e.preventDefault();  //prevent page refresh 
// }


// pricing page js

//on pricing page change colors when selecting a plan.
function selectPlan(id){
  let plan= document.getElementsByClassName("plan");
  let len = plan.length;
  for(let i=0; i<len; i++){
    if(i!=id)
    plan[i].classList.remove('planSelected');
  }
  plan[id].classList.toggle("planSelected");
}

//on home page in features section add title and body dynamically from some webpage using api request.
if(document.getElementById("pageNameInHeader").innerText =="Home"){
let x = []; let y; let z;
 xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
   x = this.responseText;
    // console.log(x);
     z = JSON.parse(x);
     y = document.getElementById("features-list").getElementsByTagName("li");
      for (let i =0; i< y.length ; i++){
        y[i].getElementsByTagName("h4")[0].innerHTML = z[i].title;
        y[i].getElementsByTagName("p")[0].innerHTML = z[i].body;}
  }
  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts");
  xhttp.send();
}