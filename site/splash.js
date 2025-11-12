const splashes = [
    "good luck!",
    "kys pronoun",
    "awespoem",
    "uaopau oauoauoa 'faggot' aouaou",
    "he blocked me On my way!",
    "baby do you know what you wanna hear?",
    "hold each other closer like we're birds of a feather",
    "i thought, maybe, it would come to this / shot my arrow and it never hit",
    "who give a garf, its website",
    "fun fact: i spend 42$ a year on this site",
    "HHHHHHHHHHHHHHH",
    "cue the constant companions lemotif",
    "contrary to aggrandicize jamie paige, i DO only run on love and spite. yeah. how about that one.",
    "go three letter word yourself",
    "booger x penguin canon",
    "ur mom",
    "im peril",
    "had i not been so easy on you, thered be time to rectify you!",
    "burga",
    "BORN TO CODE. INTERNET IS A FUCK. 鬼神 Kill Em All 1989. I am PISSED OFF. 410,757,864,530 UNFINISHED SITE REWORKS."
];
function splash() {
	document.getElementById("splash").innerHTML =
		splashes[Math.floor(Math.random() * splashes.length)];
}