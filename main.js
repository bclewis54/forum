var newPost = document.createElement('p');
var post = document.createTextNode('Test post');

newPost.appendChild(post);

document.getElementsByClassName('posts')[0].append(newPost);
