type Form = 'inf' | 'ps' | 'pp'

type Verb = {
  verbName: string
  form: Form
}

const VERBS: Verb[] = [
  {
    verbName: "be",
    form: "inf"
  },
  {
    verbName: "beat",
    form: "inf"
  },
  {
    verbName: "become",
    form: "inf"
  },
  {
    verbName: "begin",
    form: "inf"
  },
  {
    verbName: "bite",
    form: "inf"
  },
  {
    verbName: "break",
    form: "inf"
  },
  {
    verbName: "bring",
    form: "inf"
  },
  {
    verbName: "build",
    form: "inf"
  },
  {
    verbName: "buy",
    form: "inf"
  },
  {
    verbName: "can",
    form: "inf"
  },
  {
    verbName: "catch",
    form: "inf"
  },
  {
    verbName: "choose",
    form: "inf"
  },
  {
    verbName: "come",
    form: "inf"
  },
  {
    verbName: "costcut",
    form: "inf"
  },
  {
    verbName: "do",
    form: "inf"
  },
  {
    verbName: "draw",
    form: "inf"
  },
  {
    verbName: "dream",
    form: "inf"
  },
  {
    verbName: "drink",
    form: "inf"
  },
  {
    verbName: "drive",
    form: "inf"
  },
  {
    verbName: "eat",
    form: "inf"
  },
  {
    verbName: "fall",
    form: "inf"
  },
  {
    verbName: "feel",
    form: "inf"
  },
  {
    verbName: "find",
    form: "inf"
  },
  {
    verbName: "fly",
    form: "inf"
  },
  {
    verbName: "forget",
    form: "inf"
  },
  {
    verbName: "get",
    form: "inf"
  },
  {
    verbName: "give",
    form: "inf"
  },
  {
    verbName: "go",
    form: "inf"
  },
  {
    verbName: "grow",
    form: "inf"
  },
  {
    verbName: "hang",
    form: "inf"
  },
  {
    verbName: "have",
    form: "inf"
  },
  {
    verbName: "hear",
    form: "inf"
  },
  {
    verbName: "hit",
    form: "inf"
  },
  {
    verbName: "hurt",
    form: "inf"
  },
  {
    verbName: "keep",
    form: "inf"
  },
  {
    verbName: "know",
    form: "inf"
  },
  {
    verbName: "learn",
    form: "inf"
  },
  {
    verbName: "leave",
    form: "inf"
  },
  {
    verbName: "lend",
    form: "inf"
  },
  {
    verbName: "let",
    form: "inf"
  },
  {
    verbName: "lie",
    form: "inf"
  },
  {
    verbName: "lose",
    form: "inf"
  },
  {
    verbName: "make",
    form: "inf"
  },
  {
    verbName: "mean",
    form: "inf"
  },
  {
    verbName: "meet",
    form: "inf"
  },
  {
    verbName: "pay",
    form: "inf"
  },
  {
    verbName: "put",
    form: "inf"
  },
  {
    verbName: "read",
    form: "inf"
  },
  {
    verbName: "ride",
    form: "inf"
  },
  {
    verbName: "ring",
    form: "inf"
  },
  {
    verbName: "run",
    form: "inf"
  },
  {
    verbName: "say",
    form: "inf"
  },
  {
    verbName: "see",
    form: "inf"
  },
  {
    verbName: "sell",
    form: "inf"
  },
  {
    verbName: "send",
    form: "inf"
  },
  {
    verbName: "set",
    form: "inf"
  },
  {
    verbName: "shine",
    form: "inf"
  },
  {
    verbName: "shut",
    form: "inf"
  },
  {
    verbName: "sing",
    form: "inf"
  },
  {
    verbName: "sit",
    form: "inf"
  },
  {
    verbName: "sleep",
    form: "inf"
  },
  {
    verbName: "smell",
    form: "inf"
  },
  {
    verbName: "speak",
    form: "inf"
  },
  {
    verbName: "spend",
    form: "inf"
  },
  {
    verbName: "stand",
    form: "inf"
  },
  {
    verbName: "steal",
    form: "inf"
  },
  {
    verbName: "swim",
    form: "inf"
  },
  {
    verbName: "take",
    form: "inf"
  },
  {
    verbName: "teach",
    form: "inf"
  },
  {
    verbName: "tell",
    form: "inf"
  },
  {
    verbName: "think",
    form: "inf"
  },
  {
    verbName: "throw",
    form: "inf"
  },
  {
    verbName: "understand",
    form: "inf"
  },
  {
    verbName: "wake",
    form: "inf"
  },
  {
    verbName: "wear",
    form: "inf"
  },
  {
    verbName: "win",
    form: "inf"
  },
  {
    verbName: "write",
    form: "inf"
  },
  {
    verbName: "was",
    form: "ps"
  },
  {
    verbName: "were",
    form: "ps"
  },
  {
    verbName: "beat",
    form: "ps"
  },
  {
    verbName: "became",
    form: "ps"
  },
  {
    verbName: "began",
    form: "ps"
  },
  {
    verbName: "bit",
    form: "ps"
  },
  {
    verbName: "broke",
    form: "ps"
  },
  {
    verbName: "brought",
    form: "ps"
  },
  {
    verbName: "built",
    form: "ps"
  },
  {
    verbName: "bought",
    form: "ps"
  },
  {
    verbName: "could",
    form: "ps"
  },
  {
    verbName: "caught",
    form: "ps"
  },
  {
    verbName: "chose",
    form: "ps"
  },
  {
    verbName: "cost",
    form: "ps"
  },
  {
    verbName: "cut",
    form: "ps"
  },
  {
    verbName: "did",
    form: "ps"
  },
  {
    verbName: "drew",
    form: "ps"
  },
  {
    verbName: "dreamt",
    form: "ps"
  },
  {
    verbName: "drank",
    form: "ps"
  },
  {
    verbName: "drove",
    form: "ps"
  },
  {
    verbName: "ate",
    form: "ps"
  },
  {
    verbName: "fell",
    form: "ps"
  },
  {
    verbName: "felt",
    form: "ps"
  },
  {
    verbName: "found",
    form: "ps"
  },
  {
    verbName: "flew",
    form: "ps"
  },
  {
    verbName: "forgot",
    form: "ps"
  },
  {
    verbName: "got",
    form: "ps"
  },
  {
    verbName: "gave",
    form: "ps"
  },
  {
    verbName: "went",
    form: "ps"
  },
  {
    verbName: "grew",
    form: "ps"
  },
  {
    verbName: "hung",
    form: "ps"
  },
  {
    verbName: "had",
    form: "ps"
  },
  {
    verbName: "heard",
    form: "ps"
  },
  {
    verbName: "hit",
    form: "ps"
  },
  {
    verbName: "hurt",
    form: "ps"
  },
  {
    verbName: "kept",
    form: "ps"
  },
  {
    verbName: "knew",
    form: "ps"
  },
  {
    verbName: "learnt",
    form: "ps"
  },
  {
    verbName: "left",
    form: "ps"
  },
  {
    verbName: "lent",
    form: "ps"
  },
  {
    verbName: "let",
    form: "ps"
  },
  {
    verbName: "lay",
    form: "ps"
  },
  {
    verbName: "lost",
    form: "ps"
  },
  {
    verbName: "made",
    form: "ps"
  },
  {
    verbName: "meant",
    form: "ps"
  },
  {
    verbName: "met",
    form: "ps"
  },
  {
    verbName: "paid",
    form: "ps"
  },
  {
    verbName: "put",
    form: "ps"
  },
  {
    verbName: "read",
    form: "ps"
  },
  {
    verbName: "rode",
    form: "ps"
  },
  {
    verbName: "rang",
    form: "ps"
  },
  {
    verbName: "ran",
    form: "ps"
  },
  {
    verbName: "said",
    form: "ps"
  },
  {
    verbName: "saw",
    form: "ps"
  },
  {
    verbName: "sold",
    form: "ps"
  },
  {
    verbName: "sent",
    form: "ps"
  },
  {
    verbName: "set",
    form: "ps"
  },
  {
    verbName: "shone",
    form: "ps"
  },
  {
    verbName: "shut",
    form: "ps"
  },
  {
    verbName: "sang",
    form: "ps"
  },
  {
    verbName: "sat",
    form: "ps"
  },
  {
    verbName: "slept",
    form: "ps"
  },
  {
    verbName: "smelt",
    form: "ps"
  },
  {
    verbName: "spoke",
    form: "ps"
  },
  {
    verbName: "spent",
    form: "ps"
  },
  {
    verbName: "stood",
    form: "ps"
  },
  {
    verbName: "wrote",
    form: "ps"
  },
  {
    verbName: "stole",
    form: "ps"
  },
  {
    verbName: "swam",
    form: "ps"
  },
  {
    verbName: "took",
    form: "ps"
  },
  {
    verbName: "taught",
    form: "ps"
  },
  {
    verbName: "told",
    form: "ps"
  },
  {
    verbName: "thought",
    form: "ps"
  },
  {
    verbName: "threw",
    form: "ps"
  },
  {
    verbName: "understood",
    form: "ps"
  },
  {
    verbName: "woke",
    form: "ps"
  },
  {
    verbName: "wore",
    form: "ps"
  },
  {
    verbName: "won",
    form: "ps"
  },
  {
    verbName: "been",
    form: "pp"
  },
  {
    verbName: "beaten",
    form: "pp"
  },
  {
    verbName: "become",
    form: "pp"
  },
  {
    verbName: "begun",
    form: "pp"
  },
  {
    verbName: "bitten",
    form: "pp"
  },
  {
    verbName: "broken",
    form: "pp"
  },
  {
    verbName: "brought",
    form: "pp"
  },
  {
    verbName: "built",
    form: "pp"
  },
  {
    verbName: "bought",
    form: "pp"
  },
  {
    verbName: "caught",
    form: "pp"
  },
  {
    verbName: "chosen",
    form: "pp"
  },
  {
    verbName: "come",
    form: "pp"
  },
  {
    verbName: "cost",
    form: "pp"
  },
  {
    verbName: "cut",
    form: "pp"
  },
  {
    verbName: "done",
    form: "pp"
  },
  {
    verbName: "drawn",
    form: "pp"
  },
  {
    verbName: "dreamt",
    form: "pp"
  },
  {
    verbName: "drunk",
    form: "pp"
  },
  {
    verbName: "driven",
    form: "pp"
  },
  {
    verbName: "eaten",
    form: "pp"
  },
  {
    verbName: "fallen",
    form: "pp"
  },
  {
    verbName: "felt",
    form: "pp"
  },
  {
    verbName: "found",
    form: "pp"
  },
  {
    verbName: "flown",
    form: "pp"
  },
  {
    verbName: "forgotten",
    form: "pp"
  },
  {
    verbName: "got",
    form: "pp"
  },
  {
    verbName: "given",
    form: "pp"
  },
  {
    verbName: "gone",
    form: "pp"
  },
  {
    verbName: "grown",
    form: "pp"
  },
  {
    verbName: "hung",
    form: "pp"
  },
  {
    verbName: "had",
    form: "pp"
  },
  {
    verbName: "heard",
    form: "pp"
  },
  {
    verbName: "hit",
    form: "pp"
  },
  {
    verbName: "hurt",
    form: "pp"
  },
  {
    verbName: "kept",
    form: "pp"
  },
  {
    verbName: "known",
    form: "pp"
  },
  {
    verbName: "learnt",
    form: "pp"
  },
  {
    verbName: "left",
    form: "pp"
  },
  {
    verbName: "lent",
    form: "pp"
  },
  {
    verbName: "let",
    form: "pp"
  },
  {
    verbName: "lain",
    form: "pp"
  },
  {
    verbName: "lost",
    form: "pp"
  },
  {
    verbName: "made",
    form: "pp"
  },
  {
    verbName: "meant",
    form: "pp"
  },
  {
    verbName: "met",
    form: "pp"
  },
  {
    verbName: "paid",
    form: "pp"
  },
  {
    verbName: "put",
    form: "pp"
  },
  {
    verbName: "read",
    form: "pp"
  },
  {
    verbName: "ridden",
    form: "pp"
  },
  {
    verbName: "rung",
    form: "pp"
  },
  {
    verbName: "run",
    form: "pp"
  },
  {
    verbName: "said",
    form: "pp"
  },
  {
    verbName: "seen",
    form: "pp"
  },
  {
    verbName: "sold",
    form: "pp"
  },
  {
    verbName: "sent",
    form: "pp"
  },
  {
    verbName: "set",
    form: "pp"
  },
  {
    verbName: "shone",
    form: "pp"
  },
  {
    verbName: "shut",
    form: "pp"
  },
  {
    verbName: "sung",
    form: "pp"
  },
  {
    verbName: "sat",
    form: "pp"
  },
  {
    verbName: "slept",
    form: "pp"
  },
  {
    verbName: "smelt",
    form: "pp"
  },
  {
    verbName: "spoken",
    form: "pp"
  },
  {
    verbName: "spent",
    form: "pp"
  },
  {
    verbName: "stood",
    form: "pp"
  },
  {
    verbName: "stolen",
    form: "pp"
  },
  {
    verbName: "swum",
    form: "pp"
  },
  {
    verbName: "taken",
    form: "pp"
  },
  {
    verbName: "taught",
    form: "pp"
  },
  {
    verbName: "told",
    form: "pp"
  },
  {
    verbName: "thought",
    form: "pp"
  },
  {
    verbName: "thrown",
    form: "pp"
  },
  {
    verbName: "understood",
    form: "pp"
  },
  {
    verbName: "woken",
    form: "pp"
  },
  {
    verbName: "worn",
    form: "pp"
  },
  {
    verbName: "won",
    form: "pp"
  },
  {
    verbName: "written",
    form: "pp"
  }
]

