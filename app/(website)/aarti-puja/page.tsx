"use client";

import Image from "next/image";
import { Download, Minus, Plus, Printer } from "lucide-react";
import { type ButtonHTMLAttributes, useCallback, useState } from "react";

import {
  panchangSlides,
  StickyPanchang,
} from "@/components/home/UpcomingEvents";
import { TimingsSnapshot } from "@/components/home/TimingsSnapshot";
import { themeCssVariables } from "@/src/constants/theme";

const pageTitle = "शिव आरती";
const websiteName = "Shri GauriShankar Baikunthnath Dham";

const aartiText = `ॐ जय शिव ओंकारा, प्रभु जय शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा ॥
ॐ हर हर हर महादेव...

एकानन चतुरानन पंचानन राजे।
हंसानन गरुड़सानन वृषवाहन साजे ॥
ॐ हर हर हर महादेव...

दो भुज चार चतुर्भुज दस भुज अति सोहे।
तीनों रूप निराला तीनों जन मोहे ॥
ॐ हर हर हर महादेव...

अक्षमाला वनमाला मुण्डमाला धारी।
चंदन मृगमद सोहै भाले शशि धारी ॥
ॐ हर हर हर महादेव...

श्वेत पीत पितम्बर बाघंबर धारी।
सनकादिक ब्रह्मादिक भूतादिक संहारी ॥
ॐ हर हर हर महादेव...

कर के बीच कपमण्डलों चक्र त्रिशूलकर्ता।
सुखकर्ता दुखहर्ता जगपालन कर्ता ॥
ॐ हर हर हर महादेव...

ब्रह्मा विष्णु सदाशिव जानत अविवेका।
मधु-ਕੈਟਭ दो मारत, प्रभू रूप अनेक ॥
ॐ हर हर हर महादेव...

जानत जो कोई नर आरती शिवजी की गावत।
कहत शिवानंद स्वामी, मनवांछित फल पावत ॥
ॐ हर हर हर महादेव...`;

const aartiStanzas = [
  `ॐ जय शिव ओंकारा, प्रभु जय शिव ओंकारा।
ब्रह्मा विष्णु सदाशिव, अर्द्धांगी धारा ॥
ॐ हर हर हर महादेव...`,
  `एकानन चतुरानन पंचानन राजे।
हंसानन गरुड़सानन वृषवाहन साजे ॥
ॐ हर हर हर महादेव...`,
  `दो भुज चार चतुर्भुज दस भुज अति सोहे।
तीनों रूप निराला तीनों जन मोहे ॥
ॐ हर हर हर महादेव...`,
  `अक्षमाला वनमाला मुण्डमाला धारी।
चंदन मृगमद सोहै भाले शशि धारी ॥
ॐ हर हर हर महादेव...`,
  `श्वेत पीत पितम्बर बाघंबर धारी।
सनकादिक ब्रह्मादिक भूतादिक संहारी ॥
ॐ हर हर हर महादेव...`,
  `कर के बीच कपमण्डलों चक्र त्रिशूलकर्ता।
सुखकर्ता दुखहर्ता जगपालन कर्ता ॥
ॐ हर हर हर महादेव...`,
  `ब्रह्मा विष्णु सदाशिव जानत अविवेका।
मधु-ਕੈਟਭ दो मारत, प्रभू रूप अनेक ॥
ॐ हर हर हर महादेव...`,
  `जानत जो कोई नर आरती शिवजी की गावत।
कहत शिवानंद स्वामी, मनवांछित फल पावत ॥
ॐ हर हर हर महादेव...`,
] as const;

const aartiParts = [
  aartiStanzas.slice(0, 4),
  aartiStanzas.slice(4, 8),
] as const;

type ToolbarActionProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: React.ReactNode;
  label: string;
};

const toolbarButtonClass =
  "inline-flex h-11 items-center justify-center gap-2 border border-[color-mix(in_srgb,var(--color-accent-gold)_46%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-warm-ivory)_88%,transparent)] px-3 text-xs font-bold uppercase tracking-[0.11em] text-[var(--color-temple-maroon)] transition hover:border-[var(--color-warm-saffron)] hover:bg-[var(--color-soft-cream)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-gold)]";

