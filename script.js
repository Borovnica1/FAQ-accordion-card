const questions = document.querySelectorAll('.container__question-and-arrow');
const answers = document.querySelectorAll('.container__answer ');
const questionsOpened = []
let questionsOpenedCnt = 0

console.log('idemo', questions);
console.log('Dxss', answers, answers[1]);

for (let question of questions) {
  question.addEventListener('click', function() {
    const questionTitle = this.children[0];
    const arrow = this.children[1];

    answerIndex = Number(this.dataset['id']) - 1;
    const answerParagraph = answers[answerIndex];

    if (answerParagraph.classList.contains('opened')) {
      answerParagraph.classList.remove('opened');
      arrow.style.transform = 'rotate(0deg)';
      questionTitle.style.fontWeight = '400';
      questionsOpenedCnt--;

      // find index of the question we are closing in questionOpened
      let questionOpenedIndex = questionsOpened.findIndex(el => el == answerIndex);
      questionsOpened.splice(questionOpenedIndex, 1);
    } else {
      answerParagraph.classList.add('opened');
      arrow.style.transform = 'rotate(180deg)'
      questionTitle.style.fontWeight = '700';
      questionsOpenedCnt++;
      questionsOpened.push(answerIndex);
      console.log('LOL', questionsOpenedCnt, questionsOpened);
      // if more than 3 questions opened, close the first one opened because there is not enough space to open all answers
      if (questionsOpenedCnt > 3) {
        firstAnswerOpenedIndex = questionsOpened.shift();
        questionsOpenedCnt--;
        answers[firstAnswerOpenedIndex].classList.remove('opened');
        questions[firstAnswerOpenedIndex].children[1].style.transform = 'rotate(0deg)';
        questions[firstAnswerOpenedIndex].children[0].style.fontWeight = '400';
      }
    }
  });
}