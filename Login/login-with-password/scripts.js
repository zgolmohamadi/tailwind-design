document.addEventListener('DOMContentLoaded', (event) => {
  const btnPassword = document.getElementById('passwordVisibleHandle');
  const icon = document.querySelector('#passwordVisibleHandle i');

  btnPassword.addEventListener('click', togglePassword);

  function togglePassword() {
    const type = btnPassword.nextElementSibling.getAttribute('type');

    if (type === 'password')
      btnPassword.nextElementSibling.setAttribute('type', 'text');

    if (type === 'text')
      btnPassword.nextElementSibling.setAttribute('type', 'password');

    icon.classList.toggle('icon-password-visible');
  }
});
