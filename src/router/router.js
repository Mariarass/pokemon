import {createRouter, createWebHistory} from "vue-router";
import ItemPokemonPage from "@/features/item-pokemon-page/ItemPokemonPage";
import AllPokemonPage from "@/features/all-pokemon-page/AllPokemonPage";
import TypePage from "@/features/type-page/TypePage";
import SearchPage from "@/features/search-page/SearchPage";
import MyPokemonPage from "@/features/my-pokemon-page/MyPokemonPage";

const routes = [
    {
        path: "/",
        component: AllPokemonPage,
    },

    {
        path: "/pokemon/:id",
        name: "ItemPokemonPage",
        component: ItemPokemonPage,
    },

    {
        path: "/type/:id",
        name: "Type",
        component: TypePage,
    },
    {
        path: "/search/:letter",
        name: "Search",
        component: SearchPage,
    },
    {
        path: "/mypokemon",
        name: "MyPokemon",
        component: MyPokemonPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;