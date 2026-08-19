// ==========================================
// LISTA DE PERSONAGENS
// ==========================================
// Pra adicionar um personagem novo, copie um bloco { ... } abaixo,
// cole no final do array e preencha os campos. A página inteira
// (grade, filtros, paginação e o card de destaque) se atualiza sozinha.
//
// Campos:
// id          -> texto único, sem espaço (ex: "homem-aranha")
// nome        -> nome mostrado no card
// ator        -> nome do ator/atriz
// faccao      -> "heroi" ou "vilao"
// grupos      -> array com os grupos do personagem, usados pelos filtros.
//                Valores aceitos hoje: "vingadores", "quarteto-fantastico", "x-men"
//                (pode inventar outro grupo, mas aí precisa criar um botão de
//                filtro novo no HTML com o mesmo data-filter)
// imagem      -> caminho da imagem do card
// principal   -> true só no personagem que deve aparecer no card grande
//                de destaque no topo da página (normalmente só 1)
// destaque    -> (opcional, só usado quando principal = true)
//                badge -> texto da etiqueta colorida (ex: "VILÃO PRINCIPAL")
//                descricao -> texto do parágrafo do card de destaque

const CHARACTERS = [

   {
    id: "doutor-destino",
    nome: "Doutor Destino",
    ator: "Robert Downey Jr.",
    faccao: "vilao",
    grupos: [],
    imagem: "img/doutor-destino-personagem.png",
    principal: true,

    destaque: {
        badge: "VILÃO PRINCIPAL",
        descricao: "O monarca de Latvéria surge como a maior ameaça já enfrentada pelos Vingadores, movido por uma visão de ordem que coloca todo o multiverso em risco."
    },

    resumo: "Victor Von Doom é um dos personagens mais inteligentes e perigosos da Marvel. Governante da Latvéria, ele combina ciência avançada e magia poderosa para alcançar seus objetivos.",

    origem: "Nascido entre ciganos na Europa Oriental, Victor Von Doom demonstrou genialidade desde jovem. Após um experimento fracassado que deixou cicatrizes em seu rosto, ele passou a usar uma armadura metálica e assumiu o controle da Latvéria, tornando-se seu soberano absoluto.",

    filmes: "Em Avengers: Doomsday, Victor Von Doom será o principal antagonista da história. Interpretado por Robert Downey Jr., o personagem promete desempenhar um papel central nos eventos que afetarão todo o multiverso.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1962, Doutor Destino apareceu pela primeira vez em Fantastic Four #5. É o maior rival do Senhor Fantástico e um dos vilões mais importantes da história dos quadrinhos.",

    forca: 75,
    inteligencia: 100,
    magia: 100,
    combate: 85
},

    {
    id: "capita-marvel",
    nome: "Capitã Marvel",
    ator: "Brie Larson",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/capita-marvel-personagem.png",

    resumo: "Carol Danvers é uma das heroínas mais poderosas do universo Marvel. Graças à energia cósmica que corre em seu corpo, ela possui força extraordinária, voo e a capacidade de liberar poderosos ataques energéticos.",

    origem: "Ex-piloto da Força Aérea dos Estados Unidos, Carol Danvers ganhou habilidades sobre-humanas após ser exposta à energia de um motor desenvolvido com tecnologia alienígena Kree. A partir desse evento, tornou-se a Capitã Marvel.",

    filmes: "A personagem estreou em Capitã Marvel (2019) e teve papel fundamental em Vingadores: Ultimato. Também liderou os acontecimentos de As Marvels e continua sendo uma das figuras mais importantes da nova fase do MCU.",

    hqs: "Criada por Roy Thomas e Gene Colan em 1968, Carol Danvers assumiu o manto de Capitã Marvel em 2012. Desde então, tornou-se uma das principais líderes dos Vingadores e uma das heroínas mais populares da Marvel.",

    forca: 98,
    inteligencia: 85,
    magia: 10,
    combate: 90
},
    {
    id: "senhor-fantastico",
    nome: "Senhor Fantástico",
    ator: "Pedro Pascal",
    faccao: "heroi",
    grupos: ["quarteto-fantastico"],
    imagem: "img/senhor-fantastico.png",

    resumo: "Reed Richards é considerado uma das mentes mais brilhantes do universo Marvel. Líder do Quarteto Fantástico, utiliza sua inteligência extraordinária para proteger o mundo de ameaças científicas e cósmicas.",

    origem: "Após uma missão espacial ser atingida por raios cósmicos, Reed Richards adquiriu a capacidade de esticar, deformar e moldar seu corpo de maneiras incríveis. Com seus companheiros, fundou o Quarteto Fantástico.",

    filmes: "Em Avengers: Doomsday, Reed Richards será interpretado por Pedro Pascal. O personagem deve desempenhar um papel central na luta contra Doutor Destino, seu maior rival nos quadrinhos.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1961, Reed Richards estreou em Fantastic Four #1. É amplamente reconhecido como um dos maiores cientistas da Marvel e líder do Quarteto Fantástico.",

    forca: 65,
    inteligencia: 100,
    magia: 5,
    combate: 75
},

   {
    id: "mulher-invisivel",
    nome: "Mulher Invisível",
    ator: "Vanessa Kirby",
    faccao: "heroi",
    grupos: ["quarteto-fantastico"],
    imagem: "img/mulher-invisivel.png",

    resumo: "Sue Storm é uma das integrantes mais poderosas do Quarteto Fantástico. Além de ficar invisível, ela pode criar campos de força praticamente indestrutíveis.",

    origem: "Após ser exposta aos raios cósmicos durante uma missão espacial liderada por Reed Richards, Susan Storm desenvolveu a capacidade de se tornar invisível e manipular energia em forma de campos de força.",

    filmes: "Interpretada por Vanessa Kirby, Sue Storm fará parte da nova formação do Quarteto Fantástico no MCU e deve desempenhar um papel importante nos eventos de Avengers: Doomsday.",

    hqs: "Criada por Stan Lee e Jack Kirby em 1961, Sue Storm estreou em Fantastic Four #1. Ao longo dos anos tornou-se uma das heroínas mais respeitadas da Marvel.",

    forca: 70,
    inteligencia: 85,
    magia: 10,
    combate: 88
},

{
    id: "professor-x",
    nome: "Professor X",
    ator: "Patrick Stewart",
    faccao: "heroi",
    grupos: ["x-men"],
    imagem: "img/professor-x.png",

    resumo: "Charles Xavier é o fundador dos X-Men e um dos telepatas mais poderosos do planeta. Sua missão é promover a convivência pacífica entre humanos e mutantes.",

    origem: "Nascido mutante, Xavier desenvolveu poderes telepáticos extraordinários ainda jovem. Com o tempo criou a Escola para Jovens Superdotados e reuniu os X-Men.",

    filmes: "Patrick Stewart interpretou o Professor X em diversos filmes dos X-Men. O retorno do personagem em Avengers: Doomsday representa a chegada dos mutantes ao centro do MCU.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1963, Charles Xavier estreou em X-Men #1. É considerado um dos personagens mais influentes da Marvel.",

    forca: 15,
    inteligencia: 98,
    magia: 20,
    combate: 60
},

{
    id: "fera",
    nome: "Fera",
    ator: "Kelsey Grammer",
    faccao: "heroi",
    grupos: ["x-men"],
    imagem: "img/fera.png",

    resumo: "Hank McCoy combina inteligência genial com força e agilidade sobre-humanas. É um dos cientistas mais brilhantes dos X-Men.",

    origem: "Originalmente um mutante com características físicas discretas, Hank realizou experimentos em si mesmo que transformaram sua aparência em uma forma bestial coberta de pelos azuis.",

    filmes: "Kelsey Grammer interpretou o personagem nos filmes dos X-Men e retornou recentemente ao MCU, indicando uma participação importante no futuro da franquia.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1963, Fera foi um dos membros fundadores dos X-Men e também integrou os Vingadores em diferentes períodos.",

    forca: 85,
    inteligencia: 95,
    magia: 5,
    combate: 82
},

{
    id: "sentinela",
    nome: "Sentinela",
    ator: "Lewis Pullman",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/sentinela.png",

    resumo: "Robert Reynolds possui um dos maiores níveis de poder já vistos no universo Marvel. Sua força rivaliza com a de entidades cósmicas.",

    origem: "Após ingerir uma fórmula experimental, Robert Reynolds recebeu poderes equivalentes a 'um milhão de sóis explodindo'. Ao mesmo tempo, passou a conviver com sua contraparte sombria conhecida como Vácuo.",

    filmes: "Interpretado por Lewis Pullman, o Sentinela foi introduzido no MCU e deve desempenhar um papel importante nos eventos futuros envolvendo os Vingadores.",

    hqs: "Criado por Paul Jenkins e Jae Lee em 2000, o Sentinela rapidamente se tornou um dos personagens mais poderosos da Marvel, conhecido por sua luta constante contra o Vácuo.",

    forca: 100,
    inteligencia: 80,
    magia: 30,
    combate: 95
},
    {
    id: "thor",
    nome: "Thor",
    ator: "Chris Hemsworth",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/thor.png",

    resumo: "O Deus do Trovão é um dos membros mais poderosos dos Vingadores.",

    origem: "Filho de Odin e príncipe de Asgard, Thor foi criado para governar os Nove Reinos.",

    filmes: "Participou dos principais eventos do MCU, incluindo Guerra Infinita e Ultimato.",

    hqs: "Criado por Stan Lee, Larry Lieber e Jack Kirby em 1962. Um dos heróis mais importantes da Marvel.",
    
    forca: 100,
    inteligencia: 70,
    magia: 85,
    combate: 95

},
    {
    id: "loki",
    nome: "Loki",
    ator: "Tom Hiddleston",
    faccao: "antiheroi",
    grupos: ["multiverso"],
    imagem: "img/loki.png",

    resumo: "O Deus da Trapaça é um mestre da manipulação, magia e estratégia. Irmão adotivo de Thor, tornou-se uma peça fundamental para o destino do multiverso.",

    origem: "Nascido como um Gigante de Gelo e adotado por Odin, Loki cresceu em Asgard ao lado de Thor. Sentindo-se sempre à sombra do irmão, seguiu um caminho de ambição e conflitos.",

    filmes: "Após anos como vilão e anti-herói no MCU, Loki tornou-se o guardião das linhas do tempo após os eventos da série Loki.",

    hqs: "Criado por Stan Lee, Larry Lieber e Jack Kirby em 1962. É um dos maiores antagonistas e aliados ocasionais dos heróis Marvel.",

    forca: 75,
    inteligencia: 95,
    magia: 100,
    combate: 85
},

{
    id: "samwilson",
    nome: "Capitão América",
    ator: "Anthony Mackie",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/capitao-america.png",

    resumo: "Sam Wilson assumiu o legado de Steve Rogers e tornou-se o novo Capitão América do MCU.",

    origem: "Ex-paraquedista da Força Aérea, Sam utilizou o equipamento experimental EXO-7 Falcon antes de receber o escudo de Steve Rogers.",

    filmes: "Protagonista de Capitão América: Admirável Mundo Novo e líder da nova geração dos Vingadores.",

    hqs: "Criado por Stan Lee e Gene Colan em 1969. Tornou-se Capitão América nos quadrinhos em 2014.",

    forca: 60,
    inteligencia: 80,
    magia: 0,
    combate: 95
},

{
    id: "yelena",
    nome: "Yelena Belova",
    ator: "Florence Pugh",
    faccao: "heroi",
    grupos: ["thunderbolts"],
    imagem: "img/yelena.png",

    resumo: "Espiã altamente treinada e sucessora de Natasha Romanoff.",

    origem: "Criada pela Sala Vermelha, foi submetida ao mesmo treinamento brutal das Viúvas Negras.",

    filmes: "Participou de Viúva Negra, Gavião Arqueiro e Thunderbolts.",

    hqs: "Criada por Devin Grayson e J.G. Jones em 1999 como rival e sucessora da Viúva Negra.",

    forca: 55,
    inteligencia: 82,
    magia: 0,
    combate: 96
},

{
    id: "bucky",
    nome: "Soldado Invernal",
    ator: "Sebastian Stan",
    faccao: "heroi",
    grupos: ["thunderbolts"],
    imagem: "img/bucky.png",

    resumo: "Melhor amigo de Steve Rogers e um dos combatentes mais experientes da Marvel.",

    origem: "Capturado pela HYDRA durante a Segunda Guerra Mundial, foi transformado em um assassino controlado mentalmente.",

    filmes: "Participou de diversas produções do MCU e tornou-se líder dos Thunderbolts.",

    hqs: "Criado por Joe Simon e Jack Kirby em 1941. Retornou como Soldado Invernal em 2005.",

    forca: 80,
    inteligencia: 78,
    magia: 0,
    combate: 98
},

{
    id: "redguardian",
    nome: "Guardião Vermelho",
    ator: "David Harbour",
    faccao: "heroi",
    grupos: ["thunderbolts"],
    imagem: "img/red-guardian.png",

    resumo: "A resposta soviética ao Capitão América, conhecido por sua força e carisma.",

    origem: "Alexei Shostakov foi escolhido pelo governo soviético para se tornar um supersoldado.",

    filmes: "Apareceu em Viúva Negra e retornou em Thunderbolts.",

    hqs: "Criado por Roy Thomas e John Buscema em 1967.",

    forca: 85,
    inteligencia: 65,
    magia: 0,
    combate: 85
},

{
    id: "shangchi",
    nome: "Shang-Chi",
    ator: "Simu Liu",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/shang-chi.png",

    resumo: "Considerado um dos maiores artistas marciais do universo Marvel.",

    origem: "Treinado desde a infância para se tornar um guerreiro perfeito, decidiu lutar pelo próprio destino.",

    filmes: "Protagonista de Shang-Chi e a Lenda dos Dez Anéis.",

    hqs: "Criado por Steve Englehart e Jim Starlin em 1973.",

    forca: 75,
    inteligencia: 82,
    magia: 20,
    combate: 100
},

{
    id: "namor",
    nome: "Namor",
    ator: "Tenoch Huerta",
    faccao: "antiheroi",
    grupos: ["talokan"],
    imagem: "img/namor.png",

    resumo: "Rei de Talokan e um dos seres mais poderosos da Terra.",

    origem: "Mutante híbrido entre humanos e habitantes de Talokan, governando seu povo há séculos.",

    filmes: "Principal antagonista de Pantera Negra: Wakanda Para Sempre.",

    hqs: "Criado por Bill Everett em 1939, sendo um dos personagens mais antigos da Marvel.",

    forca: 95,
    inteligencia: 85,
    magia: 15,
    combate: 92
},
    {
    id: "wong",
    nome: "Wong",
    ator: "Benedict Wong",
    faccao: "heroi",
    grupos: ["magos"],
    imagem: "img/wong.png",

    resumo: "Wong é o atual Mago Supremo da Terra e um dos maiores especialistas em artes místicas da Marvel.",

    origem: "Treinado em Kamar-Taj, Wong dedicou sua vida ao estudo da magia e à proteção do mundo contra ameaças sobrenaturais.",

    filmes: "Participou de Doutor Estranho, Vingadores: Guerra Infinita, Ultimato, Shang-Chi e outras produções importantes do MCU.",

    hqs: "Criado por Stan Lee e Steve Ditko em 1963. Tradicional aliado e amigo de Doutor Estranho.",

    forca: 40,
    inteligencia: 90,
    magia: 98,
    combate: 75
},

{
    id: "starlord",
    nome: "Senhor das Estrelas",
    ator: "Chris Pratt",
    faccao: "heroi",
    grupos: ["guardioes"],
    imagem: "img/star-lord.png",

    resumo: "Peter Quill é o líder dos Guardiões da Galáxia, conhecido por sua coragem, humor e habilidade de liderança.",

    origem: "Filho de uma humana e do celestial Ego, Peter foi sequestrado da Terra quando criança e criado entre saqueadores espaciais.",

    filmes: "Liderou os Guardiões da Galáxia em diversas aventuras cósmicas e participou da batalha contra Thanos.",

    hqs: "Criado por Steve Englehart e Steve Gan em 1976. Tornou-se um dos rostos mais populares da Marvel moderna.",

    forca: 65,
    inteligencia: 78,
    magia: 0,
    combate: 82
},

{
    id: "rocket",
    nome: "Rocket",
    ator: "Bradley Cooper",
    faccao: "heroi",
    grupos: ["guardioes"],
    imagem: "img/rocket.png",

    resumo: "Rocket é um gênio da engenharia, especialista em armas e um dos membros mais inteligentes dos Guardiões da Galáxia.",

    origem: "Resultado de experimentos genéticos, Rocket desenvolveu inteligência extraordinária e habilidades técnicas incomparáveis.",

    filmes: "Participou de toda a trilogia Guardiões da Galáxia e das batalhas decisivas contra Thanos.",

    hqs: "Criado por Bill Mantlo e Keith Giffen em 1976. Tornou-se um dos personagens mais queridos da Marvel.",

    forca: 45,
    inteligencia: 95,
    magia: 0,
    combate: 88
},

{
    id: "gamora",
    nome: "Gamora",
    ator: "Zoe Saldaña",
    faccao: "heroi",
    grupos: ["guardioes"],
    imagem: "img/gamora.png",

    resumo: "Gamora é considerada uma das guerreiras mais perigosas do universo Marvel.",

    origem: "Criada e treinada por Thanos desde a infância, transformou-se em uma combatente praticamente imbatível.",

    filmes: "Membro fundamental dos Guardiões da Galáxia e peça importante na saga do Infinito.",

    hqs: "Criada por Jim Starlin em 1975. Conhecida como 'a mulher mais perigosa da galáxia'.",

    forca: 80,
    inteligencia: 80,
    magia: 0,
    combate: 98
},

{
    id: "homem-formiga",
    nome: "Homem-Formiga",
    ator: "Paul Rudd",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/homem-formiga.png",

    resumo: "Scott Lang utiliza partículas Pym para alterar seu tamanho e acessar o Reino Quântico.",

    origem: "Ex-criminoso reformado, Scott recebeu a tecnologia de Hank Pym e tornou-se o novo Homem-Formiga.",

    filmes: "Protagonista da trilogia Homem-Formiga e peça importante nos eventos de Ultimato.",

    hqs: "Scott Lang foi criado por David Michelinie e John Byrne em 1979.",

    forca: 75,
    inteligencia: 75,
    magia: 0,
    combate: 80
},

{
    id: "vespa",
    nome: "Vespa",
    ator: "Evangeline Lilly",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/vespa.png",

    resumo: "Hope Van Dyne combina tecnologia avançada, velocidade e habilidade de combate.",

    origem: "Filha de Hank Pym e Janet Van Dyne, assumiu o manto da Vespa utilizando a tecnologia Pym.",

    filmes: "Atuou ao lado do Homem-Formiga e participou da batalha final contra Thanos.",

    hqs: "Baseada na heroína Janet Van Dyne, membro fundadora dos Vingadores nos quadrinhos.",

    forca: 65,
    inteligencia: 88,
    magia: 0,
    combate: 85
},

{
    id: "pantera-negra",
    nome: "Pantera Negra",
    ator: "Letitia Wright",
    faccao: "heroi",
    grupos: ["wakanda"],
    imagem: "img/pantera-negra.png",

    resumo: "Shuri assumiu o legado do Pantera Negra e tornou-se a protetora de Wakanda.",

    origem: "Princesa de Wakanda e uma das maiores cientistas do planeta, herdou os poderes do Pantera Negra após os eventos que mudaram seu reino.",

    filmes: "Tornou-se oficialmente a nova Pantera Negra em Wakanda Para Sempre.",

    hqs: "Nos quadrinhos, Shuri também assumiu o manto do Pantera Negra e governou Wakanda em diferentes períodos.",

    forca: 85,
    inteligencia: 98,
    magia: 15,
    combate: 88
},

{
    id: "m-baku",
    nome: "M'Baku",
    ator: "Winston Duke",
    faccao: "heroi",
    grupos: ["wakanda"],
    imagem: "img/mbaku.png",

    resumo: "Líder da Tribo Jabari e um dos maiores guerreiros de Wakanda.",

    origem: "M'Baku lidera a isolada Tribo Jabari e tornou-se um importante aliado da família real de Wakanda.",

    filmes: "Participou de Pantera Negra, Guerra Infinita, Ultimato e Wakanda Para Sempre.",

    hqs: "Criado por Roy Thomas e John Buscema em 1969. Nos quadrinhos já foi rival e aliado do Pantera Negra.",

    forca: 88,
    inteligencia: 70,
    magia: 0,
    combate: 92
},

{
    id: "tocha-humana",
    nome: "Tocha Humana",
    ator: "Joseph Quinn",
    faccao: "heroi",
    grupos: ["quarteto-fantastico"],
    imagem: "img/tocha-humana.png",

    resumo: "Johnny Storm controla o fogo e pode voar em velocidades impressionantes.",

    origem: "Após ser exposto aos raios cósmicos, Johnny ganhou a capacidade de envolver seu corpo em chamas.",

    filmes: "Interpretado por Joseph Quinn na nova versão do Quarteto Fantástico do MCU.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1961. É um dos membros fundadores do Quarteto Fantástico.",

    forca: 75,
    inteligencia: 70,
    magia: 10,
    combate: 85
},

{
    id: "coisa",
    nome: "O Coisa",
    ator: "Ebon Moss-Bachrach",
    faccao: "heroi",
    grupos: ["quarteto-fantastico"],
    imagem: "img/coisa.png",

    resumo: "Ben Grimm possui força colossal e uma pele rochosa praticamente indestrutível.",

    origem: "Os raios cósmicos transformaram seu corpo em uma poderosa forma de pedra viva.",

    filmes: "Integrante do novo Quarteto Fantástico do MCU.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1961. Conhecido por sua força e lealdade.",

    forca: 95,
    inteligencia: 70,
    magia: 0,
    combate: 88
},

{
    id: "ciclope",
    nome: "Ciclope",
    ator: "James Marsden",
    faccao: "heroi",
    grupos: ["x-men"],
    imagem: "img/ciclope.png",

    resumo: "Líder de campo dos X-Men e mestre em estratégia de combate.",

    origem: "Mutante capaz de disparar rajadas ópticas devastadoras através dos olhos.",

    filmes: "James Marsden interpretou o personagem nos filmes clássicos dos X-Men.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1963. Um dos membros fundadores dos X-Men.",

    forca: 65,
    inteligencia: 88,
    magia: 0,
    combate: 92
},

{
    id: "magneto",
    nome: "Magneto",
    ator: "Ian McKellen",
    faccao: "antiheroi",
    grupos: ["x-men"],
    imagem: "img/magneto.png",

    resumo: "Mestre do magnetismo e um dos mutantes mais poderosos da Terra.",

    origem: "Sobrevivente do Holocausto, Erik Lehnsherr acredita que os mutantes devem proteger seu próprio futuro a qualquer custo.",

    filmes: "Ian McKellen interpretou Magneto em diversos filmes dos X-Men.",

    hqs: "Criado por Stan Lee e Jack Kirby em 1963. Principal rival ideológico do Professor X.",

    forca: 85,
    inteligencia: 95,
    magia: 0,
    combate: 90
},

{
    id: "noturno",
    nome: "Noturno",
    ator: "Alan Cumming",
    faccao: "heroi",
    grupos: ["x-men"],
    imagem: "img/noturno.png",

    resumo: "Mutante capaz de se teleportar instantaneamente e especialista em infiltração.",

    origem: "Kurt Wagner nasceu com aparência demoníaca, mas possui um coração heroico.",

    filmes: "Alan Cumming interpretou o personagem em X2: X-Men United.",

    hqs: "Criado por Len Wein e Dave Cockrum em 1975. Um dos X-Men mais queridos pelos fãs.",

    forca: 50,
    inteligencia: 78,
    magia: 0,
    combate: 90
},

{
    id: "mistica",
    nome: "Mística",
    ator: "Rebecca Romijn",
    faccao: "antiheroi",
    grupos: ["x-men"],
    imagem: "img/mistica.png",

    resumo: "Mutante capaz de assumir a aparência de qualquer pessoa.",

    origem: "Raven Darkhölme utiliza sua habilidade de metamorfose para espionagem e infiltração.",

    filmes: "Rebecca Romijn interpretou a personagem na trilogia original dos X-Men.",

    hqs: "Criada por Chris Claremont e Dave Cockrum em 1978.",

    forca: 45,
    inteligencia: 88,
    magia: 0,
    combate: 92
},

{
    id: "gambit",
    nome: "Gambit",
    ator: "Channing Tatum",
    faccao: "heroi",
    grupos: ["x-men"],
    imagem: "img/gambit.png",

    resumo: "Remy LeBeau pode carregar objetos com energia cinética explosiva.",

    origem: "Criado entre ladrões em Nova Orleans, tornou-se um dos mutantes mais habilidosos dos X-Men.",

    filmes: "Channing Tatum finalmente interpretou Gambit em Deadpool & Wolverine.",

    hqs: "Criado por Chris Claremont e Jim Lee em 1990.",

    forca: 60,
    inteligencia: 82,
    magia: 10,
    combate: 95
},

{
    id: "falcao",
    nome: "Falcão",
    ator: "Danny Ramirez",
    faccao: "heroi",
    grupos: ["vingadores"],
    imagem: "img/falcao.png",

    resumo: "Joaquin Torres assumiu o manto do novo Falcão ao lado do Capitão América.",

    origem: "Aliado de Sam Wilson, recebeu tecnologia avançada baseada no equipamento original do Falcão.",

    filmes: "Participou de Falcão e o Soldado Invernal e Capitão América: Admirável Mundo Novo.",

    hqs: "Nos quadrinhos, Joaquin Torres também assume o papel de Falcão.",

    forca: 55,
    inteligencia: 75,
    magia: 0,
    combate: 82
},

{
    id: "a-ser-revelado",
    nome: "???",
    ator: "A SER REVELADO",
    faccao: "vilao",
    grupos: [],
    imagem: "img/char-8.jpg",

    resumo: "Um personagem misterioso ainda não anunciado oficialmente pela Marvel Studios.",

    origem: "Sua identidade permanece desconhecida.",

    filmes: "Rumores indicam que pode ter ligação direta com os eventos de Avengers: Doomsday.",

    hqs: "Informações ainda não reveladas.",

    forca: 0,
    inteligencia: 0,
    magia: 0,
    combate: 0
},

    // 👇 novo personagem vai aqui embaixo, copiando o formato acima

];
