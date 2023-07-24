// Fonts
import { Noto_Sans, Noto_Sans_Display } from "next/font/google";

// Font Declarations
export const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
});
export const notoSansDisplay = Noto_Sans_Display({ subsets: ["latin"] });
