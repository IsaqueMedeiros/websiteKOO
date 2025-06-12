"use client"

import { useState } from "react"
import AdminDashboard from "@/components/gestao-investimento/user-admin"
import GoalsScreen from "@/components/gestao-investimento/user-goals"
import UserInvestmentsWallet from "@/components/gestao-investimento/user-investiments-wallet"
import HomeScreen from "@/components/gestao-investimento/user-home"
import UserExpenseAnalysis from "@/components/gestao-investimento/user-expense-analysis"

export default function AdminPage() {
  const [activePage, setActivePage] = useState("home") // ⬅️ home como padrão

  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-white border-r shadow-lg hidden md:flex flex-col p-6 space-y-6">
        <h2 className="text-2xl font-bold text-brandKoocher-deepPurple">Painel</h2>
        <nav className="flex flex-col gap-2">
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "home" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("home")}
          >
            Home
          </button>
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "dashboard" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("dashboard")}
          >
            Dashboard
          </button>
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "goals" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("goals")}
          >
            Metas
          </button>
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "wallet" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("wallet")}
          >
            Carteira
          </button>
          <button
            className={`text-left px-4 py-2 rounded hover:bg-gray-100 ${activePage === "expense" ? "bg-gray-200 font-semibold" : ""}`}
            onClick={() => setActivePage("expense")}
          >
            Gastos
          </button>
        </nav>
      </aside>

      <main className="flex-1 overflow-y-auto">
        {activePage === "home" && <HomeScreen />}
        {activePage === "dashboard" && <AdminDashboard />}
        {activePage === "goals" && <GoalsScreen />}
        {activePage === "wallet" && <UserInvestmentsWallet />}
        {activePage === "expense" && <UserExpenseAnalysis />}
      </main>
    </div>
  )
}
