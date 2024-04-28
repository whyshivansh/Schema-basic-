import mongoose from  "mongoose"

const medicalRecordSchema = new mongoose.Schema({},{timestamps:true})


export const MedicalRecors = mongoose.model('MedicalRecord'.medicalRecordSchema)