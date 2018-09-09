const http = new easyHTTP;

// GET Post
// http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
//   if(err){
//     console.log(err);
//   }else{
//     console.log(posts);
//   }
// });

// GET Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err){
    console.log(err);
  }else{
    console.log(post);
  }
});

