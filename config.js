window.APP_CONFIG={
  "repo": "lol-role-mastery",
  "title": "LoL Role Mastery",
  "fields": [
    {
      "key": "role",
      "label": "Função",
      "kind": "select",
      "options": [
        "Topo",
        "Selva",
        "Meio",
        "Atirador",
        "Suporte"
      ],
      "required": true
    },
    {
      "key": "skill",
      "label": "Habilidade a desenvolver",
      "kind": "text",
      "max": 75,
      "required": true,
      "placeholder": "Ex.: controle da wave"
    },
    {
      "key": "difficulty",
      "label": "Dificuldade percebida",
      "kind": "select",
      "options": [
        "Iniciante",
        "Intermediário",
        "Avançado"
      ],
      "required": true
    },
    {
      "key": "exercise",
      "label": "Exercício concreto",
      "kind": "textarea",
      "max": 400,
      "required": true,
      "placeholder": "O que você vai treinar nesta sessão?"
    },
    {
      "key": "date",
      "label": "Data do treino",
      "kind": "date",
      "required": true
    },
    {
      "key": "evidence",
      "label": "Evidência ou observação",
      "kind": "textarea",
      "max": 450,
      "required": true,
      "placeholder": "Como foi a prática?"
    },
    {
      "key": "rating",
      "label": "Autoavaliação (1–5)",
      "kind": "number",
      "min": 1,
      "max": 5,
      "required": true
    },
    {
      "key": "status",
      "label": "Etapa da prática",
      "kind": "select",
      "options": [
        "Planejado",
        "Em prática",
        "Revisado"
      ],
      "required": true
    }
  ],
  "titleField": "skill",
  "groupBy": "role",
  "states": [
    "Planejado",
    "Em prática",
    "Revisado"
  ],
  "demo": [
    {
      "role": "Suporte",
      "skill": "Visão antes de objetivos",
      "difficulty": "Intermediário",
      "exercise": "Anotar a posição antes de duas lutas por objetivo.",
      "date": "2026-10-27",
      "evidence": "Exemplo fictício: registrei decisões de posicionamento após a partida.",
      "rating": 3,
      "status": "Em prática"
    },
    {
      "role": "Selva",
      "skill": "Planejamento de rota",
      "difficulty": "Iniciante",
      "exercise": "Planejar o primeiro clear antes da partida.",
      "date": "2026-10-27",
      "evidence": "Exemplo fictício: pratiquei uma rota em treino.",
      "rating": 2,
      "status": "Revisado"
    }
  ]
};
