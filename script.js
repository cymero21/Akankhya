const songs = [
  [
    { title: "Midas Touch", artist: "AURORA", url: "https://open.spotify.com/search/Midas%20Touch%20AURORA" },
    { title: "How to Save a Life", artist: "The Fray", url: "https://open.spotify.com/search/How%20to%20Save%20a%20Life%20The%20Fray" }
  ],
  [
    { title: "Let Me", artist: "Harry Hudson", url: "https://open.spotify.com/search/Let%20Me%20Harry%20Hudson" },
    { title: "Are You Bored Yet?", artist: "Wallows ft. Clairo", url: "https://open.spotify.com/search/Are%20You%20Bored%20Yet%20Wallows%20Clairo" }
  ],
  [
    { title: "Dandelions", artist: "Ruth B.", url: "https://open.spotify.com/search/Dandelions%20Ruth%20B" },
    { title: "Yellow", artist: "Coldplay", url: "https://open.spotify.com/search/Yellow%20Coldplay" }
  ],
  [
    { title: "Beautiful Things", artist: "Benson Boone", url: "https://open.spotify.com/search/Beautiful%20Things%20Benson%20Boone" },
    { title: "Dancing With Your Ghost", artist: "Sasha Alex Sloan", url: "https://open.spotify.com/search/Dancing%20With%20Your%20Ghost%20Sasha%20Alex%20Sloan" }
  ],
  [
    { title: "Until I Found You", artist: "Stephen Sanchez ft. Em Beihold", url: "https://open.spotify.com/search/Until%20I%20Found%20You%20Stephen%20Sanchez" },
    { title: "Strangers", artist: "Kenya Grace", url: "https://open.spotify.com/search/Strangers%20Kenya%20Grace" }
  ],
  [
    { title: "BIRDS OF A FEATHER", artist: "Billie Eilish", url: "https://open.spotify.com/search/Birds%20of%20a%20Feather%20Billie%20Eilish" },
    { title: "Running With The Wolves", artist: "AURORA", url: "https://open.spotify.com/search/Running%20With%20The%20Wolves%20AURORA" }
  ],
  [
    { title: "Heat Waves", artist: "Glass Animals", url: "https://open.spotify.com/search/Heat%20Waves%20Glass%20Animals" },
    { title: "Can I Call You Tonight?", artist: "Dayglow", url: "https://open.spotify.com/search/Can%20I%20Call%20You%20Tonight%20Dayglow" }
  ],
  [
    { title: "Meet Me At Our Spot", artist: "WILLOW, THE ANXIETY", url: "https://open.spotify.com/search/Meet%20Me%20At%20Our%20Spot%20WILLOW" },
    { title: "White Roses", artist: "Glass Animals", url: "https://open.spotify.com/search/White%20Roses%20Glass%20Animals" }
  ],
  [
    { title: "Daylight", artist: "David Kushner", url: "https://open.spotify.com/search/Daylight%20David%20Kushner" },
    { title: "Constellations", artist: "Jade LeMac", url: "https://open.spotify.com/search/Constellations%20Jade%20LeMac" }
  ],
  [
    { title: "Would That I", artist: "Hozier", url: "https://open.spotify.com/search/Would%20That%20I%20Hozier" },
    { title: "Noticed", artist: "Lil Mosey", url: "https://open.spotify.com/search/Noticed%20Lil%20Mosey" }
  ],
  [
    { title: "Daddy Issues", artist: "The Neighbourhood", url: "https://open.spotify.com/search/Daddy%20Issues%20The%20Neighbourhood" },
    { title: "Love Me Not", artist: "Ravyn Lenae", url: "https://open.spotify.com/search/Love%20Me%20Not%20Ravyn%20Lenae" }
  ],
  [
    { title: "Agnes", artist: "Glass Animals", url: "https://open.spotify.com/search/Agnes%20Glass%20Animals" },
    { title: "Lost in the Ocean", artist: "Glass Animals", url: "https://open.spotify.com/search/Lost%20in%20the%20Ocean%20Glass%20Animals" }
  ],
  [
    { title: "Let Her Go", artist: "Passenger", url: "https://open.spotify.com/search/Let%20Her%20Go%20Passenger" },
    { title: "Jesus in LA", artist: "Alec Benjamin", url: "https://open.spotify.com/search/Jesus%20in%20LA%20Alec%20Benjamin" }
  ],
  [
    { title: "8TEEN", artist: "Khalid", url: "https://open.spotify.com/search/8TEEN%20Khalid" },
    { title: "Older", artist: "Sasha Alex Sloan", url: "https://open.spotify.com/search/Older%20Sasha%20Alex%20Sloan" }
  ],
  [
    { title: "reason", artist: "OMAH LAY", url: "https://open.spotify.com/search/reason%20Omah%20Lay" },
    { title: "Sweet Tea (Aduke)", artist: "BNXN", url: "https://open.spotify.com/search/Sweet%20Tea%20Aduke%20BNXN" }
  ],
  [
    { title: "Die First", artist: "Nessa Barrett", url: "https://open.spotify.com/search/Die%20First%20Nessa%20Barrett" },
    { title: "Constellations", artist: "Jade LeMac", url: "https://open.spotify.com/search/Constellations%20Jade%20LeMac" }
  ],
  [
    { title: "Folake", artist: "taves", url: "https://open.spotify.com/search/Folake%20taves" },
    { title: "Eleyele", artist: "taves", url: "https://open.spotify.com/search/Eleyele%20taves" }
  ],
  [
    { title: "Overdrive", artist: "Post Malone", url: "https://open.spotify.com/search/Overdrive%20Post%20Malone" },
    { title: "Babydoll", artist: "Dominic Fike", url: "https://open.spotify.com/search/Babydoll%20Dominic%20Fike" }
  ],
  [
    { title: "Pidgin & English", artist: "BNXN", url: "https://open.spotify.com/search/Pidgin%20English%20BNXN" },
    { title: "Arike", artist: "Kunmie", url: "https://open.spotify.com/search/Arike%20Kunmie" }
  ],
  [
    { title: "break up song", artist: "Chance Peña", url: "https://open.spotify.com/search/break%20up%20song%20Chance%20Pena" },
    { title: "i am not who i was", artist: "Chance Peña", url: "https://open.spotify.com/search/i%20am%20not%20who%20i%20was%20Chance%20Pena" }
  ],
  [
    { title: "Ordinary Life", artist: "The Weeknd", url: "https://open.spotify.com/search/Ordinary%20Life%20The%20Weeknd" },
    { title: "Paper Planes", artist: "M.I.A.", url: "https://open.spotify.com/search/Paper%20Planes%20MIA" }
  ],
  [
    { title: "this is what heartbreak feels like", artist: "JVKE", url: "https://open.spotify.com/search/this%20is%20what%20heartbreak%20feels%20like%20JVKE" },
    { title: "Chlorine", artist: "Twenty One Pilots", url: "https://open.spotify.com/search/Chlorine%20Twenty%20One%20Pilots" }
  ],
  [
    { title: "Heathens", artist: "Twenty One Pilots", url: "https://open.spotify.com/search/Heathens%20Twenty%20One%20Pilots" },
    { title: "We Are Young", artist: "fun. ft. Janelle Monáe", url: "https://open.spotify.com/search/We%20Are%20Young%20fun%20Janelle%20Monae" }
  ],
  [
    { title: "I'll Keep On", artist: "NF ft. Jeremiah Carlson", url: "https://open.spotify.com/search/I%27ll%20Keep%20On%20NF" },
    { title: "After Dark", artist: "Mr.Kitty", url: "https://open.spotify.com/search/After%20Dark%20Mr%20Kitty" }
  ],
  [
    { title: "Flashed Junk Mind", artist: "Milky Chance", url: "https://open.spotify.com/search/Flashed%20Junk%20Mind%20Milky%20Chance" },
    { title: "I Feel Like I'm Drowning", artist: "Two Feet", url: "https://open.spotify.com/search/I%20Feel%20Like%20I%27m%20Drowning%20Two%20Feet" }
  ],
  [
    { title: "On Melancholy Hill", artist: "Gorillaz", url: "https://open.spotify.com/search/On%20Melancholy%20Hill%20Gorillaz" },
    { title: "No One Noticed", artist: "The Marías", url: "https://open.spotify.com/search/No%20One%20Noticed%20The%20Marias" }
  ],
  [
    { title: "Walking On A Dream", artist: "Empire Of The Sun", url: "https://open.spotify.com/search/Walking%20On%20A%20Dream%20Empire%20Of%20The%20Sun" },
    { title: "Out of My League", artist: "Fitz and The Tantrums", url: "https://open.spotify.com/search/Out%20of%20My%20League%20Fitz%20and%20The%20Tantrums" }
  ],
  [
    { title: "The Adults Are Talking", artist: "The Strokes", url: "https://open.spotify.com/search/The%20Adults%20Are%20Talking%20The%20Strokes" },
    { title: "Tidal", artist: "Noah Kahan", url: "https://open.spotify.com/search/Tidal%20Noah%20Kahan" }
  ],
  [
    { title: "Call Your Mom", artist: "Noah Kahan", url: "https://open.spotify.com/search/Call%20Your%20Mom%20Noah%20Kahan" },
    { title: "Everywhere, Everything", artist: "Noah Kahan ft. Gracie Abrams", url: "https://open.spotify.com/search/Everywhere%20Everything%20Noah%20Kahan%20Gracie%20Abrams" }
  ],
  [
    { title: "One of These Nights", artist: "Eagles", url: "https://open.spotify.com/search/One%20of%20These%20Nights%20Eagles" },
    { title: "The Roads", artist: "Jonah Kagen", url: "https://open.spotify.com/search/The%20Roads%20Jonah%20Kagen" }
  ],
  [
    { title: "Good News", artist: "Shaboozey", url: "https://open.spotify.com/search/Good%20News%20Shaboozey" },
    { title: "Home", artist: "AURORA", url: "https://open.spotify.com/search/Home%20AURORA" }
  ]
];

