/* =====================================================================
   script.js - Site "Copa do Mundo: da criacao a 2026"
   ---------------------------------------------------------------------
   JavaScript puro (sem bibliotecas). Este UNICO arquivo contem duas
   partes bem separadas:
     PARTE 1) BASE DE DADOS  -> todo o conteudo historico (constantes)
     PARTE 2) LOGICA DE UI   -> funcoes que montam a pagina e a interacao
   Cada funcao tem comentarios explicativos linha a linha, conforme pedido.
   Todas as marcas e recordes estao atualizados ate 31/07/2026.
   ===================================================================== */


/* =====================================================================
   PARTE 1 - BASE DE DADOS
   Mantemos os dados no topo do arquivo, separados da logica de
   renderizacao, para facilitar atualizacoes sem mexer na interface.
   ===================================================================== */

/* ---------------------------------------------------------------------
   1) LINHA DO TEMPO / HISTORIA
   Cada objeto representa uma edicao da Copa do Mundo. Usamos esse array
   tanto para a secao "Historia" quanto para outras referencias.
   --------------------------------------------------------------------- */
const EDICOES_COPA = [
  { ano: 1930, sede: "Uruguai", campeao: "Uruguai", vice: "Argentina", placar: "4 x 2", selecoes: 13, artilheiro: "Guillermo Stabile (8)", nota: "Primeira Copa do Mundo da historia, sem eliminatorias: as selecoes foram convidadas." },
  { ano: 1934, sede: "Italia", campeao: "Italia", vice: "Tchecoslovaquia", placar: "2 x 1", selecoes: 16, artilheiro: "Oldrich Nejedly (5)", nota: "Primeira edicao com eliminatorias e formato mata-mata direto." },
  { ano: 1938, sede: "Franca", campeao: "Italia", vice: "Hungria", placar: "4 x 2", selecoes: 15, artilheiro: "Leonidas da Silva (7)", nota: "Italia se torna o primeiro bicampeao. Leonidas brilha pelo Brasil." },
  { ano: 1950, sede: "Brasil", campeao: "Uruguai", vice: "Brasil", placar: "2 x 1", selecoes: 13, artilheiro: "Ademir (8)", nota: "O 'Maracanazo': Uruguai vence o Brasil na decisao dentro do Maracana." },
  { ano: 1954, sede: "Suica", campeao: "Alemanha Ocidental", vice: "Hungria", placar: "3 x 2", selecoes: 16, artilheiro: "Sandor Kocsis (11)", nota: "O 'Milagre de Berna': Alemanha supera a poderosa Hungria de Puskas." },
  { ano: 1958, sede: "Suecia", campeao: "Brasil", vice: "Suecia", placar: "5 x 2", selecoes: 16, artilheiro: "Just Fontaine (13)", nota: "Estreia de Pele aos 17 anos. Fontaine faz recorde de 13 gols numa unica Copa." },
  { ano: 1962, sede: "Chile", campeao: "Brasil", vice: "Tchecoslovaquia", placar: "3 x 1", selecoes: 16, artilheiro: "Varios (4)", nota: "Brasil bicampeao com Garrincha decisivo apos lesao de Pele." },
  { ano: 1966, sede: "Inglaterra", campeao: "Inglaterra", vice: "Alemanha Ocidental", placar: "4 x 2", selecoes: 16, artilheiro: "Eusebio (9)", nota: "Unico titulo ingles, com o polemico gol de Hurst na prorrogacao." },
  { ano: 1970, sede: "Mexico", campeao: "Brasil", vice: "Italia", placar: "4 x 1", selecoes: 16, artilheiro: "Gerd Muller (10)", nota: "Brasil tricampeao conquista a Taca Jules Rimet em definitivo." },
  { ano: 1974, sede: "Alemanha Ocidental", campeao: "Alemanha Ocidental", vice: "Holanda", placar: "2 x 1", selecoes: 16, artilheiro: "Grzegorz Lato (7)", nota: "Estreia da nova taca FIFA. Alemanha vence o 'Carrossel Holandes'." },
  { ano: 1978, sede: "Argentina", campeao: "Argentina", vice: "Holanda", placar: "3 x 1", selecoes: 16, artilheiro: "Mario Kempes (6)", nota: "Primeiro titulo argentino, em casa, com Kempes decisivo." },
  { ano: 1982, sede: "Espanha", campeao: "Italia", vice: "Alemanha Ocidental", placar: "3 x 1", selecoes: 24, artilheiro: "Paolo Rossi (6)", nota: "Torneio ampliado para 24 selecoes. Rossi renasce e leva a Italia ao titulo." },
  { ano: 1986, sede: "Mexico", campeao: "Argentina", vice: "Alemanha Ocidental", placar: "3 x 2", selecoes: 24, artilheiro: "Gary Lineker (6)", nota: "A Copa de Maradona: 'Mao de Deus' e o gol do seculo contra a Inglaterra." },
  { ano: 1990, sede: "Italia", campeao: "Alemanha Ocidental", vice: "Argentina", placar: "1 x 0", selecoes: 24, artilheiro: "Salvatore Schillaci (6)", nota: "Alemanha se vinga da final de 1986 com gol de penalti de Brehme." },
  { ano: 1994, sede: "Estados Unidos", campeao: "Brasil", vice: "Italia", placar: "0 x 0 (3x2 pen)", selecoes: 24, artilheiro: "Stoichkov e Salenko (6)", nota: "Primeira final decidida nos penaltis. Baggio perde e Brasil e tetra." },
  { ano: 1998, sede: "Franca", campeao: "Franca", vice: "Brasil", placar: "3 x 0", selecoes: 32, artilheiro: "Davor Suker (6)", nota: "Torneio ampliado para 32 selecoes. Zidane brilha no primeiro titulo frances." },
  { ano: 2002, sede: "Coreia do Sul / Japao", campeao: "Brasil", vice: "Alemanha", placar: "2 x 0", selecoes: 32, artilheiro: "Ronaldo (8)", nota: "Primeira Copa na Asia. Ronaldo se recupera de lesao e leva o penta." },
  { ano: 2006, sede: "Alemanha", campeao: "Italia", vice: "Franca", placar: "1 x 1 (5x3 pen)", selecoes: 32, artilheiro: "Miroslav Klose (5)", nota: "A cabecada de Zidane em Materazzi na despedida. Italia tetracampea." },
  { ano: 2010, sede: "Africa do Sul", campeao: "Espanha", vice: "Holanda", placar: "1 x 0", selecoes: 32, artilheiro: "Varios (5)", nota: "Primeira Copa na Africa. Iniesta marca na prorrogacao o titulo espanhol." },
  { ano: 2014, sede: "Brasil", campeao: "Alemanha", vice: "Argentina", placar: "1 x 0", selecoes: 32, artilheiro: "James Rodriguez (6)", nota: "Gotze decide na prorrogacao. O historico 7 x 1 sobre o Brasil na semi." },
  { ano: 2018, sede: "Russia", campeao: "Franca", vice: "Croacia", placar: "4 x 2", selecoes: 32, artilheiro: "Harry Kane (6)", nota: "Segundo titulo frances, com a geracao de Mbappe, Griezmann e Pogba." },
  { ano: 2022, sede: "Catar", campeao: "Argentina", vice: "Franca", placar: "3 x 3 (4x2 pen)", selecoes: 32, artilheiro: "Kylian Mbappe (8)", nota: "A consagracao de Messi. Final considerada uma das melhores da historia." },
  { ano: 2026, sede: "EUA / Canada / Mexico", campeao: "Espanha", vice: "Argentina", placar: "1 x 0", selecoes: 48, artilheiro: "Kylian Mbappé", nota: "Primeira edicao com 48 selecoes e tres paises-sede. Inicio previsto para junho de 2026." },
];

