import { TOKEN_KEY } from "@/const/app-const";
import { DecodeTokenProps } from "@/middleware";
import { SignJWT, jwtVerify } from "jose";
import { NextApiRequest } from "next";

interface TokenProps {
  email: string;

  id: number;
}

export async function sign(payload: TokenProps): Promise<string> {
  const iat = Math.floor(Date.now() / 1000);
  const exp = iat + 60 * 60 * 24; // one day

  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256", typ: "JWT" })
    .setExpirationTime(exp)
    .setIssuedAt(iat)
    .setNotBefore(iat)
    .sign(new TextEncoder().encode(TOKEN_KEY));
}

export async function verify(token: string): Promise<any> {
  const { payload } = await jwtVerify(
    token,
    new TextEncoder().encode(TOKEN_KEY)
  );
  return payload ?? null;
}

const getDecodeToken = (req: NextApiRequest) => {
  const headerUser = req.headers["user"];
  const decode =
    typeof headerUser === "string"
      ? JSON.parse(headerUser)
      : { id: -1, email: "autherror", roles: [] };
  return decode as DecodeTokenProps;
};

export const tokenUtils = { sign, verify, getDecodeToken };
