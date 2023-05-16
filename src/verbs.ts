type Form = 'inf' | 'ps' | 'pp'

type Verb = {
  verbName: string
  form: Form
}

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

export const VERBS: Verb[] = [
  {
    verbName: 'be',
    form: 'inf',
  },
  {
    verbName: 'was',
    form: 'ps',
  },
  {
    verbName: 'were',
    form: 'ps',
  },
  {
    verbName: 'been',
    form: 'pp',
  },
  {
    verbName: 'beat',
    form: 'inf',
  },
  {
    verbName: 'beat',
    form: 'ps',
  },
  {
    verbName: 'beaten',
    form: 'pp',
  },
  {
    verbName: 'become',
    form: 'inf',
  },
  {
    verbName: 'became',
    form: 'ps',
  },
  {
    verbName: 'become',
    form: 'pp',
  },
]