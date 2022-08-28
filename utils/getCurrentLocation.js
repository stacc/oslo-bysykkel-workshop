export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          long: position.coords.longitude,
        };
        resolve(location);
      },
      (err) => reject(err)
    );
  });
