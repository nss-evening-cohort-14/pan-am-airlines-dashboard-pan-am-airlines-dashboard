const navBar = () => {
  document.querySelector('#navigation').innerHTML = `
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-4">
    <div class="container"><img src="https://i.pinimg.com/originals/6c/2c/d2/6c2cd275417d3282fb801e25464f98f9.png" style="width: 3em; margin-bottom: 1em; background:none !important;" alt="">
        <a class="navbar-brand title" href="#" id="home-screen">Pan Am Airlines</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item"> <a class="nav-link" href="#" id="crew">Crew</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="planes">Planes</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="airport">Airports</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="foodService">Food Service</a></li>
            <li class="nav-item"><a class="nav-link" href="#" id="baggage">Baggage</a></li>
            <li><inputclass="form-control mr-sm-2"id="search"placeholder="Search"aria-label="Search"/></li>
          </ul>
          <div id="logout-button"></div>
        </div>
      </nav>
     `;
};

export default navBar;