const sketches = [
  "sketch a boat and let me see.",
  "sketch a window with rain outside.",
  "sketch something that made you smile today.",
  "sketch a flower from memory — no looking.",
  "sketch your hand holding something you love.",
  "sketch a city at night, just the skyline.",
  "sketch an eye. make it expressive.",
  "sketch something you wish existed.",
  "sketch a chair with a coat draped on it.",
  "sketch a bird mid-flight.",
  "sketch what today felt like.",
  "sketch a door you'd want to open.",
  "sketch something small that people overlook.",
  "sketch a face with no features. just the shape.",
  "sketch a tree — in whatever season you feel like it's been.",
  "sketch a cup. make it yours.",
  "sketch a place you'd go to be alone.",
  "sketch two hands, not touching but close.",
  "sketch the view from where you're sitting right now.",
  "sketch something you haven't thought about in years."
];

const notes = [
  "Some people make the world quieter just by being in it. You're one of them.",
  "Not everyone gets a playlist. Just so you know.",
  "I think about the way you talk sometimes. It's a whole thing.",
  "You have a good energy, Akankhya. The kind people write songs about.",
  "This took longer to build than I'd like to admit. Worth it though.",
  "Careful with the songs. I picked them on purpose.",
  "You make ordinary conversations feel like something worth remembering.",
  "I made this for you. That should say something.",
  "There's something about people who sketch and sing and dance — they feel things differently.",
  "I don't know what your laugh sounds like in person yet. I think about that sometimes.",
  "Some things you build because you want to. This is one of those things.",
  "The songs get better as you keep listening. So does the company.",
  "You're interesting, Akankhya. Like, genuinely.",
  "I hope today is as good as you are.",
  "One day you'll sketch something and I'll recognise it immediately. Can't wait for that.",
  "Talking to you doesn't feel like something I have to do. That's rare.",
  "I added your name to this thing on purpose. I want you to feel that.",
  "Good people deserve good songs. That's it.",
  "Stay curious. Stay you.",
  "Whatever today threw at you — you handled it. Even if it didn't feel like it."
];

