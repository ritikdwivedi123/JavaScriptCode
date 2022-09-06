/* call, apply, bind
const data1={
    name: "Ritik",
    age: 26,
    Profession: "Software Engineer",
    
}

getDetails= function (state, country) {
    console.log(this.name + " " + state + " " + country);
}

getDetails.call(data1, "Pune", "France");

const data2={
    name: "Ayush",
    age: 25,
    Profession: "Data Engineer"
}
let data3=getDetails.bind(data2, "Delhi", "India");
getDetails.apply(data2, ["Noida", "India"]);
data3();
*/