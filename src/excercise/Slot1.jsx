import React from "react";
function Slot1() {

    const [name, setName] = React.useState("");

    const [age, setAge] = React.useState();

    const [performance, setPerformance] = React.useState("");
    
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        introduce() {
            return `My name is ${this.name} and I am ${this.age} years old`;
        }
    }

    class Student extends Person {
        constructor(name, age, scores) {
            super(name, age);
            this.scores = scores;
        }

        calculateAverageScore() {
            let total = 0;
            for (let score of this.scores) {
                total += score;
            }
            return total / this.scores.length;
        }

        display() {
            return `${this.introduce()} and my average score is ${this.calculateAverageScore()}`
        }
    }
    
    function createScore(...scores) {
        return `The scores are ${scores.join(', ')}`;
    }

    function mergeScores(...scores) {
        return [].concat(...scores);
    }

    function destructingObject(person){
        return `The name is ${person.name} and age is ${person.age}`;
    }

    function reduceScore(scores) {
        return scores.reduce((total, score) => total + score, 0);
    }

    function evaluatePerformance(student){
        return new Promise((resolve, reject) => {
            setTimeout(() =>{
                if(student.calculateAverageScore() >= 80){
                    resolve("Excellent performance");
                }else{
                    reject("Needs improvement");
                }
            }, 1000)
        })
    }
    React.useEffect(() => {
        evaluatePerformance(student1)
        .then(result => {
            setPerformance(result);
        });
    }, []);

    const person1 = new Person("Tuan Duc", 22);
    const student1 = new Student("Tuan Duc", 22, [85, 90, 78]);
    const newScore = [...student1.scores, 15, 16, 17];
    const filteredScores = newScore.filter(score => score >= 80);
    const doubleScores = newScore.map(score => score*2);
    
    return (
        <div>
            <p>{person1.introduce()}</p>

            <p> {student1.display()}</p>
            <p>{createScore(8, 9, 10)}</p>
            <p>Ex 4: Name is {person1.name} and age is {person1.age}</p>
            <p>Ex 5: New scores is: {newScore.join(', ')}</p>
            <p>Ex 6: Filtered scores({">"}=80): {filteredScores.join(', ')}
                {" "}
                and map double new scores: {doubleScores.join(', ')}
                {" "}
                and reduce new scores: {reduceScore(newScore)}
            </p>
            <p>
                Ex7: Promise {performance}
            </p>
            <div>
                <input
                type = "text"
                value = {name}
                onChange = {(e) => setName(e.target.value)}
                placeholder = "Enter your name"
                />
                <input
                type = "number"
                value = {age}
                onChange = {(e) => setAge(e.target.value)}
                placeholder = "Enter your age"
                />
            </div>
        </div>
    )

    
}
export default Slot1;