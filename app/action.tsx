"use server"

//Fetching anime data from an external API and render it using a custom AnimeCard component.
import AnimeCard, {AnimeProp} from "@/components/AnimeCard";

export const fechAnime = async (page:number) => {
    const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`);

    const data = await response.json();

    // Maps over an array of anime data and returns an AnimeCard component for each item and return it.
    return data.map((item: AnimeProp, index: number) => (
        <AnimeCard key={item.id} anime={item} index={index} />
));
};
