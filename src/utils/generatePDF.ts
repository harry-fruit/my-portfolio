import puppeteer from "puppeteer";

interface IGeneratePDF {
  locale: string;
}

export const generatePDF = async ({ locale }: IGeneratePDF): Promise<Blob> => {
  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
    defaultViewport: { width: 1920, height: 1080 },
    protocolTimeout: 120000,
  });

  const page = await browser.newPage();

  //TODO: Aplicar .env
  await page.goto(`http://localhost:3000/${locale}/resume`, {
    waitUntil: "networkidle0",
  });

  await page.$eval("#download-resume", (el) => el.remove());

  const pdfBuffer = await page.pdf({
    timeout: 0,
    printBackground: true,
    format: "A4",
  });

  const pdfBlob = new Blob([pdfBuffer], { type: "application/pdf" });
  console.log("PDF created");

  await browser.close();

  return pdfBlob;
};
