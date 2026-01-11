// Reasons database - FIXED SYNTAX
const reasons = [
    { 
        text: "I know u’ve been thru so much stuff that would’ve broken anyone else... but u still have the kindest heart I’ve ever seen. 🥺 The way u saved all that love & sweetness despite the pain is why ur the most special person in my life. I’m so proud of the woman u’ve become. ❤️🩹✨", 
        emoji: "🌟",
        gif: "gif1.gif"
    },
    { 
        text: "Everyone else sees the 'strong' u, but I get to see the 'childish' u. 🧸 It’s my fav thing about us. The fact that u feel safe enough to be a little kid around me means everything. I’ll spend my whole life making sure u never have to hide that side again. 🫂💖", 
        emoji: "💗",
        gif: "gif2.gif"
    },
    { 
        text: "U always talk about ur 'bad habits,' but honestly? I wouldn't change a single thing. 🚫 I don’t want a perfect girl, I just want u. The messy parts, the moody parts, the habits u think r annoying—they r all part of the girl I love. Ur perfect to me coz ur real. 🥺😭❤️ ", 
        emoji: "💕",
        gif: "gif1.gif"
    },
    { 
        // FIXED: Using backticks for multi-line and quotes
        text: `ur emotional intelligence, u understand me better than I understand myself sometimes. 🌎 We have this bond that’s just... different. It’s not just "dating," it’s like our souls finally found a place to rest. I’m so lucky I get to call u mine. 💍🌸

        3 Captions to Make Her Heart Melt 🌊 `, 
        emoji: "🌟",
        gif: "gif2.gif"
    }
];

let currentReasonIndex = 0;
const reasonsContainer = document.getElementById('reasons-container');
const shuffleButton = document.querySelector('.shuffle-button');
const reasonCounter = document.querySelector('.reason-counter');
let isTransitioning = false;

function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card';
    
    const text = document.createElement('div');
    text.className = 'reason-text';
    text.innerHTML = `${reason.emoji} ${reason.text}`;
    
    const gifOverlay = document.createElement('div');
    gifOverlay.className = 'gif-overlay';
    gifOverlay.innerHTML = `<img src="${reason.gif}" alt="Memory" style="width:100%; height:100%; object-fit:cover;">`;
    
    card.appendChild(text);
    card.appendChild(gifOverlay);
    
    gsap.from(card, { opacity: 0, y: 50, duration: 0.5, ease: "back.out" });
    return card;
}

function displayNewReason() {
    if (isTransitioning) return;
    
    // Check if we already finished all reasons
    if (currentReasonIndex >= reasons.length) {
        // Redirection logic
        gsap.to('body', {
            opacity: 0,
            duration: 1,
            onComplete: () => { window.location.href = 'last.html'; }
        });
        return;
    }

    isTransitioning = true;

    // Show the card
    const card = createReasonCard(reasons[currentReasonIndex]);
    reasonsContainer.appendChild(card);
    
    currentReasonIndex++;
    reasonCounter.textContent = `Reason ${currentReasonIndex} of ${reasons.length}`;

    // If that was the last one, transform the button
    if (currentReasonIndex === reasons.length) {
        shuffleButton.textContent = "Enter Our Storylane 💫";
        shuffleButton.classList.add('story-mode');
    }

    setTimeout(() => { isTransitioning = false; }, 500);
}

// Single event listener for the button
shuffleButton.addEventListener('click', () => {
    gsap.to(shuffleButton, { scale: 0.9, duration: 0.1, yoyo: true, repeat: 1 });
    displayNewReason();
});

// Cursor and Float logic (Keep these as you had them)
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX - 15, y: e.clientY - 15, duration: 0.2 });
});

function createFloatingElement() {
    const elements = ['🌸', '✨', '💖', '🦋', '⭐'];
    const element = document.createElement('div');
    element.className = 'floating';
    element.textContent = elements[Math.floor(Math.random() * elements.length)];
    element.style.left = Math.random() * window.innerWidth + 'px';
    element.style.top = window.innerHeight + 'px';
    document.body.appendChild(element);

    gsap.to(element, { y: -window.innerHeight - 100, duration: 10, opacity: 0, onComplete: () => element.remove() });
}
setInterval(createFloatingElement, 2000);
