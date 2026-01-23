let marks = [35, 67, 82, 49, 90, 58];

let pass = [];

for(let i=0; i<marks.length; i++){
    if(marks[i] >= 50){
        pass.push(marks[i]);
    }   
}

percentage =[];

for(let i=0; i<marks.length; i++){
    percentage.push(`${marks[i]} %`);
}

for(let i=0; i<marks.length; i++){
    if(marks[i] > 85){
        console.log(marks[i]);
    }
}
        