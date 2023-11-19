import express from "express";
import {createConnectAccount} from '../controllers/stripe/stripeController';
import {requireSignin} from '../middlewares'

const router = express.Router();

router.post('/create-connect-account', requireSignin, createConnectAccount)

module.exports = router;