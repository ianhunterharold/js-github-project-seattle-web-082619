document.addEventListener('DOMContentLoaded', (event)=>{
  main();
})

const userURL = `https://api.github.com/search/users?q=octocat`;

function main(){
  listenToFormInput();
  grabUserData();
  clickOnName();
}

function listenToFormInput (input){

  let gitHubForm = document.getElementById("github-form");

  gitHubForm.addEventListener('submit',(event) => {
  event.preventDefault();
    console.log("clicked in teh button")
  let formInput = event.target.search.value;

  fetch(userURL)
  .then(res => res.json())
  .then(returnedJson => iterateOverUsersBySearch(returnedJson))

  
  })

}
// pausing for the time being.
function iterateOverUsersBySearch(users){
  for (let i =0; i < users.length; i++){
    console.log("did we get to this point")
  }
}



function grabUserData(){
 //fetch get request on data
  fetch(userURL)
  .then(res => res.json())
  .then(returnedJson => iterateThroughUserData(returnedJson))
}

function iterateThroughUserData(userData){
  // console.log(userData['items'])
  // console.log(userData['items'][i])
  for (let i = 0; i < userData['items'].length; i++){
    // wasnt catching that i had to iterate over the items array and not the entire datastructure.
    displayUserData(userData['items'][i])
  }
}

function displayUserData (individualUser){
//get their username, avatar and link to their profil
// console.log('individual users',individualUsers);
  let userList = document.getElementById("user-list");
  let userName = individualUser.login;
  let userId = individualUser.id; 


  let userAvatar = individualUser.avatar_url;
  let userAvatarImage = document.createElement("img");

  let imageUniqueId = document.createElement('id');
  imageUniqueId.innerText = userId;
  

  userAvatarImage.setAttribute('src',individualUser.avatar_url);
  userAvatarImage.setAttribute('alt',individualUser.login);
  userAvatarImage.innerText = userAvatar;
  userAvatarImage.append(imageUniqueId);

  let userProfileLink = document.createElement("div");
  userProfileLink.innerText = individualUser.html_url;

  

  let userLi = document.createElement("li");
  userLi.innerText = userName;
  userList.append(userLi,userAvatarImage,userProfileLink);

}

function clickOnName(){

}
