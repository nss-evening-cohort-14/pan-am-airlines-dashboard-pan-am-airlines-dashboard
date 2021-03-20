const addPlaneForm = () => {
  document.querySelector('#modal').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
 <div class="card bg-light mb-3" style="width: 40em;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title"><h3>FROM THE FLIGHT DECK</h3></h5>
    <p class="card-text">Add a plane to our international fleet!</p>
    <form id="add-plane-form" class="mb-4">
      <div class="form-group">
        <label for="image-plane">Image URL</label>
        <input type="url" class="form-control" id="planeImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-plane">
      </div>
      <div class="form-group">
      <class="form-group-label" for="planeMake">Plane Make</class=>
      <input type="text" class="form-control" id="planeMake" placeholder="Plane Make" required>
    </div>
      <div class="form-group">
        <class="form-group-label" for="planeModel">Plane Model</class=>
        <input type="text" class="form-control" id="planeModel" placeholder="Plane Model" required>
      </div>
      <div class="form-group">
        <class="form-group-label" for="planeCapacity">Plane Capacity</class=>
        <input type="number" class="form-control" id="planeCapacity" placeholder="Capacity" required>
      </div>
      <button type="submit" id="submit-plane" class="btn btn-primary">Submit Plane</button>
    </form>
  </div>
</div>
    `;
};

export default addPlaneForm;