function ToolbarAction({ icon, label, ...props }: ToolbarActionProps) {
  return (
    <button className={toolbarButtonClass} type="button" {...props}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function xmlEscape(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrapLine(line: string, maxLength: number) {
  if (line.length <= maxLength) {
    return [line];
  }

  const words = line.split(" ");
  const wrapped: string[] = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;

    if (next.length > maxLength && current) {
      wrapped.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) {
    wrapped.push(current);
  }

  return wrapped;
}

function getWrappedAartiLines() {
  return aartiText.split("\n").flatMap((line) => {
    if (!line) {
      return [""];
    }

    return wrapLine(line, 36);
  });
}

async function imageToDataUrl(src: string) {
  const response = await fetch(src);
  const blob = await response.blob();

  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

async function svgToJpegData(svg: string) {
  const svgBlob = new Blob([svg], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  try {
    const image = await new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new window.Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });

    const canvas = document.createElement("canvas");
    canvas.width = 794;
    canvas.height = 1123;

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Canvas is unavailable.");
    }

    context.fillStyle = "#FCF8F3";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    return canvas.toDataURL("image/jpeg", 0.94);
  } finally {
    URL.revokeObjectURL(url);
  }
}

function createPdfPageSvg(lines: string[], logoDataUrl: string, pageNumber: number) {
  const isFirstPage = pageNumber === 1;
  const topStart = isFirstPage ? 280 : 112;
  const lineHeight = 32;

  const bodyLines = lines
    .map((line, index) => {
      const y = topStart + index * lineHeight;
      const escapedLine = line ? xmlEscape(line) : " ";

      return `<text x="397" y="${y}" text-anchor="middle" font-family="Noto Sans Devanagari, Mangal, sans-serif" font-size="22" fill="#5B4636">${escapedLine}</text>`;
    })
    .join("");

  const firstPageHeader = isFirstPage
    ? `<image href="${logoDataUrl}" x="347" y="60" width="100" height="100" preserveAspectRatio="xMidYMid meet"/>
       <text x="397" y="190" text-anchor="middle" font-family="Playfair Display, Georgia, serif" font-size="42" font-weight="700" fill="#4A2C1D">Shiv Aarti</text>`
    : `<image href="${logoDataUrl}" x="64" y="52" width="54" height="54" preserveAspectRatio="xMidYMid meet"/>
       <text x="138" y="86" font-family="Playfair Display, Georgia, serif" font-size="24" font-weight="700" fill="#4A2C1D">Shiv Aarti</text>`;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="794" height="1123" viewBox="0 0 794 1123">
    <rect width="794" height="1123" fill="#FCF8F3"/>
    <rect x="38" y="38" width="718" height="1047" fill="#F6F1E8" stroke="#D4AF37" stroke-width="2"/>
    <rect x="56" y="56" width="682" height="1011" fill="none" stroke="#D9C8AE" stroke-width="1.5"/>
    ${firstPageHeader}
    ${bodyLines}
    <line x1="104" y1="1038" x2="690" y2="1038" stroke="#D9C8AE" stroke-width="1"/>
    <text x="397" y="1064" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="#6B5B4B">${websiteName}</text>
  </svg>`;
}

function jpegDataUrlToBytes(dataUrl: string) {
  const binary = atob(dataUrl.split(",")[1] ?? "");
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function createPdfBlob(pageImages: string[]) {
  const encoder = new TextEncoder();
  const parts: Array<string | Uint8Array> = [];
  const offsets: number[] = [];
  let byteLength = 0;
  const objects: Array<Array<string | Uint8Array>> = [];

  const addObject = (objectParts: Array<string | Uint8Array>) => {
    objects.push(objectParts);
    return objects.length;
  };

  addObject(["<< /Type /Catalog /Pages 2 0 R >>"]);
  objects.push([]);

  const pageRefs: number[] = [];
  pageImages.forEach((imageDataUrl, index) => {
    const imageBytes = jpegDataUrlToBytes(imageDataUrl);
    const imageObject = addObject([
      `<< /Type /XObject /Subtype /Image /Width 794 /Height 1123 /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${imageBytes.length} >>\nstream\n`,
      imageBytes,
      "\nendstream",
    ]);
    const content = `q 595.28 0 0 841.89 0 0 cm /Im${index + 1} Do Q`;
    const contentObject = addObject([
      `<< /Length ${content.length} >>\nstream\n${content}\nendstream`,
    ]);
    const pageObject = addObject([
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595.28 841.89] /Resources << /XObject << /Im${index + 1} ${imageObject} 0 R >> >> /Contents ${contentObject} 0 R >>`,
    ]);

    pageRefs.push(pageObject);
  });

  objects[1] = [
    `<< /Type /Pages /Kids [${pageRefs
      .map((reference) => `${reference} 0 R`)
      .join(" ")}] /Count ${pageRefs.length} >>`,
  ];

  const append = (part: string | Uint8Array) => {
    parts.push(part);
    byteLength += typeof part === "string" ? encoder.encode(part).length : part.length;
  };

  append("%PDF-1.4\n");
  objects.forEach((objectParts, index) => {
    offsets[index + 1] = byteLength;
    append(`${index + 1} 0 obj\n`);
    objectParts.forEach(append);
    append("\nendobj\n");
  });

  const xrefOffset = byteLength;
  append(`xref\n0 ${objects.length + 1}\n`);
  append("0000000000 65535 f \n");
  offsets.slice(1).forEach((offset) => {
    append(`${offset.toString().padStart(10, "0")} 00000 n \n`);
  });
  append(
    `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`,
  );

  const blobParts = parts.map((part) => {
    if (typeof part === "string") {
      return part;
    }

    const buffer = new ArrayBuffer(part.byteLength);
    new Uint8Array(buffer).set(part);
    return buffer;
  });

  return new Blob(blobParts, { type: "application/pdf" });
}

