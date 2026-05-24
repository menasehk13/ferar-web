import { FeatureList, PageHero } from "@/components/Sections";
import { PageShell } from "@/components/Site";

export default function RiderPage() {
  return <PageShell><PageHero badge="Rider app" title="A focused work app for riders on the move." text="The rider experience is built around availability, job matching, navigation context, status updates, earnings, and safety while working across Addis Ababa." /><FeatureList items={[{title:"Go online",text:"Riders can control availability and share accurate location only when they are working."},{title:"Accept jobs",text:"New delivery requests are presented clearly with pickup, dropoff, payout, and delivery status."},{title:"Track earnings",text:"Wallet and payout views help riders understand completed work and expected earnings."}]} /></PageShell>;
}
