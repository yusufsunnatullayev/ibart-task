import { ILogin, IRegister } from "@/interfaces/auth.interface";
import { base_url } from "../base_url";

// Login 🚩
export async function login(data: ILogin) {
  const res = await fetch(`${base_url}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to login");
  return res.json();
}

// Register 🚩
export async function register(data: IRegister) {
  const res = await fetch(`${base_url}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to login");
  return res.json();
}
