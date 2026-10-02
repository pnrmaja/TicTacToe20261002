interface ElemProps {
    adat: string;
    index: number;
    kattintas: (index: number) => void;
}

export default function Elem({ adat, index, kattintas }: ElemProps) {
    return (
        <div onClick={() => kattintas(index)}>
            {adat}
        </div>
    )
}