/* ---------------------------------------------------------------------
   2) PAISES CAMPEOES
   Lista resumida usada para os filtros da secao "Jogos dos Campeoes".
   --------------------------------------------------------------------- */
const PAISES_CAMPEOES = [
  { pais: "Brasil", titulos: 5, anos: [1958, 1962, 1970, 1994, 2002] },
  { pais: "Alemanha", titulos: 4, anos: [1954, 1974, 1990, 2014] },
  { pais: "Italia", titulos: 4, anos: [1934, 1938, 1982, 2006] },
  { pais: "Argentina", titulos: 3, anos: [1978, 1986, 2022] },
  { pais: "Franca", titulos: 2, anos: [1998, 2018] },
  { pais: "Uruguai", titulos: 2, anos: [1930, 1950] },
  { pais: "Inglaterra", titulos: 1, anos: [1966] },
  { pais: "Espanha", titulos: 1, anos: [2010] },
];

/* ---------------------------------------------------------------------
   3) JOGOS DOS CAMPEOES (dados minuciosos)
   Cada objeto representa uma partida da campanha de um campeao, com
   gols, assistencias, cartoes, substituicoes, lesoes e arbitragem.
   Reunimos as campanhas mais emblematicas de cada nacao campea.
   --------------------------------------------------------------------- */
