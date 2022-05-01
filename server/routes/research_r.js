import express from 'express';

import { getresearchProjects, addresearchProject, getresearchProject, updatresearchProject, deleteresearchProject } from '../controllers/research_con.js';

const router = express.Router();

router.get('/', getresearchProjects);
router.post('/', addresearchProject);
router.get('/:id', getresearchProject);
router.patch('/:id', updatresearchProject);
router.delete('/:id', deleteresearchProject);


export default router;