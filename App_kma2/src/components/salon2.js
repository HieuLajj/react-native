import faker from '@faker-js/faker'
import niceColors from 'nice-color-palettes'
const colors=[
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0,3),
];

// const images=[
//     {image: require('../images/image_select/ic_Clothes.png')},
//     {image: require('../images/image_select/ic_Food.png')},
//     {image: require('../images/image_select/ic_medical.png')},
//     {image: require('../images/image_select/ic_taxi.png')},
//     {image: require('../images/image_select/ic_working.png')},
// ]
const images=[
    require('../images/image_select/ic_Clothes.png'),
    require('../images/image_select/ic_Food.png'),
    require('../images/image_select/ic_medical.png'),
    require('../images/image_select/ic_taxi.png'),
    require('../images/image_select/ic_working.png'),
]
const names=["Clothes","Food","Medical","Taxi","Other"]

const data2=[
    {key: 0,type:0,total:111,note:"mua quần áo trung cư 20",day:"17/5/2022"},
    {key: 1,type:1,total:222,note:"mua thức ăn",day:"17/5/2022"},
    {key: 2,type:2,total:333,note:"mua thuốc quân bác",day:"17/5/2022"},
    {key: 3,type:3,total:444,note:"đi taxi anh em nhe",day:"17/5/2022"},
    {key: 4,type:4,total:555,note:"mua chuột gaminh",day:"17/5/2022"},
    {key: 5,type:4,total:666,note:"mua phổn quán na",day:"17/5/2022"},
    {key: 6,type:1,total:777,note:"nhập táo ấn độ",day:"17/5/2022"},
    {key: 7,type:2,total:888,note:"mua chó gy",day:"17/5/2022"},
    {key: 8,type:2,total:999,note:"chiến nhật tân",day:"17/5/2022"},
    {key: 9,type:0,total:101,note:"lonelyyy",day:"17/5/2022"},
    {key: 10,type:1,total:102,note:"happyyy",day:"18/5/2022"},
]



export const detailsIcons =[
    {color: '#9FD7F1', icon: 'isv'},
    {color: '#F3B000', icon: 'Trophy'},
    {color: '#F2988F', icon: 'edit'},
]
export default data2.map((item,index)=>({
    ...item,
   // key: faker.datatype.uuid(),
    color: colors[index%colors.length],
    image: images[item.type],
    name: names[item.type],
    // name: faker.name.findName(),
    // total: faker.datatype.number(),
    //jobTitle: faker.name.jobTitle(),
    // categories: [...Array(3).keys()].map(()=>{
    //     return {
    //         key: faker.datatype.uuid(),
    //         title: faker.name.jobType(),
    //         subcats: [...Array(3).keys()].map(faker.name.jobType),
    //     };
    // }),
}));