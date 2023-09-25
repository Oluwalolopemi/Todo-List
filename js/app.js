//check off specific Todos by clicking
// $("li").click(function(){
//     //if li is gray
//     if($(this).css("color") === "rgb(128, 128, 128)"){
//         //turn it black
//         $(this).css({
//             color: "black",
//             textDecoration: "none"
//        });
//     }
//     //else
//     else{
//           //turn it grey
//         $(this).css({
//             color: "grey",
//             textDecoration: "line-through"
//        });
//     }
// });

//another method which is easy is to give it a class in css i.e class completed
$("ul").on("click", "li",function(){
    $(this).toggleClass("completed");
});

//click on X to delete todo
$("ul").on("click", "span",function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    //event.stopPropagation is to stop event bubbling
    event.stopPropagation();
});

//adding new todos
$("input[type='text']").keypress(function(event){
if(event.which === 13){
    //grabbing new todo text from input
   var todoText = $(this).val();
   //to clear already added to do
   $(this).val("");
   //create a new li and add to ul
   $("ul").append("<li><span><span><i class='fa-regular fa-trash-can'></i></span>" + todoText + "</li>")
}
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});