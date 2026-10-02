import Elem from './Elem'

interface JatekTerProps {
    lista: string[];
    kattintas: (index: number) => void;
}

export default function JatekTer({ lista, kattintas }: JatekTerProps) {
    return (
        <div className="jatekTer">
            {lista.map((elem, index) => (
                <Elem
                    key={index}
                    adat={elem}
                    index={index}
                    kattintas={kattintas}
                />
            ))}
        </div>
    )
}