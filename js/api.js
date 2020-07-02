export class API {

    constructor(artist, song) {
        this.artist = artist;
        this.song = song;
        this.fetchUrl = `https://api.lyrics.ovh/v1/${this.artist}/${this.song}`;
    }

    async fechRecord() {

        const response = await fetch(this.fetchUrl);
        const responseData = await response.json();
        return { responseData };
    }
}