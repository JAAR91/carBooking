
export const addCar = (form) => async (dispatch) => {
  const { token } = JSON.parse(sessionStorage.getItem('CarBooking'));
  await fetch('http://127.0.0.1:3000/api/v1/newcar', {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: form,
  }).then((response) => response.json())
    .then((data) => {
      console.log('fetched');
      if (data.code === 201) {
        console.log(data);
      }
    }).catch((error) => {
      console.log(error);
    });
};
