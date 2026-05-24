import { FeatureList, PageHero } from "@/components/Sections";
import { PageShell } from "@/components/Site";

export default function BusinessPage() {
  return <PageShell><PageHero badge="Business operations" title="Dispatch, monitor, and scale city logistics." text="Ferar can support merchants, fleet operators, and internal operations teams with reliable dispatch visibility, audit trails, and operational controls." /><FeatureList items={[{title:"Ops dashboard",text:"The admin dashboard gives teams live visibility into deliveries, riders, KYC, finance, support, and audit activity."},{title:"Fleet quality",text:"Ratings, KYC, rider status, and delivery history help keep service quality measurable."},{title:"API first",text:"The backend is built with structured modules for deliveries, payments, wallets, notifications, and analytics."}]} /></PageShell>;
}
