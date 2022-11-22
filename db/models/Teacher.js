import mongoose, { Schema } from 'mongoose';

const TeacherSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ['Laki-laki', 'Perempuan'],
      default: 'Laki-laki'
    },
    name: {
      type: String,
      required: true,
    },
    phone: String,
    nip: {
      type: String,
      required: true,
      unique: true,
    },
    email: String,
    password: {
      type: String,
      required: true,
    },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
      },
    ],
  },
  { timestamps: true },
);

TeacherSchema.pre(/^find/, function (next) {
  this.populate('lessons');
  next();
});

export default mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);
