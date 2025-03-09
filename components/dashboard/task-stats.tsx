// task-stats.tsx
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { 
  ListChecks as TasksIcon, 
  CheckCircle2 as CompletedIcon,
  Clock as PendingIcon,
  XCircle as CancelledIcon 
} from "lucide-react";

export function TaskStats() {
  const stats = [
    {
      name: "Total Tasks",
      value: "25",
      icon: TasksIcon,
    },
    {
      name: "Completed",
      value: "18",
      icon: CompletedIcon,
    },
    {
      name: "In Progress",
      value: "5",
      icon: PendingIcon,
    },
    {
      name: "Cancelled",
      value: "2",
      icon: CancelledIcon,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <Icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}