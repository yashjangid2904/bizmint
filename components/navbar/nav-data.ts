import { 
  Building2, 
  Scale, 
  Building, 
  Globe, 
  ShieldCheck, 
  FileCheck, 
  TrendingUp, 
  CreditCard,
  ClipboardCheck,
  LayoutGrid,
  Users,
  PieChart,
  Zap,
  Settings,
  PenTool,
  Briefcase,
  Target,
  type LucideIcon
} from "lucide-react";

export interface NavSubItem {
  name: string;
  href: string;
  icon?: LucideIcon;
}

export interface NavItem {
  title: string;
  items: NavSubItem[];
}

export const NAV_ITEMS: NavItem[] = [
  {
    title: "Start Business",
    items: [
      { name: "Private Limited Company", href: "/services/private-limited-company", icon: Building2 },
      { name: "LLP Registration", href: "/services/llp-registration", icon: Scale },
      { name: "OPC Registration", href: "/services/opc-registration", icon: Building },
      { name: "Foreign Subsidiary", href: "/services/foreign-subsidiary", icon: Globe },
    ],
  },
  {
    title: "Licenses",
    items: [
      { name: "BIS / BEE / WPC / PESO", href: "/services/bis-bee-wpc-peso", icon: ShieldCheck },
      { name: "Insurance Licenses", href: "/services/insurance-license", icon: FileCheck },
      { name: "SEBI Licenses", href: "/services/sebi-license", icon: TrendingUp },
      { name: "NBFC Registration", href: "/services/nbfc-registration", icon: CreditCard },
    ],
  },
  {
    title: "Compliance",
    items: [
      { name: "ROC Filings", href: "/services/roc-filings", icon: ClipboardCheck },
      { name: "Annual Compliance", href: "/services/annual-compliance", icon: LayoutGrid },
      { name: "DIN KYC", href: "/services/din-kyc", icon: Users },
      { name: "GST / Income Tax", href: "/services/gst-income-tax", icon: PieChart },
    ],
  },
  {
    title: "NBFC & Finance",
    items: [
      { name: "NBFC Setup", href: "/services/nbfc-setup", icon: Building2 },
      { name: "NBFC Compliance", href: "/services/nbfc-compliance", icon: ShieldCheck },
      { name: "P2P License", href: "/services/p2p-license", icon: Zap },
      { name: "RBI Services", href: "/services/rbi-services", icon: Settings },
    ],
  },
  {
    title: "International",
    items: [
      { name: "FDI / FEMA", href: "/services/fdi-fema", icon: Globe },
      { name: "FC-GPR / FC-TRS", href: "/services/fc-gpr", icon: FileCheck },
      { name: "FLA Return", href: "/services/fla-return", icon: ClipboardCheck },
      { name: "Foreign Subsidiary", href: "/services/foreign-subsidiary", icon: Building },
    ],
  },
  {
    title: "Investor Services",
    items: [
      { name: "IEPF Claim", href: "/services/iepf-claim", icon: Target },
      { name: "Duplicate Shares", href: "/services/duplicate-shares", icon: FileCheck },
      { name: "Share Transmission", href: "/services/share-transmission", icon: Users },
      { name: "Mutual Fund Redemption", href: "/services/mutual-fund-redemption", icon: TrendingUp },
    ],
  },
  {
    title: "Registrations",
    items: [
      { name: "Digital Signature (DSC)", href: "/services/dsc", icon: PenTool },
      { name: "IEC Registration", href: "/services/iec-registration", icon: Globe },
      { name: "MSME Registration", href: "/services/msme-registration", icon: Briefcase },
      { name: "Startup India", href: "/services/startup-india", icon: Zap },
    ],
  },
];
