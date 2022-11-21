import mongoose, { Schema } from 'mongoose';

const LessonSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  class: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Class',
  },
});

LessonSchema.pre(/^find/, function (next) {
  this.populate('class');
  next();
});

export default mongoose.models.Lesson || mongoose.model('Lesson', LessonSchema);
