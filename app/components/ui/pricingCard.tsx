import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from 'lucide-react';

// Definindo a interface para as props do PricingCard
interface PricingCardProps {
  title: string;                 // Título do card
  price: string;                 // Preço a ser exibido
  features: string[];            // Lista de características (features)
  ctaText: string;               // Texto do botão de chamada para ação
  highlighted?: boolean;         // Propriedade opcional para destacar o card
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, features, ctaText, highlighted = false }) => {
  return (
    <Card className={`flex flex-col ${highlighted ? 'border-green-600 border-2' : 'border-purple-600'} bg-[#0B0D1B] text-[#9ba4bf]`}>
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center text-[#a7c9f1]">{title}</CardTitle>
        <p className="text-3xl font-bold text-center text-purple-600">{price}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <div className="p-6 mt-auto">
        <Button className={`w-full ${highlighted ? 'bg-green-600 hover:bg-purple-700 text-white' : 'bg-purple-600'}`}>
          {ctaText}
        </Button>
      </div>
    </Card>
  );
};

export default PricingCard;