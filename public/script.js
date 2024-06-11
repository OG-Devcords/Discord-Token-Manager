document.getElementById('token-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const token = document.getElementById('token').value;
    const password = document.getElementById('password').value;
    
    const response = await fetch('http://127.0.0.1:3000/store-token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, password })
    });

    if (response.ok) {
        const data = await response.json();
        document.getElementById('endpoint-url').innerText = `Your Endpoint: http://127.0.0.1:3000/get-token/${data.endpoint}`;
    } else {
        alert('Failed to generate endpoint');
    }
});
