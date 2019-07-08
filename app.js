$('ul').on("click","li",function () {
    if($(this).css("color")==="rgb(128, 128, 128)"){
        $(this).css("color","black");
        $(this).css("text-decoration","none");
        console.log("current");

    }
    else {
        $(this).css("color",'rgb(128, 128, 128)');
        $(this).css("text-decoration","line-through");
        // console.log("I am else")
    }

});

$('ul').on("click","span",function () {
    $(this).parent().fadeOut(500,function () {
        $(this).remove();

    });
    event.stopPropagation();

});

$("input[type='text']").keypress(function (event) {
    if(event.which===13){
        console.log("you pressed enter ")
        var todotext=$(this).val();
        $(this).val("");

        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> '+todotext+'</li>');

    }

});
$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();

})























