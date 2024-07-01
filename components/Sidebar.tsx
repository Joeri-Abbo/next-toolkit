// components/Sidebar.tsx
import Link from 'next/link';

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white p-4">
      <nav>
        <ul>
          <li className="mb-4"><Link href="/">Home</Link></li>
          <li className="mb-4"><Link href="/youtube-downloader">YouTube Downloader</Link></li>
          <li className="mb-4"><Link href="/json-formatter">JSON Formatter</Link></li>
          <li className="mb-4"><Link href="/slugify">Slugify String</Link></li>
          {/* <li className="mb-4"><Link href="/code-formatter">Code Formatter</Link></li> */}
          <li className="mb-4"><Link href="/markdown-previewer">Markdown Previewer</Link></li>
          <li className="mb-4"><Link href="/base64">Base64 Encoder/Decoder</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
