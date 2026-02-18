import type { DetailedHTMLProps, HTMLAttributes } from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "em-emoji-picker": DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        theme?: string;
        onEmojiSelect?: (event: any) => void;
      };
    }
  }
}

export {};
