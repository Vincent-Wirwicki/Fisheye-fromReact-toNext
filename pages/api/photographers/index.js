import pdata from "../../../data.json";

export default function handler(req, res) {
  const { photographers } = pdata;
  res.status(200).json(photographers);
}
