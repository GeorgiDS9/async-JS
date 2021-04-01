// Callbacks - Promises - Async/Await

// Three functions to be executed asynchronously

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing email and passord to get token', email, password);
      resolve({authtoken: 'sa84r8ufdscn'});
    }, 500); // show the token after 0.5 sec
  });
};

const getYouVideos = token => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing token' + token + 'to get videos');
      resolve(['video1', 'video2', 'video3']);
    }, 1000); // show the list of videos after 1 sec
  });
};

const showVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing email and passord to get token', email, password);
      resolve({authtoken: 'sa84r8ufdscn'});
    }, 2000); // show the details of the video after 2 sec
  });
};

