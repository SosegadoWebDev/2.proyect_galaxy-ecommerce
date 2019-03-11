$(".formulario").focus (function(){
    var seleccion = val("")
    if ($("option :selected").val("Si")){
        $(".formulario").html("<div>ASDADADA</div>")
    } else {
        $("body").css("background-color", "yellow")
    }
})
/*$('select option:selected("Si")').append("")*/
