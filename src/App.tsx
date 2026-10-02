import { useState } from 'react'
import './App.css'
import JatekTer from './component/JatekTer'
import Info from './component/Info'
import { KEZDOLISTA } from './Adatok'

function App() {

    const [lista, setLista] = useState(KEZDOLISTA)
    const [lepes, setLepes] = useState(0)

    const FEJLEC = "Tic-Tac-Toe"
    const LABLEC = "Ponauer Maja"

    function kattintas(index: number) {
        if (lista[index] !== " ") {
            return
        }
        if (lepes >= 9) {
            return
        }
        if (gyoztesKereses(lista) !== "") {
            return
        }
        const ujLista = [...lista]
        ujLista[index] = lepes % 2 === 0 ? 'X' : 'O'

        setLista(ujLista)
        setLepes(lepes + 1)
    }

    function gyoztesKereses(lista: string[]) {

        const NYEROSOROK = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]

        for (const sor of NYEROSOROK) {
            const [a, b, c] = sor
            if (
                lista[a] !== " " &&
                lista[a] === lista[b] &&
                lista[a] === lista[c]
            ) {
                return lista[a]
            }
        }

        return ""
    }

    const gyoztes = gyoztesKereses(lista)

    return (
        <>
            <header>
                <h1>{FEJLEC}</h1>
            </header>

            <article>

                <Info lepes={lepes} />

                <JatekTer
                    lista={lista}
                    kattintas={kattintas}
                />

                <div>
                    {gyoztes !== ""
                        ? `${gyoztes} nyert!`
                        : lepes === 9
                            ? "Döntetlen!"
                            : ""
                    }
                </div>

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