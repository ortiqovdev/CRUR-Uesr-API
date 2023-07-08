import { Request, Response, NextFunction } from "express";
import {
  createAcc,
  User,
  getAll,
  deleteUser,
  updateStatus,
  updateName
} from "../service/service";

export async function getIndex(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const users: any = await getAll();

  res.render("partials/index", {
    users,
  });
}

export async function postLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const body = req.body as User;
    await createAcc(body);
    const users: any = await getAll();

    res.render("partials/index", {
      users,
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteUserId(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const id = +req.params.id;
    await deleteUser(id);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

export async function statusInfo(req: Request, res: Response) {
  const { id, status } = req.params;
  await updateStatus(+id, status);
  res.redirect("/");
}

export async function editUserId(req: Request, res: Response) {
  const { id } = req.params;
  // await updateName(+id)
  res.redirect("/");
}