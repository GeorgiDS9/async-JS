// Callbacks - Promises - Async/Await

// Define three functions to be executed asynchronously

const loginUser = (email, password) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing email and passord to get token ', email, password);
      resolve({authtoken: 'sa84r8ufdscn'});
    }, 500); // show the token after 0.5 sec
  });
};

const getYourVideos = token => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing token ' + token + ' to get videos');
      resolve(['video1', 'video2', 'video3']);
    }, 1000); // show the list of videos after 1 sec
  });
};

const getVideoDetails = (video) => {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      console.log('Processing video to get details ', video);
      resolve({duration: '27 min', likes: '2040', dislikes: '83'});
    }, 1500); // show the details of the video after 1.5 sec
  });
};

// Call the functions (with promises)
// loginUser("jane doe", "jane@janedoe.com")
// .then(token => getYourVideos(token))
// .then(videos => getVideoDetails(videos[1]))
// .then(result => console.log(result))

// Call the functions (with async/await)
const alltogether = async () => {
  const token = await loginUser ("jane doe", "jane@janedoe.com")
  const video = await getYourVideos('abc123')
  const videoDetails = await getVideoDetails('videos[1]')
  console.log(videoDetails)
}

alltogether();
