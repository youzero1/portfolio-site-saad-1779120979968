import { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import styles from '@/components/sections/ContactSection.module.css';
import SectionHeader from '@/components/ui/SectionHeader';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <SectionHeader
          eyebrow="Contact"
          title="Let's work together"
          subtitle="Have a project in mind? Let's talk about it."
        />

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <p className={styles.infoText}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be
              part of amazing teams. Feel free to reach out!
            </p>
            <div className={styles.contactItems}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><Mail size={18} /></div>
                <div>
                  <p className={styles.contactLabel}>Email</p>
                  <a href="mailto:alex@example.com" className={styles.contactValue}>alex@example.com</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}><MapPin size={18} /></div>
                <div>
                  <p className={styles.contactLabel}>Location</p>
                  <p className={styles.contactValue}>San Francisco, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.formCol}>
            {submitted ? (
              <div className={styles.success}>
                <CheckCircle size={48} className={styles.successIcon} />
                <h3 className={styles.successTitle}>Message Sent!</h3>
                <p className={styles.successText}>Thanks for reaching out — I'll get back to you within 24 hours.</p>
                <button className={styles.resetBtn} onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}>Send Another</button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="John Doe"
                      className={styles.input}
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className={styles.input}
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    placeholder="Project Inquiry"
                    className={styles.input}
                    value={form.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className={styles.textarea}
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className={styles.submitBtn}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
