

$(function() {
    
    $.ajax({
        type: 'GET',
        url: 'https://api.chucknorris.io/jokes/random?category=dev',
        success: function(resp) {
            return resp;
        },
        error: function(error) {
            console.error(error)
        }
    })

})

