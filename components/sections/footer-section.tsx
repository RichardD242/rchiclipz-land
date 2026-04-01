"use client";

import Link from "next/link";

const footerLinks = {
  menu: [
    { label: "Why Me", href: "#products" },
    { label: "Process", href: "#technology" },
    { label: "End", href: "#pitch" },
  ],
};

export function FooterSection() {
  return (
    <footer className="bg-background">
      <div className="border-t border-border px-6 py-16 md:px-12 md:py-20 lg:px-20">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href="/" className="text-lg font-medium text-foreground">
              rchiclipz
            </Link>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-medium text-foreground">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border px-6 py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-center">
          <p className="text-xs text-muted-foreground">
            2026 rchiclipz. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
