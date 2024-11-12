// const ap = new APlayer({
//     container: document.getElementById('aplayer'),
//     fixed: true,
//     autoplay: false,
//     audio: [
//       {
//         name: '风筝误',
//         artist: '刘珂矣',
//         url: 'http://up.mcyt.net/?down/46644.mp3',
//         cover: 'http://oeff2vktt.bkt.clouddn.com/image/96.jpg',
//       }
//     ]
// });

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  mini: true,
  autoplay: false,
  listFolded: true,
  theme: '#FADFA3', // 主题色
  loop: 'all',
  order: 'list',
  preload: 'auto', // 'none' | 'metadata' | 'auto'
  volume: 0.7, 
  mutex: true, // 互斥，阻止多个播放器同时播放
  listFolded: true,
  listMaxHeight: 90,
  lrcType: 3, // 0: 不显示歌词, 1: 网易云歌词, 3: 普通歌词
  audio: [
    {
      name: '水の星へ爱をこめて',
      artist: '森口博子',
      url: 'http://music.163.com/song/media/outer/url?id=494858545.mp3',
      cover: 'music/水の星へ爱をこめて/cover.jpg',
      lrc: 'music/水の星へ爱をこめて/水の星へ愛をこめて-森口博子.lrc',
      theme: '#2068bf'
    },
    {
      name: 'Midnight Blue',
      artist: 'KISSME QUICK',
      url: 'http://music.163.com/song/media/outer/url?id=5007568.mp3',
      cover: 'music/MidnightBlue/cover.png',
      lrc: 'music/MidnightBlue/MIDNIGHT BLUE-KISSME QUICK.lrc',
    }
  ],
  lrc: {
    color: '#2068bf' // 设置歌词颜色
  }
});

// 设置音乐框为圆角10px
ap.container.style.borderRadius = '30px';

// 设置音乐框为圆角10px

