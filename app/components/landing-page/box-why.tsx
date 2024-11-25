import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'

interface whyProps {
    pergunta: string,
    subPergunta:string
    conteudo: string
}

export const BoxWhy:React.FC<whyProps> = ({pergunta, subPergunta, conteudo}) => {
  return (
    <Card className='bg-transparent border-purple-700  my-4 md:mx-4  w-full  lg:max-w-96'>
        <CardHeader>
            <CardTitle className='flex flex-col'>
                <h1 className='text-[#a7c9f1] text-2xl text-center mb-2'>{pergunta}</h1>
                <h2 className='text-[#a7c9f1] text-xl'>{subPergunta}</h2>
            </CardTitle>
        </CardHeader>
        <CardContent>
            <p className='text-[#9ba4bf]'>{conteudo}</p>
        </CardContent>
    </Card>
  )
}
