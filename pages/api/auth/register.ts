import { message } from "antd";
import bcrypt from "bcrypt";
import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/const/app-const";
import { prisma } from "@/services/prisma";

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     description: Tạo tài khoản user mới
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *               type: object
 *               properties:
 *                 email:
 *                   type: string
 *                   example: "truongpham2412.nd@gmail.com"
 *                 password:
 *                   type: string
 *                   example: "123"
 *
 *     responses:
 *       200:
 *        description: Object response
 *        content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: number
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: "truongpham2412.nd@gmail.com"
 *                 name:
 *                   type: string
 *                   example: "Pham Van Truong"
 */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method !== METHOD.POST) {
    return res.status(STATUS_CODE.INVALID_METHOD).json({
      ok: false,
      data: null,
      msg: "Invalid method",
    });
  }

  const { name, email, password } = req.body as any;

  const findExisted = await prisma.user.findFirst({
    where: {
      email: email.toLowerCase(),
    },
  });
  if (findExisted !== null) {
    return res.status(STATUS_CODE.OK).json({
      ok: false,
      data: null,
      msg: "Email đã được sử dụng",
    });
  }

  try {
    const encryptedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
      },
    });

    return res.status(STATUS_CODE.CREATED).json({
      ok: true,
      data: null,
      msg: "Đăng ký thành công",
    });
  } catch (error: any) {
    return res.status(STATUS_CODE.INTERNAL).json({
      ok: false,
      data: null,
      msg: "Không ổn rồi các bạn ơi, có gì đó sai sai rồi",
    });
  }
}
