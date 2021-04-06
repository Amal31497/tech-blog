const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector("#name-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();


    if(name && password){
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/', {
            method: 'POST',
            body: JSON.stringify({ name, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            // If successful, redirect the browser to the profile page
            document.location.replace('/dashboard');
          } else {
            alert(response.statusText);
          }
    }
}

document
  .querySelector('#login-submit')
  .addEventListener('submit', signupFormHandler);