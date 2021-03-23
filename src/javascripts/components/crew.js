const showCrews = (array) => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '<button class="btn btn-success btn-lg mb-4" id="add-crew-btn">Click To Apply!</button>';
  document.querySelector('#main-container').innerHTML = '';

  array.forEach((item) => {
    document.querySelector('#main-container').innerHTML += `
    <div class="card m-4 mt-5" style="width: 20em; background-color: rgb(66, 176, 250); border: none">
    <img class="card-img-top" src=${item.imageUrl}" style="border-radius: 50%; border: 1em solid white">
      <div class="card-body">
        <a href="#"><h2 id="crew-name-title--${item.firebaseKey}" class="card-title text-white">${item.firstName} ${item.lastName}</h2></a>
        <h5 class="card-title">${item.crewTitle}</h5>
        <button class="btn btn-info" id="edit-crew-btn--${item.firebaseKey}">Edit Profile</button>        
        <button class="btn btn-danger" id="delete-crew-btn--${item.firebaseKey}">Delete</button>
      </div>
    </div>`;
  });
};

const emptyCrews = () => {
  document.querySelector('#boards').innerHTML = '<h1>No Crew Members Available</h1>';
};

export { showCrews, emptyCrews };
