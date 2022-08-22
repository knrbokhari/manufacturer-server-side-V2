import ProductModuel from "../Models/ProductModuel.js";

export const createProduct = async (req, res) => {
  const newProduct = new ProductModuel(req.body);

  try {
    await newProduct.save();
    res.status(200).json("Product Created successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModuel.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

export const getAllProduct = async (req, res) => {
  try {
    const products = await ProductModuel.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  try {
    const product = await ProductModuel.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const product = await ProductModuel.findByIdAndDelete(id);
    res.status(200).json("Product Deleted successfully!");
  } catch (error) {
    res.status(500).json(error);
  }
};
