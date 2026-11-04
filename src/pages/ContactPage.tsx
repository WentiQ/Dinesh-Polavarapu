import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { PERSONAL_INFO } from '../data/content';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    topic: 'Venture & Collaboration',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(PERSONAL_INFO.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in your name, email, and message.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      const formData = new FormData();
      formData.append('access_key', '2e2637fb-bd0f-4007-b8d2-955f9ca5a936');
      formData.append('name', formState.name);
      formData.append('email', formState.email);
      formData.append('subject', `Portfolio Transmission: [${formState.topic}] from ${formState.name}`);
      formData.append('topic', formState.topic);
      formData.append('message', formState.message);
      formData.append('from_name', 'Dinesh Polavarapu Portfolio');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Transmission could not be dispatched. Please try again.');
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err?.message || 'Network error occurred. Please try again or reach out via direct email.');
    }
  };

  return (
    <div className="space-y-16 pb-24">
      {/* 1. Header */}
      <section className="pt-8 sm:pt-14 space-y-4">
        <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400">
          DIRECT COMMUNICATION & COORDINATES
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-950 dark:text-neutral-50">
          Initiate Direct Conversation
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl leading-relaxed">
          I welcome meaningful conversations with technology founders, engineering leaders, researchers, investors, and potential collaborators interested in cognitive software, on-device intelligence, and systems engineering.
        </p>
      </section>

      {/* 2. Main Grid: Coordinates vs Message Composer */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Coordinates (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Email Card */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-3 shadow-xs">
            <div className="text-xs font-mono-code text-neutral-500 dark:text-neutral-400 flex items-center justify-between">
              <span className="text-[#D99B00] dark:text-[#F7B500] font-bold">PRIMARY DIRECT EMAIL</span>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors cursor-pointer flex items-center gap-1 font-semibold"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-base sm:text-lg font-semibold text-neutral-900 dark:text-white hover:text-[#1868F2] dark:hover:text-[#F7B500] transition-colors block truncate"
            >
              {PERSONAL_INFO.email}
            </a>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Monitored personally. For urgent systems inquiries or venture notes, direct email is preferred.
            </p>
          </div>

          {/* Profiles Card */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-4 shadow-xs">
            <div className="text-xs font-mono-code text-[#1868F2] dark:text-[#5B95F7] font-semibold">
              VERIFIED PROFILES
            </div>
            <div className="space-y-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED]/60 dark:bg-[#121310] hover:border-[#1868F2] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Github className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">GitHub</div>
                    <div className="text-xs text-neutral-500 font-mono-code">github.com/WentiQ</div>
                  </div>
                </div>
                <span className="text-xs text-[#1868F2] font-semibold">Visit ↗</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED]/60 dark:bg-[#121310] hover:border-[#1868F2] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="w-4 h-4 text-neutral-700 dark:text-neutral-300" />
                  <div>
                    <div className="text-sm font-medium text-neutral-900 dark:text-neutral-100">LinkedIn</div>
                    <div className="text-xs text-neutral-500 font-mono-code">Dinesh Polavarapu</div>
                  </div>
                </div>
                <span className="text-xs text-[#1868F2] font-semibold">Visit ↗</span>
              </a>
            </div>
          </div>

          {/* Physical Coordinates */}
          <div className="p-6 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] space-y-2 shadow-xs">
            <div className="text-xs font-mono-code text-[#D99B00] dark:text-[#F7B500] font-semibold flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              <span>LOCATION &amp; AFFILIATION</span>
            </div>
            <div className="text-sm font-semibold text-neutral-900 dark:text-white">
              IIT Tirupati Campus · Andhra Pradesh, India
            </div>
            <p className="text-xs text-neutral-500">
              Department of Mechanical Engineering, Indian Institute of Technology Tirupati.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Message Composer (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-2xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-white dark:bg-[#1A1B17] shadow-xs">
            <h2 className="text-xl font-bold tracking-tight text-neutral-950 dark:text-white mb-1">
              Send a Transmission
            </h2>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              Fill out this structured inquiry to connect directly regarding ventures, research, or engineering systems.
            </p>

            {status === 'success' ? (
              <div className="py-12 px-6 rounded-xl border border-emerald-300 dark:border-emerald-900/60 bg-emerald-50/50 dark:bg-emerald-950/20 text-center space-y-3">
                <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400 mx-auto" />
                <h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
                  Message Dispatched Successfully
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 max-w-md mx-auto">
                  Thank you for reaching out, {formState.name}. Your note regarding {formState.topic.toLowerCase()} has been delivered directly to Dinesh. Substantive inquiries are typically reviewed within 24 to 48 hours.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setStatus('idle');
                      setFormState({ name: '', email: '', topic: 'Venture & Collaboration', message: '' });
                      setErrorMessage('');
                    }}
                    className="text-xs font-semibold text-[#1868F2] dark:text-[#F7B500] underline cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                action="https://api.web3forms.com/submit"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input type="hidden" name="access_key" value="2e2637fb-bd0f-4007-b8d2-955f9ca5a936" />
                <input
                  type="hidden"
                  name="subject"
                  value={`Portfolio Transmission: [${formState.topic}] from ${formState.name || 'Anonymous'}`}
                />
                <input type="hidden" name="from_name" value="Dinesh Polavarapu Portfolio" />

                {status === 'error' && errorMessage && (
                  <div className="p-3.5 rounded-xl border border-red-200 dark:border-red-900/60 bg-red-50/80 dark:bg-red-950/30 flex items-start gap-2.5 text-xs text-red-700 dark:text-red-400">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold">Transmission issue: </span>
                      {errorMessage}{' '}
                      You can also reach out directly via{' '}
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="underline font-semibold">
                        {PERSONAL_INFO.email}
                      </a>.
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Your Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      disabled={status === 'sending'}
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Dr. Jane Smith / Alex Chen"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-[#1868F2] disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                      Professional Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      disabled={status === 'sending'}
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="jane@institution.edu or name@company.com"
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-[#1868F2] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Inquiry Topic
                  </label>
                  <select
                    id="contact-topic"
                    name="topic"
                    disabled={status === 'sending'}
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] text-neutral-900 dark:text-neutral-100 focus:outline-hidden focus:ring-1 focus:ring-[#1868F2] disabled:opacity-50"
                  >
                    <option value="Venture & Collaboration">Venture &amp; Pre-Seed Investment (Qraezev)</option>
                    <option value="Physical AI & Robotics">Physical AI &amp; Robotics Research</option>
                    <option value="Open Source (Memossist / Tascyn)">Open Source (Memossist / Tascyn)</option>
                    <option value="Academic & Research Inquiry">Academic &amp; Research Inquiry (IIT Tirupati)</option>
                    <option value="General Intellectual Exchange">General Intellectual Exchange</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    Message &amp; Context
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    disabled={status === 'sending'}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Describe your inquiry, project proposal, or specific topic you would like to discuss..."
                    className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-[#E5E2D6] dark:border-[#2C2D28] bg-[#F6F4ED] dark:bg-[#121310] text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 focus:outline-hidden focus:ring-1 focus:ring-[#1868F2] disabled:opacity-50"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full sm:w-auto px-6 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-[#F7B500] hover:bg-[#E5A600] disabled:opacity-60 disabled:cursor-not-allowed rounded-xl transition-all shadow-xs cursor-pointer flex items-center justify-center gap-2 active:scale-[0.98]"
                  >
                    {status === 'sending' ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Sending Transmission...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Dinesh Polavarapu</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