function getDayIndex(arr) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const diff = now - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear % arr.length;
}

function renderSongs() {
  const pair = songs[getDayIndex(songs)];
  const grid = document.getElementById('songs-grid');
  grid.innerHTML = pair.map((s, i) => `
    <div class="song-card">
      <span class="song-num">Track 0${i+1}</span>
      <p class="song-title">${s.title}</p>
      <p class="song-artist">${s.artist}</p>
      <a class="spotify-btn" href="${s.url}" target="_blank">
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
        Listen
      </a>
    </div>
  `).join('');
}

async function generateSketch() {
  const el = document.getElementById('sketch-prompt');
  const today = new Date().toDateString();
  const cached = localStorage.getItem('sketch_' + today);
  if (cached) { el.textContent = cached; return; }
  el.textContent = 'thinking of something...';
  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 80,
        messages: [{
          role: 'user',
          content: 'Give me one short, fun, beginner-friendly sketch prompt for someone who loves sketching, dancing, and singing. One sentence only, starting with the word "sketch". Make it creative and specific — not generic. No punctuation at the end. Just the prompt, nothing else.'
        }]
      })
    });
    const data = await res.json();
    const prompt = data.content[0].text.trim();
    localStorage.setItem('sketch_' + today, prompt);
    el.textContent = prompt;
  } catch(e) {
    el.textContent = 'sketch something that made you smile today';
  }
}

