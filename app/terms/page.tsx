import { TermsOfService } from "@/components/TermsOfService";

export const metadata = {
  title: "Terms of Service — PageForge",
  description: "Terms and conditions for using the PageForge AI landing page generator.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <TermsOfService
        companyName="PageForge"
        productName="PageForge"
        contactEmail="hello@pageforge.ai"
        websiteUrl="https://pageforge-phi.vercel.app"
        lastUpdated="2026-03-20"
      />
    </main>
  );
}
