// script.js
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const provider = button.classList[1].split('-')[1];
        console.log(`Redirecting to ${provider} login...`);
        // Here you would normally trigger your OAuth flow
    });
});