import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let newName = "Lucy";
  if (variables.name !== null) newName = `${variables.name}`;

  let newLastName = "Boilett";
  if (variables.lastname !== null) newLastName = `${variables.lastname}`;

  let job = "Web Developer";
  switch (job) {
    case "Floor Planner":
      job = `${variables.role}`;
      break;
  }
  //if (variables.role == "Web Developer") job = `${variables.role}`;
  if (variables.role == "Floor Planner") job = `${variables.role}`;
  if (variables.role == "Technical Writter") job = `${variables.role}`;

  let mediasPosition = `class="position-right"`;

  if (variables.socialMediaPosition == "position-left")
    mediasPosition = `class="position-left"`;

  let twitterName = "https://twitter.com/4geeksacademy";
  if (variables.twitter !== null) twitterName = `${variables.twitter}`;

  let githubName = "https://github.com/4geeksacademy";
  if (variables.github !== null) githubName = `${variables.github}`;

  let linkedinName = "https://linkedin.com/4geeksacademy";
  if (variables.linkedin !== null) linkedinName = `${variables.linkedin}`;

  let instagramName = "https://instagram.com/4geeksacademy";
  if (variables.instagram !== null) instagramName = `${variables.instagram}`;

  let chosenCity = "Miami";
  switch (chosenCity) {
    case "Miami":
      chosenCity = `${variables.city}`;
      break;
    case "Munich":
      chosenCity = `${variables.city}`;
      break;
    case "Caracas":
      chosenCity = `${variables.city}`;
      break;
    case "Toronto":
      chosenCity = `${variables.city}`;
      break;
  }

  let chosenCountry = "USA";
  switch (chosenCountry) {
    case "USA":
      chosenCountry = `${variables.country}`;
      break;
    case "Germany":
      chosenCountry = `${variables.country}`;
      break;
    case "Canada":
      chosenCountry = `${variables.country}`;
      break;
    case "Venezuela":
      chosenCountry = `${variables.country}`;
      break;
  }

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${newName} ${newLastName}</h1>
          <h2>${job}</h2>
          <h3>${variables.city}, ${variables.country}</h3>
          <ul ${mediasPosition}>
            <li><a href="${variables.twitter}"><i class="fab fa-twitter"></i></a></li>
            <li><a href="${variables.github}"><i class="fab fa-github"></i></a></li>
            <li><a href="${variables.linkedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da",
    // this is the url for the profile avatar
    avatarURL: "https://randomuser.me/api/portraits/women/42.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: "alesanchezr",
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
