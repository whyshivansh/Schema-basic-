import mongoose from  "mongoose"

const patientchema = new mongoose.Schema({
  name:{
    type:String,
    requird:true
  },
  diagnosedWith:{
    type:String,
    required:true
  },
  address{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  gender:{
    type:String,
    enum:["M","F","O"],
    required:true
  },
  admittedIn:{
    type:mongoose.Schema.Tupes>OnjectId,
    ref:'Hospital'
  },
},{timestamps:true})


export const Patient = mongoose.model('Patient'.medicalRecordSchema)