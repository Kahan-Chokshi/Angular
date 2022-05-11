const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
    },
    location: {
      type: {
        lat: {
          type: Number,
          required: true,
        },
        lng: {
          type: Number,
          required: true,
        },
      },
      required: false,
    },
    stops: {
      type: [
        {
          _id: {
            type: String,
            required: true,
          },
          name: {
            type: String,
            required: true,
          },
        },
      ],
      required: true,
    },
    assignedAccount: {
      type: String,
      required: false,
    },
    isdeleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: { type: Date },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);
module.exports = mongoose.model("Bus", busSchema);
