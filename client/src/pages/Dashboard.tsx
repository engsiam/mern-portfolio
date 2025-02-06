import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import DashboardBlogTable from "@/components/DashboardBlogTable";
import DashboardTeamTable from "@/components/DashboardTeamTable";
import DashboardServiceTable from "@/components/DashboardServiceTable";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Dashboard</h1>
        </div>

        <Tabs defaultValue="blogs" className="space-y-4">
          <TabsList>
            <TabsTrigger value="blogs">Blogs</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
          </TabsList>

          <TabsContent value="blogs" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Manage Blogs</CardTitle>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Blog
                </Button>
              </CardHeader>
              <CardContent>
                <DashboardBlogTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Manage Team</CardTitle>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Team Member
                </Button>
              </CardHeader>
              <CardContent>
                <DashboardTeamTable />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle>Manage Services</CardTitle>
                <Button>
                  <Plus className="mr-2 h-4 w-4" /> Add Service
                </Button>
              </CardHeader>
              <CardContent>
                <DashboardServiceTable />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;