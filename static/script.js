document.getElementById("upload-button").addEventListener("click", function () {
  const fileInput = document.getElementById("file-upload");
  const postsContainer = document.querySelector(".posts");

  const file = fileInput.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const post = createPost(e.target.result);
      postsContainer.prepend(post);
    };

    reader.readAsDataURL(file);
  }
});

function createPost(imageSrc) {
  const post = document.createElement("article");
  post.classList.add("post");

  const postHeader = document.createElement("header");
  postHeader.classList.add("post-header");

  const userAvatar = document.createElement("img");
  userAvatar.classList.add("user-avatar");
  userAvatar.src = "static/images/user-avatar.png";
  userAvatar.alt = "User Avatar";

  const userInformation = document.createElement("div");
  userInformation.classList.add("user-info");

  const usernameLink = document.createElement("a");
  usernameLink.href = "#";
  usernameLink.textContent = "username";

  const postTime = document.createElement("span");
  postTime.classList.add("post-time");
  postTime.textContent = "Just now";

  userInformation.appendChild(usernameLink);
  userInformation.appendChild(postTime);

  postHeader.appendChild(userAvatar);
  postHeader.appendChild(userInformation);

  const postImage = document.createElement("img");
  postImage.classList.add("post-image");
  postImage.src = imageSrc;
  postImage.alt = "Post Image";

  const postActions = document.createElement("div");
  postActions.classList.add("post-actions");

  const likeButton = document.createElement("button");
  likeButton.classList.add("like-button");
  likeButton.textContent = "Like";

  const commentButton = document.createElement("button");
  commentButton.classList.add("comment-button");
  commentButton.textContent = "Comment";

  const shareButton = document.createElement("button");
  shareButton.classList.add("share-button");
  shareButton.textContent = "Share";

  postActions.appendChild(likeButton);
  postActions.appendChild(commentButton);
  postActions.appendChild(shareButton);

  post.appendChild(postHeader);
  post.appendChild(postImage);
  post.appendChild(postActions);

  return post;
}
