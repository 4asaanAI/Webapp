import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      setStatus('error');
      setMessage('Please enter your name');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase.from('leads').insert([
        {
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim() || null,
          query: query.trim() || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        setStatus('error');
        setMessage('Failed to submit your request. Please try again.');
        console.error('Supabase error:', error);
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            phone: phone.trim(),
            query: query.trim(),
            source: 'Contact Modal',
          }),
        }).catch(err => console.error('Email notification error:', err));

        setStatus('success');
        setMessage('Thank you! We will get in touch soon.');
        setName('');
        setEmail('');
        setPhone('');
        setQuery('');
        setTimeout(() => {
          setStatus('idle');
          onClose();
        }, 2000);
      }
    } catch (err) {
      setStatus('error');
      setMessage('An error occurred. Please try again.');
      console.error('Error:', err);
      setTimeout(() => setStatus('idle'), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h2 id="modal-title" className="text-2xl font-bold text-dark-900">
            Get in touch
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition"
            aria-label="Close modal"
          >
            <X className="w-6 h-6 text-dark-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-dark-700 mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-dark-300 text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              disabled={loading}
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-dark-700 mb-2">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-dark-300 text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              disabled={loading}
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-dark-700 mb-2">
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-dark-300 text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="query" className="block text-sm font-medium text-dark-700 mb-2">
              Tell us
            </label>
            <textarea
              id="query"
              placeholder="Tell us about your needs..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-dark-300 text-dark-900 placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition resize-none"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Submitting...' : 'Submit'}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg text-green-800 animate-fade-in">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-3 bg-red-50 border border-red-200 rounded-lg text-red-800 animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
