document.addEventListener('DOMContentLoaded', function() {
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const postsContainer = document.getElementById('posts');
    
    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <p><strong>Author:</strong> ${post.username}</p>
        `;
        postsContainer.appendChild(postElement);
    });
    
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
