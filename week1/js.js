console.log("start")

function task1(){
  
    
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        const me = false
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

task1().then((val)=>{console.log(val); return task2()})
       .then((val)=>{console.log(val); return task3()})
       .then((val)=>{console.log(val); return task4()})
       .then((val)=>{console.log(val);return console.log("end")})
       .catch(error => console.error(error))



