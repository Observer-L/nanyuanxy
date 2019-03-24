// 地图导览模式 markers 数据
export const Ymarkers = [
  {
    id: 'random_id_generated_by_cloud_database_0',
    type: '景点',
    scale: 16,
    icon: 'view',
    data: [
      {
        name: '孙中山铜像',
        short_name: '铜像',
        logo: 'nfsysu',
        music: 'music.mp3',
        location: [23.634524, 113.676851],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: '123456789',
          address: '中山大学南方学院XXX'
        },
        panorama: '全景网页外链'
      },
      {
        id: 'random_id_generated_by_cloud_database_1',
        name: '南芳湖',
        location: [23.628803, 113.679357],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400'
        ],
        panorama: '全景网页外链'
      }
    ]
  },
  {
    id: 'random_id_generated_by_cloud_database_1',
    type: '食堂',
    scale: 17,
    icon: 'view',
    data: [
      {
        name: '西区食堂',
        short_name: '西饭',
        location: [23.631698, 113.675730],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: '123456789',
          address: '中山大学南方学院XXX'
        },
        panorama: '全景网页外链'
      },
      {
        name: '中区食堂',
        short_name: '中饭',
        location: [23.634966, 113.678976],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400'
        ],
        panorama: '全景网页外链'
      }
    ]
  },
  {
    id: 'random_id_generated_by_cloud_database_2',
    type: '行政',
    scale: 17,
    icon: 'view',
    data: [
      {
        name: '行政楼1号',
        short_name: 'A1',
        location: [23.633639, 113.676760],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: '123456789',
          address: '中山大学南方学院XXX'
        },
        panorama: '全景网页外链'
      },
      {
        name: '行政楼2号',
        short_name: 'A2',
        location: [23.634519, 113.677828],
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400'
        ],
        panorama: '全景网页外链'
      }
    ]
  }
]

export const Xmarkers = [
  {
    type: 'lost',
    icon: 'card@lost',
    data: [
      {
        id: 'random_id_0',
        name: '校园卡',
        status: 0,
        cat: '证件',
        location: [23.631629, 113.679872],
        area: ['中区', '图书馆'],
        range: 30,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: 123456789,
          address: '指定交易地点'
        },
        time: 1552895083,
        created_time: 1552895233
      },
      {
        id: 'random_id_1',
        name: 'U盘',
        status: 0,
        cat: '数码产品',
        location: [23.631776, 113.676835],
        area: ['西区', '1教'],
        range: 20,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: 123456789,
          address: '指定交易地点'
        },
        time: 1552825083,
        created_time: 1552805233
      }
    ]
  },
  {
    type: 'found',
    icon: 'card@found',
    data: [
      {
        id: 'random_id_2',
        name: '身份证',
        status: 0,
        cat: '证件',
        location: [23.634966, 113.678976],
        area: ['中区', '中饭'],
        range: 30,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: 123456789,
          address: '指定交易地点'
        },
        time: 1552845083,
        created_time: 1552825233
      },
      {
        id: 'random_id_3',
        name: '水杯',
        status: 0,
        cat: '生活用品',
        location: [23.632140, 113.674850],
        area: ['西区', '西操'],
        range: 20,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: 123456789,
          address: '指定交易地点'
        },
        time: 1552865083,
        created_time: 1552805233
      }
    ]
  }
]

export const itemCats = [
  '证件',
  '数码产品',
  '生活用品'
]
