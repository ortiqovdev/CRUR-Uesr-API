// Get references to the elements
const openModalBtn = document.getElementById('openModalBtn');
const modalContainer = document.getElementById('modalContainer');
const inputField = document.getElementById('inputField');

// Open modal when the button is clicked
openModalBtn.addEventListener('click', () => {
  modalContainer.style.display = 'block';
});

// Close modal when the modal container is clicked
modalContainer.addEventListener('click', (event) => {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
  }
});

// Retrieve the input value when the button inside the modal is clicked
modalContainer.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const inputValue = inputField.value;
    console.log('Input value:', inputValue);
  }
});
