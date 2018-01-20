const SOLUTION = [0, 1, 2, 3, 4];
const answer1 = [0, 1, 2, 3, 4]; // 5
const answer2 = [4, 0, 1, 2, 3]; // 3
const answer3 = [3, 4, 5, 2, 1]; // 2
const answer4 = [1, 4, 3, 2, 0]; // 0
const answer5 = [3, 1, 4, 2, 0]; // 1
const answer6 = [0, 4, 5, 1, 2]; // 3

function scoreAnswers(answers) {
  let score = 0;

  for (let i = 0; i < answers.length; i++) {

    if (answers[i] === SOLUTION[i]) {
      // if there is an absolute match, get a point
      score++;
    } else if (((answers[i + 1] - answers[i]) === 1) && (answers[i] !== answers.length)) {
      // when it's not an absolute match,
      // if the difference between this one and the next one is 1,
      // then assign a point
      score++;
    }
  }
  console.log('your score is ', score);
}

// scoreAnswers(answer1);
// scoreAnswers(answer2);
// scoreAnswers(answer3);
// scoreAnswers(answer4);
// scoreAnswers(answer5);
// scoreAnswers(answer6);
