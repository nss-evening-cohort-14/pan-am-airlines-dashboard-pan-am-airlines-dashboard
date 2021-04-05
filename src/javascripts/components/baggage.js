const showBaggage = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn" id="add-baggage-btn">Add A Bag</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `
    <div class="card m-4" style="width: 18rem; background-color: rgb(247, 233, 232)">
    <img class="card-img-top" src=${item.baggageImage}">
      <div class="card-body">
      <h5 id="baggage-name-title--${item.firebaseKey}" class="card-title">Baggage Number: ${item.baggageNumber}</h5>
        <h5 id="baggage-name-title--${item.firebaseKey}" class="card-title">Baggage Weight: ${item.baggageWeight}</h5>
        <hr>
        <button class="btn" id="edit-baggage-btn--${item.firebaseKey}">Edit</button>
        <button class="btn" id="delete-baggage-btn--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
};

const emptyBaggage = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Baggage On File</h1>';
};

export { showBaggage, emptyBaggage };
