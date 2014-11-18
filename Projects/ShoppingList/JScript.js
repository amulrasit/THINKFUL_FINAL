$(document).ready(function () {


    $('#add').on('mouseover', function () {
        $(this).css({ "background-color": "#FF5050" });
    });

    $('#add').on('mouseleave', function () {
        $(this).css({ "background-color": "#FF9696" });
    });

    $('input').on('focus', function () {
        $('input').val('');
    });

    $('#P').on('click', function () {
        $(this).css({ "background-color": "black" });
    });



    $('button').on('click', function () {
        var itemName = $('input').val();
        if (itemName == 'type here') {
            alert("Please enter an item");
        }
        else
        //<img class='statusDone' id='P' src='Purchased.png' alt='Purchase' />// 
            $('#shop ul').append("<li class='item'><img class='statusDone' id='P' src='Purchased.png' alt='Purchase' />" + itemName + "<img class='statusDelete' id='D' src='Bin.png' alt='Delete' /></li>");
    });

//    $('#shoppingList li').on('click', function (event) {
//        $(event.target).closest("li").toggleClass("itemHighlight");
//        //        $(this).css({"text-decoration":"overline"});
//    });

    $('#shoppingList').on('click', function () {
        //alert("hi");
        $(event.target).closest("li").toggleClass("itemHighlight");
    });

    $('#shoppingList').on('dblclick', function () {

        $(event.target).closest("li").fadeOut('fast');
    });

});