$(document).ready(() => {
    let s = window.PARSER;
    $("#validar").on('click', () => {
        try {
            s.parse(editor.getValue());
            swal({
                title: "correcto",
                text: "todo esta correto",
                icon: "success",
            });
        } catch (error) {
            swal({
                title: "falló",
                text: "ha ocurrido un error, revise el codigo",
                icon: "error",
            });
        }
    })
})