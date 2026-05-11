import { Copy, Share2 } from "lucide-react";

export default function SharePanel({ reportId }) {
  const url = `${window.location.origin}/report/${reportId}`;

  return (
    <div className="flex items-center gap-4 mt-8">
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-xl"
      >
        <Copy size={18} />
        Copy Link
      </button>

      <a
        href={`https://twitter.com/intent/tweet?text=I%20saved%20money%20using%20StackSage&url=${url}`}
        target="_blank"
        className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-xl"
      >
        <Share2 size={18} />
        Share
      </a>
    </div>
  );
}