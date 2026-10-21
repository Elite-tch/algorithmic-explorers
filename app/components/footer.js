import Link from "next/link";
import Image from "next/image";
export default function Footer(){

    return (
         
      <footer className="bg-[#F5F7FF] px-6 py-10 sm:px-10 lg:px-12">
        <div className="mx-auto max-w-7xl">
          {/* Footer Content */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Logo */}
            <div>
              <Link href="/" className="inline-block">
                <Image
                  src="/logo.png"
                  alt="Algorithmic Explorers logo"
                  width={280}
                  height={140}
                  className="h-auto w-64 object-contain object-left"
                />
              </Link>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Quick Links</h3>

              <ul className="space-y-1 text-sm text-[#66758F]">
                <li>
                  <Link href="/" className="hover:text-[#10284F]">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#10284F]">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-[#10284F]">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#10284F]">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="hover:text-[#10284F]">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#10284F]">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Get In Touch</h3>

              <div className="space-y-4 text-sm text-[#66758F]">
                <a
                  href="mailto:hello@algorithmicexplorers.com"
                  className="flex items-center gap-3 hover:text-[#10284F]"
                >
                  <span className="text-lg">✉</span>
                  <span>hello@algorithmicexplorers.com</span>
                </a>

                <a
                  href="tel:+2348012345678"
                  className="flex items-center gap-3 hover:text-[#10284F]"
                >
                  <span className="text-lg">☎</span>
                  <span>+234 801 234 5678</span>
                </a>

                <p className="flex items-center gap-3">
                  <span className="text-lg">📍</span>
                  <span>Lagos, Nigeria</span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="mb-4 font-bold text-[#10284F]">Follow Us</h3>

              <div className="flex gap-3">
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  in
                </a>

                <a
                  href="#"
                  aria-label="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  𝕏
                </a>

                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  ◎
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#DDE3F0] text-[#10284F] hover:bg-white"
                >
                  ▶
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 flex flex-col gap-4 border-t border-[#DDE3F0] pt-6 text-sm text-[#66758F] sm:flex-row sm:items-center sm:justify-between">
            <p>© 2025 Algorithmic Explorers. All rights reserved.</p>

            <div className="flex gap-5">
              <Link href="/privacy-policy" className="hover:text-[#10284F]">
                Privacy Policy
              </Link>

              <Link href="/terms" className="hover:text-[#10284F]">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    )
}