const storeItems = document.querySelectorAll('.box')

let modal = document.querySelector('.modalCon')

let buttoned = document.querySelectorAll('.btned')

let lightBoxItem = document.querySelector('.lightbox-item')

//wire up the left and right buttons
let images = document.querySelectorAll('.store-img');

// set up an array for the items
let imageList = [];
//set up a counter to run through the list of images
let imageCounter = 0;
//use a forEach loop to get a copy of all the images and push into an array of items
images.forEach(function(image) {
    //push each imageto the array of images
    imageList.push(image.src);

})

//Add an a click event listener to each store item
storeItems.forEach(function(item) {
    //On click, allow the model container to show 
    //Change css class from display none to display block
    item.addEventListener('click', function(e) {
        //grab the image of the item that was clicked
        let image = e.target.src;
        //change the background img property of the lightbox item
        modal.style.display = 'flex';

        lightBoxItem.style.backgroundImage = `url(${image})`;
        //show the modal with the selected image
        lightBox.classList.add('show');
        //get the array index number for the image that was selected
        imageCounter = imageList.indexOf(image);


    })

})

//wire up the modal's close button
let lightBoxClose = document.querySelector('.modalBoxClose');
lightBoxClose.addEventListener('click', () => {
    modal.style.display = 'none'
});


buttoned.forEach((button) => {

    button.addEventListener('click', () => {

        if (button.classList.contains('btn-left')) {
            imageCounter--
            if (imageCounter < 0) {
                imageCounter = imageList.length - 1
            }

            lightBoxItem.style.backgroundImage = `url('${imageList[imageCounter]}')`
        } else if (button.classList.contains('btn-right')) {
            imageCounter++
            if (imageCounter >= imageList.length) {
                imageCounter = 0
            }
            lightBoxItem.style.backgroundImage = `url('${imageList[imageCounter]}')`
        }
    })


})