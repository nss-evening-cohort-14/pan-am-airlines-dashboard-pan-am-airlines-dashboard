const showFood = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn" id="add-food-btn">Add A Meal</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card" style="background-color: rgb(247, 233, 232)">
    <img src='${item.foodImage}' class="card-img-top" alt="...">
    <div class="card-body" style:"display: flex">
    <h5 id="food-name-title--${item.firebaseKey}" class="card-title">${item.foodName}</h5>
      <p class="card-desc">${item.foodPrice}</p>
      <hr>
      <a href="#" class="btn" id="edit-food-btn--${item.firebaseKey}">Edit Entree</a>
      <a href="#" class="btn" id="delete-food-btn--${item.firebaseKey}">Delete Entree</a>
    </div>
  </div>`;
  });
};

export default showFood;
