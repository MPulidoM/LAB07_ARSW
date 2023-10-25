var api=apimock
blueprintOpen = false

var BlueprintsModule = (function(){

    var graficarPlano = function(nameAutor,namePlano){
        blueprintOpen = true;
        var c = document.getElementById("myCanvas");
        var ctx = c.getContext("2d");
        ctx.beginPath()
        ctx.clearRect(0, 0, c.width, c.height);
        console.log(c.width, c.height)
        funcion=getBlueprintsByNameAndAuthor(api.getBlueprintsByAuthor(nameAutor,getBlueprints),namePlano);
        funcion.map(function(f){
            console.log(f.x)
            ctx.lineTo(f.x,f.y);
            ctx.stroke();
        })
        ctx.closePath()
        console.log(getBlueprintsByNameAndAuthor(api.getBlueprintsByAuthor(nameAutor,getBlueprints),namePlano))
        $("#blueprintname").text(namePlano)
    };

    var getBlueprints = function(funcion){
        return funcion;
    };

    var getBlueprintsByNameAndAuthor = function (funcion,name) {
        var points=[]
        funcion.map(function(f){
            if(f.name==name){
                points=f.points
            }
        });
        return points;
    };

    var getByAuthor = function (funcion) {
        return funcion.map(function(f){
            return {name:f.name,points:Object.keys(f.points).length};
        });
    };


    var generarTable = function (name,funcion) {
        $("#cuerpo").html("");
        var total=0
        $("#totalPoints").text(total)
        funcion.map(function(f) {
            $('#cuerpo')
                .append(
                    `<tr>
					<td>`+f.name+`</td>
					<td>`+f.points+`</td>`+
                    "<td><form><button type='button' class='btn btn-primary' onclick='BlueprintsModule.graficarPlano( \"" +
                    name +
                    '" , "' +
                    f.name +
                    "\")'>Open</button></form></td>"+
                    `</tr>`
                );
            total+=f.points
        });
        $("#totalPoints").text(total)
        $("#authorname").text(name+"'s")
    };



    var run = function() {
        var nameAutor = $('#autor').val();

        generarTable(nameAutor,api.getBlueprintsByAuthor(nameAutor,getByAuthor));
    }

    return {
        run: run,
        graficarPlano: graficarPlano
    };
})();