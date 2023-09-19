import express from 'express';
import {page} from '../controller/showMessageController';

const router = express.Router();

router.get('/:message', page)

module.exports = router;