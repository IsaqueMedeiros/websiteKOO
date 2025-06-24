"use client";
import { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "Quais são as formas que um médico pode receber os seus plantões?",
    answer: `O médico tem 3 formas de receber seus plantões:
- Pessoa Física que é o mesmo que falar RPA (Recibo Profissional Autônomo)
- CLT (Carteira de trabalho assinada)
- PJ (Pessoa Jurídica)

A modalidade pessoa física é onde o médico mais paga impostos, seguido do CLT, que além de pagar altos impostos ele também tem menos oportunidades no mercado de trabalho. Já a PJ é a melhor opção para o contratante e o contratado pagar menos impostos.`
  },
  {
    id: 2,
    question: "Ainda não formei, devo abrir minha PJ Médica?",
    answer: `Sim. Você pode abrir sua PJ médica antes mesmo de formar e deixar todo o lado burocrático resolvido. Recomendamos que seja feito quando estiver prestes a colar grau pois logo após a colação de grau você faz a sua inscrição no CRM como pessoa Física e depois realiza também o procedimento para inscrever a sua PJ no CRM, estando assim apto a prestar os seus plantões.`
  },
  {
    id: 3,
    question: "Quais são os 4 documentos para abrir uma PJ?",
    answer: `• CNH ou Identidade
• Título de Eleitor
• IPTU (pode ser de um imóvel alugado ou se preferir, pode usar o endereço físico da KOOCHER)
• Certidão de Casamento`
  },
  {
    id: 4,
    question: "Quanto custa para abrir minha PJ Médica?",
    answer: `Custos de Abertura (em média):
• Minas Gerais: R$ 500 – R$ 700
• Rio de Janeiro: R$ 1.200 – R$ 1.500
• São Paulo: isento
• Paraná: R$ 500 – R$ 800
• Pernambuco: R$ 700 – R$ 1.000
• Rio Grande do Sul: R$ 700 – R$ 1.000
• Bahia: R$ 1.000 – R$ 1.300
• Ceará: R$ 700 – R$ 1.000
• Pará: R$ 1.300 – R$ 1.600
• Goiás: R$ 700 – R$ 1.000
• Santa Catarina: R$ 600 – R$ 900
• Rondônia: R$ 1.400 – R$ 1.700
• Maranhão: R$ 700 – R$ 300

INCLUI: Taxa da Junta Comercial + Taxa da Prefeitura + Certificado Digital Pessoa Física + Certificado Digital Pessoa Jurídica Serviço de Legalização

Você não tem nenhum gasto a mais para abrir a PJ. O único gasto após a abertura será com sua manutenção e uma taxa anual da prefeitura, que gira em torno de R$ 200 a R$ 300 por ano.`
  },
  {
    id: 5,
    question: "Uma outra contabilidade me ofereceu a abertura de forma gratuita, inclusive sem pagar as taxas do governo.",
    answer: `Sim, é comum algumas contabilidades fazerem a oferta onde o médico não precisa pagar NADA, nem as taxas do governo. Mas sabemos que na vida adulta não existe almoço grátis.

Então ocorre é que estas contabilidades isentam o médico da taxa do governo e repassam este custo para a manutenção da PJ e estipulam uma cláusula de fidelidade no contrato.`
  },
  {
    id: 6,
    question: "Qual a diferença de abrir minha PJ em capital ao invés de interior?",
    answer: `A capital de cada Estado normalmente é o local onde recebe mais recursos para tecnologia, tornando o processo menos burocrático comparado às cidades de interiores. Assim, abrindo sua PJ em um endereço na capital é capaz do processo ser mais rápido e menos burocrático.

Cabe lembrar também que ao abrir sua PJ, você poderá atuar em todo estado onde foi estabelecido o endereço.

Caso você não more na capital ou não possua o IPTU de algum lugar na capital, há outras alternativas como utilizar o endereço da KOOCHER ou alugar um endereço fiscal de algum coworking.`
  },
  {
    id: 7,
    question: "Quanto tempo demora pra abrir minha PJ?",
    answer: `Em regra, 7 dias úteis. Porém o processo vai depender de cada município. Em BH por exemplo, a média é de 05 dias úteis mas em outros pode levar até 2 meses.

Vale lembrar que em alguns municípios, apesar da PJ estar pronta, o processo de habilitação para emissão de nota fiscal pode demorar um pouco mais, há casos em que alguns municípios demoram até 30 dias para liberar a PJ para emitir notas fiscais.`
  },
  {
    id: 8,
    question: "O que acontece se eu abrir minha PJ em uma cidade que eu não moro?",
    answer: `Você pode abrir sua PJ em uma cidade que você não mora, para isso você vai precisar de um IPTU de algum imóvel ou então utilizar o IPTU da KOOCHER por exemplo.

Abrir sua PJ em um endereço diferente daquele que você mora não impacta no recebimento dos seus plantões. Você poderá atuar em todo Estado da cidade que você abriu sua PJ normalmente.`
  },
  {
    id: 9,
    question: "Quais são os 6 passos para o primeiro plantão?",
    answer: `1️⃣ Abra sua PJ médica com a KOOCHER
2️⃣ Após 5 dias úteis a KOOCHER envia a documentação da sua PJ pelo Whatsapp
3️⃣ Você abre a sua conta bancária PJ (Indicamos o banco cora)
4️⃣ Você solicita no local que você vai trabalhar a lista de documentação que eles precisam para realizar o cadastro e envia a listagem para a KOOCHER.
5️⃣ A KOOCHER providência toda documentação e envia para você e para o local seu trabalho
6️⃣ Após o cadastro você inicia os plantões`
  },
  {
    id: 10,
    question: "Qual o melhor regime tributário para a minha PJ Médica?",
    answer: `No Brasil temos 4 regimes tributários: MEI, Simples Nacional, Lucro Presumido e Lucro Real.

A atividade médica não pode ser enquadrada como MEI. Restando o Simples Nacional, Lucro Presumido e Lucro Real

O que determina a escolha do melhor regime tributário é a atividade, o valor total de nota fiscal emitida por mês e os gastos que a PJ tem para realizar suas atividades.

Em regra, o regime tributário do simples nacional é o mais vantajoso para médicos plantonistas, que passam a pagar de 6% a 17% sobre o valor total das notas fiscais emitidas.

A porcentagem vai variar de acordo com o valor total de notas fiscais emitidas a cada mês, sendo que, quanto maior o valor de notas fiscais emitidas, maior o valor da porcentagem.`
  },
  {
    id: 11,
    question: "Quanto de imposto eu vou pagar?",
    answer: `A resposta é: depende! Você vai pagar entre 6% a 17%, dependendo do valor que emitir de nota fiscal por mês. A porcentagem aumenta de acordo com o seu faturamento mensal.

Você pagará 2 boletos, variando da seguinte forma:

Boleto 1: DAS – Simples Nacional
- Inicial de 6% sobre o faturamento e seguindo a seguinte tabela:

Boleto 2:
INSS sobre Pró-Labore
- 3,08% sobre o faturamento até o limite de pagamento total de R$ 826 mensal

IRRF – Imposto de Renda Retido na Fonte
- Você paga somente se emitir o valor superior de R$ 7.540,00 em notas fiscais
- A alíquota varia entre 2,10% a 7,70% sobre o valor do somatório das suas notas fiscais emitidas.`
  },
  {
    id: 12,
    question: "A inscrição da PJ no CRM é obrigatória?",
    answer: `A inscrição da PJ ao CRM, é obrigatória para todas as PJs médicas. O registro é obrigatório de acordo com as seguintes legislações:

• Lei Federal Nº 6839/1980 – Art. 1
• Lei Federal Nº 9.656/98
• Resolução CFM Nº 997/1980 – Art. 2
• Resolução CFM Nº 1.971/2011
• Resolução CFM Nº 1980/2011
• Resolução CFM Nº 2317/2022

Para solicitar o registro basta pedir o serviço da KOOCHER e consultar os valores diretamente no nosso canal de suporte. É cobrada uma taxa no momento da solicitação, que fica em torno de R$ 1.200, após feita a inscrição, é cobrada a anuidade do CRM, que pode ser proporcional.

Entretanto, há casos em que o médico opta, apesar de obrigatório, em não realizar a inscrição ao CRM de maneira imediata, o que pode acontecer, é que quando o CRM identificar que a PJ não está vinculada, emitir uma notificação, obrigando a inscrição em determinado período.

Todo início de ano o CRM costuma conceder descontos para o primeiro registro da PJ no órgão, pedimos que fique atento ou consulte um dos nossos especialistas.`
  },
  {
    id: 13,
    question: "Qual o valor para registrar minha PJ no CRM?",
    answer: `Anualmente o CFM emite uma resolução que trata sobre os valores para registro da PJ no órgão. No ano de 2022 ele emitiu em agosto o valor atualizado, conforme apresentado:

• Taxa de Inscrição: R$ 1.052,00
• Anuidade de PJ com Capital Social até 50 mil: R$ 811,00
• Taxa do Certificado: 146,00
• Total segundo a resolução de 2022: R$ 2.009,00

Vale lembrar que o valor da anuidade é pago proporcionalmente, ou seja, por exemplo, se você pedir o registro da sua PJ no mês Agosto, você pagará somente o valor proporcional de agosto até dezembro (Ex: R$ 811/12 = 67,58 x 5 meses = R$ 337,92)`
  },
  {
    id: 14,
    question: "Como funciona a migração de contabilidade?",
    answer: `A migração de contabilidade é rápida e fácil.

E você precisa fazer apenas 1 coisa: comunicar o contador atual e passar o contato dele para nós da KOOCHER.

Nós resolvemos tudo direto com o seu contador`
  },
  {
    id: 15,
    question: "O que a KOOCHER oferece?",
    answer: `Somos uma empresa Digital EXCLUSIVAMENTE Médica que auxilia o médico em toda sua carreira desde a formatura até a liberdade financeira. Oferecemos serviços de contabilidade médica, assessoria financeira, securitária, jurídica, administrativa e muito mais.

Nós acompanhamos toda a legislação que envolve a área da medicina e assim damos o suporte necessário que o médico necessita para economizar tempo, gerir seu dinheiro e conquistar os seus sonhos.`
  },
  {
    id: 16,
    question: "A KOOCHER oferece assessoria jurídica?",
    answer: `Sim. É um serviço que no plano completo está incluído.

A Assessoria Jurídica extrajudicial é realizada no âmbito administrativo, visando atuar de forma preventiva, para que não ocorram eventuais prejuízos com o ajuizamento de processos judiciais.

Caso você opte pelo plano básico, poderá adquirir este serviço a parte`
  },
  {
    id: 17,
    question: "A KOOCHER oferece assessoria de investimentos?",
    answer: `Sim. A avaliação da assessoria Financeira é um serviço que é oferecido no plano BASIC e no plano EXCLUSIVE. A avaliação é gratuita, o valor vai depender do que for contratado.`
  },
  {
    id: 18,
    question: "Quais são os planos de assinatura da KOOCHER?",
    answer: `Temos 3 planos de assinatura:

1 – Plano Med PJ Inativa – (R$ 90 por mês)
Ideal para os médicos que abriram uma PJ porém não pretendem mais utiliza-la por um periodo de tempo. Ou seja, deseja manter a PJ em stand-by.

Mesmo que a PJ não seja utilizada é necessário manter a sua contabilidade em dia para que não ocorra a incidência de de multa e juros pela receita federal, e neste plano a KOOCHER cuida de tudo pra você.

- Incluso: Contabilidade da PJ Inativa + Assessoria Financeira Pessoal
- Não Inclui: Emissão de Notas Fiscais e Apuração de impostos.

2 – Plano Med PF (R$ 120 por mês)
Ideal para os médicos que não desejam trabalhar por PJ, ou seja, apenas receber pela Pessoa Física. Neste plano a KOOCHER cuida de toda a contabilidade da Pessoa Física do Médico fazendo atividades como: Declaração do Imposto de Renda da Pessoa Físcia, Recibo do Profissional Autônomo (RPA) e Livro Caixa.

- Incluso: Declaração do Imposto de Renda da Pessoa Física + Recibo do Profissional Autônomo (RPA) + Livro Caixa
- Não Inclui: Contabilidade da PJ

3 – Plano Med PJ – (R$ 297 por mês)
Plano ideal para o médico que deseja receber apenas pela PJ. Neste plano a KOOCHER faz a contabilidade completa da sua PJ, emite suas notas fiscais, impostos e envia as declarações referente a sua PJ para o governo. Você tem uma contabilidade completa para sua PJ

- Incluso: Emissão de nota fiscal, emissão de impostos, contabilidade da PJ completa, assessoria financeira pessoal e securitária.
- Não Inclui: Contabilidade da Pessoa Física, Declaração do Imposto de Renda, Assessoria Jurídica Extrajudicial e Programação de pagamento na conta bancária PJ.

4 – Plano Med PJ + Med PF – (R$ 497 por mês)
Plano completo (Med PJ + Med PF) inclui tanto a contabilidade da Pessoa Física quanto a contabilidade da Pessoa Jurídica (PJ). Ao adquirir esse plano o médico tem a tranquilidade de ter 100% da sua contabilidade em dia, tanto da pessoa física quanto da pessoa jurídica.

- Incluso: Emissão de nota fiscal, emissão de impostos, contabilidade da PJ completa, assessoria financeira pessoal e securitária, declaração do imposto de renda pessoa física, Recibo do Profissional Autônomo (RPA), Livro Caixa, programação de pagamentos de impostos no app do seu banco (você apenas autoriza os pagamentos) e assessoria financeira`
  },
  {
    id: 19,
    question: "Quais as condições especiais que a KOOCHER oferece aos médicos?",
    answer: `1 – Para Residentes
Na KOOCHER, o residente paga mensalidade referente a sua PJ apenas no mês em que emitir nota fiscal, ficando os demais meses isento de quaisquer pagamentos.
➔ Obrigatório o envio do comprovante de residência.

2 – Inativação automática de assinatura
Caso você não utilize sua PJ por um período acima de 3 meses consecutivos sua assinatura é inativada automaticamente, assim você para de pagar o plano cheio e passa a pagar somente R$ 90 por mês.
➔ Obrigatório 3 meses consecutivos sem emissão de notas fiscais

3 – Clube de benefícios
A KOOCHER oferece um clube de benefícios exclusivo para os seus clientes. Com descontos e vantagens personalizadas.

4 – Assessoria Financeira
Qualquer serviço que você adquire com a KOOCHER você tem acesso a uma assessoria financeira personalizada onde são avaliados seus objetivos e sonhos de curto, médio e longo prazo.

5 – Condição para formandos
Para os formandos oferecemos as 3 primeiras mensalidades com 50% de desconto e também a carência de até 7 meses para o primeiro pagamento, que é interrompida caso houver a emissão da primeira nota fiscal

6 – Condição para embaixadores
Embaixadores da KOOCHER tem condição especial, neste caso deve-se avaliar diretamente com os nossos especialistas.`
  },
  {
    id: 20,
    question: "Como funciona a inativação automática da assinatura?",
    answer: `Caso você fique 3 meses sem emitir nota fiscal ou movimentar a sua PJ, no quarto mês a sua assinatura é inativada automaticamente. Assim você passa a pagar a partir do quarto mês o valor de R$ 90,00.`
  },
  {
    id: 21,
    question: "Como funciona a inativação programada da assinatura?",
    answer: `Caso você for ficar pelo menos 3 meses sem emitir nota fiscal ou movimentar a sua PJ, você pode solicitar a inativação programada da sua PJ. Assim você passa a pagar no mês subsequente o valor de R$ 90,00.

Lembramos que mesmo que você não emita notas fiscais, a contabilidade da sua PJ deve ser mantida em dia para evitar multas e intimações da Receita Federal.

Alertamos que, caso você informe que vai inativar a PJ e passe a pagar o plano inativo, e em seguida volte a emitir notas fiscais em um prazo inferior a 3 meses, a KOOCHER realizará a cobrança das mensalidades integrais dos meses retroativos.`
  },
  {
    id: 22,
    question: "Posso escolher um plano de assinatura KOOCHER e depois mudar?",
    answer: `Sim! Você pode alterar o plano a qualquer momento!`
  },
  {
    id: 23,
    question: "A KOOCHER exige fidelidade no plano de assinatura?",
    answer: `Não. Nossa assinatura é igual netflix, direto no cartão de crédito e sem fidelidade. Caso deseje pagar via pix ou boleto também é possível.`
  },
  {
    id: 24,
    question: "A emissão de notas fiscais é ilimitada para plantonistas?",
    answer: `Sim. Para plantonistas são ilimitadas em qualquer plano que você escolher!`
  },
  {
    id: 25,
    question: "A emissão de notas fiscais é ilimitada para quem atende pacientes particular?",
    answer: `Depende. Caso você emita a mesma quantidade de notas fiscais que um plantonista, não terá custo extra. Sempre fazemos uma análise do comportamento da emissão de notas fiscais. Caso você atue de forma análoga a uma clínica, terá cobrança extra.`
  },
  {
    id: 26,
    question: "Posso pagar a manutenção da KOOCHER no cartão?",
    answer: `Sim! Pode ser paga igual netflix, assinatura sem consumir o limite do seu cartão.`
  },
  {
    id: 27,
    question: "Posso abrir a minha PJ usando o endereço da KOOCHER?",
    answer: `Sim! caso você seja nosso cliente não há custos.`
  },
  {
    id: 28,
    question: "A KOOCHER atende todo o Brasil?",
    answer: `Sim. Nós atendemos médicos em todo o Brasil.`
  },
  {
    id: 29,
    question: "Como posso entrar em contato com a KOOCHER?",
    answer: `Você pode entrar em contato conosco através dos nossos canais oficiais:

• WhatsApp: Para atendimento rápido e direto
• Site: Através do nosso formulário de contato
• E-mail: Para dúvidas mais detalhadas
• Redes sociais: Instagram e LinkedIn

Nossa equipe de especialistas está sempre pronta para esclarecer suas dúvidas e ajudar você a tomar a melhor decisão para sua carreira médica.`
  }
];

export default function FaqKoocher() {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-brandKoocher-deepPurple mb-4">
          Perguntas Frequentes
        </h1>
        <p className="text-lg text-gray-600">
          Encontre respostas para as principais dúvidas sobre abertura e gestão de PJ médica
        </p>
      </div>

      <div className="space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-brandKoocher-neonLime focus:ring-inset"
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">
                {item.id}. {item.question}
              </span>
              <div className="flex-shrink-0">
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openItems[item.id] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </button>
            
            {openItems[item.id] && (
              <div className="px-6 pb-4">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-brandKoocher-deepPurple border border-brandKoocher-neonLime rounded-lg p-6">
          <h3 className="text-xl font-semibold text-brandKoocher-neonLime mb-2">
            Ainda tem dúvidas?
          </h3>
          <p className="text-brandKoocher-neonLime mb-4">
            Entre em contato com nossos especialistas para um atendimento personalizado
          </p>
          <button className="bg-brandKoocher-vividPurple hover:bg-brandKoocher-deepPurple text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
            Falar com Especialista
          </button>
        </div>
      </div>
    </div>
  );
}