const editBaggageForm = (baggageObject) => {
  document.querySelector('#form-container').innerHTML = `
    <div class="card bg-light mb-3" style="width: 40em;">
    <div class="card-header"></div>
    <div class="card-body">
      <h5 class="card-title"><h3>Pan Am Claims Department</h3></h5>
      <p class="card-text">Exclusive First & Clipper class check-in service.
      <form id="submit-baggage-form mx-auto" class="mb-4">
      <div class="form-group">
        <label for="baggageNumber"></label>
        <input type="text" class="form-control" id="baggageNumber" placeholder="*Baggage Number #0008975741" required value="${baggageObject.baggageNumber}">
      </div>
      <div class="form-group">
        <label for="baggageWeight"></label>
        <input type="text" class="form-control" id="baggageWeight" placeholder="*Baggage Weight LBS" required value="${baggageObject.baggageWeight}">
      </div>
      <div class="form-group">
        <label for="baggageImage"></label>
        <input type="url" class="form-control" id="baggageImage" placeholder="*Baggage Image Required" required value="${baggageObject.baggageImage}">
      </div>
      <button type="submit" id="update-baggage-btn--${baggageObject.firebaseKey}" class="btn btn-success">Update Bag!</button>
    </form>
    </div>
  </div>`;
};

export default editBaggageForm;
