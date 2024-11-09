
const users1 = document.querySelector('.users1')
const url = 'https://dummyjson.com/users'

async function getUrl() {
    try{
        const res = await fetch(url);
        const data = await res.json()

        console.log(data)
        showMe(data)
    }
    catch (error) {
        console.log(error)
    }
}
getUrl()

function showMe(data) {
    for (const el of data.users) {
        users1.innerHTML +=
            `
     <div style="border: 1px solid black">
         <img src="${el.image}" />
         <p style="color: red">${el.firstName}"</p>
         <p style="color: gold">${el.birthDate}</p>
         <p style="color: blue">${el.address.city}</p>
         <p style="color: magenta">${el.role}</p>
     </div>
    `
    }
}

const gg1 = document.querySelector('.users1')
gg1.addEventListener('click', () => {
    alert('Gey')
});