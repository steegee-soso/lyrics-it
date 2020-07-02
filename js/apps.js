import { API } from './api.js';
import * as UI from "./ui.js";

const uiClass = new UI.UI();

let msg = "";
let result = "";

document.addEventListener('DOMContentLoaded', function(e) {

    UI.searcForms.addEventListener('submit', (e) => {

        e.preventDefault();

        const artistName = UI.inputArtist.value.trim();
        const composeSongs = UI.inputSong.value.trim();

        const validate = isValid(artistName, composeSongs);

        if (!validate) {

            msg = "Oops, all fields are mandatory";
            uiClass.diplayMessage(msg);

        } else {

            //add a loading timer to the record

            const lyric = new API(artistName, composeSongs);
            lyric.fechRecord().then(function(data) {

                result = data.responseData.lyrics;

                if (result !== "") {

                    uiClass.renderSearchReesult(result);

                } else {
                    msg = "Oops, empty fetch result";
                    uiClass.diplayMessage(msg);
                }

            }).catch(function(err) {
                console.log("Oops, error coocured fetching records from the DB " + error);
            });
        }
    });
});

function isValid(firstOne, fieldTwo) {

    let flag = true;

    if (firstOne === "" || fieldTwo === "") {
        flag = false;
    }
    return flag;
}