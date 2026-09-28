export type ChamberStatus = "AVAILABLE" | "NEAR_CAPACITY" | "FULL" | "MAINTENANCE"

export type ChamberBatch = {
  id: string
  product: string
  quantity: number
  unit: string
  expiryDate: string
  status: "AVAILABLE" | "LOW_STOCK" | "NEAR_EXPIRY"
}

export type Chamber = {
  id: string
  name: string
  capacity: number
  occupied: number
  status: ChamberStatus
  batches: ChamberBatch[]
}

export const mockChambers: Chamber[] = [
  { id: "A-01", name: "Cold Storage A", capacity: 4200, occupied: 3190, status: "AVAILABLE", batches: [{ id: "BT-26104", product: "Leafy greens", quantity: 840, unit: "kg", expiryDate: "2026-09-28", status: "NEAR_EXPIRY" }, { id: "BT-26091", product: "Apples", quantity: 1120, unit: "kg", expiryDate: "2026-10-14", status: "AVAILABLE" }] },
  { id: "A-02", name: "Cold Storage B", capacity: 3800, occupied: 3420, status: "NEAR_CAPACITY", batches: [{ id: "BT-26087", product: "Dairy products", quantity: 1260, unit: "units", expiryDate: "2026-10-01", status: "NEAR_EXPIRY" }, { id: "BT-26122", product: "Fresh juice", quantity: 880, unit: "L", expiryDate: "2026-10-21", status: "AVAILABLE" }] },
  { id: "B-01", name: "Dry Goods A", capacity: 5200, occupied: 2480, status: "AVAILABLE", batches: [{ id: "BT-26078", product: "Rice", quantity: 980, unit: "kg", expiryDate: "2027-03-18", status: "AVAILABLE" }, { id: "BT-26118", product: "Canned goods", quantity: 760, unit: "units", expiryDate: "2028-01-09", status: "AVAILABLE" }] },
  { id: "B-02", name: "Dry Goods B", capacity: 4600, occupied: 4600, status: "FULL", batches: [{ id: "BT-26055", product: "Flour", quantity: 2100, unit: "kg", expiryDate: "2027-02-12", status: "AVAILABLE" }] },
  { id: "C-01", name: "Frozen Storage", capacity: 3000, occupied: 2250, status: "AVAILABLE", batches: [{ id: "BT-26109", product: "Frozen vegetables", quantity: 940, unit: "kg", expiryDate: "2027-01-20", status: "AVAILABLE" }, { id: "BT-26099", product: "Frozen poultry", quantity: 620, unit: "kg", expiryDate: "2027-04-02", status: "AVAILABLE" }] },
  { id: "C-02", name: "Maintenance Bay", capacity: 1800, occupied: 0, status: "MAINTENANCE", batches: [] },
]

export const availableBatches = [
  { id: "BT-26131", product: "Oranges", quantity: 720, unit: "kg" },
  { id: "BT-26135", product: "Yogurt", quantity: 420, unit: "units" },
  { id: "BT-26140", product: "Frozen berries", quantity: 560, unit: "kg" },
]

export const formatCapacity = (value: number) => new Intl.NumberFormat("en-US").format(value)
export const formatDate = (value: string) => new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(`${value}T12:00:00`))
export const occupancy = (chamber: Chamber) => Math.round((chamber.occupied / chamber.capacity) * 100)
export const statusLabel = (status: ChamberStatus) => status.replace("_", " ")

