$(document).ready(function () {
    var root = 'https://swapi.co/api/people/';

    loadCharacters(root);
    
    
    function loadCharacters(url){

    // Metodo 1
    /*
    $.ajax({
        url: root,
        method: 'GET',
    }).then(function (data) {
        //alert(data);
        console.log(data);
        var tarjeta = '';
        for (var i = 0; i < data.results.length; i++) {
            tarjeta += '<div class="col-md-4">';
            tarjeta += '    <h1>' + data.results[i].title + '</h1>';
            tarjeta += '</div>';
        }
        console.log(tarjeta);
        $("#peliculas").html(tarjeta);
    });
    */
    // Metodo 2
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var tarjeta = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i])
                //Characters section
                tarjeta += '<div class="col-lg-4 col-sm-6 text-center mb-4">';
                tarjeta += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
                tarjeta += '<br>';
                tarjeta += '<h3>'+data.results[i].name+'</h3>';
                tarjeta += '<a href="#" data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModal">More details</a>';
                tarjeta += '</div>';         
            }
            //console.log(tarjeta);
            $("#characters-home").html(tarjeta);

            $("#prev-characters").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    loadCharacters(data.previous);
            });
            $("#next-characters").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    loadCharacters(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });


    }
});
