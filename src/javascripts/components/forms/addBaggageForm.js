const addBaggageForm = () => {
  document.querySelector('#boards').innerHTML = '';
  document.querySelector('#add-button').innerHTML = '';
  document.querySelector('#form-container').innerHTML = '';

  document.querySelector('#form-container').innerHTML = `
    <div class="card bg-light mb-3" style="width: 40em;">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title"><h3>Pan Am Claims Department</h3></h5>
      <p class="card-text">Exclusive First & Clipper class check-in service.</p>
      <form id="submit-baggage-form mx-auto" class="mb-4">
      <div class="form-group">
        <label for="baggageNumber">Baggage #</label>
        <input type="text" class="form-control" id="baggageNumber" placeholder="Baggage Number" required>
      </div>
      <div class="form-group">
        <label for="baggageWeight">Baggage Weight</label>
        <input type="text" class="form-control" id="baggageWeight" placeholder="Baggage Weight" required>
      </div>
      <div class="form-group">
        <label for="baggageImage">Image URL</label>
        <input type="url" class="form-control" id="baggageImage" placeholder="Baggage Image" required>
      </div>
      <button type="submit" id="submit-baggage-btn" class="btn btn-primary">Submit Bag</button>
    </form>
    </div>
  </div>`;
};

export default addBaggageForm;
