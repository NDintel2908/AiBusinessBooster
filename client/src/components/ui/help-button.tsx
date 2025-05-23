import { Button } from "./button";
import { Headphones } from "lucide-react";
import { motion } from "framer-motion";
import { GradientButton } from "./gradient-button";

export function HelpButton() {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <GradientButton
        onClick={() => window.open('https://zalo.me/3297451762229454190', '_blank')}
        className="rounded-full font-semibold px-4 py-2 flex items-center gap-2"
        size="sm"
        variant="primary"
        aria-label="Get Help"
      >
        <Headphones className="h-4 w-4" />
        <span>Help</span>
      </GradientButton>
    </motion.div>
  );
}