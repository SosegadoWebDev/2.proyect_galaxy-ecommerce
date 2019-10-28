$(".thumbnail img").addClass("imagenes")

let showTextarea = $('#disabledSelect')
showTextarea.change(function(){
    if (showTextarea[0].value == 'Si') {
        $("#show-div").removeClass("display-none")
    } else {
        $("#show-div").addClass("display-none")
    }
})

