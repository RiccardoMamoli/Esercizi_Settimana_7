const getBooks = function () {
    fetch('https://striveschool-api.herokuapp.com/books')
        .then((response) => {
            console.log('response', response)
            if (response.ok) {
                console.log('tutto ok')

                return response.json()
            }
            else {
                throw new Error('Male');
            }
        })
        .then((listBook) => {
            console.log('i dati', listBook);
            // listBook = data;
            createCard(listBook);
        })

        .catch((error) => {
            console.log('errore', error)
        })
};


const row = document.getElementById('row');


function createCard(listBook) {
    for (let i = 0; i < listBook.length; i++ ) {

        const imgBook = listBook[i].img;
        const titleBook = listBook[i].title;
        const priceBook = listBook[i].price;

        const card = document.createElement('div');
        card.classList.add('col-4', 'border-0', 'mb-4');
        row.appendChild(card);

        
        const imgCard = document.createElement('div');
        const img = document.createElement('img');
        img.src = imgBook;
        img.classList.add('img-fluid');

        imgCard.appendChild(img);
        card.appendChild(imgCard);
        
        const cardBody = document.createElement('div');
        cardBody.classList.add('card-body');
        card.appendChild(cardBody);

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title', 'text-center');
        cardBody.appendChild(cardTitle);
        cardTitle.innerText = titleBook;

        const cardPrice = document.createElement('div');
        cardPrice.classList.add('card-price', 'text-center', 'fw-bold');
        cardBody.appendChild(cardPrice);
        cardPrice.innerHTML = priceBook;
    }
}

getBooks();
