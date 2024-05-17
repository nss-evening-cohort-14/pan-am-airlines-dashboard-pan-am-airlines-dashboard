const domBuilder = () => {
  document.querySelector('#app').innerHTML = `
  <div id="navigation"></div>
  <div id="boards"></div>
  <center><div id="form-container"></div></center>
   <div id="add-button"></div>
   <div id="modal"></div>
   <div id="main-container"></div>
  `;
};
export default domBuilder;
