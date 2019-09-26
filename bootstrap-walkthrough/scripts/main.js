let defaultCat = "dev"

function updateQuote(obj) {
    $("#chuckSays").text(obj.value);
};

$( "#newQuote" ).click(function(){
    // get a random category and call getData with it
    getCategories()
});


function getCategories() {
    $.ajax({
        type: 'GET',
        url: 'https://api.chucknorris.io/jokes/categories',
        success: function(response) {
            let arrayLength = response.length
            var number = 0 + Math.floor(Math.random() * arrayLength);
            getData(response[number]);
        },
        error: function(error) {
            console.error(error)
        }
    })
}


function getData(cat) {
    $.ajax({
        type: 'GET',
        url: `https://api.chucknorris.io/jokes/random?category=${cat}`,
        success: function(resp) {
            updateQuote(resp)
        },
        error: function(error) {
            console.error(error)
        }
    })
};


// Acts like an IIFE
$(function() {
    getData(defaultCat)
});

