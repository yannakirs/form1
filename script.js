let bank = document.querySelector('.bank')
let number = document.querySelector('.number')
let name1 = document.querySelector('.name')
let month = document.querySelector('.month')
let system = document.querySelector('.system')

let card2 = document.querySelector('.card2')

let bank_card = document.querySelector('.bank_card')
let number_card = document.querySelector('.number_card')
let system_card = document.querySelector('.system_card')
let mm_card = document.querySelector('.mm_card')
let name_card= document.querySelector('.name_card')
let finish = document.querySelector('.finish')
let elemnts;

bank.addEventListener("input", (e) => {
    bank_card.textContent = e.target.value
   
})
   
    system.addEventListener("input", (e) => {
        system_card.textContent = e.target.value
    
    
})

number.addEventListener("input", (e) => {
    number_card.textContent = e.target.value
})

name1.addEventListener("input", (e) => {
    name_card.textContent = e.target.value
})

month.addEventListener("input", (e) => {
    mm_card.textContent = e.target.value
}) 

form = document.querySelector(".card1")

form.addEventListener("reset", ()=>{
    card2.style.backgroundImage = ''
    bank_card.textContent = ''
    name_card.textContent = ''
    number_card.textContent = ''
    system_card.textContent = ''
    mm_card.textContent = ''
})


form.addEventListener('submit', e => {
    e.preventDefault()
    let arr = []
    for(let i = 0; i < form.elements.length; i++){
        let el = form.elements[i].value
        arr.push(el)
    }
    finish.innerHTML += `
    <div class="car">
    <div class="bank_car">${arr[0]}</div>
    <div class="name_car">${arr[1]}</div>
    <div class="number_car">${arr[2]}</div>
    <div class="system_car">${arr[3]}</div>
    <div class="mm_car">${arr[4]}  </div>
    </div>
    `

    bank_card.textContent = e.target.value
    name_card.textContent = e.target.value
   number_card.textContent = e.target.value
    system_card.textContent = e.target.value
    mm_card.textContent = e.target.value
    finish.style.backgroundImage = `none`
})
