
import { Button } from "./button";
import { HelpCircle } from "lucide-react";

export function HelpButton() {
  return (
    <Button
      onClick={() => window.open('https://zalo.me/3297451762229454190', '_blank')}
      className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-gradient-to-r from-neon-blue to-electric-purple hover:shadow-lg hover:shadow-electric-purple/20 transition-all duration-300"
      aria-label="Get Help"
    >
      <HelpCircle className="h-6 w-6 text-white" />
    </Button>
  );
}
