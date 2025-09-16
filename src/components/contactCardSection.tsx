// components/ContactCard.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Copy, Mail, Linkedin, Github, Twitter } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ContactCardProps {
  title?: string;
  description?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export default function ContactCard({
  title = "Let's work together",
  description = "Feel free to reach out through any of these channels",
  email,
  linkedin,
  github,
  twitter,
}: ContactCardProps) {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(label);

      toast.success("Copied to clipboard!", {
        description: `${label} has been copied.`,
      });

      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      toast.error("Failed to copy", {
        description: "Please try again or copy manually.",
      });
    }
  };

  const contactItems = [
    {
      label: "Email",
      value: email,
      icon: Mail,
      href: `mailto:${email}`,
    },
    {
      label: "LinkedIn",
      value: linkedin,
      icon: Linkedin,
      href: linkedin,
    },
    {
      label: "GitHub",
      value: github,
      icon: Github,
      href: github,
    },
    {
      label: "Twitter",
      value: twitter,
      icon: Twitter,
      href: twitter,
    },
  ].filter((item) => item.value);

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center gap-2">
              <Button
                variant="outline"
                className="flex-1 justify-start"
                asChild
              >
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </a>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => handleCopy(item.value!, item.label)}
                className="shrink-0"
                aria-label={`Copy ${item.label}`}
              >
                <Copy
                  className={`h-4 w-4 ${
                    copiedItem === item.label ? "text-green-500" : ""
                  }`}
                />
              </Button>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
