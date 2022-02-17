import { Router } from "express";

import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../controllers";

const router = Router();

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.post('/users', createUser);

router.put('/users/:id', updateUser);

router.delete('/users/:id', deleteUser);


export default router;