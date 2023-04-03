const form = document.querySelector('form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const checkboxInput = document.getElementById('accurate');
  const errorElement = document.getElementById('error');
  const confirmation = document.getElementById('confirmation');
  const confirmationMessage = document.getElementById('confirmationMessage');

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
    confirmationMessage.textContent = `Welcome, ${firstName} a confirmation email has been sent to your ${emailDomain} account.`;
    if (messages.length > 0) {
      errorElement.innerText = messages.join(', ');
    }else {
      form.classList.add('hidden');
      confirmation.classList.remove('hidden');
    }
  });

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
