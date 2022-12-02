const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const baseUrl = "https://reqres.in/api/users";

exports.getUsers = async (req, res) => {
  const { page } = req.query;
  const url = `${baseUrl}?page=${page}`;
  const options = {
    method: "GET",
  };
  // promise syntax
  fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  const url = `${baseUrl}/${id}`;
  const options = {
    method: "GET",
  };
  // promise syntax
  fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error("error:" + err));
  try {
    let response = await fetch(url, options);
    response = await response.json();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: `Internal Server Error.` });
  }
};
