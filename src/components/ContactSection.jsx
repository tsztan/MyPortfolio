import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Instagram,
  Twitch,
  Twitter,
  Send,
  CheckCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export const ContactSection = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (status === 'sent') {
      setShowSuccess(true);
      const timer = setTimeout(() => {
        setShowSuccess(false);
        setStatus(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus(`error: ${err.message}`);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      {/* Success Toast */}
      {showSuccess && (
        <div className="fixed top-6 right-6 z-50 animate-fade-in">
          <div className="bg-card border border-primary/20 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-full bg-primary/10">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Success!</p>
                <p className="text-sm text-muted-foreground">
                  Message sent successfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects and opportunities. Feel
          free to reach out!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {' '}
              Contact Information{' '}
            </h3>
            <div className="space-y-6 flex flex-col items-center">
              <div className="flex items-start space-x-4 w-80">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h4 className="font-medium"> Email </h4>
                  <a
                    href="mailto:tamara@sztanski.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    tamara@sztanski.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 w-80">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h4 className="font-medium"> Phone </h4>
                  <a
                    href="tel:+51903409067"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +51 903 409 067
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 w-80">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1 text-center">
                  <h4 className="font-medium"> Location </h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Lima, Peru
                  </a>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
                <a href="#" target="_blank">
                  <Twitch />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3>
            <form ref={formRef} onSubmit={onSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Name{' '}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Jack O'Neill"
                  value={form.name}
                  onChange={onChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Email{' '}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="example@gmail.com"
                  value={form.email}
                  onChange={onChange}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  {' '}
                  Your Message{' '}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={2}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="How are you?"
                  value={form.message}
                  onChange={onChange}
                />
              </div>
              <button
                type="submit"
                className={cn(
                  'cosmic-button w-full flex items-center justify-center gap-2',
                )}
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Sending…' : 'Send'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
