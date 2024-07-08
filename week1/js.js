console.log("start")

 function task1(){
  
    
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        const me = true
        me==true ?  res("wake up"):rej("sleeping")
       
      
    },3000)
    })
}
function task2(){

return new Promise((res,rej)=>{
    setTimeout(()=>{
        const me = true;
      me==true ?   res("eat food"):rej("i cant eat")
    
    },2000)
})
}

function task3(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
        res("fresh//")
  
    },1000)
})
}

function task4(){
  return new Promise((res,rej)=>{
    setTimeout(()=>{
        res("goine out ...")
       
    },6000)
})
}

async function douit(){
  try{
    const wakep = await task1()
    console.log(wakep);
 
    const food = await task2()
    console.log(food);
  }
  catch(error){
    console.log(error);
  }
}



douit()



// task1().then((val)=>{console.log(val); return task2()})
//        .then((val)=>{console.log(val); return task3()})
//        .then((val)=>{console.log(val); return task4()})
//        .then((val)=>{console.log(val);return console.log("end")})
//        .catch(error => console.error(error))









// console.log("starting")
// let x=fetch('"https://example.org/products.json"')

// console.log(x);
// x.then((data)=>[
//     console.log(data)
// ])

// async function num(n){
//     return n
// }

// x=num(12)
// x.then((data)=>{
//     console.log(data)
// })
// console.log(x);


