import axios from "axios";
import {getPokemon} from "@/utils/getPokemons";


export const cardModule = {
    state: () => ({
        pokemonData: [],
        currentPokemon: {},
        isLoading: false,
        totalCount: 0,
        currentType: '',
        myPokemon: 0,
        myPokemonData: []

    }),
    getters: {
        getPokemonData: (state) => state.cards.pokemonData,
        getCurrentPokemon: (state) => state.cards.currentPokemon,
        filteredPokemons: () => (letter) => {
            return {letter}
        }
        /*  state.pokemonData.filter((pokemon) => pokemon.name.toLowerCase().includes(letter.toLowerCase()))}*/

    }
    ,
    mutations: {

        setPokemonData(state, data) {
            state.pokemonData = data;
        },
        setLoading(state, loading) {
            state.isLoading = loading
        },
        setTotalCount(state, count) {
            state.totalCount = count
        },
        setCurrentPokemon(state, pokemon) {

            state.currentPokemon = pokemon
        },
        setCurrentType(state, type) {

            state.currentType = type
        },
        setMyPokemon(state, count) {
            state.myPokemon = count
        },
        setMyPokemonData(state, data) {
            state.myPokemonData = data
        }

    },
    actions: {

        async fetchPokemonData({commit}, {currentPage, limit}) {
            try {

                const offset = (currentPage - 1) * limit
                commit('setLoading', true)
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                const pokemonData = await getPokemon(res.data.results)
                commit('setTotalCount', res.data.count)
                commit('setPokemonData', pokemonData)


            } catch (e) {
                console.log(e)

            } finally {
                commit('setLoading', false)


            }
        },
        async fetchItemPokemon({commit}, id) {
            try {
                commit('setLoading', true)
                const pokemonDataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
                const result = pokemonDataResponse.data
                const name = result.name
                const height = result.height
                const weight = result.weight
                const types = result.types.map((type) => type.type)
                const img = result.sprites.other["official-artwork"].front_default
                const abilities = await Promise.all(result.abilities.map(async (el) => {
                    const ability = await axios.get(el.ability.url)
                    return ability.data
                }))
                commit('setCurrentPokemon', {name, img, abilities, height, weight, types, id})

            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }

        },
        async fetchTypePokemon({commit}, id) {
            commit('setLoading', true)
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/type/${id}`)
                const pokemonData = await getPokemon(res.data.pokemon)
                commit('setPokemonData', pokemonData)
                commit('setCurrentType', res.data.name)

            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        },
        changeMyPokemon({commit}) {
            let cards = JSON.parse(localStorage.getItem('pokemons')) || []
            commit('setMyPokemon', cards.length)
        },
        async getMyPokemon({commit}) {

            let cards = JSON.parse(localStorage.getItem('pokemons')) || []
            commit('setLoading', true)
            try {
                const pokemonData = await Promise.all(cards.map(async (pokemonId) => {
                   const pokemonDataResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
                    const result = pokemonDataResponse.data
                    const name = result.name
                    const image = result.sprites.other["official-artwork"].front_default
                    const types = result.types.map((type) => type.type)
                    const id = result.id
                    return {name,image,types,id}
                }))
                console.log(pokemonData)
                commit('setMyPokemonData', pokemonData)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }


        }

    },
    namespaced: true
}