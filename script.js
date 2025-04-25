const moods = {
    happy:{
        quote:"Happiness is not by chance, but by choice.",
        image:"assets/images/happy.jpg",
        music:`<iframe width="560" height="315" src="https://www.youtube.com/embed/ZbZSe6N_BXs?si=eiwek_1Z2DKUBP-7" title="YouTube video player" frameborder="1px" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>`
    },
    sad:{
        quote:"Your present circumstances don’t determine where you go; they merely determine where you start.",
        image:"assets/sad.jpg",
        music:`<iframe width="560" height="315" src="https://www.youtube.com/embed/W0DM5lcj6mw?si=fXaw6tH_ZfOCkOaz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    lazy:{
        quote:"Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        image:"assets/images/lazy.jpg",
        music:`<iframe width="560" height="315" src="https://www.youtube.com/embed/h3h035Eyz5A?si=CT-ntxgdE6SQQYl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    energetic:{
        quote:"The only way to do great work is to love what you do.",
        image:"assets/images/energetic.jpg",
        music:`<iframe width="560" height="315" src="https://www.youtube.com/embed/IL_QlRXzhsQ?si=U0eS-6S3fNAeCDG5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
};
const moodSelector = document.getElementById("mood-selector");
const quoteDisplay = document.getElementById("quote");
const imageDisplay = document.getElementById("image");
const musicDisplay = document.getElementById("music");
moodSelector.addEventListener('change',()=>{
    const selectedMood =moodSelector.value;
    document.body.className="";

if(selectedMood && moods[selectedMood]){
    const moodData = moods[selectedMood];
    quoteDisplay.textContent = moodData.quote;
    imageDisplay.src = moodData.image;
    musicDisplay.innerHTML = moodData.music;
    document.body.classList.add(selectedMood);
}
else{
    quoteDisplay.textContent = "";
    imageDisplay.src = "";
    musicDisplay.innerHTML = "";
}
});