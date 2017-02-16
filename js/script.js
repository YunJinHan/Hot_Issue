$(document).ready(function(){
    generate_news(this,true)
    $('#dataTables-example').DataTable({
        responsive: true
    });
    $("#b1").click(function(){
        $("#b1").addClass("push_button");
        $("#menu *").not("#b1").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b2").click(function(){
        $("#b2").addClass("push_button");
        $("#menu *").not("#b2").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b3").click(function(){
        $("#b3").addClass("push_button");
        $("#menu *").not("#b3").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b4").click(function(){
        $("#b4").addClass("push_button");
        $("#menu *").not("#b4").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b5").click(function(){
        $("#b5").addClass("push_button");
        $("#menu *").not("#b5").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b6").click(function(){
        $("#b6").addClass("push_button");
        $("#menu *").not("#b6").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b7").click(function(){
        $("#b7").addClass("push_button");
        $("#menu *").not("#b7").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
    });
    $("#b8").click(function(){
        $("#b8").addClass("push_button");
        $("#menu *").not("#b8").removeClass("push_button");
        generate_img(this);
        generate_news(this,false);
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

function generate_news(object,boolean) {

    var category_name;
    if (boolean === false) {
        if (object.id == "b1") {
            category_name = "정치 속보";
        } else if (object.id == "b2") {
            category_name = "사회 속보";
        } else if (object.id == "b3") {
            category_name = "경제 속보";
        } else if (object.id == "b4") {
            category_name = "생활/문화 속보";
        } else if (object.id == "b5") {
            category_name = "세계 속보";
        } else if (object.id == "b6") {
            category_name = "IT/과학 속보";
        } else if (object.id == "b7") {
            category_name = "연예 속보";
        } else if (object.id == "b8") {
            category_name = "스포츠 속보";
        }
    } else {
        category_name = "정치 속보";
        object.innerHTML = "정치";
    }

    $.ajax({
        type: 'POST',
        url: 'database/database_json.php',
        data: {
            what : 0,
            category : category_name
        },
        success: function(data) {
            var jsonData = JSON.parse(JSON.stringify(data));
            return showNews_JSON(jsonData,object.innerHTML)
        },
        error: function(data) {
            return ajaxFailed(data)
        }
    });
}

function showNews_JSON(data,category_name) {
    $("#news_table > *").empty();
    for (var i = 0; i < data.length; i ++) {
        var tmp_tr = "<tr>";
        tmp_tr += "<td>" + category_name + "</td>";
        tmp_tr += "<td><a href=\"" + data[i]['url'] + "\" target=\"_blank\">" + data[i]['title'] + "</a></td>";
        tmp_tr += "</tr>";
        $("#news_table").append(tmp_tr);
    }
    $("#table").messageList.scrollTop = $("#table").messageList.scrollHeight;
    $(".panel").messageList.scrollTop = $(".panel").messageList.scrollHeight;
    $(".panel-body").messageList.scrollTop = $(".panel-body").messageList.scrollHeight;
}

function ajaxFailed(data) {
	var errorMessage = "Error making Ajax request:\n\n";
	errorMessage += "Exception: " + data;
	console.log(errorMessage);
}
