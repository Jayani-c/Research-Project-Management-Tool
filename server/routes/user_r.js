import express from 'express';

import { getusers, adduser, getuser, updateuser, deleteuser } from '../controllers/user_con.js';

const router = express.Router();

router.get('/', getusers);
router.post('/', adduser);
router.get('/:id', getuser);
router.patch('/:id', updateuser);
router.delete('/:id', deleteuser);


export default router;