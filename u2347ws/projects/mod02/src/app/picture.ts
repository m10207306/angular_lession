export class Picture {
    constructor(
        public PictureID: number,
        public Url: string,
        public Subject: string,
        public Author: string,
    ) {}
}

export const picture = new Picture(
    1,
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Shiba_inu_taiki.jpg/220px-Shiba_inu_taiki.jpg",
    "Shiba Inu",
    "Wikipedia",
)
