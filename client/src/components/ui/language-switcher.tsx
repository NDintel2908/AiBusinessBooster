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
    name: "Vi",
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
    name: "En",
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
  {
    code: "jp",
    name: "Jp",
    flag: (
      <div className="flag-container">
        <svg
          className="w-4 h-3 flag-wave"
          viewBox="0 0 20 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="15" fill="white" rx="1" />
          <circle cx="10" cy="7.5" r="3" fill="#bc002d" />
        </svg>
      </div>
    ),
  },
  {
    code: "th",
    name: "Th",
    flag: (
      <div className="flag-container">
        <svg
          className="w-4 h-3 flag-wave"
          viewBox="0 0 20 15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="20" height="15" fill="#ed1c24" rx="1" />
          <rect y="2" width="20" height="11" fill="white" />
          <rect y="4" width="20" height="7" fill="#241d4f" />
          <rect y="6" width="20" height="3" fill="white" />
        </svg>
      </div>
    ),
  },
];

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n } = useTranslation();
  const [location, setLocation] = useLocation();

  // Get current language from URL
  const currentLangFromUrl = location.match(/^\/(en|vi|jp|th)/)?.[1] || "en";
  const currentLanguage =
    languages.find((lang) => lang.code === currentLangFromUrl) || languages[1]; // Default to English

  const handleLanguageChange = (language: Language) => {
    // Update URL to match selected language
    let newPath;
    if (location.match(/^\/(en|vi|jp|th)/)) {
      // Replace existing language in URL
      newPath = location.replace(/^\/(en|vi|jp|th)/, `/${language.code}`);
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
            "h-7 px-1.5 text-sm font-normal text-gray-800 hover:bg-gray-100 hover:text-gray-900",
            className,
          )}
        >
          <div className="mr-0.5 flex items-center">{currentLanguage.flag}</div>
          <ChevronDown className="h-2.5 w-2.5 text-gray-800" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-[70px] min-w-[70px] bg-white border border-gray-200 shadow-lg"
      >
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language)}
            className={cn(
              "flex items-center gap-2 cursor-pointer text-gray-800 hover:bg-gray-100 hover:text-gray-900",
              currentLanguage.code === language.code && "bg-gray-50",
            )}
          >
            <div className="flex items-center">{language.flag}</div>
            <span className="text-sm text-gray-800">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
