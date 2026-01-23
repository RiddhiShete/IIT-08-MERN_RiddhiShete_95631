let student ={
    studentId: 1,
    fullName: "Riddhi Shete",
    email : "rms@gmail.com",
    course : "MERN",
    marks : [10,10,8,9,10]
}

let s = JSON.stringify(student);

console.log(s);

s = JSON.parse(s);

console.log(s);