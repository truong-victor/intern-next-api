import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { Messenger } from "@/components";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Component {...pageProps}></Component>
    </main>
  );
}
