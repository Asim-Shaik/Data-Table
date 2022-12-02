import fetch from "node-fetch";

const getController = async function (req, res) {
  await fetch(`https://api.spacexdata.com/v3/capsules`)
    .then((response) => response.json())
    .then((data) => res.status(200).json(data));
};

export default getController;
