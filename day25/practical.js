// async function thirukural() {
//     try{
//          const kural = await fetch('https://thirukkural.senkanthal.org/kural/1')
//          const Ans = await kural.json()
//          console.log(Ans.kural)
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// thirukural()

// console.log('hi')

// function delay(name,time){
//     setTimeout(()=>{console.log(name)},time)
// }

// delay('message',3000)

function neww(password,name){
    return new Promise((resolve, reject) => {
        if(password==='1234' && name ==='raghu'){
            resolve({
                Name:name,
                passcode:'rhyryr'
            })
        }
        else{
            reject({
                error:404
            })
        }
    })
}

async function after(password,name) {
    try{
        const ans = await neww(password,name)
        console.log(ans)
    }
    catch(err){
        console.log(err)
    }
}

after(1234,'raghu')