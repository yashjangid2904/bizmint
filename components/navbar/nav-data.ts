import { 
  Building2, 
  FileCheck, 
  ShieldCheck, 
  Globe, 
  TrendingUp, 
  PenTool, 
  Briefcase, 
  PieChart, 
  ClipboardCheck, 
  Zap, 
  Scale, 
  Users, 
  LayoutGrid, 
  Settings, 
  Building,
  CreditCard,
  Target,
  type LucideIcon
} from "lucide-react";

export interface NavSubItem {
  title: string;
  href: string;
  description?: string;
  icon?: LucideIcon;
}

export interface NavItem {
  title: string;
  href?: string;
  items?: NavSubItem[];
  isMega?: boolean;
}

export const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  {
    title: "Start Business",
    items: [
      { title: "Private Limited Company", href: "/start/private-limited", icon: Building2, description: "Most popular for startups" },
      { title: "LLP Registration", href: "/start/llp", icon: Scale, description: "Limited Liability Partnership" },
      { title: "OPC Registration", href: "/start/opc", icon: Building, description: "One Person Company" },
      { title: "Foreign Subsidiary", href: "/start/foreign-subsidiary", icon: Globe, description: "Expand to India" },
    ],
  },
  {
    title: "Licenses",
    isMega: true,
    items: [
      { title: "BIS / BEE / WPC / PESO", href: "/licenses/regulatory", icon: ShieldCheck, description: "Product & safety certifications" },
      { title: "Insurance Licenses", href: "/licenses/insurance", icon: FileCheck, description: "IRDAI compliance" },
      { title: "SEBI Licenses", href: "/licenses/sebi", icon: TrendingUp, description: "AIF, Investment Adviser, Research Analyst" },
      { title: "NBFC Registration", href: "/licenses/nbfc", icon: CreditCard, description: "Non-Banking Financial Company" },
    ],
  },
  {
    title: "Compliance",
    isMega: true,
    items: [
      { title: "ROC Filings", href: "/compliance/roc", icon: ClipboardCheck, description: "Annual returns & forms" },
      { title: "Annual Compliance", href: "/compliance/annual", icon: LayoutGrid, description: "Keep your business compliant" },
      { title: "DIN KYC", href: "/compliance/din-kyc", icon: Users, description: "Director identification" },
      { title: "GST / Income Tax", href: "/compliance/tax", icon: PieChart, description: "Taxation services" },
      { title: "RBI / FEMA Filings", href: "/compliance/rbi", icon: Globe, description: "Foreign exchange compliance" },
    ],
  },
  {
    title: "NBFC & Finance",
    items: [
      { title: "NBFC Setup", href: "/finance/nbfc-setup", icon: Building2 },
      { title: "NBFC Compliance", href: "/finance/nbfc-compliance", icon: ShieldCheck },
      { title: "P2P License", href: "/finance/p2p-license", icon: Zap },
      { title: "CIC / CIMS / RBI Services", href: "/finance/rbi-services", icon: Settings },
    ],
  },
  {
    title: "International",
    items: [
      { title: "FDI / FEMA", href: "/intl/fdi", icon: Globe },
      { title: "FC-GPR / FC-TRS", href: "/intl/fc-gpr", icon: FileCheck },
      { title: "FLA Return", href: "/intl/fla", icon: ClipboardCheck },
      { title: "Foreign Subsidiary", href: "/intl/subsidiary", icon: Building },
    ],
  },
  {
    title: "Investor Services",
    isMega: true,
    items: [
      { title: "IEPF Claim", href: "/investor/iepf", icon: Target, description: "Recover lost dividends/shares" },
      { title: "Duplicate Shares", href: "/investor/duplicate", icon: FileCheck, description: "Issue of new certificates" },
      { title: "Share Transmission", href: "/investor/transmission", icon: Users, description: "Transfer of ownership" },
      { title: "Mutual Fund Redemption", href: "/investor/mf", icon: TrendingUp, description: "Unclaimed MF units" },
      { title: "AIF / Advisory", href: "/investor/advisory", icon: PieChart, description: "SEBI related services" },
    ],
  },
  {
    title: "Registrations",
    items: [
      { title: "Digital Signature (DSC)", href: "/reg/dsc", icon: PenTool },
      { title: "IEC", href: "/reg/iec", icon: Globe },
      { title: "MSME", href: "/reg/msme", icon: Briefcase },
      { title: "Startup India", href: "/reg/startup", icon: Zap },
    ],
  },
];
