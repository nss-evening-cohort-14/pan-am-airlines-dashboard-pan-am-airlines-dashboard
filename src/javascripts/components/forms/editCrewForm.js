const editCrewForm = (crewObject) => {
  document.querySelector('#form-container').innerHTML = `
  <div class="card bg-light mb-3" style="width: 40em;">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title"><h3>Apply To Join Our Pan Am Family!</h3></h5>
        <form id="update-crew-form mx-auto" class="mb-4">
        <div class="form-group">
          <label for="firstName"></label>
          <input type="text" class="form-control" id="firstName" placeholder="First Name" required value="${crewObject.firstName}">
        </div>
        <div class="form-group">
          <label for="lastName"></label>
          <input type="text" class="form-control" id="lastName" placeholder="Last Name" required value="${crewObject.lastName}">
        </div>
        <div class="form-group">
          <label for="updateCrewTitle"></label>
          <input type="text" class="form-control" id="crewTitle" placeholder="Job Ttile" required value="${crewObject.crewTitle}">
        </div>
        <div class="form-group">
          <label for="imageUrl"></label>
          <input type="url" class="form-control" id="imageUrl" placeholder="Profile Photo" required value="${crewObject.imageUrl}">
        </div>
        <button type="submit" id="update-crew-btn--${crewObject.firebaseKey}" class="btn btn-success">Re-Apply!</button>
      </form>
    </div>
  </div>`;
};

export default editCrewForm;
