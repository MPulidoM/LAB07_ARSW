﻿const Url = 'http://localhost:8080/blueprints/';
apiclient = (function () {
    var f = []
    return {
        getBlueprintsByAuthor: function (name, callback) {
            jQuery.ajax({
                url: Url + name,
                method: "GET",
                success: function (result) {
                    result  = JSON.parse(result);
                    callback(name, result);
                },
                error:function (result) {
                    alert("No se a encontrado el Autor")
                }
            });
        },
        getBlueprintsByNameAndAuthor: function (author, name, callback) {
            jQuery.ajax({
                url: Url + author + "/" + name,
                method: "GET",
                success: function (result) {
                    result  = JSON.parse(result);
                    callback(result);
                },
            });
        },
        setBlueprint: function (author, plano, bp, callback) {
            var promise = $.ajax({
                url: Url + author + "/" + plano + "/",
                type: "PUT",
                data: bp,
                contentType: "application/json"
            });
            console.log(bp.points);
            promise.then(
                function () {
                    console.info("OK setBlueprint");
                    callback()
                },
                function () {
                    console.info("ERROR setBlueprint");
                }
            );
        },
        addBlueprint: function (bp, callback) {
            var promise = $.ajax({
                url: "/blueprints/",
                type: "POST",
                data: bp,
                contentType: "application/json"
            });

            promise.then(
                function () {
                    console.info("OK setBlueprint");
                    callback()
                },
                function () {
                    console.info("ERROR setBlueprint");
                }
            );
        },
        deleteBlueprint: function (author,plano, callback) {
            var promise = $.ajax({
                url: "/blueprints/" + author + "/" + plano + "/",
                type: "DELETE",
                contentType: "application/json"
            });

            promise.then(
                function () {
                    console.info("OK setBlueprint");
                    callback(author)
                },
                function () {
                    console.info("ERROR setBlueprint");
                }
            );
        },

        repaintPoints: function (nameAuthor, nameP, callback) {
            callback();
        }
    };

})();