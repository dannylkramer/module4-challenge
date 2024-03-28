const form = document.getElementById('blog-form');
const errorMessage = document.getElementById('error-message');
const postsList = document.getElementById('posts-list');
const backBtn = document.getElementById('back-btn');
const darkModeToggle = document.getElementById('dark-mode');

let blogPosts = [];

// Load posts from localStorage on page load
window.onload = function() {
  const storedPosts = localStorage.getItem('blogPosts');
  if (storedPosts) {
    blogPosts = JSON.parse(storedPosts);}}

    // Form submission handler
    document.body.addEventListener('submit', function(event) {
        if (event.target.id === 'blog-form') {
    event.preventDefault(); // Prevent default form submission behavior
  
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
  
    // Validate form input (optional)
    if (!username || !title || !content) {
      errorMessage.textContent = 'Please fill out all fields.';
      return;
    }
  
    // Create a new blog post object
    const newPost = {
      username,
      title,
      content,
    };
  
    // Add new post to blogPosts array
    blogPosts.push(newPost);
  
    // Save blogPosts to localStorage
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  
    // Redirect to blog.html after successful submission
    window.location.href = "blog.html";
  }}
  );
  
  // Function to render posts in the list
  function renderPosts() {
    postsList.innerHTML = ''; // Clear existing list items
  
    blogPosts.forEach(post => {
      const postItem = document.createElement('li');
      postItem.classList.add('post-item');
      postItem.innerHTML = `<h3>${post.title}</h3>
                             <p>By ${post.username}</p>
                             <p>${post.content}</p>`;
      postsList.appendChild(postItem);
    });
  };

  console.log(blogPosts)