function renderNote() {
  document.getElementById('daily-note').textContent = '"' + notes[getDayIndex(notes)] + '"';
}

function pickMood(btn, mood) {
  document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  const result = document.getElementById('mood-result');
  const confirm = document.getElementById('mood-confirm');
  const igLink = document.getElementById('insta-link');
  const msgs = {
    "I'm good ♡": "that's good to hear. ♡",
    "I'm surviving lol": "surviving counts. you're doing fine.",
    "not my day": "that's okay. tomorrow's new."
  };
  confirm.textContent = msgs[mood] || '';
  igLink.href = 'https://ig.me/m/cymero_';
  result.classList.add('show');
}

function runTimer() {
  function update() {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    const diff = end - now;
    const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
    const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    document.getElementById('timer-display').textContent = `${h}:${m}:${s}`;
  }
  update();
  setInterval(update, 1000);
}

// ── QUIZ GAME ─────────────────────────────────────────────────
//
// HOW TO ADD YOUR OWN "ABOUT ME" QUESTIONS:
// Copy this format and add to the personalQuestions array below:
//
// {
//   category: 'about cymero',
//   question: 'What is Cymero\'s favourite colour?',
//   hint: 'think dark, think mood, think him.',
//   options: ['Red', 'Black', 'Blue', 'Green'],
//   answer: 'Black'
// },
//
// Rules:
// - options: exactly 4 choices, one must match answer exactly
// - hint: one short sentence, teasing but fair
// - answer: must match one of the options exactly (case sensitive)

const personalQuestions = [
  // ── ADD YOUR PERSONAL QUESTIONS BELOW THIS LINE ──
  {
    category: 'about cymero',
    question: "What is Daniel's favourite colour?",
    options: ['Red', 'Black', 'Blue', 'Green'],
    answer: 'Black'
  },
  {
    category: 'about cymero',
    question: "Is Daniel attracted to you?",
    options: ['No', 'Not sure', 'Yes', 'HELL YEAHHH'],
    answer: 'HELL YEAHHH'
  },
  {
    category: 'about cymero',
    question: "What is Daniel's favourite song?",
    options: ['Agnes', 'White Roses', 'Blinding Lights', 'How to save a life'],
    answer: 'How to save a life'
  },
  {
    category: 'about cymero',
    question: "Will Daniel let you spit in his mouth?",
    options: ['Nahh', 'Not sure', 'Yes', 'HELL YEAHHH'],
    answer: 'HELL YEAHHH'
  },
  {
    category: 'about cymero',
    question: "Will Daniel let you dominate him?",
    options: ['Nahh', 'Not sure', 'Yes', 'HELL YEAHHH'],
    answer: 'HELL YEAHHH'
  },
  {
    category: 'about cymero',
    question: "What is Daniel's favourite word to say when he's horny?",
    options: ['oh shit', 'Good lord', 'help mee', 'Fuckkk'],
    answer: 'Fuckkk'
  },
  {
    category: 'about cymero',
    question: "Will Daniel let you cuddle him?",
    options: ['Nahh', 'Not sure', 'Yes', 'HELL YEAHHH'],
    answer: 'HELL YEAHHH'
  },
  {
    category: 'about cymero',
    question: "Who is Daniel's favorite person",
    options: ['Drake', 'taylor swift', 'akankhya', 'modi'],
    answer: 'akankhya'
  },
];

