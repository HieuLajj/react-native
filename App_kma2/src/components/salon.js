import faker from '@faker-js/faker'
import niceColors from 'nice-color-palettes'
faker.seed(1);
const colors=[
    ...niceColors[1].slice(1, niceColors[1].length),
    ...niceColors[55].slice(0,3),
];

const data=[
    {image: require('../images/image_select/ic_Clothes.png')},
    {image: require('../images/image_select/ic_Food.png')},
    {image: require('../images/image_select/ic_medical.png')},
    {image: require('../images/image_select/ic_taxi.png')},
    {image: require('../images/image_select/ic_working.png')},
]

export const detailsIcons =[
    {color: '#9FD7F1', icon: 'isv'},
    {color: '#F3B000', icon: 'Trophy'},
    {color: '#F2988F', icon: 'edit'},
]
export default data.map((item,index)=>({
    ...item,
    key: faker.datatype.uuid(),
    color: colors[index%colors.length],
    name: faker.name.findName(),
    total: faker.datatype.number(),
    //jobTitle: faker.name.jobTitle(),
    // categories: [...Array(3).keys()].map(()=>{
    //     return {
    //         key: faker.datatype.uuid(),
    //         title: faker.name.jobType(),
    //         subcats: [...Array(3).keys()].map(faker.name.jobType),
    //     };
    // }),
}));