export function getFormName(form: Form): string {
  switch (form) {
    case 'inf':
      return 'Infinitive'
    case 'pp':
      return 'Past participle'
    case 'ps':
      return 'Past simple'
  }
}

export function getAllCorrectVerbsChosen(): Verb[] {
  const correctVerbsChosen: Verb[] = JSON.parse(localStorage.getItem('@correctVerbsChosen') || '[]')
  return correctVerbsChosen
}

export function clearCorrectVerbsChosen() {
  localStorage.setItem('@correctVerbsChosen', '[]')
}

export function addCorrectVerbChosen(verb: Verb) {
  const correctVerbsChosen: Verb[] = getAllCorrectVerbsChosen()
  correctVerbsChosen.push(verb)
  localStorage.setItem('@correctVerbsChosen', JSON.stringify(correctVerbsChosen))
}

export function getAllVerbs(): Verb[] {
  return VERBS
}

export function getMoreVerbs(): Verb[] {
  const correctVerbsChosen: Verb[] = getAllCorrectVerbsChosen()
  const verbNames = correctVerbsChosen.map((vc) => vc.verbName)
  const allVerbs = getAllVerbs().filter((v) => !verbNames.includes(v.verbName))
  if (allVerbs.length <= 20) {
    clearCorrectVerbsChosen()
    return allVerbs
  }
  const shuffledVerbs = shuffleVerbs(allVerbs)
  const verbs = shuffledVerbs.slice(0, 20)
  return verbs
}

function shuffleVerbs(arr: any): Verb[] {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
