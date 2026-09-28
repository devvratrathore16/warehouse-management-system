import type { LucideIcon } from "lucide-react"
import {
  AlertTriangle,
  Archive,
  BarChart3,
  BellRing,
  Boxes,
  ClipboardCheck,
  CreditCard,
  FileClock,
  LayoutDashboard,
  LogOut,
  PackageCheck,
  ReceiptText,
  Settings2,
  ShieldCheck,
  Truck,
  Users,
  Warehouse,
} from "lucide-react"

export type UserRole = "ADMIN" | "MANAGER" | "STAFF" | "SUPPLIER" | "BUYER"

export type NavItem = {
  label: string
  href: string
  icon: LucideIcon
  roles: UserRole[]
  badge?: string
}

export const roleLabels: Record<UserRole, string> = {
  ADMIN: "Administrator",
  MANAGER: "Warehouse manager",
  STAFF: "Warehouse staff",
  SUPPLIER: "Supplier",
  BUYER: "Buyer",
}

export const navigation: NavItem[] = [
  { label: "Dashboard", href: "/", icon: LayoutDashboard, roles: ["ADMIN", "MANAGER", "STAFF", "SUPPLIER", "BUYER"] },
  { label: "Inventory", href: "/inventory", icon: Boxes, roles: ["ADMIN", "MANAGER", "STAFF", "SUPPLIER", "BUYER"] },
  { label: "Chambers", href: "/chambers", icon: Warehouse, roles: ["ADMIN", "MANAGER", "STAFF"] },
  { label: "Withdrawals", href: "/withdrawals", icon: Archive, roles: ["ADMIN", "MANAGER", "STAFF", "BUYER"] },
  { label: "Dispatch", href: "/dispatch", icon: Truck, roles: ["ADMIN", "MANAGER", "STAFF", "BUYER"] },
  { label: "Alerts", href: "/alerts", icon: AlertTriangle, roles: ["ADMIN", "MANAGER", "STAFF", "SUPPLIER", "BUYER"], badge: "4" },
  { label: "Rent", href: "/rent", icon: ReceiptText, roles: ["ADMIN", "MANAGER", "BUYER", "SUPPLIER"] },
  { label: "Payments", href: "/payments", icon: CreditCard, roles: ["ADMIN", "MANAGER", "BUYER", "SUPPLIER"] },
  { label: "Staff Tasks", href: "/staff-tasks", icon: ClipboardCheck, roles: ["ADMIN", "MANAGER", "STAFF"] },
  { label: "Reports", href: "/reports", icon: BarChart3, roles: ["ADMIN", "MANAGER", "BUYER"] },
  { label: "Audit Logs", href: "/audit-logs", icon: FileClock, roles: ["ADMIN", "MANAGER"] },
  { label: "Users", href: "/users", icon: Users, roles: ["ADMIN"] },
]

export const secondaryNavigation = [
  { label: "Notifications", href: "/notifications", icon: BellRing },
  { label: "Settings", href: "/settings", icon: Settings2 },
  { label: "Security", href: "/security", icon: ShieldCheck },
  { label: "Sign out", href: "/sign-out", icon: LogOut },
]

export const mockUser = {
  name: "Ava Williams",
  email: "ava.williams@northstar.co",
  initials: "AW",
  role: "ADMIN" as UserRole,
}

export function getNavigationForRole(role: UserRole) {
  return navigation.filter((item) => item.roles.includes(role))
}

export const statusStyles = {
  healthy: "bg-emerald-50 text-emerald-700 ring-emerald-600/20",
  warning: "bg-amber-50 text-amber-700 ring-amber-600/20",
  critical: "bg-red-50 text-red-700 ring-red-600/20",
  neutral: "bg-slate-100 text-slate-600 ring-slate-500/20",
}

export type StatusTone = keyof typeof statusStyles
export type MockStatus = { label: string; tone: StatusTone }

export const dashboardMetrics = [
  { label: "Total inventory", value: "24,892", change: "+8.2%", detail: "vs. last month", tone: "healthy" as StatusTone, icon: Boxes },
  { label: "Occupied capacity", value: "78.4%", change: "+3.1%", detail: "of total capacity", tone: "warning" as StatusTone, icon: Warehouse },
  { label: "Pending dispatches", value: "126", change: "-12.5%", detail: "from yesterday", tone: "healthy" as StatusTone, icon: PackageCheck },
  { label: "Open alerts", value: "04", change: "+2", detail: "need attention", tone: "critical" as StatusTone, icon: AlertTriangle },
]

export const recentActivity = [
  { reference: "WH-20481", action: "Stock received", location: "Chamber A-12", owner: "M. Chen", status: { label: "Completed", tone: "healthy" as StatusTone }, time: "12 min ago" },
  { reference: "WD-10932", action: "Withdrawal requested", location: "Chamber C-04", owner: "J. Carter", status: { label: "Pending", tone: "warning" as StatusTone }, time: "28 min ago" },
  { reference: "DP-77410", action: "Dispatch ready", location: "Dock 03", owner: "S. Patel", status: { label: "Ready", tone: "healthy" as StatusTone }, time: "41 min ago" },
  { reference: "AL-00084", action: "Temperature alert", location: "Chamber B-07", owner: "System", status: { label: "Critical", tone: "critical" as StatusTone }, time: "1 hr ago" },
]

export const chamberCapacity = [
  { name: "Chamber A", used: 82, total: 100, status: "healthy" as StatusTone },
  { name: "Chamber B", used: 94, total: 100, status: "critical" as StatusTone },
  { name: "Chamber C", used: 61, total: 100, status: "healthy" as StatusTone },
  { name: "Chamber D", used: 76, total: 100, status: "warning" as StatusTone },
]

export const alertSummary = [
  { label: "Critical", count: 1, tone: "critical" as StatusTone },
  { label: "Warnings", count: 3, tone: "warning" as StatusTone },
  { label: "Resolved today", count: 18, tone: "healthy" as StatusTone },
]

export function getStatusClasses(tone: StatusTone) {
  return statusStyles[tone]
}

export function getStatusIcon(tone: StatusTone) {
  return tone === "critical" ? AlertTriangle : tone === "warning" ? BellRing : ShieldCheck
}

export const warehouseName = "Northstar Logistics"
export const config = { appName: "Northstar WMS", warehouseName, defaultRole: "ADMIN" as UserRole, roleLabels, navigation }
export default config
