import { NextApiRequest } from "next";
import { STATUS_CODE } from "@/const/app-const";
import { pickBy, identity } from "lodash";
import { prisma } from "@/services/prisma";
export default async function search(req: NextApiRequest) {
  // const lowercaseLabel = label?.toString()?.toLowerCase() ?? ''
  const cleanedObject = pickBy(req.query, identity) as any;

  const { page = 1, pageSize = 10, ...elseQuery } = cleanedObject;
  try {
    const result = await prisma.job.findMany({
      where: {
        ...elseQuery,
      },
      skip: (Number(page) - 1) * Number(pageSize),
      take: Number(pageSize),
    });

    const totalCount = await prisma.job.count({
      where: {
        ...elseQuery,
      },
    });

    return {
      ok: true,
      data: {
        dataTable: result,
        paging: {
          page: Number(page),
          pageSize: Number(pageSize),
        },
        totalCount,
      },
      msg: "OK",
      status: STATUS_CODE.OK,
    };
  } catch (error: any) {
    return {
      ok: false,
      data: JSON.stringify(error),
      msg: error?.message,
      status: STATUS_CODE.INTERNAL,
    };
  }
}
