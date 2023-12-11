function toggleForm(type) {
    const formTitle = document.getElementById('form-title');
    const nameField = document.getElementById('name-section');
    const loginRadioSection = document.getElementById('login-radio-section');
    const myForm = document.getElementById('my-form');

    if (type === 'login') {
      formTitle.innerText = 'Log In';
      nameField.style.display = 'none'; // Hide the name field for login
      loginRadioSection.style.display = 'block';
    } else {
      formTitle.innerText = 'Sign Up';
      nameField.style.display = 'block'; // Show the name field for signup
      loginRadioSection.style.display = 'none';
    }

    // You can also update other form elements based on the type if needed

    // Clear the form fields
    myForm.reset();
}




// Function to handle opening new login pages for Admin and Client
function openLoginPage(userType) {
    // You can customize this function to open specific pages for Admin and Client
    if (userType === 'admin') {
      window.location.href = 'admin-login.html'; // Replace with your admin login page URL
    } else if (userType === 'client') {
      window.location.href = 'client-login.html'; // Replace with your client login page URL
    }
  }

  // Event listener for radio buttons
  document.addEventListener('DOMContentLoaded', function () {
    const radioButtons = document.querySelectorAll('input[name="userType"]');

    radioButtons.forEach(function (radioButton) {
      radioButton.addEventListener('change', function () {
        if (this.checked) {
          openLoginPage(this.value);
        }
      });
    });
  });
