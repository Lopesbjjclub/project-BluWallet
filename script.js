const encodedUser = 'TG9wZXNqbHM=';
const encodedPass = 'JHN0dUs0NQ==';

document.getElementById("login-btn").addEventListener("click", function() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    const validUsername = atob(encodedUser);
    const validPassword = atob(encodedPass);

    if (username === validUsername && password === validPassword) {
        document.getElementById("login-container").classList.add("hidden");
        document.getElementById("protected-content").classList.remove("hidden");
        displayWords();
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});

document.getElementById("logout-btn").addEventListener("click", function() {
    document.getElementById("protected-content").classList.add("hidden");
    document.getElementById("login-container").classList.remove("hidden");
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
    document.getElementById("error-message").style.display = "none";
});

function displayWords() {
    const sections = {
        "true-words": ["sentence", "never", "peasant", "tornado", "awake", "settle", "Wisdom", "Justice", "Compassion", "Empathy", "Humility", "Perseverance"],
        "random-words": ["Pineapple", "Clock", "Mountain", "Book", "Dog", "Star", "Cloud", "Computer", "Travel", "Music", "Phone", "Chocolate"],
        "moon-words": ["Moon", "Sky", "Night", "Telescope", "Astronaut", "Galaxy", "Orbit", "Crater", "Satellite", "Eclipse", "Comet", "Meteor"],
        "sun-words": ["Sun", "Rainbow", "Heat", "Light", "Summer", "Beach", "Sand", "Sunset", "Sunrise", "Desert", "UV", "VitaminD"],
        "river-words": ["River", "Valley", "Stream", "Waterfall", "Lake", "Rapids", "Canyon", "Pebble", "Fish", "Bridge", "Forest", "Wildlife"],
        "false-words": ["Lie", "Betrayal", "Deception", "Hypocrisy", "Fraud", "Corruption", "maple", "lottery", "screen", "estate", "front", "divorce"]
    };

    for (const [elementId, words] of Object.entries(sections)) {
        document.getElementById(elementId).innerHTML = words.map(word => `<li>${word}</li>`).join('');
    }
}