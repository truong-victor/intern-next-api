import { message } from "antd";
import { STATUS_CODE } from "@/const/app-const";
import { NextApiRequest } from "next";

import { prisma } from "@/services/prisma";
import { tokenUtils } from "@/ultis/BE/token";

interface DataProps {
  note: string;
  startAt: Date;
}

export default async function create(req: NextApiRequest) {
  const data = JSON.parse(req.body) as DataProps;
  try {
    const userToken = tokenUtils.getDecodeToken(req);

    const result = await prisma.job.create({
      data: { ...data, userId: userToken.id },
    });

    return {
      ok: true,
      data: result,
      msg: "Tạo ghi chú công việc mới thành công",
      status: STATUS_CODE.CREATED,
    };
  } catch (error: any) {
    // console.log('🚀 ~ file: create.ts:35 ~ create ~ error:', error)
    return {
      ok: false,
      data: null,
      msg: error?.message,
      status: STATUS_CODE.INTERNAL,
    };
  }
}
