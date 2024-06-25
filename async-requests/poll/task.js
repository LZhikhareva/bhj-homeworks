const xhr = new XMLHttpRequest();
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const response = JSON.parse(xhr.responseText);
        const pollId = response.id;
        const title = document.querySelector('.poll__title');
        title.textContent = response.data.title;
        const container = document.querySelector('.poll__answers');

        for (const answerItem in response.data.answers) {
            if (response.data.answers.hasOwnProperty(answerItem)) {
                const answer = response.data.answers[answerItem];
                const option = document.createElement('button');
                option.classList.add('poll__answer');
                option.textContent = answer;
                container.appendChild(option);
                option.addEventListener('click', () => {
                    alert('Спасибо, ваш голос засчитан!');
                    const xhr = new XMLHttpRequest();
                    xhr.addEventListener('readystatechange', () => {
                        if (xhr.readyState === xhr.DONE) {
                            if (xhr.readyState === xhr.DONE) {
                                const result = JSON.parse(xhr.responseText);
                                container.style.display = 'none';

                                let totalVotes = 0;
                                for (const resultItem in result.stat) {
                                    if (result.stat.hasOwnProperty(resultItem)) {
                                        const res = result.stat[resultItem];
                                        totalVotes += res.votes;
                                    }
                                }

                                for (const resultItem in result.stat) {
                                    if (result.stat.hasOwnProperty(resultItem)) {
                                        const res = result.stat[resultItem];

                                        const poll = document.querySelector('.poll')
                                        const votesResults = document.createElement('div');
                                        votesResults.classList.add('votes__results')
                                        poll.appendChild(votesResults)

                                        const votesResultsAnswer = document.createElement('div');
                                        votesResultsAnswer.textContent = `${res.answer}:`;
                                        votesResultsAnswer.classList.add('votes__results-answer');
                                        votesResults.appendChild(votesResultsAnswer);

                                        const votesResultsValue = document.createElement('div');
                                        votesResultsValue.classList.add('votes__results-value');
                                        const percentage = (res.votes / totalVotes) * 100;
                                        votesResultsValue.textContent = `${percentage.toFixed(1)} %`;

                                        votesResults.appendChild(votesResultsValue);
                                    }
                                }
                            }
                        }
                    })

                    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
                    const postData = `vote=${pollId}&answer=${option.textContent}`;
                    xhr.send(postData);
                }, { once: true });
            }
        }
    }
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();