// Code your solution here
let shoeUl = document.querySelector("#shoe-list");


fetch("http://localhost:3000/shoes")
.then(res => res.json())
.then(response => {
    let res = response;
    console.log(res)
    // let shoeUl = document.querySelector("#shoe-list");
    // let mainShoe = document.querySelector("#main-shoe");

    for (const i of res) { 
        shoeUl.innerHTML += `
        <li class="list-group-item" data-num="${i.id}">${i.name}</li>
        `;
       
    }

    // shoeUl.addEventListener("click", (event) => {
    //     console.log(event.target.dataset.num)
    //     console.log(mainShoe)
    //     let number = event.target.dataset.num
    
    //     fetch(`"https://localhost:3000/shoes/${number}"`, {})
    //     .then(res => res.json())
    //     .then(response => {
    //         console.log("in here")
    //     })
    
        
    
    // })
    
})

// let shoeUl = document.querySelector("#shoe-list");
// let mainShoe = document.querySelector("#main-shoe");


// shoeUl.addEventListener("click", (event) => {
//     console.log(event.target.dataset.num)
//     console.log(mainShoe)
//     let number = event.target.dataset.num

//     fetch(`"https://localhost:3000/shoes/${number}"`, {})
//     .then(res => res.json())
//     .then(response => {
//         console.log("in here")
//     })


// })

setTimeout(() => {

    // let shoeUl = document.querySelector("#shoe-list");
    let mainShoe = document.querySelector("#main-shoe");


    shoeUl.addEventListener("click", (event) => {
        console.log(event.target.dataset.num)
        console.log(mainShoe)
        let number = event.target.dataset.num

        fetch(`"https://localhost:3000/shoes/1"`, {})
        .then(res => res.json())
        .then(response => {
            console.log("in here")
        })

    })

}, 1500)















 // make display hidden
//  mainShoe.innerHTML += `
//  <div class="card mb-3" id="main-shoe" style=display: hidden>

//    <img class="card-img-top" id="shoe-image" src="${i.image}" alt="Shoe Image Goes Here">
//    <div class="card-body">
//      <h4 class="card-title" id="shoe-name">${i.name}</h4>
//      <p class="card-text" id="shoe-description">${i.description}</p>
//      <p class="card-text"><small class="text-muted" id="shoe-price">${i.price}</small></p>
//      <div class="container" id="form-container">
//        <!-- FORM GOES HERE -->
//      </div>


//    </div>
//    <h5 class="card-header">Reviews</h5>
//    <ul class="list-group list-group-flush" id="reviews-list">
//      <!-- REVIEWS GO HERE -->
//    </ul>
//  </div>

// `






