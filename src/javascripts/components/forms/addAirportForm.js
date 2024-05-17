const addAirportForm = () => {
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#main-container').innerHTML = '';
  document.querySelector('#form-container').innerHTML = `
 <div class="card bg-light mb-3" style="width: 40em;">
  <div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title"><h3>FROM THE FLIGHT DECK</h3></h5>
    <p class="card-text">Join our team of dedicated crew!</p>
    <form id="submit-airport-form" class="mb-4">
      <div class="form-group">
        <label for="title">Airport Name</label>
        <input type="text" class="form-control" id="airportName" aria-describedby="Airportitle" placeholder="Enter Airport Title" required>
      </div>
      <div class="form-group">
        <label for="image-airport">Image URL</label>
        <input type="url" class="form-control" id="airportImage" placeholder="Image URL" required>
      </div>
      <div class="form-group" id="select-airport">
      </div>
      <div class="form-group">
        <class="form-group-label" for="description">Airport Locations</class=>
        <input type="text" class="form-control" id="airportLocation" placeholder="Airport Description" required>
      </div>
      <button type="submit" id="submit-airport" class="btn btn-primary">Submit Airport</button>
    </form>
  </div>
</div>
    `;
};

export default addAirportForm;
