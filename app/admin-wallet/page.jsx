"use client"

import { useState } from "react"
import AdminDashboard from "@/components/admin-wallet/admin-wallet"


export default function AdminPage() {
  const [activePage, setActivePage] = useState("admin") // ⬅️ home como padrão

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r shadow-lg hidden md:flex flex-col p-6 space-y-6">
        <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Painel</h2>
        <nav className="flex flex-col gap-2">
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "admin" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("admin")}
          >
            Painel
          </button>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {activePage === "admin" && <AdminDashboard />}
      </main>
    </div>
  )
}
