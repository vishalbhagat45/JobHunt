import { 
    Search,
    Users,
    FileText,
    MessageSquare,
    BarChart3,
    Shield,
    Clock,
    Award,
    Briefcase,
    Building2,
    LayoutDashboard,
    Plus
} from "lucide-react";


export const jobSeekerFeatures = [
    {
        icon: Search,
        title: "Intelligent Job Matching",
        description: "Let our AI-powered engine connect you to roles that align perfectly with your skills, goals, and preferences."
    },
    {
        icon: FileText,
        title: "Professional Resume Builder",
        description: "Craft standout resumes effortlessly using expert-designed templates and smart content suggestions."
    },
    {
        icon: MessageSquare,
        title: "Instant Messaging with Recruiters",
        description: "Communicate directly and securely with hiring managers to speed up your job search process."
    },
    {
        icon: Award,
        title: "Verified Skill Certification",
        description: "Demonstrate your expertise with credible skill assessments and earn badges trusted by top employers."
    },
];


export const employerFeatures = [
    {
        icon: Users,
        title: "Curated Talent Access",
        description: "Unlock a rich database of thoroughly vetted candidates and discover your ideal team members faster."
    },
    {
        icon: BarChart3,
        title: "Real-Time Hiring Insights",
        description: "Monitor hiring metrics with powerful analytics and gain deeper visibility into candidate engagement."
    },
    {
        icon: Shield,
        title: "Trusted Candidate Verification",
        description: "All applicants are screened and background-verified to ensure you're hiring dependable, qualified professionals."
    },
    {
        icon: Clock,
        title: "Accelerated Hiring Process",
        description: "Cut down hiring time by up to 60% with smart automation and seamless screening tools."
    },
];


export const NAVIGATION_MENU = [
  { id: "employer-dashboard", name: "Dashboard", icon: LayoutDashboard },
  { id: "post-job", name: "Post Job", icon: Plus },
  { id: "manage-jobs", name: "Manage Jobs", icon: Briefcase },
  { id: "company-profile", name: "Company Profile", icon: Building2 },
];

export const CATEGORIES = [
  { value: "Engineering", label: "Engineering" },
  { value: "Design", label: "Design" },
  { value: "Marketing", label: "Marketing" },
  { value: "Sales", label: "Sales" },
  { value: "IT & Software", label: "IT & Software" },
  { value: "Customer service", label: "Customer Service" },
  { value: "Product", label: "Product" },
  { value: "Operations", label: "Operations" },
  { value: "Finance", label: "Finance" },
  { value: "HR", label: "Human Resources" },
  { value: "Other", label: "Other" },
];

export const JOB_TYPES = [
  { value: "Remote", label: "Remote" },
  { value: "Full-Time", label: "Full Time" },
  { value: "Part-Time", label: "Part Time" },
  { value: "Internship", label: "Internship" },
  { value: "Contract", label: "Contract" },
];


export const SALARY_RANGES = [
  "Less than ₹3 LPA",
  "₹3 LPA – ₹6 LPA",
  "₹6 LPA – ₹10 LPA",
  "More than ₹10 LPA",
];

