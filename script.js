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
  igLink.href = 'https://ig.me/m/YOURINSTAGRAMHANDLE';
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

renderSongs();
generateSketch();
renderNote();
runTimer();