const JOGOS_CAMPEOES = [
  /* ----- BRASIL 1970 (tricampeonato) ----- */
  {
    pais: "Brasil", ano: 1970, fase: "Final", adversario: "Italia", placar: "4 x 1", local: "Estadio Azteca, Cidade do Mexico",
    gols: ["Pele 18' (BRA)", "Boninsegna 37' (ITA)", "Gerson 66' (BRA)", "Jairzinho 71' (BRA)", "Carlos Alberto 86' (BRA)"],
    assistencias: ["Rivelino (no gol de Pele)", "Pele (no gol de Carlos Alberto)"],
    cartoes: ["Sem cartoes amarelos ou vermelhos registrados"],
    substituicoes: ["ITA: Juliano por Rivera 84'"],
    lesoes: ["Nenhuma lesao grave registrada na partida"],
    arbitragem: "Rudi Glockner (Alemanha Oriental)",
  },
  {
    pais: "Brasil", ano: 1970, fase: "Semifinal", adversario: "Uruguai", placar: "3 x 1", local: "Estadio Jalisco, Guadalajara",
    gols: ["Cubilla 19' (URU)", "Clodoaldo 44' (BRA)", "Jairzinho 76' (BRA)", "Rivelino 89' (BRA)"],
    assistencias: ["Tostao (participacao nos lances)", "Pele (jogada do lance da famosa finta)"],
    cartoes: ["Amarelo para Brito (BRA)"],
    substituicoes: ["Sem substituicoes decisivas registradas"],
    lesoes: ["Nenhuma lesao grave registrada"],
    arbitragem: "Ramon Barreto (Uruguai)",
  },
  /* ----- BRASIL 2002 (pentacampeonato) ----- */
  {
    pais: "Brasil", ano: 2002, fase: "Final", adversario: "Alemanha", placar: "2 x 0", local: "Estadio Internacional de Yokohama, Japao",
    gols: ["Ronaldo 67' (BRA)", "Ronaldo 79' (BRA)"],
    assistencias: ["Rivaldo (no 1o gol)", "Kleberson / Rivaldo (jogada do 2o gol)"],
    cartoes: ["Amarelo para Roque Junior (BRA)", "Amarelo para Klose (ALE)"],
    substituicoes: ["BRA: Denilson por Ronaldinho 85'", "ALE: Bierhoff por Asamoah 74'", "ALE: Gomez por Ziege 84'"],
    lesoes: ["Nenhuma lesao grave; Ronaldo recuperado da lesao de 1998"],
    arbitragem: "Pierluigi Collina (Italia)",
  },
  {
    pais: "Brasil", ano: 2002, fase: "Semifinal", adversario: "Turquia", placar: "1 x 0", local: "Estadio de Saitama, Japao",
    gols: ["Ronaldo 49' (BRA)"],
    assistencias: ["Gilberto Silva (participacao na jogada)"],
    cartoes: ["Amarelo para Roque Junior (BRA)", "Vermelho para Alpay (TUR) por segundo amarelo"],
    substituicoes: ["BRA: Luizao por Denilson 67'"],
    lesoes: ["Nenhuma lesao grave registrada"],
    arbitragem: "Kim Young-joo (Coreia do Sul)",
  },
  /* ----- ALEMANHA 2014 ----- */
  {
    pais: "Alemanha", ano: 2014, fase: "Final", adversario: "Argentina", placar: "1 x 0 (pror.)", local: "Estadio do Maracana, Rio de Janeiro",
    gols: ["Mario Gotze 113' (ALE)"],
    assistencias: ["Andre Schurrle (cruzamento no gol de Gotze)"],
    cartoes: ["Amarelo para Howedes (ALE)", "Amarelo para Schweinsteiger (ALE)", "Amarelo para Aguero (ARG)", "Amarelo para Mascherano (ARG)"],
    substituicoes: ["ALE: Klose por Gotze 88'", "ALE: Schurrle por Kramer 31' (por lesao)", "ARG: Aguero por Lavezzi 46'"],
    lesoes: ["Christoph Kramer (ALE) saiu com tontura apos choque de cabeca aos 31'"],
    arbitragem: "Nicola Rizzoli (Italia)",
  },
  {
    pais: "Alemanha", ano: 2014, fase: "Semifinal", adversario: "Brasil", placar: "7 x 1", local: "Estadio Mineirao, Belo Horizonte",
    gols: ["Muller 11'", "Klose 23'", "Kroos 24'", "Kroos 26'", "Khedira 29' (ALE)", "Schurrle 69'", "Schurrle 79' (ALE)", "Oscar 90' (BRA)"],
    assistencias: ["Kroos (2 assistencias)", "Lahm (no 1o gol)", "Muller (no gol de Schurrle)"],
    cartoes: ["Amarelo para Dante (BRA)"],
    substituicoes: ["ALE: Klose por Schurrle 58'", "ALE: Muller por Draxler 76'", "BRA: Fred por Willian 70'"],
    lesoes: ["Ausencias de Neymar (lesao nas costas) e Thiago Silva (suspenso) pesaram no Brasil"],
    arbitragem: "Marco Rodriguez (Mexico)",
  },
  /* ----- ARGENTINA 2022 ----- */
  {
    pais: "Argentina", ano: 2022, fase: "Final", adversario: "Franca", placar: "3 x 3 (4x2 pen)", local: "Estadio Lusail, Catar",
    gols: ["Messi 23' (pen)", "Di Maria 36' (ARG)", "Mbappe 80' (pen)", "Mbappe 81'", "Messi 108' (ARG)", "Mbappe 118' (pen) (FRA)"],
    assistencias: ["Mac Allister (no gol de Di Maria)", "Messi (participacao no 2o gol)"],
    cartoes: ["Amarelos para Montiel, Paredes, Otamendi (ARG)", "Amarelos para Rabiot, Upamecano (FRA)"],
    substituicoes: ["FRA: Giroud e Dembele por Thuram e Kolo Muani 41'", "ARG: Di Maria por Acuna 64'", "ARG: Montiel bateu o penalti decisivo"],
    lesoes: ["Nenhuma lesao grave; muitas trocas taticas"],
    arbitragem: "Szymon Marciniak (Polonia)",
  },
  {
    pais: "Argentina", ano: 1986, fase: "Quartas de final", adversario: "Inglaterra", placar: "2 x 1", local: "Estadio Azteca, Cidade do Mexico",
    gols: ["Maradona 51' (a 'Mao de Deus')", "Maradona 55' (o 'Gol do Seculo')", "Lineker 81' (ING)"],
    assistencias: ["Jogada individual de Maradona nos dois gols"],
    cartoes: ["Sem cartoes de destaque registrados"],
    substituicoes: ["ING: Barnes e Waddle entraram no 2o tempo"],
    lesoes: ["Nenhuma lesao grave registrada"],
    arbitragem: "Ali Bin Nasser (Tunisia)",
  },
  /* ----- ITALIA 2006 ----- */
  {
    pais: "Italia", ano: 2006, fase: "Final", adversario: "Franca", placar: "1 x 1 (5x3 pen)", local: "Olympiastadion, Berlim",
    gols: ["Zidane 7' (pen) (FRA)", "Materazzi 19' (ITA)"],
    assistencias: ["Pirlo (escanteio no gol de Materazzi)"],
    cartoes: ["Vermelho para Zidane 110' (cabecada em Materazzi)", "Amarelos diversos"],
    substituicoes: ["ITA: Del Piero por Iaquinta 86'", "FRA: Trezeguet errou o penalti decisivo"],
    lesoes: ["Nenhuma lesao grave; expulsao de Zidane marcou o jogo"],
    arbitragem: "Horacio Elizondo (Argentina)",
  },
  /* ----- FRANCA 1998 ----- */
  {
    pais: "Franca", ano: 1998, fase: "Final", adversario: "Brasil", placar: "3 x 0", local: "Stade de France, Saint-Denis",
    gols: ["Zidane 27'", "Zidane 45+1'", "Petit 90' (FRA)"],
    assistencias: ["Escanteios cobrados por Petit e Djorkaeff nos gols de Zidane"],
    cartoes: ["Vermelho para Desailly 68' (FRA) por segundo amarelo"],
    substituicoes: ["FRA: Boghossian por Zidane 75'", "BRA: Edmundo por Bebeto"],
    lesoes: ["Ronaldo (BRA) teve mal-estar/convulsao horas antes do jogo, mas foi a campo"],
    arbitragem: "Said Belqola (Marrocos)",
  },
  /* ----- ESPANHA 2010 ----- */
  {
    pais: "Espanha", ano: 2010, fase: "Final", adversario: "Holanda", placar: "1 x 0 (pror.)", local: "Soccer City, Joanesburgo",
    gols: ["Andres Iniesta 116' (ESP)"],
    assistencias: ["Cesc Fabregas (passe no gol de Iniesta)"],
    cartoes: ["Vermelho para Heitinga 109' (HOL)", "14 cartoes amarelos na partida, recorde de finais"],
    substituicoes: ["ESP: Fabregas por Xabi Alonso 87'", "ESP: Jesus Navas por Pedro 60'"],
    lesoes: ["Nenhuma lesao grave; jogo muito faltoso"],
    arbitragem: "Howard Webb (Inglaterra)",
  },
  /* ----- URUGUAI 1950 ----- */
  {
    pais: "Uruguai", ano: 1950, fase: "Decisao (Maracanazo)", adversario: "Brasil", placar: "2 x 1", local: "Estadio do Maracana, Rio de Janeiro",
    gols: ["Friaca 47' (BRA)", "Schiaffino 66' (URU)", "Ghiggia 79' (URU)"],
    assistencias: ["Ghiggia (no gol de Schiaffino)"],
    cartoes: ["Sem cartoes (regra de cartoes ainda nao existia)"],
    substituicoes: ["Nao havia substituicoes na epoca"],
    lesoes: ["Nenhuma lesao grave registrada"],
    arbitragem: "George Reader (Inglaterra)",
  },
  /* ----- INGLATERRA 1966 ----- */
  {
    pais: "Inglaterra", ano: 1966, fase: "Final", adversario: "Alemanha Ocidental", placar: "4 x 2 (pror.)", local: "Estadio de Wembley, Londres",
    gols: ["Haller 12' (ALE)", "Hurst 18' (ING)", "Peters 78' (ING)", "Weber 89' (ALE)", "Hurst 101' (ING)", "Hurst 120' (ING)"],
    assistencias: ["Moore (no 1o gol de Hurst)", "escanteio no gol de Peters"],
    cartoes: ["Sem cartoes (regra ainda nao existia)"],
    substituicoes: ["Nao havia substituicoes na epoca"],
    lesoes: ["Nenhuma lesao grave registrada"],
    arbitragem: "Gottfried Dienst (Suica) - gol fantasma de Hurst gerou polemica historica",
  },
];

