import { Scissors } from "lucide-react";
import { siteConfig } from "../data/siteData.js";
import { useState } from "react";

export default function Footer() {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <footer className="border-t border-white/10 bg-barber-dark px-4 py-8 sm:px-6 lg:px-10">
      <div className="container-site flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div className="flex items-center gap-3">
          <div className="grid h-12 w-12 place-items-center overflow-hidden rounded-2xl border border-white/15 bg-white/5">
            {!hasLogoError ? (
              <img
                src={siteConfig.logo}
                alt="Logo WLDUCORTE79"
                className="h-full w-full object-contain p-1"
                loading="lazy"
                onError={() => setHasLogoError(true)}
              />
            ) : (
              <Scissors className="h-6 w-6 text-barber-blue" />
            )}
          </div>

          <div>
            <strong className="block text-base font-black uppercase tracking-[0.18em] text-white">
              {siteConfig.name}
            </strong>
            <p className="mt-1 text-xs text-white/55">{siteConfig.slogan}</p>
          </div>
        </div>

        <div className="space-y-2 text-xs text-white/45">
          <p>© {new Date().getFullYear()} WLDUCORTE79. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{' '}
            <a
              href="https://www.instagram.com/pedro_thawan?igsh=MTQxNWFudm1nbXBwbw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
              className="underline hover:text-white"
            >
              @pedro_thawan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
