import { media } from "../../../data.json";

export default function handler(req, res) {
  // const { media } = mData;
  res.status(200).json(media);
}
