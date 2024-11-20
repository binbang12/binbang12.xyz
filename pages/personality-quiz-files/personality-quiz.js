function processQuiz(event) {
    event.preventDefault();


    const form = document.getElementById('quiz');
    const formData = new FormData(form);


    let personalityScore = {
        a: 0,
        b: 0,
        c: 0,
        d: 0
    };


    formData.forEach((value) => {
        personalityScore[value] += 1;
    });


    let personalityType = '';
    let maxScore = 0;
    for (let option in personalityScore) {
        if (personalityScore[option] > maxScore) {
            maxScore = personalityScore[option];
            personalityType = option;
        }
    }


    const resultText = document.getElementById('personality-type');
    const resultSection = document.getElementById('result');


    if (personalityType === 'a') {
        resultText.textContent = 'You are adventurous and outdoorsy! 🌳';
        resultText.innerHTML += ' You thrive in nature, constantly seeking new places to explore. Whether it’s hiking, camping, or just taking in the beauty of the great outdoors, you find peace and energy from being surrounded by natural landscapes. You’re independent, curious, and love a good challenge.';
    } else if (personalityType === 'b') {
        resultText.textContent = 'You are social and outgoing! 🎉';
        resultText.innerHTML += ' You enjoy connecting with people, having a blast with friends, and creating lasting memories. Life is about fun for you, and you’re always the one bringing energy to the party. You’re the life of the group, and you thrive in environments where social interactions are abundant.';
    } else if (personalityType === 'c') {
        resultText.textContent = 'You are thoughtful and calm! 🌙';
        resultText.innerHTML += ' You value quiet moments, self-reflection, and the peace that comes from being in a calm environment. You enjoy deep thinking, whether it’s through reading, writing, or simply taking a moment to breathe. You are empathetic, introspective, and always ready to lend a listening ear.';
    } else if (personalityType === 'd') {
        resultText.textContent = 'You are analytical and curious! 🔬';
        resultText.innerHTML += ' You have a deep fascination with how things work, and you are always asking questions to learn more. Whether it’s solving problems, studying a new topic, or diving into a challenging project, you thrive on knowledge and logic. You prefer to think things through, and you’re always looking for ways to improve and innovate.';
    }

    resultSection.style.display = 'block';
}