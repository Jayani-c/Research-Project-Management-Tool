import express from 'express';
import mongoose from 'mongoose';

import Evaluations from "../models/evaluation.js";

const router = express.Router();

export const getEvaluations = async (req, res) => {
    try {
        res.status(200).json(await Evaluations.find());
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getEvaluation = async (req, res) => {
    const { id } = req.params;
    try {
        res.status(200).json(await Evaluations.findById(id));
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addEvaluation = async (req, res) => {
    const { studentGroupId, submissionId, marks} = req.body;
    const newEvaluation = new Evaluations(
        {
            studentGroupId,
            submissionId,
            marks
        });

    try {
        await newEvaluation.save();

        res.status(201).json(newEvaluation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateEvaluation = async (req, res) => {
    const { id } = req.params;
    const {  studentGroupId, submissionId, marks } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedEvaluation = { studentGroupId, submissionId, marks, _id: id };

    await Evaluations.findByIdAndUpdate(id, updatedEvaluation, { new: true });

    res.json(updatedEvaluation);
}

export const deleteEvaluation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await Evaluations.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



export default router;