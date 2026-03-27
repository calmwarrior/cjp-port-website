import Link from "next/link";
import { siteConfig } from "@/data/siteConfig";
import { CJPLogo } from "@/components/ui/CJPLogo";
import { Mail, ArrowUpRight } from "lucide-react";
import { LinkedInIcon } from "@/components/ui/LinkedInIcon";

interface FooterProps {
  locale: string;
  dict: any;
}

export function Footer({ locale, dict }: FooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <CJPLogo />
            <p className="text-sm text-text-muted max-w-xs">
              {dict.footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{dict.footer.navigation}</h3>
            <div className="flex flex-col gap-2">
              <Link href={`/${locale}/work`} className="text-sm text-text-muted hover:text-foreground transition-colors">
                {dict.nav.work}
              </Link>
              <Link href={`/${locale}/about`} className="text-sm text-text-muted hover:text-foreground transition-colors">
                {dict.nav.about}
              </Link>
              <Link href={`/${locale}/contact`} className="text-sm text-text-muted hover:text-foreground transition-colors">
                {dict.nav.contact}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">{dict.footer.getInTouch}</h3>
            <div className="flex flex-col gap-2">
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-muted hover:text-foreground transition-colors inline-flex items-center gap-1.5"
              >
                <LinkedInIcon className="w-4 h-4" />
                LinkedIn
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} {siteConfig.name}. {dict.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
