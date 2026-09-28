export type DemoRole = "ADMIN" | "MANAGER" | "STAFF" | "SUPPLIER" | "BUYER"

export type DemoAccount = {
  email: string
  password: string
  role: DemoRole
  name: string
  initials: string
}

export const demoAccounts: DemoAccount[] = [
  { email: "admin@northstar.test", password: "NorthstarAdmin1!", role: "ADMIN", name: "Avery Morgan", initials: "AM" },
  { email: "manager@northstar.test", password: "NorthstarManager1!", role: "MANAGER", name: "Jordan Davis", initials: "JD" },
  { email: "staff@northstar.test", password: "NorthstarStaff1!", role: "STAFF", name: "Casey Lee", initials: "CL" },
  { email: "supplier@northstar.test", password: "NorthstarSupplier1!", role: "SUPPLIER", name: "Morgan Ellis", initials: "ME" },
  { email: "buyer@northstar.test", password: "NorthstarBuyer1!", role: "BUYER", name: "Taylor Reed", initials: "TR" },
]

export function authenticateMock(email: string, password: string) {
  const account = demoAccounts.find((candidate) => candidate.email.toLowerCase() === email.trim().toLowerCase() && candidate.password === password)
  if (!account) throw new Error("Invalid email or password.")
  return { ...account, password: undefined }
}

export const demoCredentials = demoAccounts.map(({ email, password, role }) => ({ email, password, role }))
