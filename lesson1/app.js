// let API = 'https://api.escuelajs.co/api/v1/products'
// let box = document.querySelector('.box')

let container = document.querySelector('.container')
let url = 'https://dummyjson.com/users'

async function getProducts() {
	try {
		const res = await fetch(url)
		const data = await res.json()

		console.log(data)
		showUser(data.users)
	} catch (error) {
		console.log(error)
	}
}

getProducts()

function showUser(data) {
	container.innerHTML += data
		.map(item => {
			return `
			 <div>
			 <img src="${item.image}"/>
			  <p style="color:red;">${item.address.city} </p>
			  <p style="color:yellow">${item.firstName}</p>
			  <p style="color:blue">${item.phone}</p>
			  <p style="color:green">${item.bank.cardNumber}</p>
			 </div>
			`
		})
		.join('')
}

		
























// const url2 = 'https://dummyjson.com/products'

// // DOM

// const div = document.querySelector('div')

// function getUrl() {
// 	fetch(url)
// 		.then(response => response.json())
// 		.then(data => {
// 			console.log(data)
// 			for (const el of data.products) {
// 				div.innerHTML += `
// <div class="card" style="width: 18rem;">
//      <img src="${el.images[0]}" class="card-img-top" alt="...">
//      <div class="card-body">
//        <h5 class="card-title">${el.title}</h5>
//        <p class="card-text">${el.descriptions}</p>
//        <a href="#" class="btn btn-primary">Go somewhere</a>
//      </div>
//    </div>
// `
// 			}
// 		})
// 		.catch(error => {
// 			console.error('Ошибка:', error)
// 		})
// }

// getUrl()