const generalQuestions = [
  // MUSIC
  {
    category: 'music',
    question: 'Which artist released the album "Melodrama" in 2017?',
    hint: 'a New Zealander who wrote it alone at 19.',
    options: ['Billie Eilish', 'Lorde', 'Halsey', 'Lana Del Rey'],
    answer: 'Lorde'
  },
  {
    category: 'music',
    question: 'What does BPM stand for in music?',
    hint: 'it s literally how fast your heart should beat to the song.',
    options: ['Bass Per Minute', 'Beats Per Measure', 'Beats Per Minute', 'Beat Pulse Mode'],
    answer: 'Beats Per Minute'
  },
  {
    category: 'music',
    question: 'Which instrument has 88 keys?',
    hint: 'it lives in concert halls and also sad bedrooms.',
    options: ['Organ', 'Piano', 'Harpsichord', 'Synthesizer'],
    answer: 'Piano'
  },
  {
    category: 'music',
    question: 'AURORA is from which country?',
    hint: 'cold, fjords, very dramatic landscapes.',
    options: ['Sweden', 'Denmark', 'Norway', 'Iceland'],
    answer: 'Norway'
  },
  {
    category: 'music',
    question: 'What genre is Glass Animals primarily associated with?',
    hint: 'psychedelic something — not quite pop, not quite indie.',
    options: ['R&B', 'Indie Pop', 'Dream Pop', 'Alternative R&B'],
    answer: 'Indie Pop'
  },
  // ART
  {
    category: 'art',
    question: 'Who painted the Mona Lisa?',
    hint: 'Italian. genius. also designed war machines.',
    options: ['Michelangelo', 'Raphael', 'Leonardo da Vinci', 'Donatello'],
    answer: 'Leonardo da Vinci'
  },
  {
    category: 'art',
    question: 'What are the three primary colours?',
    hint: 'the ones you cannot make by mixing others.',
    options: ['Red, Yellow, Blue', 'Red, Green, Blue', 'Cyan, Magenta, Yellow', 'Orange, Purple, Green'],
    answer: 'Red, Yellow, Blue'
  },
  {
    category: 'art',
    question: 'Which art movement is Salvador Dalí associated with?',
    hint: 'melting clocks. dreams. the unconscious mind.',
    options: ['Cubism', 'Surrealism', 'Expressionism', 'Dadaism'],
    answer: 'Surrealism'
  },
  {
    category: 'art',
    question: 'What is a "still life" painting?',
    hint: 'things that do not move, arranged and painted.',
    options: ['A portrait of a sleeping person', 'A painting of inanimate objects', 'A landscape at sunset', 'A self-portrait'],
    answer: 'A painting of inanimate objects'
  },
  {
    category: 'art',
    question: 'Frida Kahlo was a painter from which country?',
    hint: 'she painted herself endlessly, and the world paid attention.',
    options: ['Brazil', 'Colombia', 'Mexico', 'Argentina'],
    answer: 'Mexico'
  },
  // HISTORY
  {
    category: 'history',
    question: 'In which year did World War II end?',
    hint: 'mid-forties. atomic bombs. the world exhaled.',
    options: ['1943', '1944', '1945', '1946'],
    answer: '1945'
  },
  {
    category: 'history',
    question: 'Which ancient wonder was located in Alexandria, Egypt?',
    hint: 'you could see ships from miles away because of it.',
    options: ['The Colossus of Rhodes', 'The Lighthouse of Alexandria', 'The Hanging Gardens', 'The Temple of Artemis'],
    answer: 'The Lighthouse of Alexandria'
  },
  {
    category: 'history',
    question: 'Who was the first woman to win a Nobel Prize?',
    hint: 'she won it twice, in two different sciences.',
    options: ['Rosalind Franklin', 'Marie Curie', 'Ada Lovelace', 'Florence Nightingale'],
    answer: 'Marie Curie'
  },
  {
    category: 'history',
    question: 'The Berlin Wall fell in which year?',
    hint: 'the Cold War was basically over after this night.',
    options: ['1987', '1988', '1989', '1991'],
    answer: '1989'
  },
  // COUNTRIES
  {
    category: 'countries',
    question: 'What is the capital of Australia?',
    hint: 'not Sydney. people always get this wrong.',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    answer: 'Canberra'
  },
  {
    category: 'countries',
    question: 'Which country has the most natural lakes in the world?',
    hint: 'cold, polite, hockey-obsessed.',
    options: ['Russia', 'Canada', 'Finland', 'Norway'],
    answer: 'Canada'
  },
  {
    category: 'countries',
    question: 'What language is spoken in Brazil?',
    hint: 'South America, but not Spanish.',
    options: ['Spanish', 'Portuguese', 'French', 'English'],
    answer: 'Portuguese'
  },
  {
    category: 'countries',
    question: 'Which is the smallest country in the world?',
    hint: 'it fits inside a city, and has its own postal stamps.',
    options: ['Monaco', 'San Marino', 'Liechtenstein', 'Vatican City'],
    answer: 'Vatican City'
  },
  // BIOLOGY
  {
    category: 'biology',
    question: 'How many chambers does the human heart have?',
    hint: 'two on top, two on bottom.',
    options: ['2', '3', '4', '6'],
    answer: '4'
  },
  {
    category: 'biology',
    question: 'What is the powerhouse of the cell?',
    hint: 'you already know this one.',
    options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Golgi Apparatus'],
    answer: 'Mitochondria'
  },
  {
    category: 'biology',
    question: 'What percentage of the human body is water?',
    hint: 'more than half. stay hydrated.',
    options: ['45%', '60%', '75%', '90%'],
    answer: '60%'
  },
  // MATH
  {
    category: 'math',
    question: 'What is the value of Pi (π) to two decimal places?',
    hint: 'circles live and die by this number.',
    options: ['3.12', '3.14', '3.16', '3.41'],
    answer: '3.14'
  },
  {
    category: 'math',
    question: 'What is 12 squared?',
    hint: 'think of a clock, then multiply it by itself.',
    options: ['124', '140', '144', '148'],
    answer: '144'
  },
  {
    category: 'math',
    question: 'How many sides does a hexagon have?',
    hint: 'bees know this by instinct.',
    options: ['5', '6', '7', '8'],
    answer: '6'
  },
  // ENVIRONMENT
  {
    category: 'environment',
    question: 'What gas do plants absorb during photosynthesis?',
    hint: 'the one we breathe out too much of.',
    options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
    answer: 'Carbon Dioxide'
  },
  {
    category: 'environment',
    question: 'Which ocean is the largest on Earth?',
    hint: 'covers more than a third of the planet\'s surface.',
    options: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
    answer: 'Pacific'
  },
  {
    category: 'environment',
    question: 'What is the main cause of the hole in the ozone layer?',
    hint: 'once used in fridges and spray cans.',
    options: ['Carbon Dioxide', 'Methane', 'CFCs', 'Sulfur Dioxide'],
    answer: 'CFCs'
  },
];

