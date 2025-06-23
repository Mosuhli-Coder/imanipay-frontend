// app/dashboard/page.tsx
"use server";
import { redirect } from "next/navigation";
// import StatsContainer from "@/components/dashboard/overview/StatsContainer"; // Import StatsContainer
// import SalesOverviewChart from "@/components/dashboard/overview/SalesOverviewChart";
// import CategoryDistributionChart from "@/components/dashboard/overview/CategoryDistributionChart";
// import SalesChannelChart from "@/components/dashboard/overview/SalesChannelChart";

const DashboardPage = async () => {
    try {
        // const user = await getUserByRole("Admin");

        // if (!user) {
        //     redirect("/");
        // }

        return (
            <main>
                <div className='flex-1 overflow-auto relative z-10'>
                    <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
                        {/* Use the StatsContainer for the stats */}
                        {/* <StatsContainer /> */}

                        {/* CHARTS */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                            {/* <SalesOverviewChart />
                            <CategoryDistributionChart />
                            <SalesChannelChart /> */}
                        </div>
                    </main>
                </div>
            </main>
        );
    } catch (error) {
        console.error("Error fetching user data:", error);
        redirect("/");
    }
};

export default DashboardPage;