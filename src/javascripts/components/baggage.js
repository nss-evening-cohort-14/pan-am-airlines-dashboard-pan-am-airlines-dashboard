const showBaggage = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-baggage-btn">Add A Bag</button>';

  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `
    <div class="card m-4" style="width: 18rem;">
    <img class="card-img-top" src=${item.baggageImage}">
      <div class="card-body">
      <a href="#"><h5 id="baggage-name-title--${item.firebaseKey}" class="card-title">Baggage Number: ${item.baggageNumber}</h5></a>
        <a href="#"><h5 id="baggage-name-title--${item.firebaseKey}" class="card-title">Baggage Weight: ${item.baggageWeight}</h5></a>
        <button class="btn btn-danger" id="view-baggage--${item.firebaseKey}">View</button>
        <button class="btn btn-danger" id="delete-baggage--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
};

const emptyBaggage = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Baggage On File</h1>';
};

export { showBaggage, emptyBaggage };
