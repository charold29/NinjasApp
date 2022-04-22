export interface Ninja {
    id?:             string;
    name:            string;
    anime:           Anime;
    village:         string;
    techniques:      string[];
    chakra_affinity: string[];
    alt_img?:        string; // url o path de la imagen
}

export enum Anime {
    NarutoShippuden = "Naruto Shippuden",
}
