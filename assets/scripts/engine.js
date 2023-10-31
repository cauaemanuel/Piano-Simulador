const pianoKeys = document.querySelectorAll(".piano-keys .key")
let mapedKeys = [];
const volumeSlider = document.querySelector(".volume-slider input");
let audio = new Audio("./assets/tunes/a.wav");

const keysCheck = document.querySelector(".keys-check input");

const playTune = (key) =>{
	audio.src = `assets/tunes/${key}.wav`;
	audio.play();


	const clickedkey = document.querySelectorAll(`[data-key="${key}"]`);
    clickedkey.classList.add("active");
    setTimeout(() => {
    	clickedkey.classList.remove("active")
    }, 150);
};

pianoKeys.forEach((key) => {
	console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
	playTune(e.key);
    }
});

const handleVolume = (e) => {
	audio.volume = e.target.value;

};
volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
	pianoKeys.forEach(key => key.classList.toggle("hide"))
}

keysCheck.addEventListener("click", showHideKeys)