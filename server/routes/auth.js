import express from 'express';
import {page} from '../controllers/showMessageController';

const router = express.Router();

router.get('/:message', page)

module.exports = router;