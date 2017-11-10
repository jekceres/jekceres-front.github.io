
$(document).ready(function () {
    var root = 'https://swapi.co/api/films/';

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
        url: root,
        method: 'GET',
        success: function (data) {
            //alert(data);
            console.log(data);
            var tarjeta = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i])
                //Films section
                tarjeta += '<div class="col-lg-4 col-sm-6 portfolio-item">';
                tarjeta += '<div class="card h-100">';
                tarjeta += '<a href="#" data-toggle="modal" data-target="#exampleModal'+i+'"><img class="poster card-img-top" src="img/P'+ data.results[i].episode_id +'.jpg" alt=""></a>';
                tarjeta += '<div class="card-body">';
                tarjeta += '<h4 class="card-title">';
                tarjeta += '<a href="#" data-toggle="modal" data-target="#exampleModal'+i+'"> '+data.results[i].title+' </a>';
                tarjeta += '</h4>';
                tarjeta += '<p class="card-text">' + data.results[i].opening_crawl + '</p>';
                tarjeta += '<p class="card-episode"><b>Episode:</b> ' + data.results[i].episode_id + ' </p>'; 
                tarjeta += '<p class="card-release-date"><b>Release date:</b> ' + data.results[i].release_date + '</p>';
                tarjeta += '<p class="card-director"><b>Director:</b> ' + data.results[i].director + '</p>';
                tarjeta += '<p class="card-producer"><b>Producer:</b> ' + data.results[i].producer + '</p>';
                tarjeta += '<a href="#" data-title="'+data.results[i].title+'" data-toggle="modal" data-target="#exampleModal'+i+'">More details</a>';
                tarjeta += '</div>';
                tarjeta += '</div>';
                tarjeta += '</div>';
                tarjeta += '<br>';
                tarjeta += '<br>';         
            }
            
            //console.log(tarjeta);
            $("#films-home").html(tarjeta);
        },
        error: function (e) {
            console.log(e);
        },
    });

    function cargarPersonajesPeliculas(url){
        $.ajax({
            url: url,
            method: 'GET',
            asyc: false,
            success: function(data){
                nombrePersonaje = '<li>'+data.name+'</li>';
            },
            error: function(e){
                console.log(e);
            }
        });
        return nombrePersonaje;
    }

function loadCharacterFilm(url){
       var filmCharacter = '';
       $.ajax({
           url: url,
           method: 'GET',
           async: false,
           success: function(data){
               filmCharacter += '<li class="col-md-6 col-lg-4">'+data.name+'</li>';
               return filmCharacter;
           },
           error: function(e){
               console.log(e);
           }

       });


       return filmCharacter;
   }

	$('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
});