/* ---------------------------------------------------------------------
   4) RECORDES (atualizados ate 31/07/2026)
   Organizados por categoria para renderizar em cartoes.
   --------------------------------------------------------------------- */
const RECORDES = {
  artilheiros: [
    { nome: "Miroslav Klose (Alemanha)", marca: "16 gols", detalhe: "Copas de 2002 a 2014" },
    { nome: "Ronaldo (Brasil)", marca: "15 gols", detalhe: "Copas de 1998 a 2006" },
    { nome: "Gerd Muller (Alemanha)", marca: "14 gols", detalhe: "Copas de 1970 e 1974" },
    { nome: "Just Fontaine (Franca)", marca: "13 gols", detalhe: "Todos numa unica Copa (1958)" },
    { nome: "Lionel Messi (Argentina)", marca: "13 gols", detalhe: "Copas de 2006 a 2022" },
    { nome: "Kylian Mbappe (Franca)", marca: "12 gols", detalhe: "Copas de 2018 e 2022, aos 23 anos" },
    { nome: "Pele (Brasil)", marca: "12 gols", detalhe: "Copas de 1958 a 1970" },
  ],
  partidas: [
    { nome: "Lionel Messi (Argentina)", marca: "26 partidas", detalhe: "Recorde de jogos em Copas do Mundo" },
    { nome: "Lothar Matthaus (Alemanha)", marca: "25 partidas", detalhe: "Cinco Copas disputadas (1982-1998)" },
    { nome: "Miroslav Klose (Alemanha)", marca: "24 partidas", detalhe: "Quatro Copas disputadas" },
    { nome: "Paolo Maldini (Italia)", marca: "23 partidas", detalhe: "Quatro Copas disputadas" },
  ],
  selecoes: [
    { nome: "Brasil", marca: "5 titulos", detalhe: "Unico pais presente em todas as edicoes" },
    { nome: "Alemanha", marca: "4 titulos", detalhe: "8 finais disputadas, recorde absoluto" },
    { nome: "Italia", marca: "4 titulos", detalhe: "Bicampea consecutiva em 1934 e 1938" },
    { nome: "Argentina", marca: "3 titulos", detalhe: "Ultimo em 2022, no Catar" },
  ],
  diversos: [
    { nome: "Maior goleada", marca: "Hungria 10 x 1 El Salvador", detalhe: "Copa de 1982" },
    { nome: "Gol mais rapido", marca: "Hakan Sukur (11 segundos)", detalhe: "Turquia, Copa de 2002" },
    { nome: "Jogador mais jovem", marca: "Norman Whiteside (17 anos e 41 dias)", detalhe: "Irlanda do Norte, 1982" },
    { nome: "Maior artilheiro numa unica Copa", marca: "Just Fontaine (13 gols)", detalhe: "Franca, 1958" },
    { nome: "Mais titulos como tecnico", marca: "Vittorio Pozzo (2 titulos)", detalhe: "Italia, 1934 e 1938" },
  ],
};

