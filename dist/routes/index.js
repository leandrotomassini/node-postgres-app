"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/users', controllers_1.getUsers);
router.get('/users/:id', controllers_1.getUserById);
router.post('/users', controllers_1.createUser);
router.put('/users/:id', controllers_1.updateUser);
router.delete('/users/:id', controllers_1.deleteUser);
exports.default = router;
