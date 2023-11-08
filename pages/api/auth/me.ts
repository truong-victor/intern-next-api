import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/const/app-const";
import { prisma } from "@/services/prisma";
import { tokenUtils } from "@/ultis/BE/token";

/**
 * @swagger
 * /api/auth/me:
 *   get:
 *     description: Lấy thông tin user đăng nhập
 *     parameters:
 *       - in: header
 *         name: X-access-token
 *         description: access token của user
 *         required: true
 *         type: string
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
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method !== METHOD.GET) {
    return res.status(STATUS_CODE.INVALID_METHOD).json({
      ok: false,
      data: null,
      msg: "Invalid method",
    });
  }

  const userToken = tokenUtils.getDecodeToken(req);

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userToken.id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (user) {
      return res.status(STATUS_CODE.OK).json({
        ok: true,
        data: { ...user },
        msg: "ok",
      });
    } else {
      return res.status(STATUS_CODE.OK).json({
        ok: false,
        data: null,
        msg: "ok",
      });
    }
  } catch (error) {
    return res
      .status(STATUS_CODE.INTERNAL)
      .json({ ok: false, data: null, msg: "internal" });
  }
}
