import mongoose, { Schema } from 'mongoose';

const SantriSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    nisn: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    birthDate: {
      type: String,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    entryYear: {
      type: Number,
      required: true,
    },
    class: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'Class',
    },
    email: String,
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

SantriSchema.pre(/^find/, function (next) {
  this.populate('class');
  next();
});

export default mongoose.models.Santri || mongoose.model('Santri', SantriSchema);
