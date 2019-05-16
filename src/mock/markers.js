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
        latitude: 23.634524,
        longitude: 113.676851,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: '123456789',
          address: '中山大学南方学院XXX'
        },
        panorama: 'https://720yun.com/t/67e22mf5jts?scene_id=2291778'
      },
      {
        id: 'random_id_generated_by_cloud_database_1',
        name: '南芳湖',
        latitude: 23.628803,
        longitude: 113.679357,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400'
        ],
        panorama: ''
      }
    ]
  },
  {
    id: 'random_id_generated_by_cloud_database_1',
    type: '食堂',
    scale: 17,
    icon: 'canteen',
    data: [
      {
        name: '西区食堂',
        short_name: '西饭',
        latitude: 23.631698,
        longitude: 113.675730,
        desc: '文字介绍',
        images: [
          'https://via.placeholder.com/400',
          'https://via.placeholder.com/400'
        ],
        contact: {
          phone: '123456789',
          address: '中山大学南方学院XXX'
        },
        panorama: 3061760
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
        latitude: 23.631629,
        longitude: 113.679872,
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
        latitude: 23.634966,
        longitude: 113.678976,
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
      }
    ]
  }
]

export const itemCats = [
  '证件',
  '数码产品',
  '生活用品'
]
