import mongoose, { Schema } from 'mongoose';

const VideoSchema = new Schema({
  video1: {
    url: String,
    title: String,
  },
  video2: {
    url: String,
    title: String,
  },
  video3: {
    url: String,
    title: String,
  },
  video4: {
    url: String,
    title: String,
  },
  video5: {
    url: String,
    title: String,
  },
}, { timestamps: { updatedAt: true, createdAt: false }});

export default mongoose.models.Video || mongoose.model('Video', VideoSchema);
