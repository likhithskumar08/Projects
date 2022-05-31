const request = new XMLHttpRequest();

request.onload = function () {
    console.log('loaded')
    let data = JSON.parse(this.responseText)
    console.log(data)
};
request.onerror = function () {
    console.log('failed')
    console.log(this)
};

request.open("Get", "https://api.cryptonator.com/api/ticker/btc-usd")
request.send();


fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        return (res.json())
    }).then((res) => {
        console.log(res.status)
    }).catch(res => {
        console.log('error')
    })

const load = async () => {
    const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    const data = await res.json();
    console.log(data);
}
load();

axios.get('https://api.cryptonator.com/api/ticker/btc-usd').then((res) => {
    console.log('first')
    console.log(res)
})
let btn = document.querySelector('button')
let ul = document.querySelector('ul')

let a = async () => {
    const config = { Headers: { accept: 'applications/json' } }
    const url = 'https://api.cryptonator.com/api/ticker/btc-usd';

    const data = await axios.get(url, config)
    console.log()
    return data.data.articles[1].author
}
async function author() {
    const li = document.createElement('li')
    let auth = await a();
    li.innerText = auth;
    ul.append(li);
}
btn.addEventListener('click', author);
