const loadBtn = document.getElementById('loadBtn');
const loadBtnSec = document.getElementById('loadBtnSecond')
const url = 'https://api.pexels.com/v1/search?query=[kitten]';
const urlSec = 'https://api.pexels.com/v1/search?query=[ocean]';
const API_KEY = 'v55QK9ypnx8NWKw9Uav5knBV5ITGEru2NcHnAxLQKuI8MGTmuH4IEGWg';
const cardList = document.getElementById('cardList');
const message = document.getElementById('text-message');
const searchBtn = document.getElementById('searchBtn');


// function getImage() {

//     fetch(url, {
//         headers: {
//             Authorization: API_KEY
//         }
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Questo non funziona');
//             }
//         })
//         .then((images) => {
//             console.log(images.photos);
//             loadImages(images.photos);
//         })
//         .catch((err) => {
//             console.log('error', err);
//         })

// }

// function loadImages(images) {
//     message.classList.add('d-none');

//     cardList.innerHTML = '';
//     for (let i = 0; i < images.length; i++) {

//         let singleImg = images[i].src.large
//         let singleID = images[i].id

//         cardList.innerHTML += `

//         <div class="col-md-4">
//               <div class="card mb-4 shadow-sm">
//                 <img
//                   src= "${singleImg}"
//                   class="bd-placeholder-img card-img-top"
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title">Lorem Ipsum</h5>
//                   <p class="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </p>
//                   <div
//                     class="d-flex justify-content-between align-items-center"
//                   >
//                     <div class="btn-group">
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         View
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         Edit
//                       </button>
//                     </div>
//                     <small class="text-muted"> "${singleID}" </small>
//                   </div>
//                 </div>
//               </div>
//             </div> 
//         `

//     }
// }

// loadBtn.addEventListener('click', getImage);



// function getSecondaryImage() {

//     fetch(urlSec, {
//         headers: {
//             Authorization: API_KEY
//         }
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Questo non funziona');
//             }
//         })
//         .then((imagesSec) => {
//             console.log(imagesSec);
//             loadImages(imagesSec.photos);
//         })
//         .catch((err) => {
//             console.log('error', err);
//         })

// }

// function loadImages(imagesSec) {
//     message.classList.add('d-none');

//     cardList.innerHTML = '';
//     for (let i = 0; i < imagesSec.length; i++) {

//         let singleImg = imagesSec[i].src.large
//         let singleID = imagesSec[i].id

//         cardList.innerHTML += `

//         <div class="col-md-4">
//               <div class="card mb-4 shadow-sm">
//                 <img
//                   src= "${singleImg}"
//                   class="bd-placeholder-img card-img-top"
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title">Lorem Ipsum</h5>
//                   <p class="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </p>
//                   <div
//                     class="d-flex justify-content-between align-items-center"
//                   >
//                     <div class="btn-group">
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         View
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         Edit
//                       </button>
//                     </div>
//                     <small class="text-muted">"${singleID}"</small>
//                   </div>
//                 </div>
//               </div>
//             </div> 
//         `

//     }
// }

// loadBtnSec.addEventListener('click', getSecondaryImage);



// function getCustomImage() {

//     let searchQ = encodeURIComponent(searchBar.value);
//     let urlCustom = `https://api.pexels.com/v1/search?query=${searchQ}`

//     fetch(urlCustom, {
//         headers: {
//             Authorization: API_KEY
//         }
//     })
//         .then((response) => {
//             if (response.ok) {
//                 return response.json();
//             } else {
//                 throw new Error('Questo non funziona');
//             }
//         })
//         .then((imagesCust) => {
//             console.log(imagesCust);
//             loadImages(imagesCust.photos);
//         })
//         .catch((err) => {
//             console.log('error', err);
//         })

// }

// function loadImages(imagesCust) {
//     message.classList.add('d-none');

//     cardList.innerHTML = '';
//     for (let i = 0; i < imagesCust.length; i++) {

//         let singleImg = imagesCust[i].src.large
//         let singleID = imagesCust[i].id

//         cardList.innerHTML += `

//         <div class="col-md-4">
//               <div class="card mb-4 shadow-sm">
//                 <img
//                   src= "${singleImg}"
//                   class="bd-placeholder-img card-img-top"
//                 />
//                 <div class="card-body">
//                   <h5 class="card-title">Lorem Ipsum</h5>
//                   <p class="card-text">
//                     This is a wider card with supporting text below as a natural
//                     lead-in to additional content. This content is a little bit
//                     longer.
//                   </p>
//                   <div
//                     class="d-flex justify-content-between align-items-center"
//                   >
//                     <div class="btn-group">
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         View
//                       </button>
//                       <button
//                         type="button"
//                         class="btn btn-sm btn-outline-secondary"
//                       >
//                         Edit
//                       </button>
//                     </div>
//                     <small class="text-muted">"${singleID}"</small>
//                   </div>
//                 </div>
//               </div>
//             </div> 
//         `

//     }
// }

// searchBtn.addEventListener('click', getCustomImage);





function getImage() {

    fetch(url, urlSec, {
        headers: {
            Authorization: API_KEY
        }
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Questo non funziona');
            }
        })
        .then((images, imagesSec) => {
            console.log(images.photos, imagesSec.phots);
            loadImages(images.photos, imagesSec.photos);
        })
        .catch((err) => {
            console.log('error', err);
        })

}

getImage();
