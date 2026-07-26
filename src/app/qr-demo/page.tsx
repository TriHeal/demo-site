import type { Metadata } from "next";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "הדגמה אינטראקטיבית",
  description: "סרקו את קוד ה-QR כדי לחקור את הדגמת Tri-Heal האינטראקטיבית.",
};

export default function QrDemoPage() {
  return (
    <main
      dir="rtl"
      lang="he"
      className="flex min-h-dvh flex-col items-center justify-center bg-[#f7fbfa] px-6 py-12 text-[#123B49]"
    >
      <div className="flex w-full max-w-5xl flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-16">
        <div className="flex max-w-md flex-col items-center text-center md:items-start md:text-start">
          {/* eslint-disable-next-line @next/next/no-img-element -- static logo asset */}
          <img
            src={assetPath("/tri-heal-logo.svg")}
            alt="Tri-Heal"
            className="h-14 w-auto object-contain sm:h-16"
          />

          <h1 className="mt-8 text-balance text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            רוצים לראות הדגמה אינטראקטיבית?
          </h1>
          <p className="mt-4 text-pretty text-base text-[#4a6a68] sm:text-lg">
            סרקו את הקוד כדי לחקור את Tri-Heal בטלפון.
          </p>
        </div>

        <div className="shrink-0 rounded-[32px] bg-white p-6 shadow-[0_24px_70px_rgba(18,59,73,0.12)] sm:p-8">
          {/* eslint-disable-next-line @next/next/no-img-element -- static QR asset */}
          <img
            src={assetPath("/tri-heal-qr.png")}
            alt="קוד QR לכניסה להדגמה האינטראקטיבית של Tri-Heal"
            width={440}
            height={440}
            className="h-auto w-[min(85vw,440px)]"
          />
        </div>
      </div>
    </main>
  );
}
