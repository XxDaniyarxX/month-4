
let container = document.querySelector('.container')
let url = 'https://dummyjson.com/users'

async function getProducts() {
	try {
		const res = await fetch(url)
		const user = await res.json()

		console.log(user)
		showUser(user.users)
	} catch (error) {
		console.log(error)
	}
}

getProducts()

function showUser(data) {
	container.innerHTML += data
		.map(item => {
			return `
			
			<div style="width: 150px; height: 300px; border: 1px solid gold">
			     <img src="${item.image}" alt=""/>
			  <p style="color:red;">${item.address.city} </p>
			  <p style="color:maroon; padding: 10px 10px">${item.ip} </p>
			  <p style="color:yellow">${item.firstName}</p>
			  <p style="color:blue; padding: 10px 10px ">${item.phone}</p>
			  <p style="color:green">${item.bank.cardNumber}</p>
			  <p style="color:green">${item.bloodGroup}</p>
			 </div>
			`
		})
		.join('')
}



let API = 'https://dummyjson.com/products'
let container2 = document.querySelector('.container2')

async function getData() {
    try {
        const res = await fetch(API)
        const data = await res.json()


        console.log(data)
        giveMe(data.products)
    } catch (error) {
        console.log(error);
    }
}
getData()

function giveMe(data) {
    container2.innerHTML += data
		.map(item => {
			return `
			 <div style="width: 300px; height: 330px; border: 1px solid fuchsia">
			 <img src="${item.thumbnail}" alt="" width="200px"/>
			  <p style="color:rebeccapurple;">${item.brand} </p>
			  <p style="color:blue; padding: 10px 10px">${item.price} </p>
			  <p style="color:gray;">${item.rating} </p>
			  <p style="color:greenyellow;">${item.returnPolicy} </p>
			 </div>
			`
		})
		.join('')
}