// console.log("start")

//  function task1(){
  
    
//     return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const me = true
//         me==true ?  res("wake up"):rej("sleeping")
       
      
//     },3000)
//     })
// }
// function task2(){

// return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         const me = true;
//       me==true ?   res("eat food"):rej("i cant eat")
    
//     },2000)
// })
// }

// function task3(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("fresh//")
  
//     },1000)
// })
// }

// function task4(){
//   return new Promise((res,rej)=>{
//     setTimeout(()=>{
//         res("goine out ...")
       
//     },6000)
// })
// }

// async function douit(){
//   try{
//     const wakep = await task1()
//     console.log(wakep);
 
//     const food = await task2()
//     console.log(food);
//   }
//   catch(error){
//     console.log(error);
//   }
// }



// douit()



// task1().then((val)=>{console.log(val); return task2()})
//        .then((val)=>{console.log(val); return task3()})
//        .then((val)=>{console.log(val); return task4()})
//        .then((val)=>{console.log(val);return console.log("end")})
//        .catch(error => console.error(error))









// // console.log("starting")
// // let x=fetch('"https://example.org/products.json"')

// // console.log(x);
// // x.then((data)=>[
// //     console.log(data)
// // ])

// // async function num(n){
// //     return n
// // }

// // x=num(12)
// // x.then((data)=>{
// //     console.log(data)
// // })
// // console.log(x);






//  async function abc(){
 
//      return p
 
// }
// var p = new Promise((res,rej)=>{
//   res("hy")
// })
// const data = abc()
// data.then((res)=> console.log(res))




// const p1 = new Promise((res,rej)=>{
//   setTimeout((da)=>{
//     res("tsak one compleated")
//   },500)
// }) 



// const p2 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     res("task two compleated")
// },1000)
// })



// const p3 = new Promise((res,rej)=>{
//   setTimeout(()=>{
//     rej("task three compleated")
//   },1000)


// })


// Promise.race([p1,p2,p3])
// .then(res=> console.log(res))
// .catch(err=> console.log("error"))



// fetch("https://jsonplaceholder.typicode.com/users")
// .then((data)=>{
//  if(data.ok){
//   console.log("done");
//  }else{
//   console.log("not done");
//  }
//   data.json()})
// .then((data)=> console.log(data))
// .catch((err)=>{
//   console.log("err");
// })


const API_URL ="https://pokeapi.co/api/v2/pokemon?limit=151"

const items = document.getElementById("list-item")

function ubdate(data){

data.results.forEach(e => {
 
  const li = document.createElement('li')
  li.innerHTML = `
 <img src="${e.url}" >
 <h1>${e.name}</h1>
  ` 
  console.log(li);
  items.appendChild(li)
});


}

abc()
async function abc(){
  const respose =await  fetch(API_URL)
  const datas=await respose.json()
  ubdate(datas)
  console.log(datas);
}


// fetch(API_URL)
//     .then(res=>res.json())
//     .then(data=>ubdate(data))


