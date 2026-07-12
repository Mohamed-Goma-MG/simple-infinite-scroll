import { useEffect, useMemo, useState, type RefObject } from "react";

export default function LoadMore({
  contentRef,
}: {
  contentRef: RefObject<HTMLDivElement | null>;
}) {
  const [show, setShow] = useState<true | false>(false);
  const margin = useMemo(() => 150, []);

  // Monitoring the scroll
  useEffect(() => {
    if (!contentRef.current) return;
    contentRef.current.addEventListener("scroll", scrolling);

    function scrolling() {
      if (!contentRef.current) return;

      const contnetOffsetHeight = contentRef.current.offsetHeight;
      const maxHeight = contentRef.current.scrollHeight;
      const currPos = contentRef.current.scrollTop;

      const diff = maxHeight - (currPos + contnetOffsetHeight);

      if (margin >= diff) {
        setShow(true);
      } else {
        setShow(false);
      }
    }

    return () => removeEventListener("scroll", scrolling);
  }, []);

  return (
    show && (
      <button className="rounded-lg border border-gray-400 bg-blue-200 fixed bottom-3 left-1/2 -translate-x-1/2 px-3 py-2 z-10">
        show more
      </button>
    )
  );
}
