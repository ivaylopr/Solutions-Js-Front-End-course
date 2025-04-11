function songsList(input) {
    class Song {
        constructor(type, name, time) {
            this.type = type,
                this.name = name,
                this.time = time
        }
    }
    //const data = input.split('');
    const typeForPrint = input[input.length - 1];
    const numberOfSongs = input[0];
    let list = [];
    for (let i = 1; i < input.length - 1; i++) {
        const [type, name, time] = input[i].split('_');
        const formatedTime = Number.parseFloat(time.replace(':', ','));
        const currentSong = new Song(type, name, formatedTime);
        list.push(currentSong);
    }
    for (const song of list) {
        if (typeForPrint === 'all') {
            console.log(song.name);
        } else if (typeForPrint===song.type) {
            console.log(song.name);
        }
    }
}

songsList([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
