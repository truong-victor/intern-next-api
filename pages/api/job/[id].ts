import { NextApiRequest, NextApiResponse } from "next";
import { METHOD, STATUS_CODE } from "@/const/app-const";
import find from "@/Server/Modules/Job/find";

/**
 * @swagger
 * /api/job/{id}:
 *   get:
 *     description: Lấy thông tin của 1 công việc theo id
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Job id
 *     responses:
 *       200:
 *        description: Object response
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
      method: METHOD.GET,
      handler: find,
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

  if (response) {
    return res.status(STATUS_CODE.OK).json({
      ok: response?.ok ?? false,
      data: response.data,
      msg: response.msg,
    });
  }
  return res
    .status(STATUS_CODE.INTERNAL)
    .json({ ok: false, data: null, msg: "internal" });
}
