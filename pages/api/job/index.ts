import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/const/app-const";
import search from "@/Server/Modules/Job/search";
import create from "@/Server/Modules/Job/create";
import edit from "@/Server/Modules/Job/edit";

/**
 * @swagger
 * /api/job:
 *   post:
 *     description: Tạo 1 job mới
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
  res: NextApiResponse
) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  const methods = [
    {
      method: METHOD.POST,
      handler: create,
    },

    {
      method: METHOD.PUT,
      handler: edit,
    },
    {
      method: METHOD.GET,
      handler: search,
    },
  ];

  const handler = methods.find((item) => item.method === req.method)?.handler;
  if (!handler) {
    return res.status(STATUS_CODE.INVALID_METHOD).json({
      ok: false,
      data: null,
      msg: "Invalid Method",
    });
  }
  const response = await handler(req);

  return res.status(response?.status).json(response);
}