// Merge: personal first, then shuffle general
function buildQuizPool() {
  return [...personalQuestions, ...generalQuestions].sort(() => Math.random() - 0.5);
}

let quizPool = [];
let quizIndex = 0;
let quizScore = 0;
let quizAnswered = false;

function initQuiz() {
  quizPool = buildQuizPool();
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}

function renderQuiz() {
  const card = document.getElementById('quiz-card');
  if (!card) return;

  if (quizIndex >= quizPool.length) {
    card.innerHTML = `
      <p class="quiz-title">you're done ♡</p>
      <p class="quiz-score-final">you got <strong>${quizScore}</strong> out of <strong>${quizPool.length}</strong></p>
      <p class="quiz-hint">${quizScore >= quizPool.length * 0.7 ? 'okay you actually know your stuff.' : quizScore >= quizPool.length * 0.4 ? 'not bad. room to grow.' : 'we need to talk lol.'}</p>
      <button class="quiz-next-btn" onclick="initQuiz()">play again →</button>
    `;
    return;
  }

  const q = quizPool[quizIndex];
  quizAnswered = false;

  const letters = ['A', 'B', 'C', 'D'];
  const optionsHTML = q.options.map((opt, i) => `
    <button class="quiz-option" onclick="answerQuiz(this, '${opt.replace(/'/g, "\\'")}')">
      <span class="quiz-letter">${letters[i]}</span>
      <span class="quiz-opt-text">${opt}</span>
    </button>
  `).join('');

  card.innerHTML = `
    <div class="quiz-meta">
      <span class="quiz-category">${q.category}</span>
      <span class="quiz-progress">${quizIndex + 1} / ${quizPool.length}</span>
    </div>
    <p class="quiz-title">${q.question}</p>
    <p class="quiz-hint">💡 ${q.hint}</p>
    <div class="quiz-options">${optionsHTML}</div>
    <div class="quiz-feedback" id="quiz-feedback"></div>
    <div class="quiz-actions" id="quiz-actions"></div>
  `;
}

