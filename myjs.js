const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const checkboxInput = document.getElementById('accurate');
  const errorElement = document.getElementById('error');
  const confirmation = document.getElementById('confirmation');
  const img = confirmation.querySelector('img');
  const confirmationMessage = document.getElementById('confirmationMessage');
  const smallez = document.getElementById('smallez');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = [];
    if (nameInput.value === '' || nameInput.value == null) {
      messages.push('Name is required');
    }

    if (emailInput.value === '' || emailInput.value == null) {
      messages.push('Email is required');
    } else if (!isValidEmail(emailInput.value)) {
      messages.push('Email is invalid');
    }

    if (!checkboxInput.checked) {
      messages.push('You must confirm that all information is accurate');
    }

    const firstName = document.getElementById('name').value.split(' ')[0];
    const email = document.getElementById('email').value;
    const emailDomain = email.split('@')[1].split('.')[0];
    confirmationMessage.textContent = `Welcome, ${firstName}`;
    smallez.textContent = ` Thanks for filling out the form. A confirmation email has been sent to your ${emailDomain} account.`;

    if (messages.length > 0) {
      errorElement.innerText = messages.join(', ');
    }else {
      confirmation.classList.remove('hidden');

    const close = document.getElementsByClassName("close")[0];
    confirmation.style.display = "block";
    img.src = "welcome.jpg";

     window.onclick = function(event) {
      if (event.target == confirmation || event.target == close) {
        confirmation.style.display = "none";
        form.reset();

      }
    }
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  }
