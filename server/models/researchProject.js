import mongoose from 'mongoose';

const researchProjectSchema = mongoose.Schema({
   
    researchgrp_id: {
        type: String,
        required: true
    },
    research_name: {
        type: String,
        required: true   
    },
    requested_supervisor: {
        type: String,
        required: true   
    },
    topic_approval: {
        type: String,
        required: true   
    },
    supervisor_approval: {
        type: String,
        required: true   
    }
})

var researchProject = mongoose.model('researchProject', researchProjectSchema);

export default researchProject;