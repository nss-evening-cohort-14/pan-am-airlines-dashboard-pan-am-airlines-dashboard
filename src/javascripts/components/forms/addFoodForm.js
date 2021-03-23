const addFoodForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
 <div class="card bg-light mb-3" style="width: 40em;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title"><h3>FROM THE FLIGHT DECK</h3></h5>
    <p class="card-text">Join our team of dedicated crew!</p>
    <form id="add-plane-form" class="mb-4">
      <div class="form-group">
        <label for="title">Entree Item</label>
        <input type="text" class="form-control" id="foodName" aria-describedby="foodTitle" placeholder="Enter Entree Item" required>
      </div>
      <div class="form-group">
        <label for="image-food">Image URL</label>
        <input type="url" class="form-control" id="foodImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-food">
      </div>
      <div class="form-group">
        <class="form-group-label" for="Price">Food Price</class>
        <input type="text" class="form-control" id="foodPrice" placeholder="Food Price" required>
      </div>
      <button type="submit" id="submit-food-btn" class="btn btn-primary">Submit Entree</button>
    </form>
  </div>
</div>
    `;
};

export default addFoodForm;
