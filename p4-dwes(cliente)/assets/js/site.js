$(document).ready(function () {
    $("#btn-importar").click(function (event) {
        event.preventDefault();
        let url = "http://127.0.0.1:8080/importar";
        $.get(url, function (respuesta) {
            let mensaje;
            if (respuesta == 'OK') {
                mensaje = '<div class="alert alert-success" role="alert">Importación realizada correctamente.</div>';
            } else if (respuesta == 'KO1') {
                mensaje = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else {
                mensaje = '<div class="alert alert-danger" role="alert">Importación no realizada</div>';
            }
            console.log(respuesta);
            $('#contenedor').html(mensaje);
        });
    });
    $("#btn-todos").on('click', function (event) {
        event.preventDefault();
        let url = "http://127.0.0.1:8080/consulta";
        $.get(url, function (respuestaJSON) {
            let tablaHtml;
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO2') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
            } else {
                let respuesta = JSON.parse(respuestaJSON);
                tablaHtml = formatearDatos(respuesta);
            }
            $('#contenedor').html(tablaHtml);
            $(".btn-borrar").click(function (event) {
                event.preventDefault();
                let nombre = $(this).data('name');
                let fila = $(this).data('fila');
                let url = "http://127.0.0.1:8080/borrar";
                $.post(url, { filtro: nombre }, function (respuestaJSON) {
                    if (respuestaJSON == 'KO1') {
                        tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
                    } else if (respuestaJSON == 'KO2') {
                        tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                    } else {
                        $("#" + fila).remove();
                    }
                });
            });
        });
    });
    $("#btn-humanos").on('click', function (event) {
        event.preventDefault();
        let nombre = 'human';
        let url = "http://127.0.0.1:8080/consulta";
        $.post(url, { filtro: nombre }, function (respuestaJSON) {
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO2') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
            } else {
                let respuesta = JSON.parse(respuestaJSON);
                let tablaHtml = formatearDatos(respuesta);
                $('#contenedor').html(tablaHtml);
                $(".btn-borrar").click(function (event) {
                    event.preventDefault();
                    let nombre = $(this).data('name');
                    let fila = $(this).data('fila');
                    console.log(fila);
                    let url = "http://127.0.0.1:8080/borrar";
                    $.post(url, { filtro: nombre }, function (respuestaJSON) {
                        if (respuestaJSON == 'KO1') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
                        } else if (respuestaJSON == 'KO2') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                        } else {
                            $("#" + fila).remove();
                        }
                    });
                });
            }
        });
    });
    $("#btn-fecha").on('click', function (event) {
        event.preventDefault();
        let fecha = 1979;
        let url = "http://127.0.0.1:8080/consulta";
        $.post(url, { filtro: fecha }, function (respuestaJSON) {
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO2') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
            } else {
                let respuesta = JSON.parse(respuestaJSON);
                let tablaHtml = formatearDatos(respuesta);
                $('#contenedor').html(tablaHtml);
                $(".btn-borrar").click(function (event) {
                    event.preventDefault();
                    let nombre = $(this).data('name');
                    let fila = $(this).data('fila');
                    console.log(fila);
                    let url = "http://127.0.0.1:8080/borrar";
                    $.post(url, { filtro: nombre }, function (respuestaJSON) {
                        if (respuestaJSON == 'KO1') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
                        } else if (respuestaJSON == 'KO2') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                        } else {
                            $("#" + fila).remove();
                        }
                    });
                });
            }
        });
    });
    $("#btn-varita").on('click', function (event) {
        event.preventDefault();
        let varita = "holly";
        let url = "http://127.0.0.1:8080/consulta";
        $.post(url, { filtro: varita }, function (respuestaJSON) {
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO2') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
            } else {
                let respuesta = JSON.parse(respuestaJSON);
                let tablaHtml = formatearDatos(respuesta);
                $('#contenedor').html(tablaHtml);
                $(".btn-borrar").click(function (event) {
                    event.preventDefault();
                    let nombre = $(this).data('name');
                    let fila = $(this).data('fila');
                    console.log(fila);
                    let url = "http://127.0.0.1:8080/borrar";
                    $.post(url, { filtro: nombre }, function (respuestaJSON) {
                        if (respuestaJSON == 'KO1') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
                        } else if (respuestaJSON == 'KO2') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                        } else {
                            $("#" + fila).remove();
                        }
                    });
                });
            }
        });
    });
    $("#btn-vivos").on('click', function (event) {
        event.preventDefault();
        let vivo = true;
        let url = "http://127.0.0.1:8080/consulta";
        $.post(url, { filtro: vivo }, function (respuestaJSON) {
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO2') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
            } else {
                let respuesta = JSON.parse(respuestaJSON);
                let tablaHtml = formatearDatos(respuesta);
                $('#contenedor').html(tablaHtml);
                $(".btn-borrar").click(function (event) {
                    event.preventDefault();
                    let nombre = $(this).data('name');
                    let fila = $(this).data('fila');
                    console.log(fila);
                    let url = "http://127.0.0.1:8080/borrar";
                    $.post(url, { filtro: nombre }, function (respuestaJSON) {
                        if (respuestaJSON == 'KO1') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
                        } else if (respuestaJSON == 'KO2') {
                            tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                        } else {
                            $("#" + fila).remove();
                        }
                    });
                });
            }
        });
    });
    $('#form-validation').submit(function (event) {
        event.preventDefault();
        let img = $('#input-imagen').val();
        let nombre = $('#input-nombre').val();
        let especie = $('#input-especie').val();
        let genero = $('#input-genero').val();
        let casa = $('#input-casa').val();
        let nacimiento = $('#input-nacimiento').val();
        let url = "http://127.0.0.1:8080/agregar";
        $.post(url, { img: img, nombre: nombre, especie: especie, genero: genero, casa: casa, nacimiento: nacimiento }, function (respuestaJSON) {
            if (respuestaJSON == 'KO1') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Imposible realizar la conexión con la base de datos.</div>';
            } else if (respuestaJSON == 'KO6') {
                tablaHtml = '<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>';
                $('#contenedor').html('<div class="alert alert-danger" role="alert">Consulta incorrecta.</div>');
            } else {
                $('#contenedor').html('<div class="alert alert-success" role="alert">Se ha agregado un personaje correctamente.</div>');
            }
        });
    });
});

