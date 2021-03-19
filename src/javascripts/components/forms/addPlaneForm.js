const addPlane = () => {
  document.querySelectorAll('#boards').innerHTML = '';
  document.querySelectorAll('#add-button').innerHTML = '';
  document.querySelectorAll('#modal').innerHTML = '';
  document.querySelectorAll('#main-container').innerHTML = '';
  document.querySelectorAll('#form-container').innerHTML = `<div class="card bg-light mb-3" style="width: 40em;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title"><h3>PLANES TRAINS AND MORE PLANES</h3></h5>
    <p class="card-text">Suggest a plane for our lineup!</p>
    <form id="submit-plane-form mx-auto" class="mb-4">
      <div class="form-group">
      <div class="form-group">
      </div>
        <label for="image">Image URL</label>
        <input type="url" class="form-control" id="imageUrl" placeholder="Profile Image" required>
      </div>
        <label for="firstName">First Name #</label>
        <input type="text" class="form-control" id="firstName" placeholder="FirstName" required>
      <div class="form-group">
        <label for="lastName">Last Name</label>
        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
      </div>
      <button type="submit" id="submit-plane" class="btn btn-primary">Apply</button>
    </form>
  </div>
</div>
`;
};

export default addPlane;
