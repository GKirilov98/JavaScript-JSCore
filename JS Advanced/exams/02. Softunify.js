// class SoftUniFy {
//     constructor() {
//         this.allSongs = {};
//     }
//
//     downloadSong(artist, song, lyrics) {
//         if (!this.allSongs[artist]) {
//             this.allSongs[artist] = {rate: 0, votes: 0, songs: []}
//         }
//
//         this.allSongs[artist]['songs'].push(`${song} - ${lyrics}`);
//
//         return this;
//     }
//
//     playSong(song) {
//         let songArtists = Object.keys(this.allSongs).reduce((acc, cur) => {
//
//             let songs = this.allSongs[cur]['songs']
//                 .filter((songInfo) => songInfo
//                     .split(/ - /)[0] === song);
//
//             if(songs.length > 0){
//                 acc[cur] = songs;
//             }
//
//             return acc;
//         }, {});
//
//         let arr = Object.keys(songArtists);
//         let output = "";
//
//         if(arr.length > 0){
//
//             arr.forEach((artist) => {
//                 output += `${artist}:\n`;
//                 output += `${songArtists[artist].join('\n')}\n`;
//             });
//
//         } else {
//             output = `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`
//         }
//
//         return output;
//     }
//
//     get songsList() {
//         let songs = Object.values(this.allSongs)
//             .map((v) => v['songs'])
//             .reduce((acc, cur) => {
//                 return acc.concat(cur);
//             }, []);
//
//         let output;
//
//         if (songs.length > 0) {
//             output = songs.join('\n');
//         } else {
//             output = 'Your song list is empty';
//         }
//
//         return output;
//
//     }
//
//     rateArtist() {
//         let artistExist = this.allSongs[arguments[0]];
//         let output;
//
//         if (artistExist) {
//
//             if (arguments.length === 2) {
//                 artistExist['rate'] += +arguments[1];
//                 artistExist['votes'] += 1;
//             }
//
//             let currentRate = (+(artistExist['rate'] / artistExist['votes']).toFixed(2));
//             isNaN(currentRate) ? output = 0 : output = currentRate;
//
//         } else {
//             output = `The ${arguments[0]} is not on your artist list.`
//         }
//
//         return output;
//     }
// }
//
// // let     softUny = new SoftUniFy();
// // console.log(softUny.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...'));
//
// const assert = require("chai").assert;
//
// describe('SoftUniFy', function () {
//     let softUny;
//     beforeEach(function () {
//         softUny = new SoftUniFy();
//     });
//     it('should constrctor allsong be empty obj', function () {
//         assert.equal(Object.keys(softUny.allSongs).length, 0);
//     });
//     describe('DownSongs', function () {
//         it('dont have artist', function () {
//             let result = softUny.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//             assert.equal(JSON.stringify(result), '{"allSongs":{"Eminem":{"rate":0,"votes":0,"songs":["Phenomenal - IM PHENOMENAL..."]}}}') ;
//             let resul2 = softUny.downloadSong('Eminem', 'Phenomenal23', 'IM PHENOMENAL...123');
//             assert.equal(JSON.stringify(resul2), '{"allSongs":{"Eminem":{"rate":0,"votes":0,"songs":["Phenomenal - IM PHENOMENAL...","Phenomenal23 - IM PHENOMENAL...123"]}}}');
//         });
//         it('should un1', function () {
//             let un = softUny.downloadSong('50Cent');
//             assert.equal(JSON.stringify(un), '{"allSongs":{"50Cent":{"rate":0,"votes":0,"songs":["undefined - undefined"]}}}' );
//             let un1 = softUny.downloadSong('50Cent', 'Phenomenal');
//             assert.equal(JSON.stringify(un1), '{"allSongs":{"50Cent":{"rate":0,"votes":0,"songs":["undefined - undefined","Phenomenal - undefined"]}}}' );
//
//         });
//         it('should ', function () {
//             let un1 = softUny.downloadSong('50Cent', 'Phenomenal');
//             assert.equal(JSON.stringify(un1), '{"allSongs":{"50Cent":{"rate":0,"votes":0,"songs":["Phenomenal - undefined"]}}}' )
//         });
//     });
//     describe('playsong', function () {
//         it('should palyArtist return dont download', function () {
//             assert.equal(softUny.playSong("Eminem"),"You have not downloaded a Eminem song yet. Use SoftUniFy's function downloadSong() to change that!");
//         });
//         it('should playTheSong', function () {
//              softUny.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//              let result = softUny.playSong("Phenomenal");
//             assert.equal(result,"Eminem:\nPhenomenal - IM PHENOMENAL...\n")
//         });
//     });
//     describe('songLIst', function () {
//         it('should ', function () {
//             assert.equal(softUny.songsList, 'Your song list is empty');
//             let result = softUny.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//             assert.equal(softUny.songsList, 'Phenomenal - IM PHENOMENAL...');
//         });
//     });
//     describe('rateArtist', function () {
//         it('should no artist list', function () {
//             assert.equal(softUny.rateArtist(), "The undefined is not on your artist list.");
//             softUny.downloadSong('Eminem', 'Venom', 'Knock, Knock let the devil in...');
//             softUny.downloadSong('Eminem', 'Phenomenal', 'IM PHENOMENAL...');
//             softUny.downloadSong('Dub Fx', 'Light Me On Fire', 'You can call me a liar.. ');
//
//             assert.equal(softUny.rateArtist(), "The undefined is not on your artist list.");
//         });
//     });
// });