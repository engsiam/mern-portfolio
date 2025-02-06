import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const DashboardServiceTable = () => {
  const services = [
    {
      id: 1,
      title: "Web Development",
      category: "Development",
      price: "$999",
      status: "Active",
    },
    // Add more placeholder data as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {services.map((service) => (
          <TableRow key={service.id}>
            <TableCell className="font-medium">{service.title}</TableCell>
            <TableCell>{service.category}</TableCell>
            <TableCell>{service.price}</TableCell>
            <TableCell>{service.status}</TableCell>
            <TableCell className="text-right space-x-2">
              <Button variant="outline" size="sm">
                <Pencil className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Trash2 className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DashboardServiceTable;