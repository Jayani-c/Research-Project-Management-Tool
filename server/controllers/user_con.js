import express from 'express';
import mongoose from 'mongoose';

import users from '../models/users.js';

const router = express.Router();

export const getusers = async (req, res) => { 
    try {
        const user = await users.find();
                
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getuser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await users.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const adduser = async (req, res) => {
    const { user_id, user_role, user_email, user_password} = req.body;

    const newusers = new users({ user_id, user_role, user_email, user_password })

    try {
        await newusers.save();

        res.status(201).json(newusers );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateuser = async (req, res) => {
    const { id } = req.params;
    const {  user_id, user_role, user_email, user_password } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updateduser = {  user_id, user_role, user_email, user_password, _id: id };

    await users.findByIdAndUpdate(id, updateuser, { new: true });

    res.json(updateduser);
}

export const deleteuser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await users.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}



export default router;