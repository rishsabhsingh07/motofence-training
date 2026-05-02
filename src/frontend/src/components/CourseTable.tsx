import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Minus, X } from "lucide-react";

type Plan = {
  name: string;
  price: string;
  course: string;
  duration: string;
  certificate: boolean;
  toolsKit: boolean | null;
  jobAssistance: boolean | null;
  internship: string | null;
  salaryPackage: string | null;
};

type CourseData = {
  tier: string;
  subtitle: string;
  description: string;
  plans: Plan[];
  rows: string[];
};

const ROW_LABELS: Record<string, string> = {
  price: "Price",
  course: "Course",
  duration: "Duration",
  certificate: "Certificate",
  toolsKit: "Tools Kit",
  jobAssistance: "Job Assistance",
  internship: "Free/Paid Internship",
  salaryPackage: "Salary Package",
};

function CellValue({ rowKey, plan }: { rowKey: string; plan: Plan }) {
  const val = plan[rowKey as keyof Plan];

  if (rowKey === "price") {
    return (
      <span className="text-accent text-accent-glow font-bold text-lg">
        {val as string}
      </span>
    );
  }
  if (typeof val === "boolean") {
    return val ? (
      <Check className="w-5 h-5 text-accent mx-auto" />
    ) : (
      <X className="w-5 h-5 text-muted-foreground mx-auto" />
    );
  }
  if (val === null) {
    return <Minus className="w-4 h-4 text-muted-foreground mx-auto" />;
  }
  return <span className="text-foreground text-sm">{val as string}</span>;
}

export default function CourseTable({
  data,
  colorAccent,
  index,
}: {
  data: CourseData;
  colorAccent: string;
  index: number;
}) {
  return (
    <div
      className="rounded-lg overflow-hidden border border-border shadow-elevated"
      data-ocid={`course.card.${index}`}
    >
      {/* Section header */}
      <div className="bg-accent px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-accent-foreground font-display font-black text-2xl tracking-widest uppercase">
            {data.tier} COURSE
          </h2>
          <p className="text-accent-foreground/80 text-sm font-semibold tracking-wider mt-0.5">
            {data.subtitle}
          </p>
        </div>
        <Badge className="bg-background/20 text-accent-foreground border-accent-foreground/30 text-xs font-bold tracking-wider uppercase">
          {colorAccent}
        </Badge>
      </div>

      <p className="bg-card px-6 py-3 text-muted-foreground text-sm border-b border-border">
        {data.description}
      </p>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-card border-b border-border">
              <th className="text-left px-5 py-4 text-muted-foreground font-semibold uppercase tracking-wider w-44">
                Feature
              </th>
              {data.plans.map((plan, i) => (
                <th
                  key={plan.name}
                  className="px-5 py-4 text-center text-accent-foreground font-black text-base tracking-widest uppercase bg-accent/90"
                  data-ocid={`course.plan_header.${index}.${i + 1}`}
                >
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.rows.map((rowKey, ri) => (
              <tr
                key={rowKey}
                className="border-b border-border last:border-0 hover:bg-muted/50 transition-smooth group"
                data-ocid={`course.row.${index}.${ri + 1}`}
              >
                <td className="px-5 py-4 text-foreground/70 font-semibold text-xs uppercase tracking-wider bg-muted/60 border-r border-border">
                  {ROW_LABELS[rowKey]}
                </td>
                {data.plans.map((plan) => (
                  <td
                    key={plan.name}
                    className="px-5 py-4 text-center bg-white group-hover:bg-muted/30 transition-smooth"
                  >
                    <CellValue rowKey={rowKey} plan={plan} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA row */}
      <div className="bg-card grid grid-cols-3 divide-x divide-border border-t border-border">
        {data.plans.map((plan, i) => (
          <div key={plan.name} className="p-4 flex flex-col items-center gap-2">
            <span className="text-muted-foreground text-xs font-bold uppercase tracking-wider">
              {plan.name}
            </span>
            <Button
              className="w-full bg-accent text-accent-foreground font-bold uppercase tracking-widest hover:bg-accent/80 hover:shadow-elevated transition-smooth text-xs"
              data-ocid={`course.enroll_button.${index}.${i + 1}`}
            >
              Enroll Now
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
