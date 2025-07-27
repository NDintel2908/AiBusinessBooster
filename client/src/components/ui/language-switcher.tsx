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
  flag: React.ReactNode;
}

const languages: Language[] = [
  {
    code: "vi",
    name: "VI",
    flag: (
      <div className="flag-container">
        <svg
          className="w-4 h-3 flag-wave"
          viewBox="0 0 20 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="15" fill="#da251d" rx="1" />
          <polygon points="10,3 8,9 13,6 7,6 12,9" fill="#ffff00" />
        </svg>
      </div>
    ),
  },
  {
    code: "en",
    name: "EN",
    flag: (
      <div className="flag-container">
        <svg
          className="w-4 h-3 flag-wave"
          viewBox="0 0 20 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="15" fill="#b22234" rx="1" />
          <rect y="1" width="20" height="1" fill="white" />
          <rect y="3" width="20" height="1" fill="white" />
          <rect y="5" width="20" height="1" fill="white" />
          <rect y="7" width="20" height="1" fill="white" />
          <rect y="9" width="20" height="1" fill="white" />
          <rect y="11" width="20" height="1" fill="white" />
          <rect y="13" width="20" height="1" fill="white" />
          <rect width="8" height="8" fill="#3c3b6e" />
        </svg>
      </div>
    ),
  },
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
            "h-7 px-1.5 text-sm font-normal hover:bg-accent hover:text-accent-foreground",
            className,
          )}
        >
          <div className="mr-0.5 flex items-center">{currentLanguage.flag}</div>
          <ChevronDown className="h-2.5 w-2.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[70px] min-w-[70px]">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex items-center gap-2 cursor-pointer",
              currentLanguage.code === language.code,
            )}
          >
            <div className="flex items-center">{language.flag}</div>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
