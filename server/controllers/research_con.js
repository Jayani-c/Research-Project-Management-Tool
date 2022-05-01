import express from 'express';
import mongoose from 'mongoose';
import researchProject from '../models/researchProject.js';

const router = express.Router();

export const getresearchProjects = async (req, res) => { 
    try {
        const rp = await researchProject.find();
                
        res.status(200).json(rp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getresearchProject = async (req, res) => { 
    const { id } = req.params;

    try {
        const rp = await researchProject.findById(id);
        
        res.status(200).json(rp);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addresearchProject = async (req, res) => {
    const {researchgrp_id, research_name, requested_supervisor, topic_approval, supervisor_approval} = req.body;

    const newresearchProjects = new researchProject({researchgrp_id, research_name, requested_supervisor, topic_approval, supervisor_approval})

    try {
        await newresearchProjects.save();

        res.status(201).json(newresearchProjects );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatresearchProject = async (req, res) => {
    const { id } = req.params;
    const {researchgrp_id, research_name, requested_supervisor, topic_approval, supervisor_approval} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No researchProject with id: ${id}`);

    const updatresearchProject = {researchgrp_id, research_name, requested_supervisor, topic_approval, supervisor_approval, _id: id };

    await researchProject.findByIdAndUpdate(id, updatresearchProject, { new: true });

    res.json(updatresearchProject);
}

export const deleteresearchProject = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await researchProject.findByIdAndRemove(id);

    res.json({ message: "ResearchProject deleted successfully." });
}



export default router;