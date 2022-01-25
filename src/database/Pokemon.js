const axios = require('axios');

module.exports = {
    async findByName(name){
        const { data:Pokemon } = await axios.get('http://pokeapi.co/api/v2/pokemon/${name}');
        return Pokemon;
    }
}