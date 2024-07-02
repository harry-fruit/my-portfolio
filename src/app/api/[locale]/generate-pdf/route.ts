import { getAuthorizationHeader } from "@/util/authorization";
import axios from "axios";
import https from "https";

export async function GET(request: Request, { params }: { params: { locale: string } }) {
  const locale = params.locale;

  const headers = {
    "Content-Type": "application/json",
    "Authorization-Token": getAuthorizationHeader(),
  };

  const agent = new https.Agent({
    rejectUnauthorized: false,
  });

  return await axios.post(`${process.env.API_URL}/generate-pdf`, { locale }, { httpsAgent: agent, headers });

}