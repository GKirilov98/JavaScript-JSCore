function getArticleGenerator(articles) {
    return (function () {
        let counter = 0;
        return function () {
            if (counter < articles.length) {
                $("#content").append($("<article>").text(articles[counter]));
                counter++;
            }
        }
    }());
}
