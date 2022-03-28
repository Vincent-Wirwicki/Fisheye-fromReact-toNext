import pdata from "../../../data.json";

export default function handler({ query: { id } }, res) {
  const { photographers } = pdata;
  const pfinder = photographers.filter(photographer => photographer.id == id);

  pfinder.length > 0
    ? res.status(200).json(pfinder)
    : res.status(404).json({ message: `photographer : ${id} not found` });
}
