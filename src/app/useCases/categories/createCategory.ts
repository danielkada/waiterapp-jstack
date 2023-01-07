import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body;

  try {
    const createdCategory = await Category.create({
      name,
      icon,
    });

    return res.status(201).json(createdCategory);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}
