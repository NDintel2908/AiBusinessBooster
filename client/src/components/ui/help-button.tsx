
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
        className="h-14 w-14 rounded-full bg-gradient-to-r from-neon-blue to-electric-purple hover:from-electric-purple hover:to-neon-blue relative group transition-all duration-300 hover:shadow-lg hover:shadow-electric-purple/30"
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
        <div className="absolute -top-10 right-0 bg-white text-gray-800 px-3 py-1 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-lg">
          Cần hỗ trợ?
        </div>
      </Button>
    </motion.div>
  );
}
