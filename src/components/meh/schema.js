const generateId = () => {
    return Math.random().toString(36).substring(16) + (new Date()).getTime().toString(36);
}

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
    },
]