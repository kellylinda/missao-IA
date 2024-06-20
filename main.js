const ciaxaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-pergntas');
const caixaAlternativas = document.querySelector('.caixa-altenativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas = [
    {
    enunciado: "Assim que saiu da escola você se depara com uma tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-resalistas. Qual o primeiro pensamento?",
    altenativas: [
        "Isso é assustador!",
        "Isso é maravilhoso!"
    ]
    },

    {
        enunciado:"Com a descoberta desta tecnologia, chamada Inteligencia Artificial (IA), uma professora de tecnologia da escola decidiu fazer uma sequencia de aulas sobre esta tecnologia. No fim de uma aula ela pede que você escreva um trabalho sobre IA em sala de aula. Qual altenativa vocé toma?",
        alternativas: [
            "Utiliza uma ferramenta de busca na intenet que utiliza IA para que ela ajude a encontra informações revelantes para o trabalho e explique numa linguagem que facilite o entendimento.",
            "Escreve o trabalho com base nas conversas que teve com colegas, algumas pesquisas na internet e conhecimentos próprios sobre o tema.",
        ]
    },
    {
        enunciado:"Após a elaboração do trabalho, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: aomo a IA empacta o trabalho do futuro. Nessa debate, como você se posiciona?",
        alternativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhor habilidade humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importancia de proteger os trabalhadores."
        ]

    },

    {
        enuciado: "Ao final da duscução, você precisou criar uma imagem no computador que representa o que pensa sobre IA. E agora?",
        alternativas: [
            "Criar uma imagem utilizando uma plataforma de desing como Paint.",
            "criar uma imagem utilizando um gerador de imagem de IA.",
        ]
    },

    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho esta um pouco atrazado e uma pessoa do seu grupo decidiu fazer com ajuda de uma IA. O problema é que está totalmente igual ao chat. O que voce faz?",
        alternativas:[
            "Escrever comandos para o chat é ima forma de contribuir para o trabalho, por isso não é ptoblema utilizar o texto inteiro.",
            "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda maquina erra, por isso revisar o trabalho e comtribuir com as perspectivas pessoais e essencial.",

        ]
    }
];

let atual = o;
let perguntaAltual;

function mostraPergunta(){
    perguntaAltual = perguntas[atual]
    caixaPerguntas.textContent=perguntaAltual.enunciado;
    mostraAlternativas();
}
function mostraAlternativas(){
    for (const alternativa of perguntaAltual.alternativas){
        const botaoAlternativas=document.createElement("button")
        botaoAlternativas.textContent=alternativa;
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

mostraPergunta();

