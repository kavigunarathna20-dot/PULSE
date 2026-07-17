let selectedActions = {};

const LOW_THRESHOLD = 8;
const MEDIUM_THRESHOLD = 16;

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('#sim-grid .card');
    const calculateBtn = document.getElementById('calculate-btn');
    const resetBtn = document.getElementById('reset-btn');

    cards.forEach(function (card) {
        const selectBtn = card.querySelector('.select-btn');
        selectBtn.addEventListener('click', function () {
            toggleSelection(card);
        });
    });

    calculateBtn.addEventListener('click', updateResults);
    resetBtn.addEventListener('click', resetSimulator);
});

function toggleSelection(card) {
    const id = card.dataset.id;
    const title = card.querySelector('.item-title').textContent;
    const points = parseInt(card.dataset.points, 10);
    const btn = card.querySelector('.select-btn');

    if (card.classList.contains('selected')) {
        card.classList.remove('selected');
        btn.textContent = 'Select Action';
        delete selectedActions[id];
    } else {
        card.classList.add('selected');
        btn.textContent = 'Selected';
        selectedActions[id] = { title: title, points: points };
    }

}

function updateResults() {
    const listContainer = document.getElementById('selected-list');
    const totalEl = document.getElementById('total-points');
    const messageEl = document.getElementById('impact-message');

    const ids = Object.keys(selectedActions);
    let total = 0;

    listContainer.innerHTML = '';

    if (ids.length === 0) {
        listContainer.innerHTML = '<p>No actions selected yet. Choose actions above to see your impact.</p>';
    } else {
        const ul = document.createElement('ul');
        ids.forEach(function (id) {
            const action = selectedActions[id];
            total += action.points;

            const li = document.createElement('li');
            li.className = 'selected-item';
            li.innerHTML =
                '<span class="item-title">' + action.title + '</span>' +
                '<span class="item-points">' + action.points + ' pts</span>';
            ul.appendChild(li);
        });
        listContainer.appendChild(ul);
    }

    totalEl.textContent = total;

    let level, message;
    if (total === 0) {
        level = 'none';
        message = 'Select some actions to see your wellness impact.';
    } else if (total <= LOW_THRESHOLD) {
        level = 'low';
        message = 'Low Impact \u2014 every action counts, try adding a few more!';
    } else if (total <= MEDIUM_THRESHOLD) {
        level = 'medium';
        message = 'Medium Impact \u2014 great progress towards a healthier lifestyle!';
    } else {
        level = 'high';
        message = 'High Impact \u2014 excellent commitment to your well-being!';
    }

    messageEl.textContent = message;
    updateBackground(level);
}

function updateBackground(level) {
    document.body.classList.remove('impact-low', 'impact-medium', 'impact-high');
    if (level !== 'none') {
        document.body.classList.add('impact-' + level);
    }
}

function resetSimulator() {
    selectedActions = {};
    document.querySelectorAll('#sim-grid .card').forEach(function (card) {
        card.classList.remove('selected');
        card.querySelector('.select-btn').textContent = 'Select Action';
    });
    document.body.classList.remove('impact-low', 'impact-medium', 'impact-high');
    document.getElementById('selected-list').innerHTML = '<p>No actions selected yet. Choose actions above to see your impact.</p>';
    document.getElementById('total-points').textContent = '0';
    document.getElementById('impact-message').textContent = 'Select some actions to see your wellness impact.';
}
