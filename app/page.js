import { redirect } from "next/navigation";

// Until the landing page exists, the root forwards to the creative portfolio.
export default function Home() {
  redirect("/creative");
}
