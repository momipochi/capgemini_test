const students = [
  {
    name: "Martin",

    lastName: "Lant",

    marks: [9, 8, null, 7, 5],
  },

  {
    name: "Francesco",

    lastName: "Portus",

    marks: [5, 4, 2, 3, 2],
  },

  {
    name: "Bill",

    lastName: "Merdoc",

    marks: [10, null, null, null, 10],
  },

  {
    name: "John",

    lastName: "Entman",

    marks: [9, 8, 9, 7, 5],
  },
];

function getPresence(arr) {
  let count = 0;
  arr.forEach((x) => {
    if (x === null) {
      count++;
    }
  });
  return count;
}
function getAvgMark(arr) {
  let sum = 0;
  arr.forEach((x) => {
    if (x != null) {
      sum += x;
    }
  });
  return sum / arr.length;
}

function displayStudents() {
  let studentUl = document.getElementById("student_card");
  students.forEach((x) => {
    let studentLi = document.createElement("li");

    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");

    let avg = getAvgMark(x.marks);
    div1.innerHTML = `1.Name ${x.name}`;
    div2.innerHTML = `2.LastName ${x.lastName}`;
    div3.innerHTML = `3.Visited quantity of lectures ${getPresence(x.marks)}`;
    div4.innerHTML = `4.Average mark ${avg}`;

    studentLi.setAttribute('active',1)
    studentLi.appendChild(div1);
    studentLi.appendChild(div2);
    studentLi.appendChild(div3);
    studentLi.appendChild(div4);
    studentLi.addEventListener("click", cardOnClick)
    if (avg < 5) {
      studentLi.style.border = "solid #FF0000";
    }
    if(avg > 6){
        studentLi.style.border = "solid #00FF00";
    }
    studentUl.appendChild(studentLi);
  });
}

function cardOnClick(event){
    var source = event.target
    var li = source.closest('li')
    source.closest('li').style.backgroundColor = "gray"
    console.log(li.getAttribute('active'))
    if(li.getAttribute('active') == 1){
        console.log("hi im here")
        li.style.backgroundColor = "gray"
        li.setAttribute('active',0)
    }else{
        li.style.backgroundColor = "white"
        li.setAttribute('active',1)
    }
    console.log(source)
}

window.onload = () => {
  displayStudents();
};
