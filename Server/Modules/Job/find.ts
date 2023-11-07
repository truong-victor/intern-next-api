import { message } from "antd";
import { NextApiRequest } from "next";
import { STATUS_CODE } from "@/const/app-const";

import { prisma } from "@/services/prisma";

export default async function find(req: NextApiRequest) {
  const id = req.query.id as string;
  try {
    const result = await prisma.job.findUnique({
      where: {
        id: Number(id),
      },
    });

    return {
      ok: true,
      data: result,
      msg: "ok",
      status: STATUS_CODE.OK,
    };
  } catch (err: any) {
    return {
      ok: false,
      data: null,
      msg: err?.message,
      status: STATUS_CODE.INTERNAL,
    };
  }
}
