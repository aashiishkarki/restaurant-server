import express from "express";
import { sendReservation } from "../controller/reservation.js";

const routes = express.Router();

routes.post("/send", sendReservation);

export default routes;