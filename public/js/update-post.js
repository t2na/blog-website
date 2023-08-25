const updatePostHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#update-title').value.trim();
    const description = document.querySelector('#update-desc').value.trim();
    const postId = document.querySelector('input[name="post-id"]').value;

    if (title && description) {
        const response = await fetch(`/api/blogposts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ title, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to update blog post');
        }
    }
};

document
    .querySelector('.update-post-form')
    .addEventListener('submit', updatePostHandler);
