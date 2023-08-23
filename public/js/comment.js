document.querySelector('.add-comment-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();

    const blogpostElement = document.querySelector('.text-center');
    const blogpost_id = blogpostElement.getAttribute('data-blogpost-id');

    if (content) {
        console.log(content, blogpost_id);
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, blogpost_id }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            location.reload();  // Refresh the page to see the new comment
        } else {
            alert('Failed to add comment');
        }
    }
});
