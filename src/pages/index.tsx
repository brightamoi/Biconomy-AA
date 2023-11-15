import dynamic from "next/dynamic";
// Use inter from next/font
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "@biconomy/web3-auth/dist/src/style.css";

// Dynamically import the `Wallet` component to make sure we don't get SSR errors
const Wallet = dynamic(
  () => import("../components/Wallet").then((res) => res.default),
  { ssr: false }
);

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className}>
      <Suspense fallback={<div>Loading...</div>}>
        <Wallet />
      </Suspense>
    </main>
  );
}
