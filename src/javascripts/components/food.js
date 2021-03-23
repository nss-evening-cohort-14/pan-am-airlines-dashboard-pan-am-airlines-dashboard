const showFood = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-food-btn">Add A Meal</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card" style="border-radius: 15%">
    <img src='${item.foodImage}' class="card-img-top" alt="..." style="border-radius: 15%; height: 50%">
    <div class="card-body" style:"display: flex; justify-content: space-around">
    <h5 id="food-name-title--${item.firebaseKey}" class="card-title">${item.foodName}</h5>
      <p class="card-desc">${item.foodPrice}</p>
      <a href="#" class="btn btn-info" id="edit-food-btn--${item.firebaseKey}">Edit Entree</a>
      <a href="#" class="btn btn-danger" id="delete-food-btn--${item.firebaseKey}">Delete Entree</a>
    </div>
  </div>`;
  });
};

export default showFood;
