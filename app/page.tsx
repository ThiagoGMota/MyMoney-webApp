'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { SectionBox } from './components/landing-page/sectionBox'
import PricingCard from './components/ui/pricingCard'
import { motion } from 'framer-motion'
import { Footer } from './components/landing-page/footer'

export default function Home() {
  return (
    <main className='text-[#9ba4bf]'>
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='mt-20 flex flex-col justify-center items-center text-center mb-20 px-2 sm:mt-20'
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className='text-2xl font-extrabold m-8 text-[#a7c9f1] sm:text-5xl'
        >
          Descubra uma nova abordagem para suas finanças.
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className='mb-8 sm:mb-20 sm:text-2xl sm:text-left'
        >
          O <strong>MyMoney</strong> é mais do que uma ferramenta;<br/> é uma experiência projetada para aqueles que valorizam o controle e a clareza em sua vida financeira
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Button className='bg-purple-800 p-8'>
            <Link href="/register">Começar agora</Link>
          </Button>
        </motion.div>
      </motion.section>
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        id="why" 
        className='px-4'
      >
        <SectionBox/>
      </motion.section>
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        id="pricing" 
        className="py-20"
      >
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Preços Simples e Transparentes
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Básico"
                price="Gratuito"
                features={[
                  "Rastreamento de Despesas",
                  "Orçamento Básico",
                  "Relatório Financeiro Mensal",
                  "Acesso ao Aplicativo",
                  "Relatorio Anual",
                ]}
                ctaText="Começar"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Pro"
                price="$9,99/mês"
                features={[
                  "Tudo do Básico",
                  "Orçamento Avançado",
                  "Rastreamento de Investimentos",
                  "Definição e Acompanhamento de Metas",
                  "Suporte Prioritário"
                ]}
                ctaText="Experimente o Pro"
                highlighted={true}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <PricingCard
                title="Empresarial"
                price="$19,99/mês"
                features={[
                  "Tudo do Pro",
                  "Acesso Multiusuário",
                  "Categorias de Despesas Empresariais",
                  "Rastreamento de Faturas",
                  "Acesso ao Contador"
                ]}
                ctaText="Contatar Vendas"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      <Footer/>
    </main>
  )
}

