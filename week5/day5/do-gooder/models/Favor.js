const { model, Schema } = require("mongoose");

const favorSchema = new Schema(
  {
    needy_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    do_gooder_id: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    starting_point: {
      type: {
        address: {
          type: String,
          require: true
        },
        coordinates: {
          type: [Number],
          require: true
        }
      },
      require: true
    },
    ending_point: {
      type: {
        address: {
          type: String,
          require: true
        },
        coordinates: {
          type: [Number],
          require: true
        }
      },
      require: true
    },
    description: {
      type: String,
      required: true
    },
    round_trip: {
      type: Boolean,
      required: true
    },
    isActive: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model("Favor", favorSchema);
