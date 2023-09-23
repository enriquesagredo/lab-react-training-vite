function Greetings ({lang, children}) {
    let msg = ""

    switch (lang) {
        case 'de':
            msg = `¡Hallo!, ${children}`;
        break;

        case 'en':
            msg = `¡Hello!, ${children}`;
        break;

        case 'es': 
            msg = `¡hola!, ${children}`;
        break;

        case 'fr':
            msg = `¡Bonjour!, ${children}`;
        break;
}

    return (
        <div>
        <p>{msg}</p>
        </div>
    );
}

export default Greetings