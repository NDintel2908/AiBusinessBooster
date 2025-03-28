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
            <div className="flex items-center mb-6">
              <div className="w-28 h-28 relative overflow-hidden mr-3">
                <img src={BCPAILogo} alt="BCPAI Logo" className="w-full h-full object-contain" />
              </div>
              <h1 className="text-white font-orbitron text-xl font-bold tracking-wider">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-electric-purple"></span>
              </h1>
            </div>
            <p className="text-gray-400 mb-6">
              Revolutionizing business connections through the power of artificial intelligence.
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} NexusMatch AI. All rights reserved.
            </p>
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
          <p>Designed with ❤️ for businesses seeking meaningful connections.</p>
        </div>
      </div>
    </footer>
  );
}
