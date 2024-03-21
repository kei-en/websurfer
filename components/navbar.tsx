"use client";
import React, { useState } from "react";
import {
  SubLink,
  LogoItem,
  Menu,
  MenuItem,
  NextSiteButton,
} from "./ui/navbarMenu";
import { cn } from "@/utils/cn";
import { useNextSiteButtonContext } from "@/lib/store";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string>("");
  const { visible } = useNextSiteButtonContext();

  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
        className
      )}>
      <Menu setActive={setActive as (item: string | null) => void}>
        <LogoItem title="SurfBored" href="/" src="/sblogo.png" />
        {visible && <NextSiteButton href="/explore">Next Site</NextSiteButton>}
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <SubLink href="/web-dev">Web Development</SubLink>
            <SubLink href="/interface-design">Interface Design</SubLink>
            <SubLink href="/seo">Search Engine Optimization</SubLink>
            <SubLink href="/branding">Branding</SubLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
