import mongoose from 'mongoose';

const evaluationSchema = mongoose.Schema({
    studentGroupId: {
        type: String,
        required: true
    },
    submissionId: {
        type: String,
        required: true
    },
    marks: {
        type: String,
        required: true
    }
})

const Evaluations = mongoose.model('evaluation', evaluationSchema);

export default Evaluations;