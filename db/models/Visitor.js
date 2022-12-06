import mongoose, { Schema } from 'mongoose';

const VisitorSchema = new Schema(
  {
    ip: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  },
);

export default mongoose.models.Visitor || mongoose.model('Visitor', VisitorSchema);
