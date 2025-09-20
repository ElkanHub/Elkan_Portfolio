//header component
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="shadow-sm p-4 bg-white">
      <nav className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl">Elkan_Portfolio</h1>
        <NavigationMenu className="border-1 rounded-md shadow-sm">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="/" className="px-3 py-2">
                Home
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/about" className="px-3 py-2">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/projects" className="px-3 py-2">
                Projects
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="/blog" className="px-3 py-2">
                Blog
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:outline bg-primary text-white dark:bg-primary-dark dark:text-black rounded-md">
              <NavigationMenuLink href="/contact" className="px-3 py-2">
                Contact
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
