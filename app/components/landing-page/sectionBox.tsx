import React from 'react'
import { BoxWhy } from './box-why'

export const SectionBox = () => {
  return (
    <div className='md:flex md:flex-row md:flex-wrap justify-center'>
        
    <BoxWhy
      pergunta='Por que?'
      subPergunta=' Por que devo gerenciar minhas finanças pessoais?'
      conteudo='Gerenciar suas finanças pessoais é essencial para alcançar seus objetivos financeiros, evitar dívidas desnecessárias e garantir um futuro financeiro seguro. Com o [Nome do App], você terá uma visão clara de suas receitas e despesas, permitindo que tome decisões informadas.'
    />
    <BoxWhy
      pergunta='Po que?'
      subPergunta='Por que escolher o MyMoney em vez de outras ferramenta'
      conteudo='O MyMoney combina uma interface intuitiva com funcionalidades robustas, como relatórios detalhados e alertas personalizados. Nossa abordagem centrada no usuário garante que você tenha a melhor experiência ao gerenciar suas finanças.'
    />
    <BoxWhy
        pergunta='Como?'
        subPergunta='Como posso começar a usar o MyMoney?'
        conteudo='Basta clicar no botão "Experimente Grátis" no topo desta pagina, criar uma conta e começar a explorar todas as funcionalidades que oferecemos. O processo é rápido e fácil!'
    />
    <BoxWhy
        pergunta='Como?'
        subPergunta=' Como posso rastrear minhas despesas?'
        conteudo='O MyMoney permite que você categorize suas despesas manualmente. Você poderá visualizar onde está gastando mais e ajustar seu orçamento conforme necessário.'
    />
    <BoxWhy
        pergunta='Como?'
        subPergunta=' Como posso definir metas financeiras?'
        conteudo='Na seção de planejamento do app, você pode estabelecer metas financeiras específicas, como economizar para uma viagem ou pagar dívidas. O aplicativo acompanhará seu progresso e enviará notificações para mantê-lo motivado.'
    />
  </div>
  )
}
