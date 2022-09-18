import mongoose, { Schema, model, Model } from "mongoose";
import { IProduct } from "../interfaces";

const productSchema = new Schema(
  {
    description: { type: String, requires: true },
    images: [{ type: String }],
    inStock: { type: Number, requires: true, default: 0 },
    price: { type: Number, requires: true, default: 0 },
    sizes: [
      {
        type: String,
        enum: {
          values: ["XS", "S", "M", "L", "XL", "XXL", "XXXL"],
          message: "{VALUE} is not a valid size",
        },
      },
    ],
    slug: { type: String, requires: true, unique: true },
    tags: [{ type: String }],
    title: { type: String, requires: true },
    type: {
      type: String,
      enum: {
        values: ["shirts", "pants", "hoodies", "hats"],
        message: "{VALUE} is not a valid type",
      },
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "{VALUE} is not a valid type",
      },
    },
  },
  {
    timestamps: true,
  }
);



//TODO Creat indice

const Product:Model<IProduct>


