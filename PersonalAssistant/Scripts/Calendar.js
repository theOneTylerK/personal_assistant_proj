function makeTable() {

    $.ajax({
        url: 'https://localhost:44318/',
        dataType: 'json',
        type: 'get',
        contentType: 'application/json',
        success: function (data) {
            for (let el in data) {
                $("#my-calendar").append()
                        
            }

        },
        error: function (errorThrown) {
            console.log(errorThrown);
        }
    });
}

makeTable();

   
}) (jQuery);