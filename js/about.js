/*
youtube api key :
AIzaSyCtN1lqIIdi7ibHkYVCtVtP9vA4oz8j8n8

유튜브 playlist 여행 :
PLlXUbM-Wv86W_pA2wzZgQ7pF1VeHP6At4
*/

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyCtN1lqIIdi7ibHkYVCtVtP9vA4oz8j8n8';
const playList = 'PLlXUbM-Wv86VRX4kK09elGF4vtrv2Axce';
const num = 2; // 재생목록의 불러올 비디오 갯수

const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playList}&maxResults=${num}`;

fetch(url)
    .then(data => {
      return data.json();
    })
    .then(json => {
      let items = json.items;
      let result = '';


      items.map((item) => {
        result += `
          <article>
            <a href="${item.snippet.resourceId.videoId}" class="pic">
              <img src="${item.snippet.thumbnails.medium.url}">
              <i class="fa-solid fa-play play"></i>
            </a>
          </article>
        `
      })
      vidList.innerHTML = result;
    })

    vidList.addEventListener('click', (e) => {
      e.preventDefault();

      if(!e.target.closest('a')) return;
      const vidId = e.target.closest('a').getAttribute('href');

      let pop = document.createElement('figure');
      pop.classList.add('pop');

      pop.innerHTML = `<iframe src="https://www.youtube.com/embed/${vidId}" frameborder="0" width="100%" height="100%" allowfullscreen>이 브라우저는 iframe을 지원하지 않습니다.</iframe>
      <span class="btnClose">close</span>
      `;

      vidList.append(pop);
    })

    vidList.addEventListener('click', (e) => {
      const pop = vidList.querySelector('.pop');
      if(pop) {
        const close = pop.querySelector('span');
        if(e.target == close) pop.remove();
      }
    })


// about member change 부분

const memberOne = document.querySelector('#member1');
const memberThree = document.querySelector('#member3');

function mouseover(member, num) {
  member.setAttribute('src', `img/about-member${num}.jpg`);
}

function mouseleave(member, num) {
  member.setAttribute('src', `img/about-member${num}.jpg`);
}