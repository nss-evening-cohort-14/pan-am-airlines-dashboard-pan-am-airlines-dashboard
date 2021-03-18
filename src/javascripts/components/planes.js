const showPlanes = (arr) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-airport-btn">Add An Airport</button>';
  document.querySelector('#main-container').innerHTML = '';

  arr.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `<div class="card">
    <img class="card-img-top" src=${item.planeImage} alt=${item.planeMake} style="height: 400px;">
    <div class="card-body">
    <h5 class="card-title">${item.planeMake}</h5>
    <p class="card-text bold">${item.s ? `<span class="badge badge-info sale-badge"><i class="fa fa-bell" aria-hidden="true"></i> Plane Model</span> Plane Model ${item.planeModel}` : `Plane Model ${item.planeModel}`}</p>
    <hr>
    <h6 class="plane-capacity"> Capacity ${item.planeCapacity}</h6>
    <button class="btn btn-info" data-toggle="modal" data-target="#formModal" id="edit-plane-btn--${item.firebaseKey}">Edit Plane</button>
    <button class="btn btn-danger" id="delete-plane--${item.firebaseKey}">Delete Plane</button>
    </div>
  </div>`;
  });
};

export default showPlanes;
