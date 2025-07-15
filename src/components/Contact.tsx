import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [focused, setFocused] = useState({
    name: false,
    email: false,
    subject: false,
    message: false
  });

  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailjs.init('DuwjKco_qAlunFoAO'); // Your EmailJS public key
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field: string) => {
    setFocused(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocused(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs.send(
      'service_a2mtkca',
      'template_wqs52be',
      formData,
      'DuwjKco_qAlunFoAO'
    )
    .then(() => {
      setSuccess(true); // Show tick
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSuccess(false), 4000); // Hide after 4 seconds
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} className="text-sky-400" />,
      label: "Email",
      value: "cogninexsolutions@gmail.com",
      href: "mailto:cogninexsolutions@gmail.com"
    },
    {
      icon: <Phone size={24} className="text-sky-400" />,
      label: "Phone",
      value: "+91 9344090251",
      href: "tel:+919344090251"
    },
    {
      icon: <MapPin size={24} className="text-sky-400" />,
      label: "Address",
      value: "Saravanampatti, Coimbatore, Tamil Nadu, India",
      href: "https://g.co/kgs/cBkNJoj"
    }
  ];

  const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/Cogninex-Solutions", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/cogninex-solutions", label: "LinkedIn" },
    
    { icon: <Instagram size={24} />, href: "https://www.instagram.com/_cogninex_solutions_", label: "Instagram" },
    { icon: <Youtube size={24} />, href: "https://www.youtube.com/@cogninexsolutions", label: "YouTube" }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Get In <span className="text-sky-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-white mb-6 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Let's start a conversation 
            about your next project.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12">
          {/* Contact Form */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 sm:p-8 shadow-lg animate-fadeInLeft">
            <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  className="w-full px-3 sm:px-4 pt-5 sm:pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
                <label className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${
                  focused.name || formData.name
                    ? 'top-1.5 sm:top-2 text-xs text-sky-400'
                    : 'top-3.5 sm:top-4 text-sm sm:text-base text-gray-500 dark:text-gray-400'
                }`}>
                  Full Name
                </label>
              </div>
              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  className="w-full px-3 sm:px-4 pt-5 sm:pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
                <label className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${
                  focused.email || formData.email
                    ? 'top-1.5 sm:top-2 text-xs text-sky-400'
                    : 'top-3.5 sm:top-4 text-sm sm:text-base text-gray-500 dark:text-gray-400'
                }`}>
                  Email Address
                </label>
              </div>
              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={(e) => handleBlur('subject', e.target.value)}
                  className="w-full px-3 sm:px-4 pt-5 sm:pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 text-sm sm:text-base"
                  required
                />
                <label className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${
                  focused.subject || formData.subject
                    ? 'top-1.5 sm:top-2 text-xs text-sky-400'
                    : 'top-3.5 sm:top-4 text-sm sm:text-base text-gray-500 dark:text-gray-400'
                }`}>
                  Subject
                </label>
              </div>
              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  className="w-full px-3 sm:px-4 pt-5 sm:pt-6 pb-2 border-2 border-gray-200 dark:border-gray-600 bg-transparent dark:text-white rounded-lg focus:border-sky-400 focus:outline-none transition-colors duration-300 resize-none text-sm sm:text-base"
                  required
                />
                <label className={`absolute left-3 sm:left-4 transition-all duration-300 pointer-events-none ${
                  focused.message || formData.message
                    ? 'top-1.5 sm:top-2 text-xs text-sky-400'
                    : 'top-3.5 sm:top-4 text-sm sm:text-base text-gray-500 dark:text-gray-400'
                }`}>
                  Message
                </label>
              </div>
              <button
                type="submit"
                className="w-full bg-sky-400 hover:bg-sky-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                Send Message
                <Send size={18} className="sm:w-5 sm:h-5" />
              </button>
            </form>
            {success && (
              <div className="flex items-center justify-center mb-4">
                <span className="bg-green-100 text-green-600 rounded-full p-1.5 sm:p-2 mr-2">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                <span className="text-green-600 font-semibold text-base sm:text-lg">Message sent successfully!</span>
              </div>
            )}
          </div>
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 animate-fadeInRight">
            {/* Contact Details */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">Contact Information</h3>
              <div className="space-y-4 sm:space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 sm:gap-4 group">
                    <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-sky-50 dark:bg-sky-900/30 rounded-full group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 font-medium">{info.label}</p>
                      <a 
                        href={info.href}
                        className="text-black dark:text-white hover:text-sky-400 transition-colors duration-300 font-semibold text-sm sm:text-base"
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Map Placeholder */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4 sm:mb-6">Our Location</h3>
              <div className="w-full h-36 sm:h-48 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden relative group">
                <a 
                  href="https://g.co/kgs/cBkNJoj" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-sky-100/50 to-sky-200/50 dark:from-sky-900/30 dark:to-sky-800/30 hover:from-sky-200/60 hover:to-sky-300/60 dark:hover:from-sky-800/40 dark:hover:to-sky-700/40 transition-all duration-300"
                >
                  <div className="text-center">
                    <MapPin size={32} className="text-sky-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-gray-700 dark:text-gray-300 font-semibold">Saravanampatti, Coimbatore</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Tamil Nadu, India</p>
                    <p className="text-xs text-sky-600 dark:text-sky-400 mt-1">Click to view on Google Maps</p>
                  </div>
                </a>
                </div>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-black dark:text-white mb-6">Follow Us</h3>
              
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="flex items-center justify-center w-12 h-12 bg-sky-50 dark:bg-sky-900/30 hover:bg-sky-400 text-sky-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;