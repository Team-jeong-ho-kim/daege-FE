export function getPosts() {
  return JSON.parse(localStorage.getItem("posts")) || [];
}

export function getPost(id) {
  const posts = getPosts();

  return posts.find((post) => post.id === Number(id));
}
