import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  onOpenContact: () => void;
}

export default function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="py-16 sm:py-20 bg-gradient-primary text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
          Join hundreds of companies already leveraging AI to drive growth and innovation.
        </p>
        <button
          onClick={onOpenContact}
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition"
        >
          Get Started Today
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
