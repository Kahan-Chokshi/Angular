const mongoose = require("mongoose");

const busStopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
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
module.exports = mongoose.model("BusStop", busStopSchema);
