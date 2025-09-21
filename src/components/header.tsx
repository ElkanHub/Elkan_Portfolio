//header component
// components/header.tsx
"use client";

import Link from "next/link";
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
  const [currentPg, setCurrentPg] = useState(
    `${navLinks[0].label.charAt(0).toUpperCase() + navLinks[0].label.slice(1)}`
  );

  return (
    <header className="shadow-sm p-4 bg-white">
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
                      ? "rounded-md bg-black text-white hover:accent"
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
                {currentPg}
              </h2>
              <SheetTrigger asChild>
                <button aria-label="Open Menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
            </div>

            <SheetContent
              side="right"
              className="w-64 h-fit py-6 px-0 rounded-md"
              //edit the close button to br visible
            >
              <div className="flex flex-col space-y-4 mt-10 ">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`${
                      !item.attention
                        ? " pl-6 text-lg font-medium hover:accent hover:outline-2 focus:ring-2 focus:ring-offset-2 focus:ring-black "
                        : "pl-6 text-lg font-medium bg-black/90 text-white hover:bg-black/70"
                    }`}
                    onClick={() => {
                      setOpen(false);
                      setCurrentPg(item.label);
                    }}
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
