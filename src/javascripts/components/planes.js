const showPlanes = (arr) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn" id="add-plane-btn">Add A Plane</button>';
  document.querySelector('#main-container').innerHTML = '';

  arr.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card" style="background-color: rgb(247, 233, 232)">
    <img class="card-img-top" src=${item.planeImage} alt=${item.planeMake}">
    <div class="card-body">
    <h5 class="card-title">${item.planeMake}</h5>
    <p class="card-desc">${item.planeModel}</p>
    <hr>
    <h6 class="plane-capacity"> Capacity: ${item.planeCapacity}</h6>
    <button class="btn" data-toggle="modal" data-target="#formModal" id="edit-plane-btn--${item.firebaseKey}">Edit Plane</button>
    <button class="btn" id="delete-plane--${item.firebaseKey}">Delete Plane</button>
    </div>
  </div>`;
  });
};

export default showPlanes;
