//page가 사용하기전에 layout을 먼저 거쳐서 실행이 됨
import { Noto_Sans_KR} from "next/font/google"
import "./globals.css";

const NotoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800","900"],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={NotoSansKR.className}>
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}
