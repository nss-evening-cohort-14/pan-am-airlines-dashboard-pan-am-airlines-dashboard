const showAirports = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn" id="add-airport-btn">Add An Airport</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
    <img src='${item.airportImage}' class="card-img-top" alt="...">
    <div class="card-body"style="background-color: rgb(247, 233, 232)">
    <h5 id="airport-name-title--${item.firebaseKey}" class="card-title">${item.airportName}</h5>
      <p class="card-desc">${item.airportLocation}</p>
      <hr>
      <a href="#" class="btn" id="edit-airport-btn--${item.firebaseKey}">Edit Airport</a>
      <a href="#" class="btn" id="delete-airport--${item.firebaseKey}">Delete Airport</a>
    </div>
  </div>`;
  });
};

const emptyAirport = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Airports Available</h1>';
};

export { showAirports, emptyAirport };
