import { PrivacyPolicy } from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy — PageForge",
  description: "How PageForge collects, uses, and protects your personal data under the GDPR.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <PrivacyPolicy
        companyName="PageForge"
        contactEmail="hello@pageforge.ai"
        websiteUrl="https://pageforge-phi.vercel.app"
        lastUpdated="2026-03-20"
      />
    </main>
  );
}
