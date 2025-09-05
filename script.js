const moods = {
  happy: {
    quotes: [
      "Happiness is a journey, not a destination.",
      "Smile, it’s contagious! 😄",
      "Do more of what makes you happy."
    ],
    suggestion: "Share your happiness with a friend! 🎉",
    bg: "linear-gradient(to right, #f9d423, #ff4e50)"
  },
  sad: {
    quotes: [
      "Tough times never last, but tough people do.",
      "It’s okay to not be okay 💙",
      "Every storm runs out of rain."
    ],
    suggestion: "Listen to calm music or write your thoughts.",
    bg: "linear-gradient(to right, #6a11cb, #2575fc)"
  },
  stressed: {
    quotes: [
      "Relax, breathe, let it go. 🧘",
      "Don’t stress over things you can’t control.",
      "Take it one step at a time."
    ],
    suggestion: "Take a 5-minute meditation break.",
    bg: "linear-gradient(to right, #56ab2f, #a8e063)"
  },
  bored: {
    quotes: [
      "Boredom is the birthplace of creativity. 🎨",
      "Try something new today!",
      "Even doing nothing can be productive."
    ],
    suggestion: "Read a book or try a quick workout.",
    bg: "linear-gradient(to right, #ff9966, #ff5e62)"
  },
  excited: {
    quotes: [
      "Great things are coming your way! 🌟",
      "Energy flows where excitement goes.",
      "Stay excited, stay alive!"
    ],
    suggestion: "Channel your excitement into a new project!",
    bg: "linear-gradient(to right, #f7971e, #ffd200)"
  },
  angry: {
    quotes: [
      "Anger is one letter short of danger.",
      "Stay calm, let it pass. ❤️",
      "Count to 10 before reacting."
    ],
    suggestion: "Take a deep breath or go for a short walk.",
    bg: "linear-gradient(to right, #cb2d3e, #ef473a)"
  },
  relaxed: {
    quotes: [
      "Peace begins with a smile. ☮️",
      "Relaxation is the key to clarity.",
      "Breathe deeply and let go."
    ],
    suggestion: "Enjoy some tea or calming music.",
    bg: "linear-gradient(to right, #00c9ff, #92fe9d)"
  },
  tired: {
    quotes: [
      "Rest is productive too. 😴",
      "Recharge your energy for tomorrow.",
      "Fatigue is the best pillow."
    ],
    suggestion: "Take a nap or sleep early tonight.",
    bg: "linear-gradient(to right, #373b44, #4286f4)"
  },
  confused: {
    quotes: [
      "Confusion is the first step to clarity.",
      "It’s okay to not have all the answers 🤔",
      "Keep learning, keep exploring."
    ],
    suggestion: "Write down your thoughts to gain clarity.",
    bg: "linear-gradient(to right, #c31432, #240b36)"
  },
  love: {
    quotes: [
      "Love is all you need. ❤️",
      "Love makes the world go round.",
      "Spread love everywhere you go."
    ],
    suggestion: "Tell someone how much they mean to you.",
    bg: "linear-gradient(to right, #ff758c, #ff7eb3)"
  }
};

function setMood(mood) {
  const moodData = moods[mood];
  const randomQuote = moodData.quotes[Math.floor(Math.random() * moodData.quotes.length)];

  document.getElementById("quote").innerText = randomQuote;
  document.getElementById("suggestion").innerText = moodData.suggestion;
  document.body.style.background = moodData.bg;
}
