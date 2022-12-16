import { connect } from "../../../db.connect";
import { PropertyModel } from "../../../models/property.model";

export default async function handler(req, res) {
  const { method } = req;
  const { city, limit, page, sortBy, order } = req.query;

  try {
    await connect();
  } catch (e) {
    console.log(e);
  }

  if (method === "GET") {
    try {
      let properties = await PropertyModel.find({ city })
        .limit(limit)
        .skip((page - 1) * limit);

      if (sortBy) {
        switch (sortBy) {
          case "reviews": {
            properties = await PropertyModel.find({ city })
              .limit(limit)
              .skip((page - 1) * limit)
              .sort({ reviews: -1 });

              break;
          }

          case "rating": {
            properties = await PropertyModel.find({ city })
              .limit(limit)
              .skip((page - 1) * limit)
              .sort({ rating: order });

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
