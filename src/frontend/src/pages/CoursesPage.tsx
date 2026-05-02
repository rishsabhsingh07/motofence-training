import CourseTable from "@/components/CourseTable";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";

const basicCourse = {
  tier: "BASIC",
  subtitle: "DETAILER + PPF",
  description:
    "Entry-level course for aspiring automotive detailing professionals.",
  plans: [
    {
      name: "Plan A",
      price: "₹7,500",
      course: "Detailer",
      duration: "5 Days",
      certificate: true,
      toolsKit: false,
      jobAssistance: null,
      internship: null,
      salaryPackage: null,
    },
    {
      name: "Plan B",
      price: "₹15,000",
      course: "PPF",
      duration: "5 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: null,
      internship: null,
      salaryPackage: null,
    },
    {
      name: "Plan C",
      price: "₹22,000",
      course: "Both (Detailer + PPF)",
      duration: "10 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: null,
      internship: null,
      salaryPackage: null,
    },
  ],
  rows: ["price", "course", "duration", "certificate", "toolsKit"],
};

const advancedCourse = {
  tier: "ADVANCED",
  subtitle: "DETAILER + PPF",
  description:
    "Technical deep-dive with internship opportunities and job placement support.",
  plans: [
    {
      name: "Plan A",
      price: "₹11,000",
      course: "Detailer",
      duration: "15 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: true,
      internship: "30 Days (Optional)",
      salaryPackage: null,
    },
    {
      name: "Plan B",
      price: "₹21,000",
      course: "PPF",
      duration: "15 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: true,
      internship: "30 Days",
      salaryPackage: null,
    },
    {
      name: "Plan C",
      price: "₹31,000",
      course: "Both (Detailer + PPF)",
      duration: "30 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: true,
      internship: "30 Days",
      salaryPackage: null,
    },
  ],
  rows: [
    "price",
    "course",
    "duration",
    "certificate",
    "jobAssistance",
    "internship",
    "toolsKit",
  ],
};

const proCourse = {
  tier: "PRO",
  subtitle: "DETAILER + PPF",
  description:
    "Master-level training with paid internship and premium salary packages.",
  plans: [
    {
      name: "Plan A",
      price: "₹16,000",
      course: "Detailer",
      duration: "30 Days",
      certificate: true,
      toolsKit: false,
      jobAssistance: true,
      internship: "30 Days Paid (Optional)",
      salaryPackage: "2–3 Lac p.a.",
    },
    {
      name: "Plan B",
      price: "₹35,000",
      course: "PPF",
      duration: "30 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: true,
      internship: "30 Days Paid",
      salaryPackage: "2.5–4 Lac p.a.",
    },
    {
      name: "Plan C",
      price: "₹49,000",
      course: "Both (Detailer + PPF)",
      duration: "45–60 Days",
      certificate: true,
      toolsKit: true,
      jobAssistance: true,
      internship: "30 Days Paid",
      salaryPackage: "3–5 Lac p.a.",
    },
  ],
  rows: [
    "price",
    "course",
    "duration",
    "certificate",
    "jobAssistance",
    "internship",
    "toolsKit",
    "salaryPackage",
  ],
};

export default function CoursesPage() {
  return (
    <div
      className="min-h-screen bg-background flex flex-col"
      data-ocid="courses.page"
    >
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <section
          className="py-20 px-4"
          id="courses-section"
          data-ocid="courses.section"
        >
          <div className="max-w-7xl mx-auto space-y-20">
            <CourseTable data={basicCourse} colorAccent="BASIC" index={1} />
            <div className="border-t border-border" />
            <CourseTable
              data={advancedCourse}
              colorAccent="ADVANCED"
              index={2}
            />
            <div className="border-t border-border" />
            <CourseTable data={proCourse} colorAccent="PRO" index={3} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
