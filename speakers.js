const speakersData = [
  {
    imageUrl: './images/speaker1.jpg',
    name: 'Idris Elba',
    position: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    info: "The festival is in commemoration of Ghana's Independence Day celebration that falls on Monday, 6th March 2023. As part of the event, we're providing a free entry experience.",
  },
  {
    imageUrl: './images/speaker2.jpg',
    name: 'Bories Kodjoe',
    position: 'Director of Art Centre Nabi and a board member of CC Korea',
    info: 'The GFF promises to provide a unique and tasty sampling of food from across Ghana, Africa, and around the globe. On each day, food vendors will be featured.',
  },
  {
    imageUrl: './images/speaker3.jpg',
    name: 'Adam Afriyie',
    position: 'Executive Director of the Wikimedia Foundation',
    info: 'GFF is committed to presenting a great Food Experience for our patrons. We are looking for professional food vendors to participate.',
  },
  {
    imageUrl: './images/speaker4.jfif',
    name: 'Lord Paul Boateng',
    position: 'Executive Director of Think Thank Ghana',
    info: 'GFF will provide exposure for each of our featured vendors, via social media, an online festival programme, and a Food experience promotional plan.',
  },
  {
    imageUrl: './images/speaker5.jpg',
    name: 'George Ayittey',
    position: 'President of Young Pirates of Europe',
    info: 'On each day, food vendors will be featured to showcase their specialty cuisine and beverage. Also, non-food vendors will display their crafts and products.',
  },
  {
    imageUrl: './images/speaker6.jpg',
    name: 'Samia Nkrumah',
    position: 'CEO of Ghana Food Festival',
    info: 'The Ghana Food Festival (GFF) will come from Saturday, March 4 to Sunday, March 5, 2023, in Accra, Ghana. GFF will provide exposure.',
  },
];
const parentSection = document.querySelector('.featured-speakers');

const speakersContainer = document.createElement('div');
speakersContainer.className = 'speakers-container';
parentSection.appendChild(speakersContainer);

speakersData.forEach((speaker, index) => {
  let visibility = 'show';
  if (index > 1 && window.innerWidth < 768) {
    visibility = 'hide';
  }
  speakersContainer.innerHTML += `
  <div class="${visibility} single-speaker">
    <div class="speaker-image">
      <img class="chess-overlay" src="./images/chess-bg.jpg" alt="First speaker">
      <img class="speakerImg" src="${speaker.imageUrl}" alt="First speaker">
    </div>
    <div class="speaker-info">
      <p class="name">${speaker.name}</p>
      <p class="position">${speaker.position}</p>
      <p class="description">${speaker.info}</p>
    </div>
  </div>`;
});

const moreDiv = document.createElement('div');
const span = document.createElement('span');
const arrowDown = document.createElement('i');

arrowDown.classList.add('fa-solid', 'fa-chevron-down');
moreDiv.className = 'load-more';
span.className = 'more';

span.innerText = 'MORE';

moreDiv.appendChild(span);
moreDiv.appendChild(arrowDown);
parentSection.appendChild(moreDiv);

const allSpeakers = document.querySelectorAll('.single-speaker');

function moreClickHandler() {
  if (span.innerText === 'MORE') {
    allSpeakers.forEach((speaker, index) => {
      if (index > 1) {
        // alert("Adding show to elements");
        speaker.classList.remove('hide');
        speaker.classList.add('show');
      }
    });
    span.innerText = 'LESS';
    arrowDown.classList.remove('fa-chevron-down');
    arrowDown.classList.add('fa-chevron-up');
  } else {
    allSpeakers.forEach((speaker, index) => {
      if (index > 1) {
        // alert("Adding hide to elements");
        speaker.classList.remove('show');
        speaker.classList.add('hide');
      }
    });
    span.innerText = 'MORE';
    arrowDown.classList.remove('fa-chevron-up');
    arrowDown.classList.add('fa-chevron-down');
  }
}

function refreshPage() {
  if (window.innerWidth >= 768) {
    allSpeakers.forEach((speaker) => {
      speaker.classList.remove('hide');
      speaker.classList.add('show');
    });
  } else {
    window.location.reload();
  }
}

span.addEventListener('click', moreClickHandler);
arrowDown.addEventListener('click', moreClickHandler);
window.addEventListener('resize', refreshPage);