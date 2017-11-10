
$(document).ready(function () {
    var root = 'https://swapi.co/api/planets/';

    loadPlanets(root);
    
    
    function loadPlanets(url){

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
                tarjeta += '<h3 data-toggle="modal" data-target="#exampleModal">'+data.results[i].name+'</h3>';
                tarjeta += '<p class="card-white"><b>Diameter:</b> ' + data.results[i].diameter + '</p>';
                tarjeta += '<p class="card-white"><b>Climate:</b> ' + data.results[i].climate + '</p>';
                tarjeta += '<p class="card-white"><b>Terrain:</b> ' + data.results[i].terrain + '</p>';
                tarjeta += '<p class="card-white"><b>Water surface:</b> ' + data.results[i].surface_water + '</p>';
                tarjeta += '<p class="card-white"><b>Population:</b> ' + data.results[i].population + '</p>';
                tarjeta += '</div>';        
            }
            //console.log(tarjeta);
            $("#planets-home").html(tarjeta);

            $("#prev-planets").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    loadPlanets(data.previous);
            });
            $("#next-planets").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    loadPlanets(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });
    
    }
});
