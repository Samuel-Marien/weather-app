// const getLocation = () => {
//   //check for browser support first
//   if ('geolocation' in navigator) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//       let myCurrentCoords = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude
//       };
//       // console.log(myCurrentCoords);
//       return myCurrentCoords;
//     });
//   } else {
//     let err = new Error('No browser support for geolocation');
//     return Promise.reject(err);
//   }
// };

// export default getLocation;
