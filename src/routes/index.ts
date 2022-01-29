import { Router } from "express";
import { createUser, deleteUser, getPersonas, getUserById, getUsers, updateUser } from '../controllers/index';

const router = Router();

router.get('/users', getUsers);
router.get('/users/personas', getPersonas);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.put('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;