export interface Ninja {
    id?:             string;
    ninja:           string;
    anime:           Anime;
    village:         string;
    main_technique:  string;
    chakra_affinity: string;
    alt_img?:        string; // url o path de la imagen
}

export enum Anime {
    NarutoShippuden = "Naruto Shippuden",
}