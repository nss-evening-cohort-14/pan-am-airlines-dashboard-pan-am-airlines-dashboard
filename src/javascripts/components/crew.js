const showCrews = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-crew-btn">Add A Crew Member</button>';

  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `
    <div class="card m-4" style="width: 18rem;">
    <img class="card-img-top" src=${item.imageUrl} style="height: 200px;">
      <div class="card-body">
        <a href="#"><h5 id="crew-name-title--${item.firebaseKey}" class="card-title">${item.firstName} ${item.lastName}</h5></a>
        <button class="btn btn-danger" id="view-crew-member--${item.firebaseKey}">View</button>
        <button class="btn btn-danger" id="delete-crew-member--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
};

const emptyCrews = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Crew Members Available</h1>';
};

export { showCrews, emptyCrews };
