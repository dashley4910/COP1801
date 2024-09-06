const myDog = {
    fullName: 'Cosmo the Space Dog',
    breed: 'Golden Retriever',
    tvProgram: 'Guardians of the Galaxy',
    notes: 'a telepathic Soviet dog who is the security chief of the space station Knowhere and a member of the Guardians',

    mySound: 'I sound strong and courageous',

    describe () {
        return `Hello, my name is ${this.fullName}, when I bark ${this.mySound}. I starred in the tv show ${this.tvProgram}. My character was a ${this.breed}. I was ${this.notes}. `
    }
};

function displayMyDog() {
    document.getElementById('my-dog').innerText = myDog.describe();
}

function Dog(fullName, breed, tvProgram, notes, canTalk,mySound) {
    this.fullName = fullName;
    this.breed = breed;
    this.tvProgram = tvProgram;
    this.notes = notes;
    this.canTalk = canTalk;
    this.mySound = mySound;

    this.myGreeting = function() {
        return `Hello, my name is ${this.fullName}. When I bark, ${this.mySound}. I starred in the TV show ${this.tvProgram}. My character was a ${this.breed}. I was ${this.notes}. Can I talk? ${this.canTalk ? 'Yes, I can talk!' : 'No, I cannot talk.'}`
    };
}

const myDogConst = new Dog(
    'Astro',
    'Great Dane',
    'The Jetsons',
    'the family dog in a cartoon about a family in the future',
    true,
    'I am not scary',
)

function displayMyDogConst() {
    document.getElementById('my-dog-const').innerText = myDogConst.myGreeting();
}

window.onload = function(){
    displayMyDog();
    displayMyDogConst();
};