const Pokemon =  require('../database/Pokemon')

module.exports = {
    initial(req,res){
        // Método que monta a tabela na view vazia
        res.render('index', { pokemon: null });
    },
    
    async show(req,res){
        const pokemonRaw = await Pokemon.findByName(req.params.name);
        // Trata os dados vindos da API e preenche a tabela na view
        const pokemon = {
            image: pokemonRaw.sprites.other['official-artwork'].front_default,
            nome: pokemonRaw.name,
            tipos: pokemonRaw.types,
        }

        res.render('index', { pokemon });
    }
}

