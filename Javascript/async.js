// setTimeout(()=>{
//     document.body.style.backgroundColor="voilet"
//     setTimeout(() => {
//         document.body.style.backgroundColor="indigo"
//         setTimeout(() => {
//             document.body.style.backgroundColor="blue"
//             setTimeout(() => {
//                 document.body.style.backgroundColor="green"
//                 setTimeout(() => {
//                     document.body.style.backgroundColor="yellow"
//                     setTimeout(() => {
//                         document.body.style.backgroundColor="red"




//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// },1000)

// let changeColor=(color,delay,funct)=>{
//     setTimeout(() => {
//         document.body.style.backgroundColor=color
//     }, delay);
//     funct();
// }
// changeColor('green',1000,()=>{
//     document.body.style.backgroundColor='red'

// })

// function fakeCallBacks(url,promise1,promise2){
//     let num=Math.floor(Math.random()*10);
//     if(num<5){
//         promise1('working')
//     }
//     else{
//         promise2('error')
//     }
// }
// fakeCallBacks(".com",(res)=>{
//     console.log(res)
//     fakeCallBacks('.cc',()=>{
//         console.log('1error')
//     },(r)=>{
//         console.log('jelj')
//     })
// },(res)=>{
//     console.log(res)
// })
function fakePromises(url) {
    return new Promise((resolve, reject) => {
        let num = Math.floor(Math.random() * 10);
        if (num > 5) {
            reject('Regected and an error')
        }
        else {
            resolve('working')
        }
    })
}
// fakePromises('Something.com')
// .then((result) => {
//     console.log('promise accepted')
//     fakePromises('fakepromise')
//     .then((err)=>{
//         console.log('promise 1')
//     }).catch((err)=>{
//         console.log('rejected 1')
//     })
// }).catch((err) => {
//     console.log('promise rejected')
// });

// fakePromises('url')
// .then((er)=>{
//     console.log('first page')
//     return fakePromises('url_msg')
// }).then((e)=>{
//     console.log('second page')
//     console.log(e)
//     return fakePromises('fakepromise')
// }).then((e)=>{
//     console.log('third page')
// }).catch(()=>{
//     console.log('failed')
// })

new Promise((func1, func2) => {

})

function cc(color, delay) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (color == 'red') {
                rej('connection time out');
            }
            document.body.style.backgroundColor = color
            res();
            /* will not reject here*/
        }, delay);
    })
}
// cc('red',1000)
// .then(()=>cc('blue',1000))
// .then(()=>cc('green',1000))
// .then(()=>cc('yellow',1000));

async function synchronus() {
    try {
        await cc('blue', 1000);
        await cc('red', 1000);
        await cc('yellow', 1000);

    } catch (e) {
        console.log(e)
    }

}
synchronus();

async function func() {
    try {
        let data = await fakePromises('url')
        console.log(data)
    } catch (e) {
        console.log(e)
    }
}
func()
//.then((a)=>{
//     console.log('works')
// })
// .catch((a)=>{
//     console.log(a)
// })

let login = async (str) => {
    // if(str.length()>6)return str.length();
    if (str.length == 6) return str.length;
    if (str.charAt(2) == 'v') return 'yes'
    throw ('invalid')
}
login('Name').then((a) => console.log(a))
    .catch((e) => console.log(e))

