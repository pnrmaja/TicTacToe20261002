import { useState } from 'react'
import './App.css'
import JatekTer from './component/JatekTer'
import { KEZDOLISTA } from './Adatok'

function App() {

    const [lista, setLista] = useState(KEZDOLISTA)
    const [lepes, setLepes] = useState(0)

    const FEJLEC = "Tic-Tac-Toe"
    const LABLEC = "Ponauer Maja"

    function kattintas(index: number) {
        const ujLista = [...lista]

        ujLista[index] = lepes % 2 === 0 ? 'X' : 'O'

        setLista(ujLista)
        setLepes(lepes + 1)
    }

    return (
        <>
            <header>
                <h1>{FEJLEC}</h1>
            </header>

            <article>
                <JatekTer
                    lista={lista}
                    kattintas={kattintas}
                />
            </article>

            <article>
                <div>Lépések száma: {lepes}</div>
            </article>

            <footer>
                {LABLEC}
            </footer>
        </>
    )
}

export default App