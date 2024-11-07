export const getHome = (req, res) => {
    res.status(200).json(
        {message: 'Hola Mundo',
        status: 200
        });
}

export const getAbout = (req, res) => {
    res.status(200).json(
        {message: 'Acerca de',
        status: 200
        });
}