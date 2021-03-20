const showAirports = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-airport-btn">Add An Airport</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
    <img src='${item.airportImage}' class="card-img-top" alt="...">
    <div class="card-body">
    <h5 id="airport-name-title--${item.firebaseKey}" class="card-title">${item.airportName}</h5>
      <p class="card-desc">${item.airportLocation}</p>
      <a href="#" class="btn btn-danger" id="edit-airport--${item.firebaseKey}">Edit Airport</a>
      <a href="#" class="btn btn-danger" id="delete-airport--${item.firebaseKey}">Delete Airport</a>
    </div>
  </div>`;
  });
};

const emptyAirport = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Airports Available</h1>';
};

export { showAirports, emptyAirport };
