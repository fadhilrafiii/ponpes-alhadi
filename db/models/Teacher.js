import mongoose, { Schema } from 'mongoose';

const TeacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      require: true,
      enum: ['Laki-laki', 'Perempuan'],
      default: 'Laki-laki',
    },
    nip: {
      type: String,
      required: true,
      unique: true,
    },
    phone: String,
    entryYear: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    birthDate: {
      type: String,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    lessons: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Lesson',
        required: false,
        default: [],
      },
    ],
  },
  { timestamps: true },
);

// TeacherSchema.pre(/^find/, function (next) {
//   this.populate('lessons');
//   next();
// });

export default mongoose.models.Teacher || mongoose.model('Teacher', TeacherSchema);
