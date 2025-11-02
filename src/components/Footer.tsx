import { Flower2, Linkedin, Instagram, Mail, X } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-dark-600 py-8 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Flower2 className="w-6 h-6 text-primary-500" />
            <span className="text-base font-semibold text-dark-900">Aasaan AI</span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-xs text-dark-500">
              © Aasaan AI. All rights reserved
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-dark-600 hover:text-primary-500 transition">
              Terms & Condition
            </a>
            <a href="#" className="text-xs text-dark-600 hover:text-primary-500 transition">
              Privacy & Security
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href="https://x.com/4asaanai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-500 transition"
              aria-label="X"
            >
              <X className="w-5 h-5" />
            </a>
            <a
              href="mailto:hello@aasaan.ai"
              className="text-dark-500 hover:text-primary-500 transition"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/4asaanai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-500 transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/aasaan.ai_?igsh=c2IweHN6d3VjaTh5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark-500 hover:text-primary-500 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
