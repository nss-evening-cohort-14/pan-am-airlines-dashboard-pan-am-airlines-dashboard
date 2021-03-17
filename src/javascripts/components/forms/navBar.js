const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-4">
        <a class="navbar-brand title" href="#">Welcome To Pan Am Airlines</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="#" id="crew">Crew
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="planes">Planes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="airport">Airports</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="foodService">Food Service</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" id="baggage">Baggage</a>
            </li>
            <li>
            <input
              class="form-control mr-sm-2"
              id="search"
              placeholder="Search"
              aria-label="Search"
            />
            </li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
      <div class="col" id="footer">
      </div>
    `;
};

export default navBar;
