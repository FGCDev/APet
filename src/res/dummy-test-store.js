const generateId = () => {
    return Math.random().toString(36).substring(16) + (new Date()).getTime().toString(36);
}

// export default {
//     1:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     2:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     3:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     4:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     5:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     6:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     7:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     8:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     9:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     10:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     11:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",//         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
//     12:{
//         title: "My Sample Test: #1",
//         id: () => generateId,
//         coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",         
//         level: "CBSE XII",
//         type: "MCQ-SA",
//         num_questions: 30,
//         price: "$2.99",
//         updated: "2nd Jan 2019",         styler: "red",
//         questions: [{},{},{},{},{},{}]
//     },
// };

export default [
    {
        title: "My Sample Test: #1",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #2",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio2.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #3",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio3.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #4",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/math1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #5",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/math2.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #6",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/math3.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #7",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio4.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #8",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio5.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #9",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #10",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },
    {
        title: "My Sample Test: #11",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #12",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #13",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #14",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #15",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #16",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #17",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #18",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #19",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #20",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #21",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #22",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #23",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #24",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #25",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #26",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #27",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #28",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #29",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #30",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #31",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #32",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },{
        title: "My Sample Test: #33",
        id: () => generateId,
        coverURL: "https://raw.githubusercontent.com/FGCDev/APet/master/src/res/imgs/covers/bio1.png",
        level: "CBSE XII",
        type: "MCQ-SA",
        num_questions: 30,
        price: "$2.99",
        updated: "2nd Jan 2019",
        styler: "red",
        questions: [{},{},{},{},{},{}]
    },
];