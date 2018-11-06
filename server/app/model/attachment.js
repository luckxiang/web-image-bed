module.exports = app => {
  const mongoose = app.mongoose

  const AttachmentSchema = new mongoose.Schema({
    extname: { type: String },
    url: { type: String },
    filename: { type: String },
    extra: {  type: String  },
    createdAt: { type: Date, default: Date.now },
    createdUser:{ type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  })
  
  return mongoose.model('Attachment', AttachmentSchema)

}