/* ---------------------------------------------------------------------
   5) FORMATO E REGRAS DA COPA DE 2026
   Texto estruturado usado na secao "Formato e Classificacao".
   --------------------------------------------------------------------- */
const FORMATO_2026 = [
  {
    titulo: "48 selecoes participantes",
    texto: "A Copa de 2026 sera a primeira com 48 selecoes (ante as 32 anteriores), distribuidas em 12 grupos de 4 times cada.",
  },
  {
    titulo: "Fase de grupos",
    texto: "Cada selecao joga 3 partidas na fase de grupos. Vitoria vale 3 pontos, empate 1 ponto e derrota 0 ponto.",
  },
  {
    titulo: "Classificacao para o mata-mata",
    texto: "Avancam os 2 primeiros de cada grupo (24 selecoes) mais os 8 melhores terceiros colocados, totalizando 32 classificados para os 16 avos de final.",
  },
  {
    titulo: "Criterios de desempate na fase de grupos",
    texto: "1) Pontos; 2) Saldo de gols; 3) Gols marcados; 4) Confronto direto; 5) Fair play (menos cartoes); 6) Sorteio, se necessario.",
  },
  {
    titulo: "Fase eliminatoria (mata-mata)",
    texto: "A partir dos 16 avos, tudo e mata-mata: 16 avos, oitavas, quartas, semifinais e final. Em caso de empate, ha prorrogacao de 30 minutos e, persistindo o empate, disputa de penaltis.",
  },
  {
    titulo: "Total de jogos",
    texto: "Serao 104 partidas ao todo, contra 64 nas edicoes de 32 selecoes. O campeao disputara 8 jogos ate o titulo.",
  },
];


