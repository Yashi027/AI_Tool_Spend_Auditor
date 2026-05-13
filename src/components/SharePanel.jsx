import { Copy, Share2 } from "lucide-react";

export default function SharePanel({
  reportId,
}) {
  const url =
    typeof window !== "undefined"
      ? `${window.location.origin}/report/${reportId}`
      : "";

  return (
    <div className="max-w-6xl mx-auto flex flex-wrap items-center gap-4 mt-10">

      <button
        onClick={() =>
          navigator.clipboard.writeText(url)
        }
        className="flex items-center gap-2 bg-gray-100 px-6 py-4 rounded-2xl"
      >
        <Copy size={18} />
        Copy Link
      </button>

      <a
        href={`https://twitter.com/intent/tweet?text=I%20saved%20money%20using%20StackSage&url=${url}`}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 bg-black text-white px-6 py-4 rounded-2xl"
      >
        <Share2 size={18} />
        Share Report
      </a>
    </div>
  );
}