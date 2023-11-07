import { NextApiRequest } from "next";
import { prisma } from "@/services/prisma";
import { STATUS_CODE } from "@/const/app-const";
import { Job } from "@prisma/client";

export default async function edit(req: NextApiRequest) {
  const { id, ...data } = JSON.parse(req.body) as Partial<Job>;
  try {
    const result = await prisma.job.update({
      where: { id: id },
      data,
    });

    return {
      ok: true,
      data: result,
      msg: "Cập nhật thành công",
      status: STATUS_CODE.OK,
    };
  } catch (error: any) {
    return {
      ok: false,
      msg: error?.message,
      data: null,
      status: STATUS_CODE.INTERNAL,
    };
  }
}
