  "use client"

  import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"
  import { Card } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { useRouter } from "next/navigation"


  const COLORS = ["#00D084", "#FFC107", "#FF4C4C", "#9C27B0"]

  export default function InvestorDashboard({ formData, onNext}) {
      const router = useRouter()

    const {
      age,
      sex,
      income,
      monthlySpend,
      variableIncome,
      othersIncomes,
      patrimony,
      isNegative,
      investorProfile
    } = formData

    const financialChartData = [
      { name: "Renda Fixa", value: Number(income.replace(/\D/g, "")) },
      { name: "Gastos", value: Number(monthlySpend.replace(/\D/g, "")) },
      { name: "Variável", value: Number(variableIncome?.replace(/\D/g, "") || 0) },
      { name: "Outras Fontes", value: Number(othersIncomes?.replace(/\D/g, "") || 0) }
    ]
    
    const goToAdmin = () => {
      localStorage.setItem("userFormData", JSON.stringify(formData))
      router.push("/user-admin")
    }


    return (
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-brandKoocher-vividPurple">Bem-vindo(a) à sua jornada financeira!</h1>
          <p className="text-gray-600 text-lg">Com base no seu perfil, identificamos você como: <strong className="text-brandKoocher-deepPurple">{investorProfile}</strong></p>
        </header>

        <section className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-2">
            <h2 className="text-xl font-semibold text-primary">Seus dados pessoais</h2>
            <p><strong>Idade:</strong> {age}</p>
            <p><strong>Sexo:</strong> {sex}</p>
            <p><strong>Renda Mensal:</strong> R$ {income}</p>
            <p><strong>Gastos Mensais:</strong> R$ {monthlySpend}</p>
            <p><strong>Renda Variável:</strong> R$ {variableIncome || "0,00"}</p>
            <p><strong>Outras Rendas:</strong> R$ {othersIncomes || "0,00"}</p>
            <p><strong>Patrimônio Total:</strong> R$ {patrimony}</p>
            <p><strong>Está com saldo negativo?</strong> {isNegative ? "Sim" : "Não"}</p>
          </Card>

          <Card className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-primary">Distribuição Financeira</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={financialChartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    label
                  >
                    {financialChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </section>

        <section className="bg-white p-6 rounded-lg border space-y-4 shadow-sm">
          <h2 className="text-xl font-semibold text-primary">Suas recomendações de investimento</h2>
          <p className="text-gray-600">Em breve, você verá aqui as melhores oportunidades baseadas no seu perfil: <strong>{investorProfile}</strong>.</p>
          <div className="text-sm italic text-gray-400">
            * Essa seção será personalizada para você automaticamente ao acessar sua área de perfil no sistema.
          </div>
        </section>

        <div className="text-center">
          <Button
            className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-brandKoocher-neonLime h-12 px-8 rounded-full"
            onClick={goToAdmin}
          >
            Começar a Investir
          </Button>
        </div>
      </div>
    )
  }
