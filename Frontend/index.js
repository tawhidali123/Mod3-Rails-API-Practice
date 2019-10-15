// Code your solution here
let shoeUl = document.querySelector("#shoe-list");
let mainShoe = document.querySelector("#main-shoe");


fetch("http://localhost:3000/shoes")
.then(res => res.json())
.then(response => {
    let res = response;
    console.log(res)

    for (const i of res) { 
        shoeUl.innerHTML += `
        <li class="list-group-item" data-num="${i.id}">${i.name}</li>
        `;
       
    }  
    
})


// for every shoe I made add an event 
shoeUl.addEventListener("click", (event) => {
    console.log(event.target.dataset.num)
    console.log(mainShoe)
    let number = event.target.dataset.num

    // retrieve each shoe info
    fetch(`http://localhost:3000/shoes/${number}`)
    .then(res => res.json())
    .then(response => {
        console.log(response);

        // Main section where shoe info will go
        mainShoe.innerHTML = `
        <img class="card-img-top" id="shoe-image" src="${response.image}" alt="Shoe Image Goes Here">
        <div class="card-body">
        <h4 class="card-title" id="shoe-name">${response.name}</h4>
        <p class="card-text" id="shoe-description">${response.description}</p>
        <p class="card-text"><small class="text-muted" id="shoe-price">${response.price}</small></p>
        <div class="container" id="form-container">

        <form id="new-review">
        <div class="form-group">
        <textarea class="form-control" id="review-content" rows="3"></textarea>
        <input type="submit" class="btn btn-primary"></input>
        </div>
        </form>

        </div>

        </div>
        <h5 class="card-header">Reviews</h5>
        <ul class="list-group list-group-flush" id="reviews-list">
            
        </ul>
        `;

        let reviewSelect = document.querySelector("#reviews-list");
        
        response.reviews.forEach(review => {
            reviewSelect.innerHTML += `
            <li class="list-group-item">
            ${review.content}
            </li>
            `;
        })

        let formSelector = document.querySelector("#new-review");

        // submit form
        formSelector.addEventListener("submit", (evt) => {
            evt.preventDefault();
            console.log(evt.target);
            
            let text = evt.target["review-content"].value;

            if(evt.target.tagName === "FORM") {
                fetch("http://localhost:3000/shoes/1/reviews", {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({content: text})
                })
                .then(res => res.json())
                .then(response => {
                    console.log("success");
                    reviewSelect.innerHTML += `
                    <li class="list-group-item">${response.content}
                        <button class="delete">Delete</button>
                        <button class="edit">Edit</button>
                    </li>
                    `;
                })
            }
 
        })

        // let destroy = document.getElementsByClassName("delete");
        // destroy.addEventListener("click", () => {console.log("we going to destroy this in a bit")})


    })

})
















// setTimeout(() => {

//     // let shoeUl = document.querySelector("#shoe-list");
//     let mainShoe = document.querySelector("#main-shoe");


//     shoeUl.addEventListener("click", (event) => {
//         console.log(event.target.dataset.num)
//         console.log(mainShoe)
//         let number = event.target.dataset.num

//         fetch(`"https://localhost:3000/shoes/${}"`, {})
//         .then(res => res.json())
//         .then(response => {
//             console.log("in here")
//         })

//     })

// }, 1500)




















