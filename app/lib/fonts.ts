import { IBM_Plex_Mono, Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const ibm = IBM_Plex_Mono({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["cyrillic"],
});
