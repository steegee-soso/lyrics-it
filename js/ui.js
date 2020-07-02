export const searcForms = document.querySelector(".search-form"),
    lyricsResult = document.querySelector(".lyric_result"),
    inputArtist = document.querySelector(".artist"),
    resultDiv = document.querySelector(".lyric_result"),
    inputSong = document.querySelector('.song'),
    infor = document.querySelector(".display-info");

export class UI {

    diplayMessage(message) {
        const contentDiv = document.createElement("div");
        contentDiv.innerHTML = `${message}`;
        contentDiv.classList.add('error');
        infor.appendChild(contentDiv);

        setTimeout(function(e) {
            document.querySelector(".error").remove();
        }, 3000);
    }

    renderSearchReesult(items) {
        const container = document.createElement("div");
        container.innerHTML = `${items}`;
        resultDiv.appendChild(container);
    }
}