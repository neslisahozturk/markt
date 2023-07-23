
/*environment*/
const environmentItems=[
"Crystaline Wasteland",
"Lost Lunar Colony",
"Whimsical Circus",
"Spirit Oasis",
"Interstellar Trading Post",
"Frozen Labyrinth",
"Ancient Observatory",
"Dreamer's Domain",
"Tempest Roost",
"Clockwork Forest",
"Giant's Playground",
"Celestial Gardens",
"Submerged City Ruins",
"Skyway Bridge",
"Digital Wonderland",
"Floating Gardens",
"Living Swamp",
"Pirate Cove",
"Lost Jungle Temple",
"Glowing Caverns",
"Ancient Ruins",
"Desert Oasis",
"Mountain Peak",
"Futuristic City",
"Tropical Paradise",
"Steampunk Factory",
"Serene Forest",
"Underwater Wonderland",
"Enchanted Garden",
"Arctic Tundra"];
const getRandomNumberE=(max)=>Math.floor(Math.random()*max);
const getRandomEnv=()=>`${environmentItems[getRandomNumberE(environmentItems.length)]}`;
const setRandomEnv=()=>{document.getElementById('env-id').innerText=getRandomEnv()};
document.getElementById('env-btn')
addEventListener('click',setRandomEnv);
setRandomEnv();

/*character*/
const characterItems=[
"Knight",
"Wizard",
"Fairy",
"Pirate",
"Ninja",
"Inventor",
"Princess",
"Robot",
"Animal Shaman",
"Adventurer",
"Time Traveler",
"Bard",
"Fire Dancer",
"Witch Doctor",
"Stealth Archer",
"Dragonsmith",
"Jester",
"Sky Captain",
"Earth Guardian",
"Ice Enchanter",
"Steam-powered Engineer",
"Moonlight Dancer",
"Sorcerer's Apprentice",
"Shadow Hunter",
"Timeless Wanderer",
"Enigmatic Oracle",
"Sky Elemental",
"Potion Master",
"Shadow Puppeteer",
"Celestial Knight"];
const getRandomNumberC=(max)=>Math.floor(Math.random()*max);
const getRandomChr=()=>`${characterItems[getRandomNumberC(characterItems.length)]}`;
const setRandomChr=()=>{document.getElementById('chr-id').innerText=getRandomChr()};
document.getElementById('chr-btn')
addEventListener('click',setRandomChr);
setRandomChr();

/*situation*/
const situationItems=[
"Fighting off a horde of menacing creatures.",
"Sneaking through a heavily guarded fortress.",
"Riding a dragon through a stormy sky.",
"Exploring an ancient ruin filled with traps and puzzles.",
"Embarking on an epic quest to save the kingdom.",
"Casting powerful spells in a magical duel.",
"Discovering a hidden portal to a parallel dimension.",
"Training with a wise martial arts master.",
"Escaping from a sinking ship in the middle of a storm.",
"Rescuing a kidnapped friend from a villain's lair.",
"Racing against time to defuse a ticking time bomb.",
"Solving a series of riddles to unlock a treasure chest.",
"Engaging in a thrilling high-speed chase through a futuristic city.",
"Fending off a swarm of magical creatures.",
"Navigating a treacherous canyon while rock climbing.",
"Confronting a massive sea monster in a raging storm.",
"Engaging in a thrilling aerial dogfight on the backs of mythical creatures.",
"Sword-fighting with skilled adversaries in a grand tournament.",
"Using a grappling hook to navigate a perilous cliffside.",
"Executing a daring heist in a heavily guarded museum.",
"Competing in an adrenaline-pumping, high-speed hoverboard race.",
"Chasing after a band of thieves through a bustling market.",
"Hunting down a legendary and elusive creature in the wilderness.",
"Performing a gravity-defying dance routine on a floating platform.",
"Engaging in a thrilling lightsaber duel in a futuristic cityscape.",
"Using a magical bow to shoot arrows of different elements.",
"Surviving an epic gladiator-style battle in a colossal arena.",
"Commanding a fleet of steam-powered war machines in an epic war.",
"Unraveling a grand conspiracy in a noir detective investigation.",
"Battling against hordes of mechanical enemies in a post-apocalyptic world."];
const getRandomNumberS=(max)=>Math.floor(Math.random()*max);
const getRandomStn=()=>`${situationItems[getRandomNumberS(situationItems.length)]}`;
const setRandomStn=()=>{document.getElementById('stn-id').innerText=getRandomStn()};
document.getElementById('stn-btn')
addEventListener('click',setRandomStn);
setRandomStn();

/*medium/style*/
const mediumItems=[
"Watercolor",
"Illustration",
"Ink",
"Collage",
"Oil",
"3D",
"Realistic",
"Chalk",
"Abstract",
"Charcoal",
"Gouache",
"Pixel",
"Acrylic",
"Mosaic",
"Sketch",
"Oil Pastels",
"Color Pencils",
"Neon",
"Caricature",
"Anime",
"Soft Pastels"
];
const getRandomNumberM=(max)=>Math.floor(Math.random()*max);
const getRandomMdm=()=>`${mediumItems[getRandomNumberM(mediumItems.length)]}`;
const setRandomMdm=()=>{document.getElementById('mdm-id').innerText=getRandomMdm()};
document.getElementById('mdm-btn')
addEventListener('click',setRandomMdm);
setRandomMdm();

/*color*/
colorcontainer=document.querySelector(".color-container")
const refreshBtn=document.querySelector(".refresh-btn");
const generateColor=()=>{
  colorcontainer.innerHTML="";
  
      let randomHex=Math.floor(Math.random()*0xffffff).toString(16);
      randomHex=`#${randomHex.padStart(6,"0")}`;
      const color = document.createElement("li");
      color.classList.add("color");
      color.innerHTML=`<div class="rect-box" style="background: ${randomHex}"></div>
                       <span class="hex-value">${randomHex}</span>`;
      color.addEventListener("click",()=>copyColor(color,randomHex));                 
      colorcontainer.appendChild(color);

}
generateColor();

const copyColor=(elem,hexVal)=>{
  const colorElement=elem.querySelector(".hex-value");
  navigator.clipboard.writeText(hexVal).then(()=>{
    colorElement.innerText="Copied";
    setTimeout(()=>colorElement.innerText=hexVal,1000);
  }).catch(()=>alert("Failed to copy the color code!"));
}

refreshBtn.addEventListener("click", generateColor);