async function downloadAartiPdf() {
  const logoDataUrl = await imageToDataUrl("/images/logo/temple-logo.png");
  const lines = getWrappedAartiLines();
  const pages: string[][] = [];
  let pageIndex = 0;

  while (pageIndex < lines.length) {
    const lineLimit = pages.length === 0 ? 23 : 29;
    pages.push(lines.slice(pageIndex, pageIndex + lineLimit));
    pageIndex += lineLimit;
  }

  const pageImages = await Promise.all(
    pages.map((pageLines, index) =>
      svgToJpegData(createPdfPageSvg(pageLines, logoDataUrl, index + 1)),
    ),
  );
  const pdfBlob = createPdfBlob(pageImages);
  const url = URL.createObjectURL(pdfBlob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "shiv-aarti.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

export default function AartiPujaPage() {
  const [fontSize, setFontSize] = useState(23);
  const [status, setStatus] = useState("Manuscript ready");
  const [panchangIndex, setPanchangIndex] = useState(0);
  const [panchangDirection, setPanchangDirection] = useState(1);

  const movePanchangToIndex = useCallback(
    (index: number) => {
      setPanchangDirection(index >= panchangIndex ? 1 : -1);
      setPanchangIndex(index);
    },
    [panchangIndex],
  );

  const movePanchangByDirection = useCallback((nextDirection: 1 | -1) => {
    setPanchangDirection(nextDirection);
    setPanchangIndex((current) => {
      const nextIndex = current + nextDirection;

      if (nextIndex < 0) {
        return panchangSlides.length - 1;
      }

      if (nextIndex >= panchangSlides.length) {
        return 0;
      }

      return nextIndex;
    });
  }, []);

  const handleDownloadPdf = async () => {
    setStatus("Preparing PDF");

    try {
      await downloadAartiPdf();
      setStatus("PDF downloaded");
    } catch {
      setStatus("PDF could not be generated");
    }
  };

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-[var(--color-warm-ivory)] pt-36 text-[var(--color-primary-text)] sm:pt-40 lg:pt-44"
        style={themeCssVariables}
      >
      <div
        className="absolute inset-0 -z-10 opacity-[0.38] [background-image:linear-gradient(90deg,color-mix(in_srgb,var(--color-mantra-border)_42%,transparent)_1px,transparent_1px),linear-gradient(color-mix(in_srgb,var(--color-mantra-border)_38%,transparent)_1px,transparent_1px)] [background-size:44px_44px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-[url('/images/shiv.jpg')] bg-cover bg-center opacity-[0.08] mix-blend-multiply"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-56 bg-[linear-gradient(180deg,color-mix(in_srgb,var(--color-temple-maroon)_12%,transparent),transparent)]"
        aria-hidden="true"
      />

      <div className="mx-auto flex w-full max-w-[980px] justify-center px-5 pb-16 sm:px-8 lg:pb-24">
        <div className="w-full animate-[aarti-fade_0.75s_ease-out_both]">
          <div className="border border-[color-mix(in_srgb,var(--color-accent-gold)_58%,var(--color-border))] bg-[color-mix(in_srgb,var(--color-warm-ivory)_68%,transparent)] px-4 py-4 shadow-[0_24px_70px_color-mix(in_srgb,var(--color-temple-maroon)_13%,transparent)] backdrop-blur-[3px] sm:px-7 sm:py-7">
            <div className="border border-[color-mix(in_srgb,var(--color-mantra-border)_70%,transparent)] bg-[color-mix(in_srgb,var(--color-soft-cream)_42%,transparent)] px-4 py-7 sm:px-8 lg:px-10">
              <header className="mx-auto max-w-[700px] text-center">
                {/* <p className="font-[var(--font-noto-devanagari),sans-serif] text-4xl text-[var(--color-om-icon)]">
                  🕉
                </p> */}
                <h1 className="mt-3 font-[var(--font-cormorant),serif] text-2xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-3xl">
                  {pageTitle}
                </h1>
              </header>

              <div className="mx-auto mt-8 grid max-w-[700px] grid-cols-2 gap-2 border-y border-[color-mix(in_srgb,var(--color-accent-gold)_34%,var(--color-border))] py-4 sm:grid-cols-4">
                <ToolbarAction
                  icon={<Download aria-hidden="true" size={16} />}
                  label="Download PDF"
                  onClick={handleDownloadPdf}
                />
                <ToolbarAction
                  icon={<Printer aria-hidden="true" size={16} />}
                  label="Print"
                  onClick={() => window.print()}
                />
                <ToolbarAction
                  aria-label="Increase Aarti text size"
                  icon={<Plus aria-hidden="true" size={16} />}
                  label="Font +"
                  onClick={() => setFontSize((size) => Math.min(size + 2, 31))}
                />
                <ToolbarAction
                  aria-label="Decrease Aarti text size"
                  icon={<Minus aria-hidden="true" size={16} />}
                  label="Font -"
                  onClick={() => setFontSize((size) => Math.max(size - 2, 19))}
                />
              </div>

              <p className="mx-auto mt-4 max-w-[700px] text-center text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-warm-saffron)]">
                {status}
              </p>

              <article
                className="aarti-reading mx-auto mt-9 grid max-w-[900px] gap-8 font-[var(--font-noto-devanagari),sans-serif] text-[var(--color-mantra-text)] md:grid-cols-2 md:gap-10"
                style={{ fontSize, lineHeight: 2.05 }}
              >
                {aartiParts.map((part, index) => (
                  <div
                    className="space-y-7 md:border-l md:border-[color-mix(in_srgb,var(--color-accent-gold)_34%,transparent)] md:pl-8 first:md:border-l-0 first:md:pl-0"
                    key={index}
                  >
                    {part.map((stanza) => (
                      <p className="whitespace-pre-line" key={stanza}>
                        {stanza}
                      </p>
                    ))}
                  </div>
                ))}
              </article>
            </div>
          </div>
        </div>
      </div>

      <div className="print-document hidden">
        <Image
          alt="Temple Logo"
          height={76}
          src="/images/logo/temple-logo.png"
          width={76}
        />
        <h1>Shiv Aarti</h1>
        <pre>{aartiText}</pre>
      </div>

      <style jsx>{`
        @keyframes aarti-fade {
          from {
            opacity: 0;
            transform: translateY(18px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media print {
          @page {
            margin: 18mm;
          }

          :global(body *) {
            visibility: hidden !important;
          }

          :global(header),
          :global(nav),
          :global(footer),
          :global([aria-label="Quick contact actions"]) {
            display: none !important;
          }

          .print-document,
          .print-document * {
            visibility: visible !important;
          }

          .print-document {
            background: #ffffff !important;
            color: #2c241b !important;
            display: block !important;
            font-family: "Noto Sans Devanagari", Mangal, sans-serif !important;
            left: 0;
            line-height: 1.85;
            margin: 0 auto;
            max-width: 700px;
            position: absolute;
            right: 0;
            top: 0;
          }

          .print-document img {
            display: block;
            height: 76px;
            margin: 0 auto 16px;
            object-fit: contain;
            width: 76px;
          }

          .print-document h1 {
            color: #4a2c1d;
            font-family: "Playfair Display", Georgia, serif;
            font-size: 34px;
            margin: 0;
            text-align: center;
          }

          .print-document pre {
            font: inherit;
            margin: 0;
            white-space: pre-wrap;
          }
        }
      `}</style>
      </section>

      <section
        className="relative overflow-hidden bg-[var(--color-soft-cream)] py-16 text-[var(--color-primary-text)] sm:py-20 lg:py-24"
        style={themeCssVariables}
        aria-labelledby="aaj-ka-shringar-title"
      >
        <div
          className="absolute inset-0 opacity-[0.14] [background-image:radial-gradient(circle_at_center,var(--color-accent-gold)_1px,transparent_1.4px)] [background-size:30px_30px]"
          aria-hidden="true"
        />
        <div className="relative mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
              Aaj Ka Shringar
            </p>
            <h2
              id="aaj-ka-shringar-title"
              className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
            >
              Lord Bholenath
              <span className="block text-[var(--color-accent-gold)]">
                Divine Darshan
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
              A peaceful glimpse of Bholenath shringar for devotees visiting
              the Aarti collection.
            </p>
          </div>

          <div className="relative min-h-[420px] overflow-hidden border border-[color-mix(in_srgb,var(--color-accent-gold)_46%,var(--color-border))] bg-[var(--color-warm-ivory)] shadow-[0_28px_80px_color-mix(in_srgb,var(--color-temple-maroon)_16%,transparent)] sm:min-h-[540px]">
            <Image
              src="/images/shiv.jpg"
              alt="Aaj Ka Shringar of Lord Bholenath"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,color-mix(in_srgb,var(--color-temple-maroon)_54%,transparent))]"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <section
        className="bg-[var(--color-warm-ivory)] py-16 text-[var(--color-primary-text)] sm:py-20 lg:py-24"
        style={themeCssVariables}
        aria-labelledby="aarti-panchang-title"
      >
        <div className="mx-auto grid w-full max-w-[1180px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-warm-saffron)]">
              Panchang
            </p>
            <h2
              id="aarti-panchang-title"
              className="mt-4 font-[var(--font-cormorant),serif] text-4xl font-semibold leading-tight text-[var(--color-temple-name)] sm:text-5xl"
            >
              Temple Calendar
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-secondary-text)] sm:text-lg">
              The same Panchang calendar experience used on the home page,
              reused here for devotees planning aarti and darshan.
            </p>
          </div>

          <StickyPanchang
            currentIndex={panchangIndex}
            direction={panchangDirection}
            onChange={movePanchangToIndex}
            onMove={movePanchangByDirection}
          />
        </div>
      </section>

      <TimingsSnapshot />
    </>
  );
}
