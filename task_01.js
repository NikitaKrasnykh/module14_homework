const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
    `;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmlDOM.querySelector("list");
const students = list.querySelectorAll("student");

let result = {
    "list": []
};

students.forEach(student => {
    let object = {};
    let nodename = student.querySelector('name');

    object.name = `${nodename.querySelector('first').textContent} ${nodename.querySelector('second').textContent}`;
    object.age = student.querySelector('age').textContent;
    object.prof = student.querySelector('prof').textContent;
    object.lang = nodename.getAttribute('lang');

    result.list.push(object);
});

console.log(result);
