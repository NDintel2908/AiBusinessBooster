
import { Button } from "./button";
import { HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

export function HelpButton() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <Button
        onClick={() => window.open('https://zalo.me/3297451762229454190', '_blank')}
        className="relative h-14 w-14 rounded-full bg-gradient-to-r from-neon-blue/90 to-electric-purple/90 hover:from-electric-purple/90 hover:to-neon-blue/90 shadow-lg hover:shadow-electric-purple/30 transition-all duration-300 group"
        aria-label="Get Help"
      >
        <motion.div
          animate={{
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <HelpCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-200" />
        </motion.div>
        
        {/* Tooltip */}
        <div className="absolute -top-12 right-0 px-4 py-2 bg-white rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap">
          <span className="text-gray-800 text-sm font-medium">Need Help?</span>
          <div className="absolute bottom-[-6px] right-6 h-3 w-3 bg-white transform rotate-45"></div>
        </div>
      </Button>
    </motion.div>
  );
}
