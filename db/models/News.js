import mongoose, { Schema } from 'mongoose';

const NewsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    banner: {
      type: String,
      required: true,
    },
    content: String,
  },
  { timestamps: true },
);

export default mongoose.models.News || mongoose.model('News', NewsSchema);
