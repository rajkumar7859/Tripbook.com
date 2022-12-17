import { model, Schema, models } from "mongoose";

const PropertySchema = new Schema({
    redirecturl: {
        type: String,
        required: true
    },
    imagescr: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    TravelText: {
        type: String,
        required: true
    },
    TravelText2: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    ratingStatus: {
        type: String,
        required: true
    },
    reviews: {
        type: String,
    },
    price: {
        type: String,
        required: true
    }
});

const PropertyModel = models.property || model("property", PropertySchema);
export { PropertyModel };