function answerQuiz(btn, chosen) {
  if (quizAnswered) return;
  quizAnswered = true;

  const q = quizPool[quizIndex];
  const correct = chosen === q.answer;
  const feedback = document.getElementById('quiz-feedback');
  const actions = document.getElementById('quiz-actions');

  // colour all options
  document.querySelectorAll('.quiz-option').forEach(b => {
    const txt = b.querySelector('.quiz-opt-text').textContent;
    if (txt === q.answer) b.classList.add('quiz-correct');
    else b.classList.add('quiz-wrong');
    b.disabled = true;
  });

  if (correct) {
    quizScore++;
    const wins = ['correct ♡', 'yes!!', 'you got it.', 'that\'s right!', 'knew you\'d get that.'];
    feedback.textContent = wins[Math.floor(Math.random() * wins.length)];
    feedback.className = 'quiz-feedback quiz-fb-correct';
  } else {
    const losses = [
      `it was "${q.answer}" — now you know.`,
      `nope. the answer is "${q.answer}".`,
      `"${q.answer}" was right. keep going.`,
      `not quite. it's "${q.answer}".`
    ];
    feedback.textContent = losses[Math.floor(Math.random() * losses.length)];
    feedback.className = 'quiz-feedback quiz-fb-wrong';
  }

  quizIndex++;
  const label = quizIndex >= quizPool.length ? 'see your score →' : 'next question →';
  actions.innerHTML = `<button class="quiz-next-btn" onclick="renderQuiz()">${label}</button>`;
}

// ── SKETCH CANVAS ────────────────────────────────────────────
let drawing = false, tool = 'pen', brushSize = 5;
let lastX = 0, lastY = 0;

function initCanvas() {
  const canvas = document.getElementById('sketch-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  ctx.strokeStyle = '#2d1f1a';
  ctx.lineWidth = brushSize;

  function getPos(e) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    if (e.touches) {
      return [(e.touches[0].clientX - rect.left) * scaleX, (e.touches[0].clientY - rect.top) * scaleY];
    }
    return [(e.clientX - rect.left) * scaleX, (e.clientY - rect.top) * scaleY];
  }

  function startDraw(e) {
    e.preventDefault();
    drawing = true;
    [lastX, lastY] = getPos(e);
    ctx.beginPath();
    ctx.arc(lastX, lastY, ctx.lineWidth / 2, 0, Math.PI * 2);
    ctx.fillStyle = tool === 'eraser' ? '#faf6f0' : document.getElementById('color-picker').value;
    ctx.fill();
  }

  function draw(e) {
    e.preventDefault();
    if (!drawing) return;
    const [x, y] = getPos(e);
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(x, y);
    ctx.strokeStyle = tool === 'eraser' ? '#faf6f0' : document.getElementById('color-picker').value;
    ctx.lineWidth = tool === 'eraser' ? brushSize * 3 : brushSize;
    ctx.stroke();
    [lastX, lastY] = [x, y];
  }

  function stopDraw() { drawing = false; }

  canvas.addEventListener('mousedown', startDraw);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDraw);
  canvas.addEventListener('mouseleave', stopDraw);
  canvas.addEventListener('touchstart', startDraw, { passive: false });
  canvas.addEventListener('touchmove', draw, { passive: false });
  canvas.addEventListener('touchend', stopDraw);
}

function setTool(t) {
  tool = t;
  document.querySelectorAll('.tool-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('tool-' + t).classList.add('active');
}

function setSize(s) {
  brushSize = s;
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
}

function clearCanvas() {
  const canvas = document.getElementById('sketch-canvas');
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveCanvas() {
  const canvas = document.getElementById('sketch-canvas');
  const link = document.createElement('a');
  link.download = 'my-sketch.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}

renderSongs();
generateSketch();
renderNote();
runTimer();
initQuiz();
initCanvas();