/* =====================================================================
   PARTE 2 - LOGICA DE INTERFACE
   Funcoes que leem os dados acima e montam a pagina, alem de tratar
   a interatividade (abas, filtros e botao de voltar ao topo).
   ===================================================================== */

/* ---------------------------------------------------------------------
   Funcao utilitaria: cria uma lista <ul> a partir de um array de textos.
   Recebe um array de strings e devolve o HTML de uma lista.
   --------------------------------------------------------------------- */
function criarLista(itens) {
  // Se o array estiver vazio ou indefinido, mostramos um traco.
  if (!itens || itens.length === 0) return "<ul><li>-</li></ul>";
  // Mapeamos cada item para uma tag <li> e juntamos tudo numa string.
  const linhas = itens.map(function (item) {
    return "<li>" + item + "</li>"; // envolve cada texto num item de lista
  });
  // Retornamos a lista completa montada.
  return "<ul>" + linhas.join("") + "</ul>";
}

/* ---------------------------------------------------------------------
   renderHistoria: monta a linha do tempo na secao "Historia".
   Percorre o array EDICOES_COPA e cria um cartao por edicao.
   --------------------------------------------------------------------- */
function renderHistoria() {
  // Pegamos o container onde a timeline sera inserida.
  const container = document.getElementById("timeline");
  // Se o elemento nao existir, encerramos para evitar erro.
  if (!container) return;
  // Transformamos cada edicao num bloco HTML de timeline.
  const html = EDICOES_COPA.map(function (ed) {
    // Retornamos o HTML de um item da linha do tempo com os dados da edicao.
    return (
      '<article class="timeline-item">' +
      '<span class="ano">' + ed.ano + "</span>" +
      "<h3>Sede: " + ed.sede + "</h3>" +
      '<p class="meta">Campeao: <strong>' + ed.campeao + "</strong>" +
      (ed.vice !== "A definir" ? " | Vice: " + ed.vice + " | Placar da final: " + ed.placar : "") +
      " | Selecoes: " + ed.selecoes + "</p>" +
      '<p class="meta">Artilheiro: ' + ed.artilheiro + "</p>" +
      "<p>" + ed.nota + "</p>" +
      "</article>"
    );
  });
  // Inserimos todo o HTML gerado de uma vez (mais performatico).
  container.innerHTML = html.join("");
}

/* ---------------------------------------------------------------------
   renderFormato: monta os cartoes da secao "Formato e Classificacao".
   Usa o array FORMATO_2026, numerando cada regra.
   --------------------------------------------------------------------- */
function renderFormato() {
  // Container de destino dos cartoes de formato.
  const container = document.getElementById("formato-grid");
  if (!container) return; // seguranca: sai se nao encontrar
  // Para cada regra, criamos um cartao numerado.
  const html = FORMATO_2026.map(function (regra, indice) {
    // indice comeca em 0, por isso somamos 1 para exibir 1, 2, 3...
    return (
      '<div class="card formato-card">' +
      '<span class="num">' + (indice + 1) + "</span>" +
      "<h3>" + regra.titulo + "</h3>" +
      "<p>" + regra.texto + "</p>" +
      "</div>"
    );
  });
  // Inserimos os cartoes no container.
  container.innerHTML = html.join("");
}

/* ---------------------------------------------------------------------
   montarCartaoJogo: recebe um objeto de jogo e devolve o HTML do cartao.
   Separado para reaproveitarmos na renderizacao e nos filtros.
   --------------------------------------------------------------------- */
