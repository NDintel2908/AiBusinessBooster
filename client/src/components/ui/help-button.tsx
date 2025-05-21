import { Button } from "./button";
import { Headphones } from "lucide-react";
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
        className="h-10 px-4 rounded-full bg-[#8BB4FB]/70 hover:bg-[#8BB4FB]/90 text-white transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-[#8BB4FB]/30 backdrop-blur-sm"
        aria-label="Get Help"
      >
        <Headphones className="h-4 w-4" />
        <span className="text-sm font-medium">Help</span>
      </Button>
    </motion.div>
  );
}