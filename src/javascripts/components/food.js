const showFood = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-food-btn">Add A Meal</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
    <img src='${item.foodImage}' class="card-img-top" alt="...">
    <div class="card-body">
    <h5 id="food-name-title--${item.firebaseKey}" class="card-title">${item.foodName}</h5>
      <p class="card-desc">${item.foodPrice}</p>
      <a href="#" class="btn btn-danger" id="viewFood--${item.firebaseKey}">View Entree</a>
      <a href="#" class="btn btn-danger" id="delete-food--${item.firebaseKey}">Delete Entree</a>
    </div>
  </div>`;
  });
};

export default showFood;