function formatearDatos(respuesta) {
    let i = 0;
    let contenido = '<table class="table table-responsive">';
    contenido += '<thead class="table-dark">';
    contenido += '<tr><th>Imagen</th><th>Nombre</th><th>Especie</th><th>Género</th><th>Casa</th><th>Año de Nacimiento</th><th>Opciones</th></tr>';
    $.each(respuesta, function () {
        i++;
        console.log(this);
        let img = '';
        if (this.img != '') {
            img = this.image;
        }
        let nombre = '';
        if (this.nombre != '') {
            nombre = this.name;
        }
        let especie = '';
        if (this.especie != '') {
            especie = this.species;
        }
        let genero = '';
        if (this.genero != '') {
            genero = this.gender;
        }
        let casa = '';
        if (this.casa != '') {
            casa = this.house;
        }
        let fNacimiento = '';
        if (this.fNacimiento != '') {
            fNacimiento = this.yearOfBirth;
        }
        contenido += '<tr id="fila' + i + '"><td><img class="imagenes" src=' + img + '></td><td valign="middle">' + nombre + '</td><td valign="middle">' + especie + '</td><td valign="middle">' + genero + '</td><td valign="middle">' + casa + '</td><td valign="middle">' + fNacimiento + '</td><td><button type="button" class="btn-danger btn-borrar" valign="middle" data-name="' + nombre + '" data-fila="fila' + i + '">Borrar</button></td></tr>';
    });
    contenido += '</thead><table>';
    return contenido;
}