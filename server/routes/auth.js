import express from 'express';
import {page, register} from '../controllers/authController';

const router = express.Router();

router.get('/:message', page)

router.post('/register', register)

module.exports = router;