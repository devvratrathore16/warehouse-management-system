import { InventoryModule } from "@/components/inventory/inventory-module"
import { WarehouseShell } from "@/components/warehouse-shell"

export default function InventoryPage() {
  return <WarehouseShell><InventoryModule /></WarehouseShell>
}

export const metadata = {
  title: "Inventory | Northstar WMS",
  description: "Warehouse batch inventory control for Northstar WMS.",
}
