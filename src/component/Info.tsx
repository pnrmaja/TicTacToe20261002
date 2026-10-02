interface InfoProps{
    lepes : number
}

function Info({lepes}: InfoProps){
    const JATEKOS =lepes %2 === 0 ? "X" : "O"
    return(
        <div className="info">
            Következő játékos {JATEKOS}
        </div>
    )
}

export default Info