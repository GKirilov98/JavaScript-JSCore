function musicPlay(arr) {
    let nameTrack = arr[0];
    let artist = arr[1];
    let timePlay = arr[2];

    console.log(`Now Playing: ${artist} - ${nameTrack} [${timePlay}]`)
}

musicPlay(['Number One', 'Nelly', '4:09']);