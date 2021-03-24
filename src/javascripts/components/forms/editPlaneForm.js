const editPlaneForm = (planeObject) => {
  document.querySelector('#modal').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
  <div class="card bg-light mb-3" style="width: 40em;">
  <div class="card-header"></div>
  <div class="card-body">
    <form id="edit-plane-form" class="mb-4">
      <div class="form-group">
        <label for="image-plane">Image URL</label>
        <input type="url" class="form-control" id="planeImage" placeholder="Image URL" required value="${planeObject.planeImage}">
      </div>
      <div class="form-group" id="select-plane">
      </div>
      <div class="form-group">
      <class="form-group-label" for="planeMake">Plane Make</class=>
      <input type="text" class="form-control" id="planeMake" placeholder="Plane Make" required value="${planeObject.planeMake}">
    </div>
      <div class="form-group">
        <class="form-group-label" for="planeModel">Plane Model</class=>
        <input type="text" class="form-control" id="planeModel" placeholder="Plane Model" required value="${planeObject.planeModel}">
      </div>
      <div class="form-group">
        <class="form-group-label" for="planeCapacity">Plane Capacity</class=>
        <input type="number" class="form-control" id="planeCapacity" placeholder="Capacity" required value="${planeObject.planeCapacity}">
      </div>
      <button type="submit" id="update-plane--${planeObject.firebaseKey}" class="btn btn-primary">Update Plane</button>
    </form>
  </div>
</div>

    `;
};

export default editPlaneForm;
