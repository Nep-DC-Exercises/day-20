"use strict";

const chuckQuotesForm = document.querySelector("#chuckQuotesForm");
const modalClose = document.querySelector(".modal__close")

function toggleModal() {
    const modalWrapper = document.querySelector(".wrapper--modal");
    modalWrapper.classList.toggle("open");
}

modalClose.addEventListener("click", function(){
    toggleModal();
})

chuckQuotesForm.addEventListener("submit", function(event) {
    event.preventDefault(); // default behavior is to reload the page
    const categoryValue = chuckQuotesForm.querySelector("select").value;
    updateChuckSays(categoryValue)
})  

// Create a function to update the quote text in the DOM
function updateChuckSays(category) {
    const chuckQuote = get(`https://api.chucknorris.io/jokes/random?category=${category}`);
    chuckQuote.then(function(quote){
        chuckSays.innerHTML = quote.value;
        toggleModal();
    })
}

function getCategories() {
    const selectWrapper = document.querySelector("#selectWrapper")
    const categoryList = document.createElement("select");

    get('https://api.chucknorris.io/jokes/categories').then(function(response) {
        response.forEach(function(category){
            const categoryOption = document.createElement("option");
            categoryOption.text = category
            categoryOption.value = category
            if ( category !== "explicit") {
                categoryList.append(categoryOption)
            }
        })
    });

    selectWrapper.append(categoryList)
}

// Create an IMMEDIATELY INVOKED FUNCTION EXPRESSION, IIFE
(function(){
    const defaultCategory = "dev";
    getCategories();
    updateChuckSays(defaultCategory);
})();
