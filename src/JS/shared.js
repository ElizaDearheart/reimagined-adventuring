export { createFormElement };
// create form elements for todo and projects

function createFormElement(type, attributes) {
  const formElement = document.createElement(type);
  for (const key in attributes) {
    formElement.setAttribute(key, attributes[key]);
  }
  return formElement;
}
