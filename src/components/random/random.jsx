function Random (num) {
    const numRandom = Math.floor(Math.random() * (num.max - num.min + 1))

    return (
        <div>
           <p>Numero aleatorio: {numRandom}</p> 
        </div>
    )
}

export default Random