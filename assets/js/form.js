document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const message = document.getElementById('message');
    
    if (!username || !title || !content) {
        message.textContent = 'Please complete the form.';
        return;
    }
    
    const post = { username, title, content };
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(post);
    localStorage.setItem('posts', JSON.stringify(posts));
    
    window.location.href = 'blog.html';
});
