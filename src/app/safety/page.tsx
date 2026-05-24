import { FeatureList, PageHero } from "@/components/Sections";
import { PageShell } from "@/components/Site";

export default function SafetyPage() {
  return <PageShell><PageHero badge="Safety and trust" title="Trust signals built into every trip and delivery." text="Ferar combines verified roles, real time tracking, admin audit trails, delivery events, and emergency focused workflows so operations can move fast without going blind." /><FeatureList items={[{title:"Verified roles",text:"Customers, riders, and admins use role based access so every action has context and accountability."},{title:"Delivery events",text:"Each delivery has status history and timeline data for support, review, and dispute handling."},{title:"SOS ready",text:"Rider and delivery safety flows are represented in the platform model and realtime layer."}]} /></PageShell>;
}
