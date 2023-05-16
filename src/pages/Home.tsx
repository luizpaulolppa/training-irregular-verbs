import { GrClose } from 'react-icons/gr'

import './Home.css'
import { useState } from 'react'
import { VERBS, getFormName } from '../verbs'

type FormOption= {
  name: string
  selected: boolean
  form: 'inf' | 'ps' | 'pp'
}

function Home() {
  const [feedback, setFeedback] = useState<'initial' | 'success' | 'error'>('initial')
  const [verbs, setVerbs] = useState(VERBS)
  const [contOfCompleted, setContOfCompleted] = useState(0)
  const [formsOption, setFormsOption] = useState<FormOption[]>([
    { name: 'Infinitive', form: 'inf', selected: false },
    { name: 'Past simple', form: 'ps', selected: false },
    { name: 'Past participle', form: 'pp', selected: false }
  ])

  const [verb] = verbs

  function handleSelectOption(indexSelected: number) {
    if (feedback !== 'initial') return
    const newFormsOption = formsOption.map((formOpt, index) => ({ ...formOpt, selected: index === indexSelected }))
    setFormsOption(newFormsOption)
  }

  function handleValidate() {
    const formSelected = formsOption.find((form) => form.selected)
    if (!formSelected) return

    const verbsFound = VERBS.filter(v => v.verbName === verb.verbName)
    const forms = verbsFound.map(v => v.form)
    if (forms.includes(formSelected.form)) {
      setFeedback('success')
    } else {
      setFeedback('error')
    }
  }

  function handleContinue() {
    const newFormsOption = formsOption.map((formOpt) => ({ ...formOpt, selected: false }))
    setFormsOption(newFormsOption)
    setFeedback('initial')
    setContOfCompleted(contOfCompleted+1)
    let newVerbs = [...verbs].reverse()
    newVerbs.pop()
    newVerbs = newVerbs.reverse()

    if (!newVerbs.length) {
      setVerbs(VERBS)
      setContOfCompleted(0)
    } else {
      setVerbs(newVerbs)
    }
  }

  return (
    <div className="page-container">
      <div className="container">
        <div className="header">
          <div className="close-container">
            <p>{contOfCompleted} of {VERBS.length}</p>
            <GrClose size={30} color="#bababa" />
          </div>
          <h1>Choose the tense of "{verb.verbName}":</h1>
        </div>
        <div className="body">
          <div className="options">
            {formsOption.map((form, index) => (
              <div
                key={index}
                onClick={() => handleSelectOption(index)}
                className={`option ${form.selected ? 'active' : ''}`}
              >
                {form.name}
              </div>
            ))}
          </div>
        </div>
        {feedback === 'initial' && (
          <div className="footer">
            <button onClick={handleValidate}>Check</button>
          </div>
        )}
        {feedback === 'success' && (
          <div className="footer correct">
            <h3>Goob!</h3>
            <button onClick={handleContinue}>Continue</button>
          </div>
        )}
        {feedback === 'error' && (
          <div className="footer error">
            <h3>Right answer:</h3>
            <p>{getFormName(verb.form)}</p>
            <button onClick={handleContinue}>Continue</button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
