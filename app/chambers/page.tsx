import { ChambersModule } from "@/components/chambers/chambers-module"
import { WarehouseShell } from "@/components/warehouse-shell"

export default function ChambersPage() {
  return <WarehouseShell><ChambersModule /></WarehouseShell>
}

export const metadata = {
  title: "Chambers | Northstar WMS",
  description: "Monitor warehouse chamber capacity and storage allocations.",
}

