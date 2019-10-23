const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: "I Am You",
        artist: 'Kim Taylor',
        url: 'http://music.163.com/song/media/outer/url?id=1306496078.mp3',
        cover: 'http://p2.music.126.net/cCw5Kr5C52bYbV-AOp6IUA==/109951163073357482.jpg?param=130y130',
      },
	  {
        name: "A小调圆舞曲<遗作>",
        artist: 'Zelimir Panic',
        url: 'http://music.163.com/song/media/outer/url?id=1295212133.mp3',
        cover: 'http://p1.music.126.net/ye4B9wuELiAymIj5RM7FBQ==/109951163416776067.jpg?param=130y130',
      },
      {
        name: '往后余生',
        artist: '马良',
        url: 'http://music.163.com/song/media/outer/url?id=557584888.mp3',
        cover: 'http://p2.music.126.net/VY-LfiQZZNjtDBHGmEu85A==/109951163300149472.jpg?param=130y130',
      },
      {
        name: '风筝误',
        artist: '刘珂矣',
        url: 'http://music.163.com/song/media/outer/url?id=32785674.mp3',
        cover: 'http://p1.music.126.net/SKujq5vqqv4KYOVFk7SiRA==/3407386538630284.jpg?param=130y130',
      }
    ]
});