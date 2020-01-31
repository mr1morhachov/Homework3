var LIST = $('.board1');
var ITEM_TEMPLATE =	$('.hidden').html();
var BIN_LEFT = $('.products-left');
var BIN_BOUGHT = $('.products-bought');
var BIN_TEMPLATE = $('.hidden2').html();

function add(title)	{
    var node = $(ITEM_TEMPLATE);	//Create	new	HTML	node
    var nodeBin = $(BIN_TEMPLATE);
    node.find(".text-product").text(title);	//Set	product	title
    nodeBin.find(".text-amount").text(title);
    
    //Delete	Action
    node.find(".button-delete").click(function(){
        node.remove();
        nodeBin.remove();
    });
    
    //Buy Action
    node.find(".button-bought").click( function buy(e) {
        node.fadeOut(150);
        node.find(".text-product").css("text-decoration", "line-through");
        node.find(".text-product").css("pointer-events", "none");
        node.find(".button-minus").css("visibility", "hidden");
        node.find(".button-plus").css("visibility", "hidden");
        node.find(".button-delete").css("display", "none");
        node.find(".button-bought").css("display", "none");
        node.find(".button-cancel").css("display", "unset");
        nodeBin.remove();
        BIN_BOUGHT.append(nodeBin);
        node.fadeIn(150);
});
    
    //Cancel Action
     node.find(".button-cancel").click( function buy(e) {
        node.fadeOut(150);
        node.find(".text-product").css("text-decoration", "none");
        node.find(".text-product").css("pointer-events", "all");
        node.find(".button-minus").css("visibility", "visible");
        node.find(".button-plus").css("visibility", "visible");
        node.find(".button-delete").css("display", "unset");
        node.find(".button-bought").css("display", "unset");
        node.find(".button-cancel").css("display", "none");
        nodeBin.remove();
        BIN_LEFT.append(nodeBin);
        node.fadeIn(150);
});
    
    //Plus 1 item Action
    node.find(".button-plus").click( function plus(e) {
        var amount = node.find(".label-amount").text();
        if(amount === "1") {
            node.find(".button-minus").css("opacity", "1");
            node.find(".button-minus").css("pointer-events", "all");
        }
        amount = parseInt(amount)+1;
        node.find(".label-amount").text(amount);
        nodeBin.find(".number-amount").text(amount);
});
    
    //Minus 1 item Action
    node.find(".button-minus").click( function minus(e) {
        var amount = node.find(".label-amount").text();
        amount = parseInt(amount)-1;
        node.find(".label-amount").text(amount);
        nodeBin.find(".number-amount").text(amount);
        if(amount === 1) {
            node.find(".button-minus").css("opacity",	"0.4");
            node.find(".button-minus").css("pointer-events", "none");
        }
});
    
    //Edit products name
    node.find(".text-product").click( function edit(e) {
        var name = node.find(".text-product").text();
        node.find(".text-product").css("display",	"none");
        node.find("#edit-name").val(name);
        node.find("#edit-name").css("display",	"unset");
        node.find("#edit-name").focus();
        node.find("#edit-name").blur(function updateName() {
            if(node.find("#edit-name").val() != "") {
               name =  node.find("#edit-name").val();
            }
            node.find("#edit-name").css("display",	"none");
            node.find(".text-product").text(name);
            nodeBin.find(".text-amount").text(name);
            node.find(".text-product").css("display",	"unset");
        });
});
    LIST.append(node);	//Add	to	the	end	of	the	list
    BIN_LEFT.append(nodeBin); 
    
}

//Adding Action (by click)
$(".button-search").click( function addInput(e) {
    var name = $(".searchbar");
    if(name.val() != "") {
        add(name.val());
        name.val("");
        name.focus();
}
});

//Add Action (by key)
$(document).keypress( function addInput(e) {
    if(e.which === 13)
        $(".button-search").click();
});
add("Tomatoes");
add("Potatoes");
add("Apples");