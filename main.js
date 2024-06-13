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
        altenativas: [
            "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhor habilidade humanas.",
            "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importancia de proteger os trabalhadores."
        ]

    },
]