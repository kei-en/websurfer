"use client";
import React, { useState } from "react";
import {
  SubLink,
  LogoItem,
  Menu,
  MenuItem,
  NextSiteButton,
  InfoButton,
} from "./ui/navbarMenu";
import { cn } from "@/utils/cn";
import { useNextSiteButtonContext } from "@/lib/store";
import { FaInfo } from "react-icons/fa";

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
        {visible && (
          <div>
            <NextSiteButton>Next Site</NextSiteButton>
            <InfoButton>
              <FaInfo className="w-4 h-4" />
            </InfoButton>
          </div>
        )}
        <MenuItem setActive={setActive} active={active} item="Menu">
          <div className="flex flex-col space-y-4 text-sm">
            <SubLink href="/">Homepage</SubLink>
            <SubLink href="/surf/update-categories">
              Change your categories
            </SubLink>
            <SubLink href="/submit">Submit a website</SubLink>
            <SubLink href="/faq">FAQ & Contact</SubLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
