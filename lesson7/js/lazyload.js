//get imgs with data-src

const imagesToLoad= document.querySelectorAll('img[data-src]');

const loadImages= (image)=>{
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload=()=>{
        image.removeAttribute('data-src')
    };

};

const imgOptions={
    threshold:1
};

if('IntersectionObserver' in window) {
    //is supported
    const imgObserver= new IntersectionObserver((items)=>{
        items.forEach((item)=>{
            if(item.isIntersecting){
                loadImages(item.target);
                imgObserver.unobserve(item.target);
            }
        });
    }, imgOptions);

    //load image if necessary
    imagesToLoad.forEach((img)=>{
        imgObserver.observe(img);
    });
}
    
else {// if not supported, then load all images
    imagesToLoad.forEach((img)=>{
        loadImages(img);
    });
}