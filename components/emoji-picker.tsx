"use client";

import { useEffect } from "react";
import data from "@emoji-mart/data";
import { init } from "emoji-mart";
import { useTheme } from "next-themes";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Smile } from "lucide-react";

interface EmojiPickerProps {
  onChange: (value: string) => void;
}

export const EmojiPicker = ({ onChange }: EmojiPickerProps) => {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    init({ data });
  }, []);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button type="button">
          <Smile className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        side="right"
        sideOffset={40}
        className="bg-transparent border-none drop-shadow-none mb-16"
      >
        <em-emoji-picker
          theme={resolvedTheme === "dark" ? "dark" : "light"}
          onEmojiSelect={(e: CustomEvent<{ native: string }>) =>
  onChange(e.detail.native)
}
        />
      </PopoverContent>
    </Popover>
  );
};
