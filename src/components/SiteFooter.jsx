"use client";

import Link from "next/link";
import Image from "next/image";
import { useLocale } from "@/app/providers";
import { Instagram } from "lucide-react";

export default function SiteFooter() {
  const { lang, setLang } = useLocale();
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Link href="/" aria-label="Go to homepage">
              <Image src="/assets/logo-white.png" alt="Fashion Zoom logo" width={120} height={48} />
            </Link>
            <span className="text-gray-400 text-sm">Kerala • Since 2013</span>
          </div>
          <div className="text-gray-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} Fashion Zoom Magazine. All rights reserved.
          </div>
        </div>
        <div className="mt-6 flex items-center justify-between gap-4 text-xs text-gray-400">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>
            <Link href="/inclusion" className="underline underline-offset-4">Diversity & Inclusion</Link>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://www.instagram.com/fashion_zoom_magazine/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/20 text-gray-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F81F2E] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
          <button onClick={() => setLang(lang === 'en' ? 'ml' : 'en')} className="px-2 py-1 rounded-md bg-white text-black hover:bg-gray-100 border" aria-label="Toggle language">
            {lang === 'en' ? 'മലയാളം' : 'English'}
          </button>
        </div>
      </div>
    </footer>
  );
}
