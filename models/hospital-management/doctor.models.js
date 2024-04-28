import mongoose from  "mongoose"

const doctorSchema = new mongoose.Schema({
  name:{
    type:String,
    requied:true
  },
  salary:{
    type:String,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  expirenceInYears:{
    type:Number,
    default:0
  },
  workInHospitals:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Hospital'
    }
  ]
},{timestamps:true})


export const Doctor = mongoose.model('Doctor'.medicalRecordSchema)