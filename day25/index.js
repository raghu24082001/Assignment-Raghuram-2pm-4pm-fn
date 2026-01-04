// setTimeout(()=>{
//    console.log('Login')
// },3000)

const raghu = new Promise((resolve, reject) => {
    let login=false
    if(login){
        setTimeout(()=>{resolve('reached')},5000)
    }
    else{
        reject('not reached')
    }
})

// raghu.then(()=>{console.log('pass')}).catch(()=>{console.log('fail')})

async function getData() {
    try {
        console.log('hi..')
        const res = await raghu
        console.log(res)
        console.log('bye')
        
    } catch (error) {
       console.log(error) 
    }
}

getData()