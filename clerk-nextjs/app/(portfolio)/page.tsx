import { SidebarInset } from "@/components/ui/sidebar";
import PortfolioContent from "@/components/PortfolioContent";

export default async function Home() {
  return (
    <SidebarInset>
      <PortfolioContent />
    </SidebarInset>
  );
}
