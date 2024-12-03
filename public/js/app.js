document.getElementById('employeeForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        position: document.getElementById('position').value,
    };

    try {
        const response = await fetch('/api/employees', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        document.getElementById('result').innerHTML = `
            <h2>Employee Added:</h2>
            <p>Name: ${result.name}</p>
            <p>Email: ${result.email}</p>
            <p>Position: ${result.position}</p>
        `;
    } catch (error) {
        document.getElementById('result').innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    }
});
