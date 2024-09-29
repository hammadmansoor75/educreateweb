import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/options";// Adjust the import path

export async function getServerSideSession(req, res) {
  return await getServerSession(req, res, authOptions);
}
