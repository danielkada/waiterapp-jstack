import { Request, Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response) {
  const { name, icon } = req.body;

  const createdCategory = await Category.create({
    name,
    icon,
  });

  return res.json(createdCategory);
}
