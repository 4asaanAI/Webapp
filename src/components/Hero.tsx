import { useState } from 'react';
import { School, Eye, CheckCircle, AlertCircle } from 'lucide-react';
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/8923119/pexels-photo-8923119.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-blue-900/90 to-slate-800/95"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-6">
              <School className="w-12 h-12 text-orange-400" />
              <span className="text-xl font-semibold">Primary School</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              An Inspiring<br />
              <span className="text-orange-400">Primary School</span><br />
              for your child
            </h1>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              A primary school is creative and innovative approaches to education, catering into the next.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
                Admit Child
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-slate-900 text-white font-semibold rounded-lg transition-all flex items-center gap-2">
                <Eye className="w-5 h-5" />
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 text-slate-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                  disabled={loading}
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Company name"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-5 py-4 rounded-lg border-2 border-gray-200 text-slate-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full px-5 py-4 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
              >
                {loading ? 'Sending...' : 'Connect with Us'}
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
      </div>
    </section>
  );
}
