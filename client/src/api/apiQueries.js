
  const queryUser = async ({ values }) => {
    await fetch(`http://localhost:3001/login/${values.username}/${values.password}`)
    .then(response => response.json())
    .then(data => {return data})
    .catch(err => console.log(err));
  }

  const querySprouts = async (user) => {
    await fetch(`http://localhost:3001/sprouts/${user[0].userId}/`)
    .then(response => response.json())
    .then(data => console.log(data.application_user_id))
    .catch(err => console.log(err));
  }

module.exports = {
  queryUser,
  querySprouts
}