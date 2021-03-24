const home = () => {
  document.querySelector('#main-container').innerHTML = `
  <div class="container d-flex justify-content-center flex-column" id="landing-page">
  <div class="jumbotron" style="background:none !important;">
      <h1 class="display-4">WELCOME TO THE PAN AM EXERIENCE!</h1>
      <p class="lead">Relive the magic of flying onboard a luxurious Pan Am 747...</p>
      <p>A fine dining experience in the tradition of Pan Am</p>
      <h4>AVAILABLE ONLY AT AIR HOLLYWOOD</h4>
    </div>
    <div class="container d-flex justify-content-center" style="background-color: black;">
      <iframe width="1260" height="515" src="https://www.youtube.com/embed/xtQWWhYGE1Q?start=5" 
        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen></iframe>
      </iframe>
    </div>
  </div>
</div>`;
};

export default home;
