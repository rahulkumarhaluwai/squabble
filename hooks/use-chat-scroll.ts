import { useEffect, useState } from "react";

type ChatScrollProps = {
  chatRef: React.RefObject<HTMLDivElement | null>;
  bottomRef: React.RefObject<HTMLDivElement | null>;
  shouldLoadMore: boolean;
  loadMore: () => void;
  count: number;
};

export const useChatScroll = ({
  chatRef,
  bottomRef,
  shouldLoadMore,
  loadMore,
  count,
}: ChatScrollProps) => {
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    const topDiv = chatRef.current;
    if (!topDiv) return;

    const handleScroll = () => {
      if (topDiv.scrollTop === 0 && shouldLoadMore) {
        loadMore();
      }
    };

    topDiv.addEventListener("scroll", handleScroll);
    return () => topDiv.removeEventListener("scroll", handleScroll);
  }, [shouldLoadMore, loadMore, chatRef]);

  useEffect(() => {
    const topDiv = chatRef.current;
    const bottomDiv = bottomRef.current;
    if (!topDiv || !bottomDiv) return;

    const distanceFromBottom =
      topDiv.scrollHeight - topDiv.scrollTop - topDiv.clientHeight;

    const isNearBottom = distanceFromBottom <= 100;

    if (!hasInitialized || isNearBottom) {
      setTimeout(() => {
        bottomDiv.scrollIntoView({ behavior: "smooth" });
      }, 50);

      if (!hasInitialized) setHasInitialized(true);
    }
  }, [count, bottomRef, chatRef, hasInitialized]);
};
