const vehiculo={
    type: "car",
    trade: "fiat",
    model: "500",
    color: "red",
    ruedas: 4,
}
const array=[
    1,2,3,4,5,6,7,8
]

const bebe=[...array].map((element)=>{
    return element*2;
})
const bebe2=[...array].some((current)=>current>6);
console.log(bebe2);
console.log(Object.entries(vehiculo));