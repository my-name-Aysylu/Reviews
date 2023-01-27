let feedback = [
    {
      id: 1,
      author: 'Анна',
      dateOfReview: '26 апреля 2021',
      city: 'Москва',
      reviewText: 'Фен пришел в заводской упаковке - пленке, до меня никто не вскрывал. Тоже долго изучала, как отличить оригинал от подделки. По всем параметрам - оригинал. Шнур 2,8 м как и заявлено на оф.сайте. Швы ровные, насадки без зазубрин. Работает безупречно. Насадка для бережной сушки действительно сушит более прохладным воздухом, чем другие насадки в том же температурном режиме. Не думаю, что в копиях над этим заморачивались бы. Для сравнения заказывала и HD08, но забыла переходник на пункт выдачи, даже не включала, да и он не понравился даже внешне, кнопка включения не такая. В общем, если это не оригинал, то очень сложно представить более совершенный девайс для волос',
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
      id: 2,
      author: 'Галина',
      dateOfReview: '11 ноября 2022',
      city: 'Волгоград',
      reviewText: 'Хороший качественный фен. Отлично и быстро сушит волосы. После сушки волосы мягкие и послушные. Не знаю оригинал или нет, но покупкой очень довольна! Спасибо',
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
      id: 3,
      author: 'Виктория',
      dateOfReview: '15 мая 2022',
      city: 'Казань',
      reviewText: 'Проверила, на сайте зарегистрировалась, для меня он первый и проверяла по отзывам и видео -отзывам. Все сошлось. Шумит тихо, насадки все магнитятся, все контуры ровные.',
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg"
    },
    {
      id: 4,
      author: 'Полина',
      dateOfReview: '2 января 2023',
      city: 'Санкт-Петербург',
      reviewText: 'У меня есть оригинальный стайлер, знаю, как должна выглядеть и работать оригинальная продукция Dyson. Фен оригинальный!',
      image: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg"
    }
]
const container = document.getElementById("container")
const review = document.getElementsByClassName("review")
function renderFeedback() {
  const review = feedback[rev] // на основе индекса rev возьмем по индексу элемент из массива
  
    container.innerHTML = ""
    container.innerHTML += `
    <div class="review">
    <img src="${review.image}" class="image"/>
    <p class="author">${review.author}</p>
    <p class="city">${review.city}</p>
    <p class="date">${review.dateOfReview}</p>
    <p class="info">${review.reviewText}</p>
    </div>`
  }
  let rev = 0;

  function previousReview() {
    if (rev === 0) {
            rev = feedback.length-1;
    } else {
      rev = rev - 1;    
    } 
    renderFeedback()
   }

  function nextReview() {
    if (rev >=feedback.length-1) {
      rev = 0;
      } else {
        rev = rev + 1;
      }
      renderFeedback()
    
  }

  function randomReview () {
     rev = Math.floor(Math.random() * feedback.length)

    renderFeedback()
  }

  renderFeedback()
  const nextButton = document.getElementById ('next')
  const prevButton = document.getElementById ('prev')
  const randomButton = document.getElementById ('random-btn')
  nextButton.addEventListener('click', nextReview)
  prevButton.addEventListener('click', previousReview)
  randomButton.addEventListener('click', randomReview)
