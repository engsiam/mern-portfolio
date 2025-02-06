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

const DashboardTeamTable = () => {
  const team = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO & Founder",
      email: "john@example.com",
      status: "Active",
    },
    // Add more placeholder data as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Role</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {team.map((member) => (
          <TableRow key={member.id}>
            <TableCell className="font-medium">{member.name}</TableCell>
            <TableCell>{member.role}</TableCell>
            <TableCell>{member.email}</TableCell>
            <TableCell>{member.status}</TableCell>
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

export default DashboardTeamTable;