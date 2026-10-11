import ErrorHandler from "../error/error.js";
import {Reservation} from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { FirstName, LastName, email, phoneNumber, time, date } = req.body;

  if (!FirstName || !LastName || !email || !phoneNumber || !time || !date) {
    return next(new ErrorHandler("Please fill all the fields", 400));
  }

  try {
   await Reservation.create({
  FirstName,
  LasttName: LastName,
  email,
  phoneNumber,
  time,
  date,
});

    res.status(200).json({
      success: true,
      message: "Reservation sent successfully",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map((err) => err.message);

      return next(new ErrorHandler(validationErrors.join(", "), 400));

    }

    return next(error);
  }
};

