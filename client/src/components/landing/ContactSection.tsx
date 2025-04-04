import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { handleFormSubmit } from "@/lib/utils";
import { apiRequest } from "@/lib/queryClient";

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    requirements: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await apiRequest("POST", "/api/contact", formData);
      toast({
        title: "Success!",
        description: "Your inquiry has been submitted successfully.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        requirements: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit your inquiry. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-1/3 right-1/3 w-1/3 h-1/3 bg-electric-purple opacity-10 blur-[120px] rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-neon-blue/20 border border-neon-blue/40 mb-4">
              <span className="text-sm font-medium text-neon-blue">Get in Touch</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>Become a qualified vendor recommended by BCP
            </h2>
            <p className="text-gray-300 mb-8">
              Fill out the form and one of our AI business specialists will get back to you within 24 hours to discuss how NexusMatch can revolutionize your partnership strategy.
            </p>
            
            
            
            <div className="flex space-x-4">
              
              <a href="https://www.facebook.com/business.connect.platform/" className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"></path>
                </svg>
              </a>
              <a href="https://vn.linkedin.com/company/business-connect-platform" className="w-10 h-10 rounded-full bg-card-bg border border-gray-700 flex items-center justify-center text-gray-400 hover:text-neon-blue hover:border-neon-blue transition duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <GlassCard className="rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-orbitron font-semibold mb-6 text-white">Contact Form</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-300 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-white focus:outline-none focus:border-neon-blue transition duration-300"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-gray-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-white focus:outline-none focus:border-neon-blue transition duration-300"
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-gray-300 mb-2">Company Name</label>
                  <input 
                    type="text" 
                    id="company" 
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-white focus:outline-none focus:border-neon-blue transition duration-300"
                    placeholder="Your Company Inc."
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="requirements" className="block text-gray-300 mb-2">Specific Requirements</label>
                  <textarea 
                    id="requirements" 
                    name="requirements"
                    value={formData.requirements}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-dark-purple/50 border border-gray-700 text-white focus:outline-none focus:border-neon-blue transition duration-300"
                    placeholder="Tell us about your needs and how we can help..."
                  ></textarea>
                </div>
                
                <div>
                  <GradientButton 
                    type="submit" 
                    className="w-full py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </GradientButton>
                </div>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
