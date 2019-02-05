function domSearch(selector, caseSense = false) {
    let mainContainer = $(selector);
    let item = $("<div>");
    let result = $("<div>").addClass("result-controls");
    let list = $("<ul>").addClass("items-list");

    item.addClass("add-controls")
        .append($("<label>").text("Enter text: ").append($("<input>")))
        .append($("<a>").addClass("button").text("Add").on("click", addToLIst));
    item.appendTo(mainContainer);

    let searchDiv = $("<div>").addClass("search-controls")
        .append($("<label>").text("Search:").append($("<input>").on("keyup", searchWord)));
    searchDiv.appendTo(mainContainer);
    list.appendTo(result);
    result.appendTo(mainContainer);

    function addToLIst() {
        let name = $(".add-controls input").val();
        $("<li>").addClass("list-item").text(name).appendTo(list);
        $(".add-controls input").val("");
    }

    function searchWord() {
        $(".list-item").css("display", "");
        let searching = $(".search-controls label input").val();
        if (searching !== "") {
            let searchList;
            if (caseSense) {
                searching = $(".search-controls label input").val().toLowerCase();
                searchList = $(`.list-item`).filter((index, element) => {
                    return element.textContent.toLowerCase().indexOf(searching) === -1; });
            } else {

                searchList = $(`.list-item:not(:contains(${searching}))`);
            }

            if (searchList.length !== $('.list-item').length) {
                searchList.css('display', "none");
            }
        }
    }
}
