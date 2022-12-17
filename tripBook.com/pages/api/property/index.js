import { connect } from "../../../db.connect";
import { PropertyModel } from "../../../models/property.model";

export default async function handler(req, res) {
  const { method } = req;
  const { city, sortBy } = req.query;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "GET") {
    try {
      let properties = await PropertyModel.find({ city });

      if (sortBy) {
        switch (sortBy) {
          case "TopReviewed":
          case "TopPicks":
             {
            properties = await PropertyModel.find({ city }).sort({
              reviews: -1,
            });

            break;
          }

          case "HighestRating": {
            properties = await PropertyModel.find({ city }).sort({
              rating: -1,
            });

            break;
          }

          case "LowestRating": {
            properties = await PropertyModel.find({ city }).sort({ rating: 1 });

            break;
          }

          case "LowPrice": {
            properties = await PropertyModel.find({ city }).sort({
              price: 1,
            });

            break;
          }

          case "HighPrice": {
            properties = await PropertyModel.find({ city }).sort({
              price: -1,
            });

            break;
          }

          default:
            break;
        }
      }

      res.status(200).send({ properties });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }

  if (method === "POST") {
    try {
      const properties = await PropertyModel.create(req.body);
      res
        .status(201)
        .send({ message: "property added successfully", properties });
    } catch (e) {
      res.status(400).send(e.message);
    }
  }
}
