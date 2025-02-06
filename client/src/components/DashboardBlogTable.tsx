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

const DashboardBlogTable = () => {
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Web Development",
      category: "Development",
      date: "2024-03-15",
      status: "Published",
    },
    // Add more placeholder data as needed
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Category</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {blogs.map((blog) => (
          <TableRow key={blog.id}>
            <TableCell className="font-medium">{blog.title}</TableCell>
            <TableCell>{blog.category}</TableCell>
            <TableCell>{blog.date}</TableCell>
            <TableCell>{blog.status}</TableCell>
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

export default DashboardBlogTable;