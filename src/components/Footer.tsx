import { School, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <School className="w-10 h-10 text-orange-400" />
              <span className="text-2xl font-bold">Primary School</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              A primary school dedicated to creative and innovative approaches to education, nurturing young minds for the future.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all transform hover:scale-110"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Our Vision
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Our Teachers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Facilities
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Curriculum
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  News & Updates
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-orange-400 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                  123 Education Street<br />
                  Learning City, LC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-orange-400 transition">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <a href="mailto:info@primaryschool.edu" className="text-gray-300 hover:text-orange-400 transition">
                  info@primaryschool.edu
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Primary School. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
