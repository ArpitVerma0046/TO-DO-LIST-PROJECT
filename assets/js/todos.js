//Check Off specific todos by clicking
$("ul").on("click","li",function(){
$(this).toggleClass("completed");
});

//Click on X to delete todo
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
event.stopPropagation();
});


//Adding new Todo
$("input").keypress(function(event){
	if(event.which===13)
	{
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fas fa-trash'></i> </span>"+" "+todoText+"</li>");

	}
});
$(".fa-plus").click(function(){
 $("input").fadeToggle();
});
