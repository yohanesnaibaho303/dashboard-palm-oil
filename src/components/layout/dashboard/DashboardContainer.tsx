import { AppSidebar } from "@/components/layout/dashboard/components/app-sidebar";
import { SiteHeader } from "@/components/layout/dashboard/components/site-header";
import { ThemeProvider } from "@/components/layout/theme-provider/theme-provider.tsx";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import HomeContainer from "@/pages/home/HomeContainer";
import { Route, Routes } from "react-router-dom";

export default function DashboardContainer() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="[--header-height:calc(theme(spacing.14))]">
        <SidebarProvider className="flex flex-col">
          <SiteHeader />
          <div className="flex flex-1">
            <AppSidebar variant="inset" />
            <SidebarInset>
              <div className="flex flex-1 flex-col gap-2 @container/main">
                <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
                  <Routes>
                    <Route path="home" element={<HomeContainer />} />
                  </Routes>
                  {/* <DataTable data={data} /> */}
                </div>
              </div>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </div>
    </ThemeProvider>
  );
}
