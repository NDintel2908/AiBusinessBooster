import * as React from "react";
import { ChevronDown, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "vi", name: "Tiếng Việt", flag: "🇻🇳" },
  { code: "en", name: "English", flag: "🇺🇸" },
];

interface LanguageSwitcherProps {
  className?: string;
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();

  // Get current language from URL
  const currentLangFromUrl = location.match(/^\/(en|vi)/)?.[1] || "en";
  const currentLanguage =
    languages.find((lang) => lang.code === currentLangFromUrl) || languages[1]; // Default to English

  const handleLanguageChange = (language: Language) => {
    // Update URL to match selected language
    let newPath;
    if (location.match(/^\/(en|vi)/)) {
      // Replace existing language in URL
      newPath = location.replace(/^\/(en|vi)/, `/${language.code}`);
    } else {
      // Add language prefix to URL
      newPath = `/${language.code}${location}`;
    }

    // Change URL first, then language (GlobalLanguageSync will handle i18n)
    setLocation(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "h-8 px-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground",
            className,
          )}
        >
          <span className="mr-1 text-base">{currentLanguage.flag}</span>
          <ChevronDown className="h-3 w-3" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[120px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              currentLanguage.code === language.code && "bg-accent",
            )}
          >
            <span className="text-base">{language.flag}</span>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
