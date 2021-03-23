const addCrewForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
    <div class="card bg-light mb-3" style="width: 40em;">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title"><h3>Apply To mJoin Our Pan Am Family!</h3></h5>
      <form id="submit-crew-form mx-auto" class="mb-4">
      <div class="form-group">
        <label for="firstName"></label>
        <input type="text" class="form-control" id="firstName" placeholder="First Name" required>
      </div>
      <div class="form-group">
        <label for="lastName"></label>
        <input type="text" class="form-control" id="lastName" placeholder="Last Name" required>
      </div>
      <div class="form-group">
        <label for="crewTitle"></label>
        <input type="text" class="form-control" id="crewTitle" placeholder="Job Ttile" required>
      </div>
      <div class="form-group">
        <label for="imageUrl"></label>
        <input type="url" class="form-control" id="imageUrl" placeholder="Profile Image URL" required>
      </div>
      <button type="submit" id="submit-crew-btn" class="btn btn-primary">Apply!</button>
    </form>
    </div>
  </div>`;
};

export default addCrewForm;
