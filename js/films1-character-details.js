
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
                tarjeta += '<div class="col-lg-4 col-sm-6 text-center mb-4">';
                tarjeta += '<img class="rounded-circle img-fluid d-block mx-auto" src="http://placehold.it/200x200" alt="">';
                tarjeta += '<br>';
                tarjeta += '<h3>'+data.results[i].name+'</h3>';
                tarjeta += '<p>Episode: ' + data.results[i].episode_id + '</p>'
                tarjeta += '<p>Release date: ' + data.results[i].release_date + '</p>'
                tarjeta += '<p>Director: ' + data.results[i].director + '</p>'
                tarjeta += '<p>Producer: ' + data.results[i].producer + '</p>'
                tarjeta += '<ul>';
                for(j=0;j<data.results[i].characters.length;j++){
                    tarjeta +=  loadCharacterFilm(data.results[i].characters[j]);
                };
                tarjeta += '</ul>';
                tarjeta += '</div>';
            }

         
            //console.log(tarjeta);
            $("#films1-character-details").html(tarjeta);
        
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
