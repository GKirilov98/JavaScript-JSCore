// function addSticker () {
//     let mainContainer = $(".stickerBoard #sticker-list");
//     let title = $(".title").val();
//     let content = $(".content").val();
//     if (title === "" || content ===""){
//         return;
//     }
//     let myList = $("<li>").addClass("note-content")
//         .append($("<a>").addClass("button").text("x").on("click",deleteTask))
//         .append($("<h2>").text(title))
//         .append($("<hr>"))
//         .append($("<p>").text(content));
//     myList.appendTo(mainContainer);
//     $(".title").val("");
//     $(".content").val("");
//
//     function deleteTask() {
//         $(this).parent().remove();
//     }
// }