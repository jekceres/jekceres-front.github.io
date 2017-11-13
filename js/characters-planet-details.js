
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
                tarjeta += '<h3><b>Planets<b/></h3>'
                tarjeta += '<ul>';
                for(j=0;j<data.results[0].characters.length;j++){
                    tarjeta +=  loadCharacterFilm(data.results[0].characters[j]);
                };
                tarjeta += '</ul>';
                tarjeta += '</div>';
            }

            //console.log(tarjeta);
            $("#exampleModalLabelC"+i).html(tarjeta);
        
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


    });


	$('#exampleModal').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
});
