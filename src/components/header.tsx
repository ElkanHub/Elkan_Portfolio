//header component
// components/header.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react"; // Icon
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

export default function Header() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact", attention: true },
  ];

  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const match = navLinks.find((item) => item.href === pathname || pathname.startsWith(`${item.href}/`));
  const currentPage = match
    ? match.label.charAt(0).toUpperCase() + match.label.slice(1)
    : "Home";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 shadow-sm p-4 bg-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Elkan_Portfolio</h1>

        {/* ===== Desktop Nav ===== */}
        <div className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              {navLinks.map((item) => (
                <NavigationMenuItem
                  key={item.href}
                  className={`${
                    item.attention
                      ? "rounded-md bg-primary text-white hover:accent"
                      : "rounded-md hover:outline"
                  }`}
                >
                  <NavigationMenuLink href={item.href} className="px-3 py-2">
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* ===== Mobile Hamburger ===== */}
        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <div className="flex justify-between items-center">
              <h2 className="flex justify-between items-center p-4 font-bold text-lg text-foreground">
                {currentPage}
              </h2>
              <SheetTrigger asChild>
                <button aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>

            <SheetContent
              side="right"
              className="top-8 w-64 h-fit py-6 px-0 rounded-md"
              //edit the close button to br visible
            >
              <div className="flex flex-col space-y-4 mt-10 ">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      !item.attention
                        ? " pl-6 py-2 text-lg font-medium hover:accent hover:outline-2 focus:ring-2 focus:ring-offset-2 focus:ring-black "
                        : "pl-6 py-2 text-lg font-medium bg-primary/90 text-white hover:bg-accent"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

//refactor the navigation menu to be its own component with this
{
  /* <NavigationMenuItem>
  <NavigationMenuLink href="/blog" className="px-3 py-2">
    Blog
  </NavigationMenuLink>
</NavigationMenuItem> */
}
