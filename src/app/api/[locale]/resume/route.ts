import { generatePDF } from "@/utils/generatePDF";

//TODO: Aplicar single responsability
export async function GET(
  request: Request,
  { params }: { params: { locale: string } }
) {
  const { locale } = params;

  //TODO: Refazer esta condição
  if (!locale || (locale !== "en" && locale.toUpperCase() !== "PT_BR")) {
    return new Response("Invalid locale", { status: 400 });
  }

  const headers = new Headers({
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename='resume.pdf'",
  });

  const pdfBlob = await generatePDF({ locale });

  return new Response(pdfBlob, { headers });
}
