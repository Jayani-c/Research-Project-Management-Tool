import express from 'express';
import {addEvaluation, deleteEvaluation, getEvaluations, updateEvaluation} from "../controllers/evaluation_con.js";

const router = express.Router();
router.get('/',getEvaluations);
router.post('/', addEvaluation);
router.get('/:id', getEvaluations );
router.patch('/:id', updateEvaluation);
router.delete('/:id',  deleteEvaluation);


export default router;