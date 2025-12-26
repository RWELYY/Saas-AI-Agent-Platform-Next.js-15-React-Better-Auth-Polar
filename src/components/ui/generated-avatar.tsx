"use client";

import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GeneratedAvatarProps {
  seed: string;
  className?: string;
  variant?: "initials";
}

export const GeneratedAvatar = ({
  seed,
  className,
  variant = "initials",
}: GeneratedAvatarProps) => {
  const safeSeed = seed?.trim() || "user";

  const avatar = createAvatar(initials, {
    seed: safeSeed,
    fontWeight: 500,
    fontSize: 42,
  });

  return (
    <Avatar className={cn(className)}>
      <AvatarImage src={avatar.toDataUri()} alt="Avatar" />
      <AvatarFallback>
        {variant === "initials" ? safeSeed.charAt(0).toUpperCase() : "U"}
      </AvatarFallback>
    </Avatar>
  );
};
