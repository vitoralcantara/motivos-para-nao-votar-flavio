/**
 * Base de dados de tópicos e matérias apuradas.
 * Para adicionar um novo tópico, basta incluir um novo objeto nesta lista.
 */
const topicsData = [
  {
    id: "recusa-abertura-sigilos",
    title: "Recusa proposta de abrir sigilos bancário, fiscal e telefônico na reta final de campanha",
    category: "Transparência",
    date: "20/10/2026",
    sourceName: "SBT News (Coluna do Túlio)",
    sourceUrl: "https://sbtnews.sbt.com.br/colunas/coluna-do-tulio/flavio-nao-vai-aceitar-desafio-de-lula-para-abrir-sigilos",
    bullets: [
      "Campanha de Flávio confirmou que o senador não aceitará a proposta de abrir voluntariamente seus sigilos bancário, fiscal e telefônico.",
      "O desafio havia sido protocolado por Lula no TSE, propondo abertura mútua e pública de dados dos últimos oito anos para ambos os candidatos e familiares.",
      "A exigência envolvia declarações de Imposto de Renda, movimentações bancárias, evolução patrimonial e registros de empresas vinculadas (como a Alcazar Holdings).",
      "Aliados do senador classificaram a abertura como 'armadilha eleitoral', justificando que os dados gerariam novas suspeitas e pedidos de apuração às vésperas da votação."
    ],
    fullContext: "Integrantes da coordenação de campanha de Flávio Bolsonaro confirmaram ao SBT News que o parlamentar descartou aderir à abertura voluntária de seus sigilos bancário, fiscal e telefônico. A medida havia sido formalmente proposta e protocolada no TSE pelo adversário Luiz Inácio Lula da Silva em formato de desafio mútuo, cobrindo dados dos últimos 8 anos de titulares e familiares diretos, além de empresas citadas em investigações (como a Alcazar Holdings). A equipe de Flávio justificou a negativa afirmando que a divulgação dos dados fiscais e bancários serviria para produzir manchetes e pedidos de novas investigações sem prazo para esclarecimento pré-eleição.",
    quote: "Aliados confirmaram recusa em abrir sigilos bancários e fiscais, alegando risco de novas apurações na reta final."
  },
  {
    id: "inquerito-stf-lavagem-willer-tomaz",
    title: "STF abre inquérito sobre suposta lavagem de dinheiro e 'usuário master' em conta de advogado",
    category: "Investigações",
    date: "18/10/2026",
    sourceName: "G1 / TV Globo",
    sourceUrl: "https://g1.globo.com/politica/noticia/2026/10/18/stf-abre-inquerito-para-apurar-suposta-lavagem-de-dinheiro-envolvendo-flavio-bolsonaro-e-o-advogado-willer-tomaz.ghtml",
    bullets: [
      "Inquérito aberto no Supremo Tribunal Federal (STF), com relatoria de Alexandre de Moraes e parecer favorável da PGR, após o caso subir da Justiça Federal do RS.",
      "PF identificou que Flávio figurava como 'usuário master' de uma conta bancária da empresa Alcazar Holdings, pertencente ao advogado Willer Tomaz.",
      "Relatório da PF aponta que e-mail apreendido de maio/2025 solicitava a exclusão desse acesso, indicando vínculo operacional até a referida data.",
      "Investigação também encontrou documentos pessoais de Flávio na nuvem do advogado, viagens custeadas por empresa de Tomaz e suspeitas de ligação com casas de apostas (bets).",
      "É o segundo inquérito no STF em que o senador é investigado (o anterior apura financiamento de filme pelo Banco Master)."
    ],
    fullContext: "O STF autorizou abertura de inquérito criminal para apurar suspeitas de lavagem de dinheiro, evasão de divisas e ligação com casas de apostas envolvendo o senador Flávio Bolsonaro e o advogado Willer Tomaz. O caso teve origem em investigação da PF no Rio Grande do Sul. A quebra de sigilo telemático revelou e-mails apontando que Flávio foi cadastrado com perfil de 'usuário master' na conta bancária da empresa Alcazar Holdings (de Tomaz), o que lhe garantia gestão operacional elevada. A polícia também localizou documentos pessoais do senador no iCloud do advogado e custeio de viagens. Ambas as defesas negaram irregularidades e afirmaram que a relação entre eles restringe-se a amizade familiar.",
    quote: "PF apontou que senador foi cadastrado como usuário master em conta bancária de empresa de advogado investigado."
  },
  {
    id: "cobrancas-vorcaro-filme-dark-horse",
    title: "PF aponta cobranças de Flávio a banqueiro por repasses milionários para filme 'Dark Horse'",
    category: "Investigações",
    date: "12/09/2026",
    sourceName: "Agência Brasil / EBC",
    sourceUrl: "https://agenciabrasil.ebc.com.br/justica/noticia/2026-09/pf-aponta-cobrancas-de-flavio-vorcaro-por-filme-dark-horse",
    bullets: [
      "Relatórios da Polícia Federal no STF revelaram mensagens e áudios interceptados de Flávio cobrando Daniel Vorcaro (Banco Master) por atrasos em repasses.",
      "Em áudio de setembro de 2025, o senador demonstrou preocupação com o cronograma e com compromissos financeiros internacionais com diretores e atores em Hollywood.",
      "A apuração indica articulação de montante que chegava a até US$ 24 milhões (cerca de R$ 130 milhões) com o banqueiro para a cinebiografia.",
      "Caso integra inquérito no STF (sob relatoria de André Mendonça) para investigar a origem e rota dos recursos por suspeitas de lavagem de dinheiro e evasão de divisas."
    ],
    fullContext: "Documentos da Polícia Federal anexados a inquérito no Supremo Tribunal Federal revelaram diálogos e áudios interceptados em que o senador Flávio Bolsonaro pressionava o empresário Daniel Vorcaro, dono do Banco Master, a regularizar transferências financeiras para a produção do longa 'Dark Horse'. O senador cobrava agilidade nos pagamentos para evitar quebras contratuais com profissionais internacionais da produção cinematográfica. O inquérito busca esclarecer se houve uso de empresas de fachada ou repasses irregulares para fins de lavagem de dinheiro e evasão de divisas no financiamento do projeto.",
    quote: "Áudios interceptados pela PF registraram cobranças diretas do senador por repasses milionários a banqueiro."
  },
  {
    id: "caso-rachadinha-alerj",
    title: "Caso das 'rachadinhas' na Alerj: denúncia do MP-RJ por desvio de salários e anulação por vícios processuais",
    category: "Investigações",
    date: "18/10/2026",
    sourceName: "Valor Econômico",
    sourceUrl: "https://valor.globo.com/politica/eleicoes-2026/noticia/2026/10/18/flavio-bolsonaro-relembre-o-processo-da-rachadinha.ghtml",
    bullets: [
      "Investigação iniciada em 2018 após relatório do Coaf apontar movimentações financeiras atípicas de R$ 1,2 milhão na conta do ex-assessor Fabrício Queiroz.",
      "O Ministério Público do RJ denunciou formalmente Flávio em 2020 por organização criminosa, peculato (desvio de dinheiro público) e lavagem de dinheiro.",
      "A apuração indicou esquema de devolução sistemática de parte dos salários de assessores comissionados de seu gabinete entre 2007 e 2018.",
      "O processo não resultou em condenação criminal porque instâncias superiores (STJ e STF) anularam provas e quebras de sigilo por falhas procedimentais e de foro, levando o TJRJ a rejeitar a denúncia sem julgamento de mérito."
    ],
    fullContext: "Retrospectiva do Valor Econômico detalha o processo criminal das 'rachadinhas' na Assembleia Legislativa do Rio (Alerj). O caso teve início a partir de relatório do Coaf que identificou depósitos fracionados e saques de valores atípicos ligados a Fabrício Queiroz. O Ministério Público denunciou o parlamentar acusando-o de comandar um esquema de funcionários-fantasmas e repasse de salários em espécie. Em 2021 e 2022, o STJ e o STF acolheram recursos da defesa e anularam as principais provas (incluindo o compartilhamento de relatórios do Coaf e quebras de sigilo bancário) por vício formal de foro de competência. Em razão da anulação probatória, o TJRJ rejeitou a denúncia, sem que houvesse análise de mérito sobre os fatos apontados.",
    quote: "Processo apurou desvio de salários de assessores na Alerj, mas denúncia foi rejeitada após anulação de provas nos tribunais superiores."
  },
  {
    id: "bolsa-farelo-posts-apagados",
    title: "Apagou posts em que chamava o Bolsa Família de 'bolsa-farelo'",
    category: "Programas Sociais",
    date: "20/10/2026",
    sourceName: "Extra / O Globo",
    sourceUrl: "https://extra.globo.com/economia/noticia/2026/10/flavio-bolsonaro-apaga-posts-em-que-chamava-bolsa-familia-de-bolsa-farelo.ghtml",
    bullets: [
      "Excluiu de seu perfil no X (antigo Twitter) uma série de publicações feitas quando exercia o mandato de deputado estadual no Rio de Janeiro.",
      "Nas postagens, utilizava reiteradamente o termo pejorativo 'bolsa-farelo' para desqualificar o Bolsa Família e programas estaduais de assistência.",
      "Criticava beneficiários e afirmava que a transferência de renda promovia 'dependência' e compra de votos.",
      "O apagamento das publicações foi identificado por veículos de imprensa após monitoramento de acervos digitais arquivados antes do período eleitoral."
    ],
    fullContext: "Levantamento jornalístico revelou que o senador Flávio Bolsonaro deletou postagens históricas em sua rede social X (antigo Twitter). Nas mensagens publicadas entre 2011 e 2014, o parlamentar chamava o Bolsa Família e programas sociais complementares (como o Renda Melhor, no RJ) de 'bolsa-farelo'. O senador acusava as políticas públicas de funcionarem como mecanismo clientelista de compra de votos. A exclusão dos conteúdos ocorreu às vésperas de discussões eleitorais sobre a continuidade de programas de transferência de renda.",
    quote: "Chamava benefícios de transferência de renda de 'bolsa-farelo' e acusava os programas de manter dependência eleitoral."
  }
];
