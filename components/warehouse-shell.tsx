"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  AlertTriangle, Bell, Boxes, ChevronDown, ClipboardList, FileBarChart, FileClock,
  LayoutDashboard, LogOut, PackageCheck, PanelLeft, Search, Settings, Truck, Users,
  WalletCards, Warehouse, ArrowUpRight, CircleAlert, Clock3, Thermometer, MoreHorizontal,
} from "lucide-react"
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer,
  Tooltip, XAxis, YAxis,
} from "recharts"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarInset, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, SidebarRail, SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export type WarehouseRole = "ADMIN" | "MANAGER" | "STAFF" | "SUPPLIER" | "BUYER"
type NavItem = { label: string; href: string; icon: React.ElementType; roles: WarehouseRole[] }
const allRoles: WarehouseRole[] = ["ADMIN", "MANAGER", "STAFF", "SUPPLIER", "BUYER"]
const navigation: NavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutDashboard, roles: allRoles },
  { label: "Inventory", href: "/inventory", icon: Boxes, roles: ["ADMIN", "MANAGER", "STAFF", "BUYER"] },
  { label: "Chambers", href: "/chambers", icon: Warehouse, roles: ["ADMIN", "MANAGER", "STAFF"] },
  { label: "Withdrawals", href: "/withdrawals", icon: ClipboardList, roles: ["ADMIN", "MANAGER", "STAFF", "BUYER"] },
  { label: "Dispatch", href: "/dispatch", icon: Truck, roles: ["ADMIN", "MANAGER", "STAFF", "SUPPLIER"] },
  { label: "Alerts", href: "/alerts", icon: AlertTriangle, roles: ["ADMIN", "MANAGER", "STAFF"] },
  { label: "Rent", href: "/rent", icon: FileBarChart, roles: ["ADMIN", "MANAGER", "SUPPLIER"] },
  { label: "Payments", href: "/payments", icon: WalletCards, roles: ["ADMIN", "MANAGER", "SUPPLIER", "BUYER"] },
  { label: "Staff Tasks", href: "/staff-tasks", icon: PackageCheck, roles: ["ADMIN", "MANAGER", "STAFF"] },
  { label: "Reports", href: "/reports", icon: FileBarChart, roles: ["ADMIN", "MANAGER", "BUYER"] },
  { label: "Audit Logs", href: "/audit-logs", icon: FileClock, roles: ["ADMIN", "MANAGER"] },
  { label: "Users", href: "/users", icon: Users, roles: ["ADMIN"] },
]
const metrics = [
  { label: "Total inventory", value: "24,680", delta: "+8.2%", note: "from last month", icon: Boxes, tone: "navy" },
  { label: "Occupied capacity", value: "78.4%", delta: "+2.4%", note: "of available space", icon: Warehouse, tone: "teal" },
  { label: "Pending dispatches", value: "42", delta: "12 urgent", note: "need attention", icon: Truck, tone: "amber" },
  { label: "Open alerts", value: "07", delta: "3 critical", note: "across facilities", icon: CircleAlert, tone: "red" },
]
const trendData = [{ month: "Apr", inventory: 18 }, { month: "May", inventory: 22 }, { month: "Jun", inventory: 20 }, { month: "Jul", inventory: 25 }, { month: "Aug", inventory: 23 }, { month: "Sep", inventory: 29 }]
const dispatchData = [{ day: "Mon", dispatched: 34 }, { day: "Tue", dispatched: 47 }, { day: "Wed", dispatched: 39 }, { day: "Thu", dispatched: 52 }, { day: "Fri", dispatched: 45 }, { day: "Sat", dispatched: 30 }]
const chamberData = [{ name: "Available", value: 21.6, fill: "var(--color-available)" }, { name: "Occupied", value: 78.4, fill: "var(--color-occupied)" }]

