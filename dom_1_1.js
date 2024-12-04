
const createTegInputName = document.createElement('input')
createTegInputName.type = "text" 
createTegInputName.name = "userName" 
createTegInputName.placeholder="Введите ваше имя"

const createTegInputPassword = document.createElement('input')
createTegInputPassword.type = 'password'
createTegInputPassword.name = 'password'
createTegInputPassword.placeholder = 'Придумайте Пароль'

const createTegButton = document.createElement('button')
createTegButton.type = 'submit'
createTegButton.textContent = 'Подтвердить'

const createTegLabelName = document.createElement('label')
createTegLabelName.textContent = 'Имя'
createTegLabelName.append(createTegInputName)

const createTegLabelPassword = document.createElement('label')
createTegLabelPassword.textContent = 'Пароль'
createTegLabelPassword.append(createTegInputPassword)

const createTegForm = document.createElement('form')
createTegForm.className = '"create-user-form"'
createTegForm.prepend(createTegLabelName)
createTegForm.append(createTegLabelPassword)
createTegForm.append(createTegButton)

const findeTegBody = document.querySelector('body')
// findeTegBody.append(createTegForm)
// console.log('findeTegBody', findeTegBody)
// findeTegBody.insertAdjacentElement('afterbegin', createTegForm)
console.log(findeTegBody.innerHTML)



const creatInputElement = (type, name, placeholder) => {
  const input = document.createElement('input')
  input.type = type
  input.name = name
  input.placeholder = placeholder
  return input
}

const creatLabelElement = (text, inputElement) => {
  const label = document.createElement('label')
  label.textContent = text
  label.appendChild(inputElement)
  return label
}

const createButtonElement = (type, text) => {
  const button = document.createElement('button')
  button.type = type
  button.textContent = text
  return button
}
const buttonElement = createButtonElement('submit', 'Подтвердить')


const userNameInput = creatInputElement('text', 'userName', 'Введите ваше имя')
const passwordInput = creatInputElement('password', 'password', 'Придумайте Пароль')


const userNameLabel = creatLabelElement('Имя', userNameInput)
const passwordLabel = creatLabelElement('Пароль', passwordInput)



const createFormElement = document.createElement('form')
createFormElement.className = "create-user-form"
createFormElement.appendChild(userNameLabel)
createFormElement.appendChild(passwordLabel)
createFormElement.appendChild(buttonElement)

const findTegBody = document.querySelector('body')
findTegBody.append(createFormElement)
console.log('findTegBody', findTegBody)
findTegBody.insertAdjacentElement('afterbegin', createFormElement)





/*
function createInputElement(type, name, placeholder) {
  const input = document.createElement('input');
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  return input;
}

function createLabelElement(text, inputElement) {
  const label = document.createElement('label');
  label.textContent = text;
  label.appendChild(inputElement);
  return label;
}

const userNameInput = createInputElement('text', 'userName', 'Введите ваше имя');
const passwordInput = createInputElement('password', 'password', 'Придумайте Пароль');
const submitButton = document.createElement('button');
submitButton.type = 'submit';
submitButton.textContent = 'Подтвердить';

const nameLabel = createLabelElement('Имя', userNameInput);
const passwordLabel = createLabelElement('Пароль', passwordInput);

const form = document.createElement('form');
form.classList.add('create-user-form');
form.appendChild(nameLabel);
form.appendChild(passwordLabel);
form.appendChild(submitButton);

document.body.prepend(form); // Добавляем форму в начало body
const findTegBody = document.querySelector('body')
console.log(findTegBody)
*/

