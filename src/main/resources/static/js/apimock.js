apimock=(function(){
    var mockdata=[];
    mockdata["Mariana"]=	[{author:"Mariana","points":[{"x":150,"y":120},{"x":215,"y":115},{"x":34,"y":98}],"name":"prueba"},
        {author:"Mariana","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"prueba1"}];
    mockdata["Ximena"]=[{author:"Ximena","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"prueba2"},
        {author:"Ximena","points":[{"x":140,"y":140},{"x":115,"y":115}],"name":"prueba3"}];
    mockdata["Santiago"]=[{author:"Santiago","points":[{"x":65,"y":45},{"x":89,"y":43}],"name":"prueba4"},
        {author:"Santiago","points":[{"x":76,"y":23},{"x":56,"y":9}],"name":"prueba5"}];
         mockdata["Juliana"]=	[{author:"Juliana","points":[{"x":210,"y":120},{"x":270,"y":115},{"x":78,"y":100},{"x":210,"y":120},{"x":270,"y":115},{"x":78,"y":100}],"name":"prueba"},
                {author:"Juliana","points":[{"x":340,"y":240},{"x":15,"y":215}],"name":"Dibuja"}];
                mockdata["Jordy"]=	[{author:"Jordy","points":[{"x":410,"y":150},{"x":280,"y":117},{"x":85,"y":100},{"x":410,"y":150},{"x":280,"y":117},{"x":85,"y":100}],"name":"prueba"},
                                {author:"Jordy","points":[{"x":360,"y":280},{"x":75,"y":215}],"name":"Dibuja"}];
    return {
        getBlueprintsByAuthor:function(name,callback){
            return callback(
                mockdata[name]
            );

        }

    };
})();