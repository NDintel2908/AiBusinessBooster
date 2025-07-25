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
    name: "Tiếng Việt",
    flag: (
      <div className="flag-container">
        <svg
          className="w-5 h-4 flag-wave"
          viewBox="0 0 36 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shadow-vi" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="50%" stopColor="rgba(0,0,0,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
            </linearGradient>
            <path
              id="wave-vi"
              d="M0,0 Q9,1.5 18,0 T36,0 L36,20 Q27,18.5 18,20 T0,20 Z"
            />
          </defs>
          <clipPath id="flag-clip-vi">
            <use xlinkHref="#wave-vi" />
          </clipPath>
          {/* Base flag */}
          <rect
            width="36"
            height="20"
            fill="#da251d"
            clipPath="url(#flag-clip-vi)"
          />
          {/* Shadow overlay for depth */}
          <rect
            width="36"
            height="20"
            fill="url(#shadow-vi)"
            clipPath="url(#flag-clip-vi)"
            opacity="0.3"
          />
          {/* Star */}
          <polygon
            points="18,5 14.47,15.85 23.71,9.15 12.29,9.15 21.53,15.85"
            fill="#ffff00"
            clipPath="url(#flag-clip-vi)"
          />
        </svg>
      </div>
    ),
  },
  {
    code: "en",
    name: "English",
    flag: (
      <div className="flag-container">
        <svg
          className="w-5 h-4 flag-wave"
          viewBox="0 0 36 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="shadow-us" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(0,0,0,0.1)" />
              <stop offset="50%" stopColor="rgba(0,0,0,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0.2)" />
            </linearGradient>
            <path
              id="wave-us"
              d="M0,0 Q9,1.5 18,0 T36,0 L36,20 Q27,18.5 18,20 T0,20 Z"
            />
          </defs>
          <clipPath id="flag-clip-us">
            <use xlinkHref="#wave-us" />
          </clipPath>
          {/* Red base */}
          <rect
            width="36"
            height="20"
            fill="#b22234"
            clipPath="url(#flag-clip-us)"
          />
          {/* White stripes */}
          <rect
            y="1.54"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          <rect
            y="4.62"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          <rect
            y="7.69"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          <rect
            y="10.77"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          <rect
            y="13.85"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          <rect
            y="16.92"
            width="36"
            height="1.54"
            fill="white"
            clipPath="url(#flag-clip-us)"
          />
          {/* Blue canton */}
          <rect
            width="14.4"
            height="10.77"
            fill="#3c3b6e"
            clipPath="url(#flag-clip-us)"
          />
          {/* Shadow overlay for depth */}
          <rect
            width="36"
            height="20"
            fill="url(#shadow-us)"
            clipPath="url(#flag-clip-us)"
            opacity="0.2"
          />
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
            "h-8 px-2 text-sm font-normal hover:bg-accent hover:text-accent-foreground",
            className,
          )}
        >
          <div className="mr-1 flex items-center">{currentLanguage.flag}</div>
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
            <div className="flex items-center">{language.flag}</div>
            <span className="text-sm">{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