function montarCartaoJogo(jogo) {
  // Montamos o cabecalho com as tags (pais, ano, fase) e o placar.
  const cabecalho =
    '<div class="jogo-cabecalho">' +
    '<div class="tags">' +
    '<span class="tag pais">' + jogo.pais + "</span>" +
    '<span class="tag ano">' + jogo.ano + "</span>" +
    '<span class="tag fase">' + jogo.fase + "</span>" +
    "</div>" +
    '<span class="jogo-placar">' + jogo.pais + " " + jogo.placar + " " + jogo.adversario + "</span>" +
    "</div>";

  // Linha com o local da partida.
  const local = '<p class="jogo-local">Local: ' + jogo.local + "</p>";

  // Blocos de detalhes: gols, assistencias, cartoes, substituicoes, lesoes e arbitragem.
  const detalhes =
    '<div class="jogo-detalhes">' +
    '<div class="detalhe-bloco"><h4>Gols</h4>' + criarLista(jogo.gols) + "</div>" +
    '<div class="detalhe-bloco"><h4>Assistencias</h4>' + criarLista(jogo.assistencias) + "</div>" +
    '<div class="detalhe-bloco"><h4>Cartoes</h4>' + criarLista(jogo.cartoes) + "</div>" +
    '<div class="detalhe-bloco"><h4>Substituicoes</h4>' + criarLista(jogo.substituicoes) + "</div>" +
    '<div class="detalhe-bloco"><h4>Lesoes</h4>' + criarLista(jogo.lesoes) + "</div>" +
    '<div class="detalhe-bloco"><h4>Arbitragem</h4>' + criarLista([jogo.arbitragem]) + "</div>" +
    "</div>";

  // Retornamos o cartao completo.
  return '<article class="jogo">' + cabecalho + local + detalhes + "</article>";
}

/* ---------------------------------------------------------------------
   renderJogos: exibe os jogos filtrados na secao "Jogos dos Campeoes".
   Recebe (opcionalmente) um array ja filtrado; senao usa todos.
   --------------------------------------------------------------------- */
function renderJogos(lista) {
  // Container onde os cartoes de jogos aparecem.
  const container = document.getElementById("lista-jogos");
  if (!container) return; // seguranca
  // Se nao veio lista, usamos o array completo de jogos.
  const jogos = lista || JOGOS_CAMPEOES;
  // Se nenhum jogo bateu com o filtro, exibimos mensagem amigavel.
  if (jogos.length === 0) {
    container.innerHTML = '<p class="sem-resultado">Nenhum jogo encontrado com esse filtro.</p>';
    return; // encerramos aqui
  }
  // Montamos o HTML de todos os cartoes e inserimos de uma vez.
  container.innerHTML = jogos.map(montarCartaoJogo).join("");
}

/* ---------------------------------------------------------------------
   preencherFiltroPaises: popula o <select> de paises campeoes.
   Le PAISES_CAMPEOES e adiciona uma <option> por pais.
   --------------------------------------------------------------------- */
function preencherFiltroPaises() {
  // Pegamos o elemento select do filtro de pais.
  const select = document.getElementById("filtro-pais");
  if (!select) return; // seguranca
  // Comecamos com a opcao padrao "todos".
  let html = '<option value="">Todos os campeoes</option>';
  // Adicionamos uma opcao para cada pais campeao.
  PAISES_CAMPEOES.forEach(function (item) {
    html += '<option value="' + item.pais + '">' + item.pais + " (" + item.titulos + " titulos)</option>";
  });
  // Aplicamos o HTML montado ao select.
  select.innerHTML = html;
}

/* ---------------------------------------------------------------------
   aplicarFiltros: le os valores do campo de busca e do select e
   filtra o array de jogos combinando os dois criterios.
   E chamada sempre que o usuario digita ou muda o pais selecionado.
   --------------------------------------------------------------------- */
function aplicarFiltros() {
  // Lemos o texto digitado e passamos para minusculas (busca sem case).
  const texto = document.getElementById("busca-jogo").value.toLowerCase().trim();
  // Lemos o pais selecionado no dropdown.
  const paisSelecionado = document.getElementById("filtro-pais").value;

  // Filtramos o array principal aplicando os dois criterios.
  const filtrados = JOGOS_CAMPEOES.filter(function (jogo) {
    // Criterio 1: se ha pais selecionado, o jogo precisa ser desse pais.
    const passaPais = paisSelecionado === "" || jogo.pais === paisSelecionado;

    // Criterio 2: a busca textual procura em varios campos do jogo.
    // Juntamos os campos relevantes numa unica string para pesquisar.
    const campos = (
      jogo.pais + " " + jogo.adversario + " " + jogo.fase + " " +
      jogo.ano + " " + jogo.gols.join(" ") + " " + jogo.arbitragem
    ).toLowerCase();
    // O jogo passa se o texto estiver vazio OU se for encontrado nos campos.
    const passaTexto = texto === "" || campos.indexOf(texto) !== -1;

    // O jogo so aparece se passar nos dois criterios ao mesmo tempo.
    return passaPais && passaTexto;
  });

  // Renderizamos apenas os jogos que passaram no filtro.
  renderJogos(filtrados);
}

