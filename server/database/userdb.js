import createUser from '../controllers/user.controllers.js';

const form = document.querySelector('form');
form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const lastname = formData.get('lastname');
  const image = formData.get('image');
  const email = formData.get('email');
  const password = formData.get('password');

  const user = {
    name,
    lastname,
    image,
    email,
    password
  };

  try {
    const newUser = await createUser(user);
    console.log('Usuario registrado:', newUser);
  } catch (error) {
    console.error('Error al registrar usuario:', error);
  }
});


const loginForm = document.querySelector('#login-form');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  const email = emailInput.value;
  const password = passwordInput.value;

  const user = await getUserByEmailAndPassword(email, password);

  if (user) {
    // Redirigir al usuario a la página de inicio de sesión
    window.location.href = '/home.html';
  } else {
    // Mostrar un mensaje de error al usuario
    const errorMessage = document.querySelector('#error-message');
    errorMessage.textContent = 'El correo electrónico o la contraseña son incorrectos.';
  }
});