function StatusBadge({ children, tone = "neutral" }: { children: React.ReactNode; tone?: "neutral" | "success" | "warning" | "critical" }) {
  return <Badge variant="outline" className={`status-${tone}`}>{children}</Badge>
}

function WarehouseSidebar({ role }: { role: WarehouseRole }) {
  const pathname = usePathname()
  const visibleItems = navigation.filter((item) => item.roles.includes(role))
  return <Sidebar collapsible="icon" className="border-sidebar-border">
    <SidebarHeader className="border-b border-sidebar-border px-3 py-5">
      <div className="flex items-center gap-3 overflow-hidden"><div className="brand-mark"><Warehouse /></div><div className="min-w-0 group-data-[collapsible=icon]:hidden"><p className="truncate text-sm font-semibold tracking-wide">NORTHSTAR WMS</p><p className="truncate text-[10px] uppercase tracking-[0.18em] text-sidebar-foreground/55">Operations center</p></div></div>
    </SidebarHeader>
    <SidebarContent><SidebarGroup><SidebarGroupLabel>Workspace</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>{visibleItems.slice(0, 9).map((item) => <SidebarMenuItem key={item.label}><SidebarMenuButton render={<Link href={item.href} />} isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)} tooltip={item.label}><item.icon /><span>{item.label}</span>{item.label === "Alerts" && <span className="ml-auto size-1.5 rounded-full bg-amber-300 group-data-[collapsible=icon]:hidden" />}</SidebarMenuButton></SidebarMenuItem>)}</SidebarMenu></SidebarGroupContent></SidebarGroup><SidebarGroup><SidebarGroupLabel>Administration</SidebarGroupLabel><SidebarGroupContent><SidebarMenu>{visibleItems.slice(9).map((item) => <SidebarMenuItem key={item.label}><SidebarMenuButton render={<Link href={item.href} />} isActive={pathname === item.href || pathname.startsWith(`${item.href}/`)} tooltip={item.label}><item.icon /><span>{item.label}</span></SidebarMenuButton></SidebarMenuItem>)}<SidebarMenuItem><SidebarMenuButton tooltip="Settings"><Settings /><span>Settings</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarGroupContent></SidebarGroup></SidebarContent>
    <SidebarFooter className="border-t border-sidebar-border p-3"><SidebarMenu><SidebarMenuItem><SidebarMenuButton tooltip="Sign out"><LogOut /><span>Sign out</span></SidebarMenuButton></SidebarMenuItem></SidebarMenu></SidebarFooter><SidebarRail />
  </Sidebar>
}

const chartConfig = { inventory: { label: "Inventory", color: "var(--chart-1)" }, dispatched: { label: "Dispatched", color: "var(--chart-2)" }, available: { label: "Available", color: "var(--chart-3)" }, occupied: { label: "Occupied", color: "var(--chart-1)" } }

