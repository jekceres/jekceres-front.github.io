
$(document).ready(function () {
    var root = 'https://swapi.co/api/vehicles/';

    loadVehicles(root);
    
    
    function loadVehicles(url){

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
                tarjeta += '<p class="card-white"><b>Model:</b> ' + data.results[i].model + '</p>';
                tarjeta += '<p class="card-white"><b>Length:</b> ' + data.results[i].length + '</p>';
                tarjeta += '<p class="card-white"><b>Crew:</b> ' + data.results[i].crew + '</p>';
                tarjeta += '<p class="card-white"><b>Passengers:</b> ' + data.results[i].passengers + '</p>';
                tarjeta += '<p class="card-white"><b>Vehicle Class:</b> ' + data.results[i].vehicle_class + '</p>';
                tarjeta += '</div>';      
                
            }
            //console.log(tarjeta);
            $("#vehicles-home").html(tarjeta);

            $("#prev-vehicles").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    loadVehicles(data.previous);
            });
            $("#next-vehicles").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    loadVehicles(data.next);
            });
        },
        error: function (e) {
            console.log(e);
        },
    });

    }
});
