import BookingModuel from "../Models/BookingModuel.js";
import ProductModuel from "../Models/ProductModuel.js";
import PaymentModuel from "../Models/PaymentModuel.js";

// Insert a booking
export const createBooking = async (req, res) => {
  const data = req.body;

  const query = {
    email: data.email,
    productName: data.productName,
    paid: false,
  };

  // check unpaid booking
  const exists = await BookingModuel.findOne(query);
  if (exists) {
    return res.status(409).json({ success: false });
  }
  const result = new BookingModuel(data);

  try {
    await result.save();

    // update product quantity
    const product = await ProductModuel.findByIdAndUpdate(
      data.productId,
      { quantity: data.quantity - data.order },
      { new: true }
    );
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json(error);
  }
};

// get a booking by id
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const userBooking = await BookingModuel.findById(id);
    res.status(200).json(userBooking);
  } catch (error) {
    res.status(500).json(error);
  }
};

// find order for singel person booking
export const userBooking = async (req, res) => {
  const user = req.user;
  const email = req.params.email;

  try {
    if (user === email) {
      const bookings = await BookingModuel.find({ email: user });
      res.status(200).json(bookings);
    } else {
      res.status(403).json("Access Denied!");
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

// get all booking
export const GetAllBooking = async (req, res) => {
  try {
    const bookings = await BookingModuel.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json(error);
  }
};

// booking after payment
export const bookingAfterPayment = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const result = new PaymentModuel(data);

  try {
    const updatedBooking = await BookingModuel.findByIdAndUpdate(id, {
      paid: true,
      transactionId: data.transactionId,
    });

    await result.save();
    res.status(200).json(updatedBooking);
  } catch (error) {
    res.status(500).json(error);
  }
};

// shipping
export const shipping = async (req, res) => {
  const id = req.params.id;

  try {
    const updatedBooking = await BookingModuel.findByIdAndUpdate(id, {
      status: true,
    });

    res.status(200).json("Product Shipped!");
  } catch (error) {
    res.status(500).json(error);
  }
};

// cancel Booking
export const cancelBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const booking = await BookingModuel.findById(id);
    const product = await ProductModuel.findById(booking.productId);

    const updateProduct = await ProductModuel.findByIdAndUpdate(
      booking.productId,
      {
        quantity: product.quantity + booking.order,
      },
      { new: true }
    );
    const deleteBooking = await BookingModuel.findByIdAndDelete(id);
    res.status(200).json("Cancel Successful!");
  } catch (error) {
    res.status(500).json(error);
  }
};
