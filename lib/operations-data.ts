export const mockData: Record<string, any[]> = {
  withdrawals: [
    { id: "WR-102", buyer: "FreshMart Retail", product: "Apples", quantity: 20, unit: "kg", requested: "Sep 26, 2026", status: "APPROVED" },
    { id: "WR-103", buyer: "Green Basket", product: "Dairy", quantity: 12, unit: "cases", requested: "Sep 26, 2026", status: "PENDING" },
    { id: "WR-104", buyer: "City Grocers", product: "Frozen goods", quantity: 8, unit: "pallets", requested: "Sep 25, 2026", status: "DISPATCHED" },
  ],
  dispatches: [
    { id: "DS-8712", withdrawal: "WR-101", product: "Oranges", quantity: "30 kg", batches: "B002, B006", date: "Sep 26, 2026", status: "COMPLETED" },
    { id: "DS-8711", withdrawal: "WR-100", product: "Dairy", quantity: "18 cases", batches: "D004", date: "Sep 25, 2026", status: "COMPLETED" },
  ],
  alerts: [
    { id: "AL-204", alertType: "NEAR_EXPIRY", batch: "B001", product: "Apples", expiry: "Sep 28, 2026", severity: "WARNING", created: "18 min ago", status: "UNREAD" },
    { id: "AL-203", alertType: "EXPIRED", batch: "D-445", product: "Dairy", expiry: "Sep 25, 2026", severity: "CRITICAL", created: "1 hr ago", status: "UNREAD" },
    { id: "AL-202", alertType: "CAPACITY_WARNING", batch: "CH-A", product: "Fresh produce", expiry: "—", severity: "INFO", created: "2 hrs ago", status: "READ" },
  ],
  rents: [
    { id: "RENT-042", supplier: "Valley Produce Co.", period: "Sep 01 – Sep 30", amount: "$4,820", status: "PENDING", due: "Oct 05, 2026" },
    { id: "RENT-041", supplier: "ColdChain Partners", period: "Aug 01 – Aug 31", amount: "$6,240", status: "PARTIALLY_PAID", due: "Sep 05, 2026" },
    { id: "RENT-040", supplier: "North Farms", period: "Jul 01 – Jul 31", amount: "$3,950", status: "PAID", due: "Aug 05, 2026" },
  ],
  payments: [
    { id: "PAY-190", supplier: "North Farms", rent: "RENT-040", amount: "$3,950", method: "Bank transfer ****1234", date: "Aug 04, 2026", status: "COMPLETED" },
    { id: "PAY-189", supplier: "ColdChain Partners", rent: "RENT-041", amount: "$3,000", method: "ACH ****7788", date: "Sep 03, 2026", status: "COMPLETED" },
  ],
  tasks: [
    { id: "TASK-88", task: "Inspect Chamber A intake", assigned: "Maya Chen", due: "Sep 26, 2026", priority: "HIGH", status: "IN_PROGRESS" },
    { id: "TASK-87", task: "Verify B001 expiry labels", assigned: "Liam Ortiz", due: "Sep 27, 2026", priority: "MEDIUM", status: "PENDING" },
    { id: "TASK-86", task: "Clean Dock 04", assigned: "Maya Chen", due: "Sep 25, 2026", priority: "LOW", status: "COMPLETED" },
  ],
  auditLogs: [
    { id: "LOG-802", action: "FIFO_OVERRIDE", entity: "Dispatch DS-8710", user: "Jordan Davis", timestamp: "Sep 26, 09:42", ip: "192.0.2.24", status: "Recorded" },
    { id: "LOG-801", action: "PAYMENT_UPDATED", entity: "PAY-189", user: "Jordan Davis", timestamp: "Sep 25, 16:18", ip: "192.0.2.24", status: "Recorded" },
    { id: "LOG-800", action: "WITHDRAWAL_APPROVED", entity: "WR-102", user: "Jordan Davis", timestamp: "Sep 25, 14:02", ip: "192.0.2.24", status: "Recorded" },
  ],
  users: [
    { name: "Jordan Davis", email: "jordan@northstar.wms", role: "MANAGER", status: "ACTIVE", created: "Jan 12, 2026" },
    { name: "Maya Chen", email: "maya@northstar.wms", role: "STAFF", status: "ACTIVE", created: "Feb 04, 2026" },
    { name: "Valley Produce Co.", email: "ops@valleyproduce.com", role: "SUPPLIER", status: "ACTIVE", created: "Mar 18, 2026" },
  ],
}

export const globalSearchRecords = ["B001", "B004", "Apples", "Dairy", "WR-102", "WR-103", "DS-8712", "DS-8711"]
