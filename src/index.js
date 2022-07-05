let addToy = false;

function renderCard( toyObject ) {
  const h2 = document.querySelector( 'h2' )
  const image = 
  const likes = 
  h2.textContent = toyObject.name.textContent
  secretContainer.append( "#toy-collection" ) 
}
function 

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
fetch("http://localhost:3000/toys")
.then (response => response.json())
.then (toysArray => {
  toysArray.forEach(toyObject => {
    renderCard()
    
    // div#toy-collection.append()
     
  });

})
  // for(let item in toys){
    // let name = name
    // let image = html url tag
    // let id = id

  // }

});


// event.preventDefault()  "this is a secret tool that will help us later

// {/* <div class="card">
//   <h2>Woody</h2>
//   <img src="[toy_image_url]" class="toy-avatar" />
//   <p>4 Likes</p>
//   <button class="like-btn" id="[toy_id]">Like ❤️</button>
// </div> */}