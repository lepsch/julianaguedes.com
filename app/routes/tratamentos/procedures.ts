import acidohialuronico from "../../assets/dra-juliana-guedes-acido-hialuronico.jpg"
import bioestimuladores from "../../assets/dra-juliana-guedes-bioestimuladores-de-colageno.jpg"
import botox from "../../assets/dra-juliana-guedes-botox.jpg"
import consultas from "../../assets/dra-juliana-guedes-consultas-medicas.jpg"
import fios from "../../assets/dra-juliana-guedes-fios-de-pdo.jpg"
import liftera from "../../assets/dra-juliana-guedes-liftera.jpg"
import mesoterapia from "../../assets/dra-juliana-guedes-mesoterapia.jpg"
import microagulhamento from "../../assets/dra-juliana-guedes-dermapen-microagulhamento.jpg"
import peeling from "../../assets/dra-juliana-guedes-peeling-quimico.jpg"
import pronokal from "../../assets/dra-juliana-guedes-pronokal.jpg"

const procedures: Array<{
  alt: string
  id: string
  name: string
  photo: string
  text: string
}> = [
  {
    alt: "Foto da Dra. Juliana Guedes com o Liftera",
    id: "liftera",
    name: "Liftera",
    photo: liftera,
    text: `O Liftera é um dispositivo estético não invasivo que utiliza tecnologia de ultrassom microfocado (HIFU)
      para tratamentos de rejuvenescimento facial e corporal. Ele promove um efeito lifting ao estimular a produção
      de colágeno e elastina, melhorando a firmeza e a textura da pele. As ondas de ultrassom penetram
      profundamente, atingindo a fáscia muscular (SMAS), camada tratada em cirurgias de lifting, mas sem cortes ou
      necessidade de recuperação.

      Indicado para redução de flacidez, rejuvenescimento facial (levantamento de sobrancelhas, contorno mandibular,
      redução de rugas) e gordura localizada, o procedimento é rápido, durando de 30 a 60 minutos. Os resultados são
      naturais, evoluem ao longo de semanas e podem durar de 6 meses a 1 ano, dependendo dos cuidados. Seguro e
      eficaz, o Liftera é ideal para quem busca resultados visíveis sem os riscos de cirurgias.`,
  },
  {
    alt: "Foto antes e depois de um paciente com o procedimento de toxina botulínica por Dra. Juliana Guedes",
    id: "toxina-botulinica",
    name: "Toxina Botulínica",
    photo: botox,
    text: `A Toxina Botulínica é uma substância indicada para suavizar as rugas e linhas de expressão do rosto. A
      toxina funciona como um bloqueador da transmissão neuromuscular, impedindo a transmissão de estímulos dos
      neurônios para os músculos, de forma que diminua a contração muscular e assim atenue as rugas e linhas de
      expressão. Seu efeito dura, em média, 120 dias após aplicação.`,
  },
  {
    alt: "Foto da Dra. Juliana Guedes com uma seringa de Ácido Hialurónico",
    id: "acido-hialuronico",
    name: "Ácido Hialurónico",
    photo: acidohialuronico,
    text: `O ácido hialurónico é uma substancia biocompatível em formato de gel. É utilizado amplamente para preencher
      rugas e sulcos, corrigir pequenas assimetrias e imperfeições e restabelecer o volume perdido no processo de
      envelhecimento. Além disso tem a capacidade de melhorar o contorno facial e dar volume a estruturas como lábios
      e glúteos, dentre outras.`,
  },
  {
    alt: "Foto da Dra. Juliana Guedes com os Bioestimuladores de Colagénio",
    id: "bioestimuladores-de-colageno",
    name: "Bioestimu\u200Bladores de Colágeno",
    photo: bioestimuladores,
    text: `Os Bioestimuladores são substâncias a base de Ácido poli-L-lático (Sculptra®), Hidroxiapatita de cálcio
      (Radiesse®) ou Policaprolactona (Ellansé®) que, ao serem injetadas no plano subcutâneo, estimulam a produção de
      colágeno e hidratam a pele em profundidade, devolvendo o volume na região aplicada, melhorando os sinais de
      flacidez e envelhecimento da pele (linhas, rugas e dobras da pele). Podem ser usados tanto na face quanto no
      corpo (pescoço, colo, braços, abdomem, glúteos e pernas). O protocolo de aplicação e número de sessões variam de
      acordo com o grau de flacidez.`,
  },
  {
    alt: "Foto de uma paciente com o procedimento de Fios de PDO aplicados na face pela Dra. Juliana Guedes",
    id: "fios-de-pdo",
    name: "Fios de PDO",
    photo: fios,
    text: `Os Fios de Polidioxanona (PDO) são dispositivos totalmente absorvíveis pelo organismo que têm a capacidade
      de reduzir a flacidez da pele ao estimular a produção de colágeno de forma permanente pelo período de até 2
      anos. Além disso, os fios de PDO também podem ser utilizados para efeito trator da pele, promovendo um efeito
      Lifting não cirúrgico imediato, melhorando o aspeto de uma face “descaída” ou disfarçando uma “papada” causada
      pela flacidez da pele do pescoço.`,
  },
  {
    alt: "Foto da Dra. Juliana Guedes com ficha do PronoKal® / Proteifine® (Ysonut)",
    id: "pronokal",
    name: "Dieta Cetogênica",
    photo: pronokal,
    text: `O método (PronoKal® ou Proteifine®) consiste em um tratamento médico que combina dieta cetogénica,
      exercício e coaching. A dieta cetogénica, baixa em hidratos de carbono e gordura, com uma ingestão de proteínas
      adequada que permitirá que se perca gordura e preserve massa muscular. Dessa forma o paciente perde peso desde os
      primeiros dias e sente-se com energia, sem passar fome. Há programas específicos para grandes perdas ponderais
      para pacientes com algum grau de obesidade e também para perdas até 5Kg (principalmente gordura localizada)
      para paciente com IMC (Índice de Massa Corporal) normal.`,
  },
  {
    alt: "Foto de uma paciente com o procedimento de Peeling Químico",
    id: "peeling-quimico",
    name: "Peeling Químico",
    photo: peeling,
    text: `O peeling químico é um tratamento à pele que remove suas camadas mais superficiais, promovendo o processo de
      renovação celular através da deposição de ativos específicos sob a pele. É capaz de normalizar a pigmentação da
      pele, atenuar marcas e reduzir rugas, tornando a pele mais lisa, luminosa e com aspeto jovial.

      Ideal para tratamento de discromias (lêntigos, manchas, melasma, olheiras pigmentadas), acne ativa e cicatrizes
      de acne, poros dilatados e reduzir rugas superficiais e profundas.`,
  },
  {
    alt: "Foto de uma paciente com o procedimento de Microagulhamento",
    id: "microneedling",
    name: "Microneedling",
    photo: microagulhamento,
    text: `O Microagulhamento é um tratamento estético que serve para atenuar cicatrizes de acne, disfarçar manchas, ou
      outras cicatrizes, rugas ou linhas de expressão da pele. Tal é feito através de uma estimulação natural tendo
      por base micro-agulhas que penetram na derme favorecendo a formação de novas fibras de colágeno, que dão firmeza
      e sustentação à pele.

      Associados ao microagulhamento, podem-se utilizar uma série de ativos para revitalização da pele, reduzir poros
      dilatados, clarear manchas, promover hidratação profunda e revitalização capilar (tratamento de alopecias).

      São realizadas sessões com intervalo mínimo de 21 dias. O número de sessões varia de acordo com o tipo de pele
      e o efeito pretendido.`,
  },
  {
    alt: "Foto da Dra. Juliana Guedes na Clínica Senhora-a-Branca",
    id: "consultas-medicas",
    name: "Consultas Médicas",
    photo: consultas,
    text: `Consultas médicas de clínica geral, consulta e tratamento de obesidade, diabetes, alterações do colesterol
      (dislispidemias), doenças da tireoide, alterações hormonais (Ovários poliquisticos, menopausa, andropausa),
      check up clínico, promoção de qualidade de vida e bem estar.`,
  },
  {
    alt: "Foto da Dra. Juliana Guedes na Clínica Senhora-a-Branca",
    id: "mesoterapia",
    name: "Mesoterapia",
    photo: mesoterapia,
    text: `É um método minimamente invasivo, que consiste em micro injeções com a finalidade de introduzir o produto
      adequado com doses mínimas e o mais próximo possível da área a ser tratada, com baixa absorção sistêmica
      (evitando desta forma a passagem pelo sistema sanguíneo).

      O produto aplicado é escolhido pelo médico de acordo com o objetivo do tratamento, podendo ser utilizadas
      substâncias isoladas ou associadas em cocktails de vitaminas, nutrientes, aminoácidos, substâncias lipolíticas e
      refirmantes, extratos de enzimas e plantas, etc. A técnica é indicada para homens e mulheres e utilizada para o
      tratamento de: celulite, gordura localizada, redução da papada, estrias, flacidez, revitalização da pele.

      As áreas geralmente tratadas são: peito, região interna dos braços, mãos, abdômen, flancos, costas, região
      interna e posterior da coxa e glúteo.`,
  },
]

export default procedures
