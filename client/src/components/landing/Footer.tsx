import { Link } from 'wouter';
import BCPAILogo from './BCPAI.png';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-800 relative">
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-electric-purple/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div>
              <div className="w-40 h-40 relative overflow-hidden mb-2">
                <img src={BCPAILogo} alt="BCPAI Logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-white font-orbitron text-xl font-bold tracking-wider">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              </h1>
            </div>
            <p className="text-gray-400 mt-2 mb-4">
              Revolutionizing business connections through the power of artificial intelligence.
            </p>
            <div className="space-y-2 text-gray-400">
              <p>Ho Chi Minh City Office:</p>
              <p>123 Nguyen Hue Boulevard, District 1</p>
              <p>Ho Chi Minh City, Vietnam</p>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.facebook.com/business.connect.platform" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/business-connect-platform" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-blue transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-gray-400 hover:text-neon-blue transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Support Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">API</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-neon-blue transition duration-300">Terms of Service</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-orbitron font-semibold mb-6">Subscribe</h4>
            <p className="text-gray-400 mb-4">
              Stay updated with the latest in AI business matching technology.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-2 rounded-l-md bg-dark-purple/50 border border-gray-700 text-white focus:outline-none focus:border-neon-blue transition duration-300"
              />
              <button className="px-4 py-2 rounded-r-md bg-gradient-to-r from-neon-blue to-electric-purple text-white hover:shadow-lg hover:shadow-electric-purple/20 transition duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Business Connecting Platform (BCP). All rights reserved.
        </div>
      </div>
    </footer>
  );
}
