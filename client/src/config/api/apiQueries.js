
  export const queryUser = async (values) => {
    await fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
    .then(response => response.json())
    .catch(err => console.log(err));
  }

  export const querySprouts = async (user) => {
    await fetch(`http://localhost:3001/sprouts/${user[0].userId}/`)
    .then(response => response.json())
    .catch(err => console.log(err));
  }