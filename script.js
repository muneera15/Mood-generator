const moods = {
    happy:{
        quote:"Happiness is not by chance, but by choice.",
        image:"assets/images/happy.jpg",
        music: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MOWDb2TBYDg?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    sad:{
        quote:"Your present circumstances don’t determine where you go;they merely determine where you start.",
        image:"assets/images/sad.jpg",
        music: `<iframe width="560" height="315" src="https://www.youtube.com/embed/1AqdWNS6Mv0?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    lazy: {
        quote: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.",
        music: `<iframe width="240" height="135" src="https://www.youtube.com/embed/vcxQMI55As0?autoplay=1&mute=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="border-radius: 12px !important;"></iframe>`,
        image: "assets/images/lazy.jpg"
      },
    energetic:{
        quote:"The only way to do great work is to love what you do.",
        image:"assets/images/energetic.jpg",
        music:`<iframe width="560" height="315" src="https://www.youtube.com/embed/IL_QlRXzhsQ?autoplay=1&mute=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
};
const moodSelector = document.getElementById("mood-selector");
const quoteDisplay = document.getElementById("quote");
const imageDisplay = document.getElementById("image");
const musicDisplay = document.getElementById("music");
moodSelector.addEventListener('change',()=>{
    const selectedMood =moodSelector.value;
    document.body.className="";
    quoteDisplay.textContent="";
    imageDisplay.src="";
    musicDisplay.innerHTML="";

if(selectedMood && moods[selectedMood]){
    const moodData = moods[selectedMood];
    quoteDisplay.textContent = moodData.quote;
    imageDisplay.src = moodData.image;
    musicDisplay.innerHTML = moodData.music;
    document.body.classList.add(selectedMood);
}
else{
    quoteDisplay.textContent = "";
    imageDisplay = "";
    musicDisplay.innerHTML = "";
}
});