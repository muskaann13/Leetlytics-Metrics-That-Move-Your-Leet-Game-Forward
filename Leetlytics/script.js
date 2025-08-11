document.addEventListener('DOMContentLoaded', function() {

    const searchButton = document.getElementById('search-btn');
    const usernameInput = document.getElementById('user-input');
    const statsContainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const cardStatsContainer = document.querySelector('.stats-card');

    //return true or false based on a regex
    //regex = regular expression
    function validateUsername(username) {
        if(username.trim() === '') {
            alert('Username should not be empty');
            return false;
        }

        //got from chatgpt
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if(!isMatching) {
            alert('Invalid Username');
        }
        return isMatching;
    }

    //since API is called it is an async function
    async function fetchUserDetails(username) {
        const url = `https://leetcode-stats-api.herokuapp.com/${username}`;

        try {
            searchButton.textContent = 'Searching...';
            searchButton.disabled = true;
            
            //GET request on this url
            const response = await fetch(url);
            if(!response.ok) {
                throw new Error('Unable to fetch user details');
            }

            const data = await response.json();
            if(data.status === 'error') {
                throw new Error(data.message);
            }

            console.log('Logging data:',data);

            displayUserData(data);
        }
        catch(error) {
            statsContainer.innerHTML = `<p>${error.message}</p>`;
            console.error('Fetch or API error:', error);
        }
        finally {
            searchButton.textContent = 'Search';
            searchButton.disabled = false;
        }
    }

    function displayUserData(data) {
        const ranking = data.ranking;
        
        const totalQues = data.totalQuestions;
        const totalEasyQues = data.totalEasy;
        const totalMediumQues = data.totalMedium;
        const totalHardQues = data.totalHard;

        const solvedTotalQues = data.totalSolved;
        const solvedTotalEasyQues = data.easySolved;
        const solvedTotalMediumQues = data.mediumSolved;
        const solvedTotalHardQues = data.hardSolved;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        const calendar = data.submissionCalendar || {};
        let totalSubmissions = 0;
        let activeDays = 0;

        for (const timestamp in calendar) {
            if (calendar.hasOwnProperty(timestamp)) {
                const count = calendar[timestamp];
                totalSubmissions += count;
                if(count > 0) activeDays++;
            }
        }

        const cardData = [
            {label: 'Ranking', value: ranking},
            {label: 'Overall Submissions', value: totalSubmissions},
            {label: 'Active Days', value: activeDays},
            {label: 'Acceptance rate', value: `${data.acceptanceRate}%`}
        ];
        console.log(cardData);

        cardStatsContainer.innerHTML = cardData.map(
            data => 
                `
                    <div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                    </div>
                `
        ).join('');
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved/total)*100;
        circle.style.setProperty('--progress-degree', `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    searchButton.addEventListener('click', () => {
        const username = usernameInput.value;
        if(validateUsername(username)) {
            fetchUserDetails(username);
        }
    })
})