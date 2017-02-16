$(document).ready(function(){
    $('#dataTables-example').DataTable({
        responsive: true
    });
    $("#b1").click(function(){
        $("#b1").addClass("push_button");
        $("#menu *").not("#b1").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b2").click(function(){
        $("#b2").addClass("push_button");
        $("#menu *").not("#b2").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b3").click(function(){
        $("#b3").addClass("push_button");
        $("#menu *").not("#b3").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b4").click(function(){
        $("#b4").addClass("push_button");
        $("#menu *").not("#b4").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b5").click(function(){
        $("#b5").addClass("push_button");
        $("#menu *").not("#b5").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b6").click(function(){
        $("#b6").addClass("push_button");
        $("#menu *").not("#b6").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b7").click(function(){
        $("#b7").addClass("push_button");
        $("#menu *").not("#b7").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
    $("#b8").click(function(){
        $("#b8").addClass("push_button");
        $("#menu *").not("#b8").removeClass("push_button");
        generate_img(this);
        generate_news(this);
    });
});

function generate_img(object) {
    $('#wordcloud_image').remove();
    var tmp_img = $('<img/>');
    tmp_img.attr('id','wordcloud_image');
    if (object.id == "b1") {
        tmp_img.attr('src',"img/wordcloud1.jpg");
    } else if (object.id == "b2") {
        tmp_img.attr('src',"img/wordcloud7.jpg");
    } else if (object.id == "b3") {
        tmp_img.attr('src',"img/wordcloud6.jpg");
    } else if (object.id == "b4") {
        tmp_img.attr('src',"img/wordcloud0.jpg");
    } else if (object.id == "b5") {
        tmp_img.attr('src',"img/wordcloud3.jpg");
    } else if (object.id == "b6") {
        tmp_img.attr('src',"img/wordcloud5.jpg");
    } else if (object.id == "b7") {
        tmp_img.attr('src',"img/wordcloud2.jpg");
    } else if (object.id == "b8") {
        tmp_img.attr('src',"img/wordcloud4.jpg");
    }
    tmp_img.attr('alt',"wordcloud");
    tmp_img.appendTo($('.wordcloud'));
};

function generate_news(object) {
    
}
