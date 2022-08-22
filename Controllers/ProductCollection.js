import mongoose from "mongoose";
import ProductModuel from "../Models/ProductModuel.js";

export const createProduct = async (req, res) => {
  const newProduct = new ProductModuel(req.body);

  try {
    await newProduct.save();
    res.status(200).json("Post created!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProduct = async (req, res) => {};

export const getAllProduct = async (req, res) => {};

export const updateProduct = async (req, res) => {};

export const deleteProduct = async (req, res) => {};