export function WarehouseShell({ children }: { children?: React.ReactNode }) {
  const pathname = usePathname()
  const [role] = React.useState<WarehouseRole>("MANAGER")
  return <SidebarProvider defaultOpen><WarehouseSidebar role={role} /><SidebarInset className="min-w-0 bg-background">
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border/80 bg-background/90 px-4 backdrop-blur md:px-7"><SidebarTrigger className="-ml-1" aria-label="Toggle navigation"><PanelLeft /></SidebarTrigger><Separator orientation="vertical" className="mr-1 h-5" /><div className="flex min-w-0 flex-1 items-center gap-2 text-sm"><span className="hidden text-muted-foreground sm:inline">Workspace</span><span className="hidden text-muted-foreground sm:inline">/</span><span className="truncate font-semibold text-primary">{pathname.startsWith("/inventory") ? "Inventory" : pathname.startsWith("/chambers") ? "Chambers" : "Dashboard"}</span></div><div className="hidden max-w-sm flex-1 md:block"><div className="relative"><Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" /><Input className="h-9 border-border/80 bg-muted/35 pl-9 text-xs" placeholder="Search inventory, orders..." aria-label="Global search" /></div></div><Button variant="ghost" size="icon" aria-label="Notifications" className="relative"><Bell /><span className="absolute right-2 top-2 size-1.5 rounded-full bg-amber-500 ring-2 ring-background" /></Button><Button variant="ghost" className="gap-2 px-2"><Avatar className="size-8"><AvatarFallback className="bg-primary text-primary-foreground text-xs">JD</AvatarFallback></Avatar><span className="hidden text-left text-sm md:block"><span className="block font-semibold">Jordan Davis</span><span className="block text-[11px] text-muted-foreground">Warehouse manager</span></span><ChevronDown className="hidden size-4 text-muted-foreground md:block" /></Button></header>
    {children ? <main className="flex-1 min-w-0">{children}</main> : <main className="flex-1 space-y-6 p-4 md:p-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="eyebrow">Tuesday · September 26, 2026</p><h1 className="mt-2 text-2xl font-semibold tracking-tight text-primary md:text-[28px]">Good morning, Jordan</h1><p className="mt-1 text-sm text-muted-foreground">Here's the latest overview of your warehouse operations.</p></div><Button className="self-start sm:self-auto"><ClipboardList data-icon="inline-start" />Create withdrawal</Button></div>
      <section aria-label="Warehouse metrics" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map((metric) => <Card key={metric.label} className="metric-card"><CardContent className="p-5"><div className="flex items-start justify-between gap-3"><div className={`metric-icon ${metric.tone}`}><metric.icon /></div><MoreHorizontal className="size-4 text-muted-foreground/50" /></div><p className="mt-4 text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground">{metric.label}</p><p className="mt-1 text-[27px] font-semibold tracking-tight text-primary">{metric.value}</p><p className="mt-1 text-xs text-muted-foreground"><span className="font-semibold text-emerald-700">{metric.delta}</span> {metric.note}</p><div className={`metric-line ${metric.tone}`} /></CardContent></Card>)}</section>
      <div className="grid gap-5 xl:grid-cols-[1.35fr_.8fr]"><Card><CardHeader className="flex-row items-center justify-between space-y-0"><div><p className="eyebrow">Live capacity</p><CardTitle className="mt-1 text-base">Chamber occupancy</CardTitle></div><Button variant="ghost" size="sm">Details <ArrowUpRight data-icon="inline-end" /></Button></CardHeader><CardContent className="flex items-center gap-7 pb-6"><div className="relative size-36 shrink-0"><ChartContainer config={chartConfig} className="size-full"><PieChart><Pie data={chamberData} dataKey="value" innerRadius={49} outerRadius={67} strokeWidth={0} startAngle={90} endAngle={-270}>{chamberData.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}</Pie></PieChart></ChartContainer><div className="absolute inset-0 flex flex-col items-center justify-center"><span className="text-2xl font-semibold text-primary">78.4%</span><span className="text-[10px] uppercase tracking-wider text-muted-foreground">occupied</span></div></div><div className="grid flex-1 gap-3">{[["Occupied", "19,240 pallets", "bg-primary"], ["Available", "5,440 pallets", "bg-[#b7a88e]"]].map(([label, value, dot]) => <div key={label} className="flex items-center justify-between border-b border-border/60 pb-2 text-sm last:border-0"><span className="flex items-center gap-2"><span className={`size-2 rounded-full ${dot}`} />{label}</span><span className="font-semibold text-primary">{value}</span></div>)}<div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground"><Thermometer className="size-3.5 text-teal-600" />Average chamber temperature 4.2°C</div></div></CardContent></Card>
      <Card><CardHeader><p className="eyebrow">Last 6 months</p><CardTitle className="mt-1 text-base">Inventory trend</CardTitle></CardHeader><CardContent><ChartContainer config={chartConfig} className="h-[165px] w-full"><AreaChart data={trendData} margin={{ left: -20, right: 4, top: 10 }}><CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} fontSize={11} /><YAxis hide /><Tooltip content={<ChartTooltipContent hideLabel />} /><Area type="monotone" dataKey="inventory" stroke="var(--color-inventory)" fill="var(--color-inventory)" fillOpacity={0.12} strokeWidth={2} /></AreaChart></ChartContainer></CardContent></Card></div>
      <div className="grid gap-5 xl:grid-cols-[1.15fr_.85fr]"><Card><CardHeader className="flex-row items-center justify-between space-y-0"><div><p className="eyebrow">Today</p><CardTitle className="mt-1 text-base">Recent dispatches</CardTitle></div><Button variant="ghost" size="sm">View all <ArrowUpRight data-icon="inline-end" /></Button></CardHeader><CardContent><ChartContainer config={chartConfig} className="h-[190px] w-full"><BarChart data={dispatchData} margin={{ left: -25, right: 4, top: 10 }}><CartesianGrid vertical={false} strokeDasharray="3 3" stroke="var(--border)" /><XAxis dataKey="day" tickLine={false} axisLine={false} fontSize={11} /><YAxis hide /><Tooltip content={<ChartTooltipContent hideLabel />} /><Bar dataKey="dispatched" fill="var(--color-dispatched)" radius={[3, 3, 0, 0]} barSize={22} /></BarChart></ChartContainer></CardContent></Card><Card><CardHeader><p className="eyebrow">Needs review</p><CardTitle className="mt-1 text-base">Expiry alerts</CardTitle></CardHeader><CardContent className="grid gap-3">{[["Fresh produce · Chamber A", "Expires in 2 days", "warning"], ["Dairy batch #D-445", "Expires in 5 days", "critical"], ["Frozen goods · Chamber C", "Expires in 8 days", "neutral"]].map(([title, note, tone]) => <div key={title} className="flex items-center justify-between gap-3 border-b border-border/60 pb-3 last:border-0 last:pb-0"><div className="flex min-w-0 items-center gap-3"><div className="flex size-8 shrink-0 items-center justify-center rounded-md bg-amber-100 text-amber-800"><Clock3 className="size-4" /></div><div className="min-w-0"><p className="truncate text-sm font-medium">{title}</p><p className="text-xs text-muted-foreground">{note}</p></div></div><StatusBadge tone={tone as "neutral" | "warning" | "critical"}>{tone === "critical" ? "Critical" : tone === "warning" ? "Near expiry" : "Monitor"}</StatusBadge></div>)}</CardContent></Card></div>
      <Card><CardHeader className="flex-row items-center justify-between space-y-0"><div><p className="eyebrow">Operational feed</p><CardTitle className="mt-1 text-base">Recent activity</CardTitle></div><Button variant="ghost" size="sm">View all</Button></CardHeader><CardContent className="p-0"><div className="divide-y divide-border/60">{[["Withdrawal request #WR-2048", "Cold Storage · 18 minutes ago", "Pending", "warning", ClipboardList], ["Dispatch #DS-8712 completed", "Dock 04 · 42 minutes ago", "Completed", "success", Truck], ["Low stock alert raised", "Chamber B · 1 hour ago", "Critical", "critical", AlertTriangle]].map(([title, detail, status, tone, Icon]) => <div key={title as string} className="flex items-center justify-between gap-4 px-6 py-4 transition-colors hover:bg-muted/35"><div className="flex min-w-0 items-center gap-3"><div className="activity-icon"><Icon /></div><div className="min-w-0"><p className="truncate text-sm font-medium">{title as string}</p><p className="mt-1 truncate text-xs text-muted-foreground">{detail as string}</p></div></div><StatusBadge tone={tone as "neutral" | "success" | "warning" | "critical"}>{status as string}</StatusBadge></div>)}</div></CardContent></Card>
    </main>}
  </SidebarInset></SidebarProvider>
}
export const roleNavigation = navigation
export const mockUser = { name: "Jordan Davis", role: "MANAGER" as WarehouseRole, initials: "JD" }
