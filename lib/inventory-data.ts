export type InventoryStatus = "RECEIVED" | "AVAILABLE" | "LOW_STOCK" | "NEAR_EXPIRY" | "EXPIRED"

export type InventoryBatch = {
  id: string
  product: string
  supplier: string
  quantity: number
  remainingQuantity: number
  unit: string
  chamber: string
  receivedDate: string
  expiryDate: string
  status: InventoryStatus
}

export const inventoryStatuses: InventoryStatus[] = ["RECEIVED", "AVAILABLE", "LOW_STOCK", "NEAR_EXPIRY", "EXPIRED"]

export const mockInventory: InventoryBatch[] = [
  { id: "BT-26091", product: "Organic apples", supplier: "Green Valley Farms", quantity: 2400, remainingQuantity: 1840, unit: "kg", chamber: "Chamber A-01", receivedDate: "2026-09-22", expiryDate: "2026-10-18", status: "AVAILABLE" },
  { id: "BT-26090", product: "Whole milk", supplier: "North Coast Dairy", quantity: 1200, remainingQuantity: 380, unit: "L", chamber: "Chamber B-02", receivedDate: "2026-09-20", expiryDate: "2026-09-29", status: "NEAR_EXPIRY" },
  { id: "BT-26089", product: "Frozen peas", supplier: "Arctic Harvest Co.", quantity: 1800, remainingQuantity: 1420, unit: "kg", chamber: "Chamber C-01", receivedDate: "2026-09-19", expiryDate: "2027-03-19", status: "AVAILABLE" },
  { id: "BT-26088", product: "Chicken breast", supplier: "Prime Protein Ltd.", quantity: 950, remainingQuantity: 95, unit: "kg", chamber: "Chamber B-01", receivedDate: "2026-09-18", expiryDate: "2026-10-02", status: "LOW_STOCK" },
  { id: "BT-26087", product: "Basmati rice", supplier: "Harvest Gate Imports", quantity: 5000, remainingQuantity: 5000, unit: "kg", chamber: "Chamber D-03", receivedDate: "2026-09-17", expiryDate: "2027-09-17", status: "RECEIVED" },
  { id: "BT-26086", product: "Tomatoes", supplier: "Green Valley Farms", quantity: 1600, remainingQuantity: 440, unit: "kg", chamber: "Chamber A-02", receivedDate: "2026-09-15", expiryDate: "2026-09-27", status: "NEAR_EXPIRY" },
  { id: "BT-26085", product: "Cheddar cheese", supplier: "North Coast Dairy", quantity: 620, remainingQuantity: 210, unit: "kg", chamber: "Chamber B-03", receivedDate: "2026-09-12", expiryDate: "2026-09-25", status: "EXPIRED" },
  { id: "BT-26084", product: "Orange juice", supplier: "Citrus Works", quantity: 2400, remainingQuantity: 1680, unit: "L", chamber: "Chamber B-04", receivedDate: "2026-09-11", expiryDate: "2026-10-11", status: "AVAILABLE" },
  { id: "BT-26083", product: "Wheat flour", supplier: "Harvest Gate Imports", quantity: 3200, remainingQuantity: 860, unit: "kg", chamber: "Chamber D-01", receivedDate: "2026-09-09", expiryDate: "2027-01-09", status: "LOW_STOCK" },
  { id: "BT-26082", product: "Fresh spinach", supplier: "Green Valley Farms", quantity: 480, remainingQuantity: 120, unit: "kg", chamber: "Chamber A-03", receivedDate: "2026-09-08", expiryDate: "2026-09-26", status: "NEAR_EXPIRY" },
  { id: "BT-26081", product: "Turkey portions", supplier: "Prime Protein Ltd.", quantity: 880, remainingQuantity: 720, unit: "kg", chamber: "Chamber C-02", receivedDate: "2026-09-05", expiryDate: "2026-12-05", status: "AVAILABLE" },
  { id: "BT-26080", product: "Canned chickpeas", supplier: "Pantry Partners", quantity: 4200, remainingQuantity: 4200, unit: "units", chamber: "Chamber D-02", receivedDate: "2026-09-03", expiryDate: "2028-09-03", status: "RECEIVED" },
]

export const suppliers = [...new Set(mockInventory.map((batch) => batch.supplier))]

export function formatQuantity(value: number) {
  return new Intl.NumberFormat("en-US").format(value)
}

export function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T00:00:00`))
}
