import mongoose, { Schema } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2'

const taskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    index: true,
  },
  description: {
    type: String,
    trim: true,
  },
  dueDate: {
    type: Date
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'due'],
    default: 'pending',
  }
}, { timestamps: true })

taskSchema.plugin(mongooseAggregatePaginate)

export const Task = mongoose.model('Task', taskSchema)
