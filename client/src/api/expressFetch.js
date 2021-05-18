export const getExpressUser = async (values) => {
  await fetch(
    `http://localhost:3001/login/${values.username}/${values.password}`
  )
    .then((response) => response.json())
    .catch((err) => console.log(err));
};
