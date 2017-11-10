
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
                tarjeta += '<h3><b>Characters<b/></h3>'
                tarjeta += '<ul>';
                for(j=0;j<data.results[i].characters.length;j++){
                    tarjeta +=  loadCharacterFilm(data.results[i].characters[j]);
                };
                tarjeta += '</ul>';
                tarjeta += '</div>';
                $("#exampleModalLabel"+i).html(tarjeta);
            }

            //console.log(tarjeta);
        
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


	$('#exampleModal0').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal1').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal2').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal3').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal4').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal5').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
    $('#exampleModal6').on('show.bs.modal', function (e) {
        $(this).find('.modal-title').html($(e.relatedTarget).data('title'));
    });
});
