import { useState } from 'react';
import { Flower2, CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    setLoading(true);
    setStatus('idle');

    try {
      const { error } = await supabase.from('hero_leads').insert([
        {
          email: email.trim(),
          company_name: companyName.trim() || null,
          created_at: new Date().toISOString(),
        },
      ]);

      if (error) {
        setStatus('error');
        setMessage('Failed to save your email. Please try again.');
        console.error('Supabase error:', error);
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-lead-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
             'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`
          },
          body: JSON.stringify({
            name: companyName.trim() || 'Not provided',
            email: email.trim(),
            source: 'Hero Section',
          }),
        }).catch(err => console.error('Email notification error:', err));

        setStatus('success');
        setMessage('Thank you! We will get in touch soon.');
        setEmail('');
        setCompanyName('');
        setTimeout(() => setStatus('idle'), 5000);
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

  return (
    <section id="hero" className="pt-32 pb-16 sm:pt-40 sm:pb-20 bg-gradient-primary text-white relative overflow-hidden">
      <div className="absolute top-10 right-10 opacity-10">
        <Flower2 className="w-32 h-32 sm:w-40 sm:h-40" />
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            
            <img className="w-120 h-20 sm:w-40 sm:h-40" src="/public/logo.png"/>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Unlock the Power of AI for Your Business
          </h1>
          <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
            Learn, integrate, and automate AI workflows tailored to your industry.
            Start your AI transformation today.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg text-black placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition"
              disabled={loading}
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-lg text-black placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-accent-500 transition"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-lg hover:bg-accent-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Sending...' : 'Connect'}
          </button>

          {status === 'success' && (
            <div className="flex items-center gap-3 p-3 bg-green-500 bg-opacity-20 rounded-lg text-white animate-fade-in">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center gap-3 p-3 bg-red-500 bg-opacity-20 rounded-lg text-white animate-fade-in">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">{message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
