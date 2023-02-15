const express = require('express')
const filmes = require('./data/film.json')
const app = express()


app.set('view engine', 'ejs')
app.set('views', './views');

app.get('/player/:film', (req, res) => {
    let params = req.params.film

    let filter_url = filmes.filter((film) => film.name === params)

    filter_url.forEach(el => {
        res.render('player', {
            params : params,
            url_film : el.url_player
        })  
    })

})

app.get('/film', (req, res) => {
    let name = req.query.name
    res.json(
        filmes.filter((title) => title.name === name)
    )
})

app.get('/categoria', (req, res) => {
    let genero = req.query.genero
    res.json(
        filmes.filter((title) => title.categoria === genero)
    )
})

app.get('/', (req, res) => {
    res.send('Ok')
})

app.listen(process.env.PORT || 5000)