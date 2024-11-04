
// let container = document.querySelector('.container')
// let url = 'https://dummyjson.com/users'

// async function getProducts() {
// 	try {
// 		const res = await fetch(url)
// 		const data = await res.json()

// 		console.log(data)
// 		showUser(data.users)
// 	} catch (error) {
// 		console.log(error)
// 	}
// }

// getProducts()

// function showUser(data) {
// 	container.innerHTML += data
// 		.map(item => {
// 			return `
// 			 <div>
// 			 <img src="${item.image}"/>
// 			  <p style="color:red;">${item.address.city} </p>
// 			  <p style="color:yellow">${item.firstName}</p>
// 			  <p style="color:blue">${item.phone}</p>
// 			  <p style="color:green">${item.bank.cardNumber}</p>
// 			 </div>
// 			`
// 		})
// 		.join('')
// }

		
let API = 'https://api.escuelajs.co/api/v1/products'
let container2 = document.querySelector('.container2')

async function getData() {
	try {
		const response = await fetch(API)
		const data = await res.json()

		console.log(data)
	}
	catch (error) {
		console.log(error);
	}
}
