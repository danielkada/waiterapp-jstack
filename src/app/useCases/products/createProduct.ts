import { Request, Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response) {
  try {
    const image = req.file?.filename;
    const {
      name,
      description,
      ingredients,
      price,
      category,
    } = req.body;

    const createdProduct = await Product.create({
      name,
      description,
      imagePath: image,
      ingredients: JSON.parse(ingredients),
      price: Number(price),
      category,
    });

    return res.status(201).json(createdProduct);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
