// 点赞按钮 + 简单的本地访问计数
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");
const counter = document.getElementById("counter");

let likes = Number(localStorage.getItem("likes") || 0);
likeCount.textContent = likes;

likeBtn.addEventListener("click", () => {
  likes++;
  localStorage.setItem("likes", likes);
  likeCount.textContent = likes;
});

let visits = Number(localStorage.getItem("visits") || 0) + 1;
localStorage.setItem("visits", visits);
counter.textContent = `这个页面被打开过 ${visits} 次`;
