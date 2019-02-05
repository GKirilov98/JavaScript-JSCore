function postFunc() {
    class Post{
        constructor(title, content){
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post{
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = +likes;
            this.dislikes = +dislikes;
            this.comments =[];
        }

        addComment(comment){
            this.comments.push(comment);
        }

        toString(){
            let likes = this.likes;
            let dislikes = this.dislikes;
            let rating = likes - dislikes;
            let comments= "";
            for (let i = 0; i < this.comments.length; i++) {
                if (i === 0){
                    comments += "\nComments:";
                }
                comments += `\n * ${this.comments[i]}`
            }
            let parentString = super.toString();
         return `${parentString}\nRating: ${rating}${comments}`

        }
    }

    class BlogPost extends Post{
        constructor(title, content, views) {
            super(title, content);
            this.views = +views;
        }

        view(){
            this.views ++;
            return this;
        }

        toString(){
            let currPost = super.toString();
            return`${currPost}\nViews: ${this.views}`
        }
    }

    return{Post, SocialMediaPost, BlogPost}

}
let BlogPost = postFunc().BlogPost;

let test = new BlogPost("TestTitle", "TestContent", 5);
console.log(test.view());;
console.log(test.toString());

// let Post = postFunc().Post;
// let SocialMediaPost = postFunc().SocialMediaPost;
// //
// // let post = new Post("Post", "Content");
// //
// // console.log(post.toString());
//
// // Post: Post
// // Content: Content
//
// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
//
// console.log(scm.toString());
//
// // Post: TestTitle
// // Content: TestContent
// // Rating: -5
// // Comments:
// //  * Good post
// //  * Very good post
// //  * Wow!
