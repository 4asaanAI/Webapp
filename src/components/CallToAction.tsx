interface CallToActionProps {
  onOpenContact: () => void;
}

export default function CallToAction({ onOpenContact }: CallToActionProps) {
  return (
    <section className="py-16 sm:py-20 bg-dark-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-dark-900 mb-4 leading-tight">
          Ready to Transform Your Business with AI?
        </h2>
        <p className="text-lg sm:text-xl text-dark-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Let's work together to integrate AI into your operations. Start your journey
          from learning to automation, and watch your team become AI-ready.
        </p>
        <button
          onClick={onOpenContact}
          className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition duration-300 transform hover:scale-105"
        >
          Automate Today!
        </button>
      </div>
    </section>
  );
}