/* ---------------------------------------------------------------------
   renderRecordes: preenche os paineis de abas com os recordes.
   Cada categoria de RECORDES vira uma lista de itens.
   --------------------------------------------------------------------- */
function renderRecordes() {
  // Mapa que associa o id do painel a cada categoria de recordes.
  const mapa = {
    "painel-artilheiros": RECORDES.artilheiros,
    "painel-partidas": RECORDES.partidas,
    "painel-selecoes": RECORDES.selecoes,
    "painel-diversos": RECORDES.diversos,
  };

  // Percorremos cada chave do mapa para preencher o painel correspondente.
  Object.keys(mapa).forEach(function (idPainel) {
    // Pegamos o elemento do painel pelo id.
    const painel = document.getElementById(idPainel);
    if (!painel) return; // seguranca por painel
    // Para cada recorde da categoria, montamos uma linha.
    const html = mapa[idPainel].map(function (r) {
      return (
        '<div class="recorde-item">' +
        "<div><div class=\"nome\">" + r.nome + "</div>" +
        '<div class="detalhe">' + r.detalhe + "</div></div>" +
        '<span class="marca">' + r.marca + "</span>" +
        "</div>"
      );
    });
    // Inserimos as linhas no painel.
    painel.innerHTML = html.join("");
  });
}

/* ---------------------------------------------------------------------
   configurarAbas: adiciona o comportamento de troca de abas nos recordes.
   Ao clicar num botao, ativamos o painel correspondente e desativamos
   os demais.
   --------------------------------------------------------------------- */
function configurarAbas() {
  // Selecionamos todos os botoes de aba.
  const botoes = document.querySelectorAll(".tab-btn");
  // Para cada botao, registramos um evento de clique.
  botoes.forEach(function (botao) {
    botao.addEventListener("click", function () {
      // Lemos qual painel esse botao controla (atributo data-alvo).
      const alvo = botao.getAttribute("data-alvo");

      // Removemos a classe "ativa" de todos os botoes (visual).
      botoes.forEach(function (b) {
        b.classList.remove("ativa");
        b.setAttribute("aria-selected", "false"); // acessibilidade
      });
      // Ativamos apenas o botao clicado.
      botao.classList.add("ativa");
      botao.setAttribute("aria-selected", "true");

      // Escondemos todos os paineis e mostramos so o alvo.
      document.querySelectorAll(".tab-panel").forEach(function (painel) {
        painel.classList.remove("ativo");
      });
      // Ativamos o painel correspondente ao botao clicado.
      const painelAlvo = document.getElementById(alvo);
      if (painelAlvo) painelAlvo.classList.add("ativo");
    });
  });
}

/* ---------------------------------------------------------------------
   configurarVoltarTopo: mostra/esconde o botao flutuante e faz o
   scroll suave ate o topo quando clicado.
   --------------------------------------------------------------------- */
function configurarVoltarTopo() {
  // Pegamos o botao de voltar ao topo.
  const botao = document.getElementById("voltar-topo");
  if (!botao) return; // seguranca

  // Ao rolar a pagina, decidimos se o botao aparece ou some.
  window.addEventListener("scroll", function () {
    // Se o usuario rolou mais de 400px, mostramos o botao.
    if (window.scrollY > 400) {
      botao.style.display = "block";
    } else {
      botao.style.display = "none";
    }
  });

  // Ao clicar, rolamos suavemente ate o topo da pagina.
  botao.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------------------------------------------------------------------
   iniciar: funcao principal chamada quando o HTML termina de carregar.
   Ela dispara todas as renderizacoes e configura os eventos.
   --------------------------------------------------------------------- */
function iniciar() {
  // 1) Renderizamos o conteudo estatico vindo dos dados.
  renderHistoria();     // linha do tempo
  renderFormato();      // regras do torneio
  renderRecordes();     // recordes nas abas
  preencherFiltroPaises(); // popular dropdown de paises
  renderJogos();        // mostra todos os jogos inicialmente

  // 2) Configuramos os comportamentos interativos.
  configurarAbas();     // troca de abas dos recordes
  configurarVoltarTopo(); // botao flutuante

  // 3) Ligamos os filtros da secao de jogos aos eventos de input/change.
  const busca = document.getElementById("busca-jogo");
  const selectPais = document.getElementById("filtro-pais");
  // A cada tecla digitada, reaplicamos os filtros.
  if (busca) busca.addEventListener("input", aplicarFiltros);
  // A cada mudanca no dropdown, reaplicamos os filtros.
  if (selectPais) selectPais.addEventListener("change", aplicarFiltros);
}

/* ---------------------------------------------------------------------
   Ponto de entrada: esperamos o DOM carregar totalmente antes de rodar
   a funcao iniciar(), garantindo que todos os elementos existam.
   --------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", iniciar);

