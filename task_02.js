const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
}`;

const data = JSON.parse(jsonString);

let result = {
    "list": []
};

data.list.forEach((item) => {
    let object = {};
    object.name = item.name;
    object.age = item.age;
    object.prof = item.prof;

    result.list.push(object);
});

console.log(result);