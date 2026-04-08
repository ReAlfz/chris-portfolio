/**
 * Rally The Locals — dedicated landing page for the RTL brand/work.
 * Figma: node 99-1876 in Chris Hoquis Portfolio (Copy).
 * Header + footer come from the root layout; this file only mounts page body content.
 */

import type { Metadata } from "next";
import RallyTheLocalsPage from "@/components/rally/rally_the_locals_page";

export const metadata: Metadata = {
  title: "Rally The Locals | Chris Hoquis",
  description:
    "Rally The Locals showcases local businesses through stories, community, and creative services.",
};

export default function RallyTheLocalRoute() {
  return (
    <main className="min-h-screen bg-canvas">
      <RallyTheLocalsPage />
    </main>
  );
}
