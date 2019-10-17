document.addEventListener('DOMContentLoaded', (event)=>{
  main();
})

const userURL = `https://api.github.com/search/users?q=octocat`;

let searchURL = `https://api.github.com/search/users?q=${formInput}`

function main(){
  listenToFormInput();
  // grabUserData();
  // clickOnName();
}

function listenToFormInput (){

  let gitHubForm = document.getElementById("github-form");

  gitHubForm.addEventListener('submit',(event) => {
    event.preventDefault();
    
    let userListId = document.getElementById("user-list");
   


    let formInput = event.target.search.value;
    // how to i take the input and put it into the search URL
    let searchURL = `https://api.github.com/search/users?q=${formInput}`
  
    fetch(searchURL)
    .then(res => res.json())
    .then(specificSearchData =>{
      checkPage(specificSearchData)
      iterateOverUsersBySearch(specificSearchData)
    })
  })
}


function iterateOverUsersBySearch(specificSearchData){
  for (let i =0; i < specificSearchData['items'].length; i++){
    let individualAccount = specificSearchData['items'][i]
    displayUserData(individualAccount); // sending over to function display from the level in which you want to pull data from
  }
}


// function grabUserData(){
//  //fetch get request on data
//   fetch(userURL)
//   .then(res => res.json())
//   .then(returnedJson => iterateThroughUserData(returnedJson))
// }

// function iterateThroughUserData(userData){
//   // console.log(userData['items'])
//   // console.log(userData['items'][i])
//   for (let i = 0; i < userData['items'].length; i++){
//     // wasnt catching that i had to iterate over the items array and not the entire datastructure.
//     // displayUserData(userData['items'][i])
//     // dont want user data to appear unless it is searched. 
//   }
// }

function displayUserData (individualAccount){
  // console.log("individualAccount",individualAccount)  //showing individual accounts based on the search which is stellar.
  //get their username, avatar and link to their profil

  let userList = document.getElementById("user-list")
  // console.log("individualAccount", individualAccount['html_url'])
  
  let userName = individualAccount.login;
  let userNameDiv = document.createElement('div');
  userNameDiv.innerText = userName;

  let userURL = individualAccount['avatar_url'];
  let userUrlImg = document.createElement('img');
  userUrlImg.setAttribute('src',userURL);
  userUrlImg.setAttribute('alt',userName);
  // userUrlImg.setAttribute('width',;
  userUrlImg.innerText = userURL;
  

  let userHtml = individualAccount['html_url'];
  let userHtmlDiv = document.createElement('div');
  userHtmlDiv.innerText = userHtml;

userList.append(userNameDiv,userUrlImg,userHtmlDiv);

}


function checkPage(specificSearchData){
  let userList = document.getElementById("user-list");
  while(userList.firstChild){
    userList.removeChild(userList.firstChild);
  }
}

//get their username, avatar and link to their profil

  // let userList = document.getElementById("user-list");
  // let userName = individualUser[i]['login'];
  // console.log("userName", userName )
  // let userId = individualUser['items'].id; 

  // // console.log("individualUser we are at this point",individualUser['items']['login']);
  // let userAvatar = individualUser['items'].avatar_url;
  // let userAvatarImage = document.createElement("img");

  // let imageUniqueId = document.createElement('id');
  // imageUniqueId.innerText = userId;

  // let userProfileLink = document.createElement("div");
  // userProfileLink.innerText = individualUser['items'].html_url;

  // let userLi = document.createElement("li");
  // userLi.innerText = userName;
  // userList.append(userLi,userProfileLink);


  // let userList = document.getElementById("user-list");
  // let userName = individualUser['items'].login;
  // let userId = individualUser['items'].id; 

  // console.log("individualUser we are at this point",individualUser['items']);

  // let userAvatar = individualUser['items'].avatar_url;
  // let userAvatarImage = document.createElement("img");

  // let imageUniqueId = document.createElement('id');
  // imageUniqueId.innerText = userId;
  
  
  // userAvatarImage.setAttribute('src',individualUser.avatar_url);

  // userAvatarImage.setAttribute('alt',individualUser.login);
  // userAvatarImage.innerText = userAvatar;
  // userAvatarImage.append(imageUniqueId);

  // pulled out userAvatarImage from above



function clickOnName(){

}
