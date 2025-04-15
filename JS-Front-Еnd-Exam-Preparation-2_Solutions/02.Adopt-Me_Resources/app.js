window.addEventListener("load", solve);

function solve() {
  //selecting the dom elements whit who will be operate
  const adoptButtonEl = document.getElementById('adopt-btn');

  const typeInputEl = document.getElementById('type');
  const ageInputEl = document.getElementById('age');
  const genderInputEl = document.getElementById('gender');

  const adoptionInfoListElement = document.getElementById('adoption-info');
  const adoptedListElement = document.getElementById('adopted-list');


  //function whi will clear the fields after we use the input info for creating list
  function clearInputFields() {
    typeInputEl.value = '';
    ageInputEl.value = '';
    genderInputEl.value = '';
  }

  //creating the article element who will bee added to the page after taking the input fields
  function createArticleElement() {
    const article = document.createElement('article');

    const typeParagraphElement = document.createElement('p');
    typeParagraphElement.textContent = `Pet:${typeInputEl.value}`;
    article.appendChild(typeParagraphElement);

    const genderParagraphElement = document.createElement('p');
    genderParagraphElement.textContent = `Gender:${genderInputEl.value}`;
    article.appendChild(genderParagraphElement);

    const ageParagraphElement = document.createElement('p');
    ageParagraphElement.textContent = `Age:${ageInputEl.value}`;
    article.appendChild(ageParagraphElement);

    return article;
  }

  //function that creating button elements who will be added to the current pet info and will have
  //functionality after it 
  function createButtonElements() {
    const buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons');

    const editButton = document.createElement('button');
    editButton.classList.add('edit-btn');
    editButton.textContent = 'Edit';
    buttonsContainer.appendChild(editButton);

    const doneButton = document.createElement('button');
    doneButton.classList.add('done-btn');
    doneButton.textContent = 'Done';
    buttonsContainer.appendChild(doneButton);

    return {
      buttonsContainer,
      editButton,
      doneButton,
    };
  }

  // creating Clear button and giving functinality for removing the choosen pet
  function createClearButton(liElement) {
    const clearButton = document.createElement('button');
    clearButton.classList.add('clear-btn');
    clearButton.textContent = 'Clear';
    clearButton.addEventListener('click', () => liElement.remove());

    return clearButton;
  }

  //create the pet elements who will be added to the DOM three
  function createAnimalListItem() {

    const liElement = document.createElement('li');

    const articleElement = createArticleElement();
    const { buttonsContainer, doneButton, editButton } = createButtonElements();

    //Edit button and functionality
    editButton.addEventListener('click', () => {
      liElement.remove();
      const [, type] = liElement.querySelector('p:nth-child(1)').textContent.split(':');
      const [, gender] = liElement.querySelector('p:nth-child(2)').textContent.split(':');
      const [, age] = liElement.querySelector('p:nth-child(3)').textContent.split(':');

      typeInputEl.value = type;
      genderInputEl.value = gender;
      ageInputEl.value = age;

    })

    //Done button removing the article form the adopt-info and move it to the 
    //adopted-list ul
    doneButton.addEventListener('click', () => {
      liElement.remove();
      buttonsContainer.remove();

      //creating clear button element and adding to the list element
      //adding event listener who will clear and remove li element when client click it 
      const clearButton = createClearButton(liElement);
      liElement.appendChild(clearButton);

      adoptedListElement.appendChild(liElement);
    })

    liElement.appendChild(articleElement);
    liElement.appendChild(buttonsContainer);

    adoptionInfoListElement.appendChild(liElement);
    clearInputFields();
  }
  function onAdoptClickHendler(event) {
    event.preventDefault(); //stop refreshing the whole page, so we can start with the input
    createAnimalListItem();
  }

  adoptButtonEl.addEventListener('click', onAdoptClickHendler);
}
