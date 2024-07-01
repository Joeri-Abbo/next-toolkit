// app/layout.tsx
import './globals.css';
import Sidebar from '../components/Sidebar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <div className="flex-grow p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
