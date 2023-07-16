import { NextRequest } from "next/server";
import jwt from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";
    const decodedToken: string | jwt.JwtPayload = jwt.verify(
      token,
      process.env.TOKEN_SECRET!
    ) as jwt.JwtPayload;
    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
