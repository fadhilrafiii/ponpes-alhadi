import mongoose, { Schema } from 'mongoose';

const ClassSchema = new Schema({
  classYear: {
    type: Number,
    required: true,
  },
  classCode: {
    type: String,
    required: true,
  },
  homeRoomTeacher: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Teacher',
  },
});

ClassSchema.pre('find', (next) => {
  this.populate([
    {
      path: 'homeRoomTeacher',
      transform: (doc) => ({ id: doc._id, fullName: doc.fullName }),
    },
  ]);
  next();
});

ClassSchema.pre('findOne', function (next) {
  this.populate('homeRoomTeacher');
  next();
});

export default mongoose.models.Class || mongoose.model('Class', ClassSchema);
