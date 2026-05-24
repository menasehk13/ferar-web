import { FeatureList, PageHero } from "@/components/Sections";
import { PageShell } from "@/components/Site";

export default function CustomerPage() {
  return <PageShell><PageHero badge="Customer app" title="Send anything across the city with confidence." text="Ferar gives customers a simple way to request delivery, see transparent pricing, track riders live, and manage every order from pickup to proof of delivery." /><FeatureList items={[{title:"Fast booking",text:"A clear delivery flow with pickup, dropoff, package details, price estimate, and confirmation."},{title:"Live tracking",text:"Customers can follow the rider movement in real time and stay updated through every delivery status."},{title:"Wallet ready",text:"Payments, promos, refunds, and receipts are designed into the core platform experience."}]} /></PageShell>;
}
