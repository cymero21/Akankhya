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

// ── WORD SCRAMBLE GAME ───────────────────────────────────────
let scrambleWord = '';
let scrambleHint = '';
let scrambleLetters = [];   // array of {char, id, used}
let scrambleSlots = [];     // array of {letterId | null}
let scrambleLoading = false;
let scrambleSkipped = false;

const scrambleSkipMsgs = [
  "really skipping? okay fine.",
  "Cymero would be disappointed lol.",
  "that one wasn't even hard 😭",
  "skipping?? in this economy??",
  "okay but now you have to type it yourself.",
];

const scrambleWinMsgs = [
  "yes!! you got it ♡",
  "okay you're actually smart.",
  "that's my girl ♡",
  "nailed it.",
  "i knew you'd figure it out.",
];

async function fetchScrambleWord() {
  scrambleLoading = true;
  scrambleSkipped = false;
  renderScramble();

  try {
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 100,
        messages: [{
          role: 'user',
          content: `Give me a single everyday English word (4–7 letters, no spaces, no hyphens) and a short playful hint that helps someone figure out the word without giving it away directly. The word should be common and fun — not obscure.

Respond in EXACTLY this format, nothing else:
WORD: [word in uppercase]
HINT: [one sentence hint, warm and slightly teasing]`
        }]
      })
    });
    const data = await res.json();
    const text = data.content[0].text.trim();
    const wordMatch = text.match(/WORD:\s*([A-Z]+)/i);
    const hintMatch = text.match(/HINT:\s*(.+)/i);
    if (wordMatch && hintMatch) {
      scrambleWord = wordMatch[1].toUpperCase().replace(/[^A-Z]/g, '');
      scrambleHint = hintMatch[1].trim();
    } else throw new Error('bad parse');
  } catch(e) {
    if (!window._scramblePool || window._scramblePool.length === 0) {
      window._scramblePool = [
        { word: 'BLOOM', hint: 'what flowers do, and what you do when you walk into a room.' },
        { word: 'DRIFT', hint: 'what your mind does when the music is really good.' },
        { word: 'GRACE', hint: 'how she moves. how she talks. just how she is.' },
        { word: 'LIGHT', hint: 'it fills a room, and some people do too.' },
        { word: 'CRISP', hint: 'cold mornings, fresh air, that satisfying snap.' },
        { word: 'FLAME', hint: 'warm, beautiful, and a little dangerous.' },
        { word: 'STORM', hint: 'loud, dramatic, then suddenly peaceful.' },
        { word: 'PEARL', hint: 'something small that took years to become beautiful.' },
        { word: 'CEDAR', hint: 'that smell in old wooden places that feels like home.' },
        { word: 'PRISM', hint: 'plain on one side, everything on the other.' },
        { word: 'EMBER', hint: 'what stays glowing long after the fire is gone.' },
        { word: 'FROST', hint: 'it makes the world look quieter than it is.' },
        { word: 'LUNAR', hint: 'anything to do with the thing that controls the tides.' },
        { word: 'MISTY', hint: 'that soft blur between here and somewhere else.' },
        { word: 'AMBER', hint: 'warm golden light trapped in a moment.' },
        { word: 'FLORA', hint: 'the collective name for everything that grows.' },
        { word: 'BLAZE', hint: 'going fast, going bright, going all in.' },
        { word: 'BRAVE', hint: 'not the absence of fear. doing it anyway.' },
        { word: 'CHASE', hint: 'running toward something you really want.' },
        { word: 'DREAM', hint: 'where your brain goes when you stop controlling it.' },
        { word: 'FAITH', hint: 'believing before you have proof.' },
        { word: 'HONEY', hint: 'sweet, slow, made by something that also stings.' },
        { word: 'IVORY', hint: 'the colour of old piano keys and quiet elegance.' },
        { word: 'MAPLE', hint: 'the tree that bleeds sweetness in the cold.' },
        { word: 'OCEAN', hint: 'bigger than your problems, deeper than your thoughts.' },
        { word: 'PIANO', hint: '88 keys and infinite things to say.' },
        { word: 'RIVER', hint: 'always moving, never the same water twice.' },
        { word: 'SUGAR', hint: 'makes everything better, but too much ruins it.' },
        { word: 'VELVET', hint: 'soft in a way that feels almost too good to touch.' },
        { word: 'YOUTH', hint: 'the thing everyone misses when it is already gone.' },
        { word: 'ANGEL', hint: 'something between human and something else entirely.' },
        { word: 'SOLAR', hint: 'everything alive on earth depends on this.' },
        { word: 'CLOUD', hint: 'it looks still but it is always moving.' },
        { word: 'SHORE', hint: 'the edge where two worlds meet.' },
        { word: 'NOBLE', hint: 'doing the right thing when no one is watching.' },
        { word: 'QUIET', hint: 'the loudest thing in an empty room.' },
        { word: 'VIVID', hint: 'colours so bright they feel like a feeling.' },
        { word: 'BRISK', hint: 'cold air that wakes you up faster than coffee.' },
        { word: 'CORAL', hint: 'a colour and a whole living city under the sea.' },
        { word: 'AZURE', hint: 'the specific blue of a sky with nothing in it.' },
        { word: 'CRAFT', hint: 'making something with your hands and your whole attention.' },
        { word: 'GLIDE', hint: 'moving like you are not even trying.' },
        { word: 'SWIRL', hint: 'a spin that does not know where it is going.' },
        { word: 'MIRTH', hint: 'old word for the kind of laughter that fills a room.' },
        { word: 'PLUSH', hint: 'soft, rich, like sinking into something expensive.' },
        { word: 'CHIRP', hint: 'the sound that means morning has started without you.' },
        { word: 'DAISY', hint: 'the flower people pull petals off to make decisions.' },
        { word: 'FLUTE', hint: 'an instrument that sounds like it is made of air.' },
        { word: 'HAZEL', hint: 'eyes that cannot decide between brown and green.' },
        { word: 'LEMON', hint: 'sour until you add sugar, then everything changes.' },
        { word: 'ULTRA', hint: 'beyond the normal. more than expected.' },
        { word: 'VIOLA', hint: 'the instrument between a violin and a cello, always overlooked.' },
        { word: 'ZESTY', hint: 'full of energy and a little sharp, like citrus.' },
        { word: 'KNACK', hint: 'a talent so natural it looks effortless.' },
        { word: 'LOFTY', hint: 'high up, ambitious, reaching for something most people cannot see.' },
        { word: 'MAGIC', hint: 'the explanation when you cannot find a better one.' },
        { word: 'OASIS', hint: 'the one good thing in the middle of something hard.' },
        { word: 'QUEST', hint: 'a journey where the destination is not the point.' },
        { word: 'WITTY', hint: 'sharp and funny in the same breath.' },
        { word: 'ZINGY', hint: 'bright and alive in a way that wakes people up.' },
        { word: 'BERRY', hint: 'small, round, and somehow always the best part of the dessert.' },
        { word: 'FANCY', hint: 'a little extra, on purpose.' },
        { word: 'GLOWY', hint: 'that thing your skin does when you are actually happy.' },
        { word: 'EARTHY', hint: 'grounded, natural, smells like after rain.' },
        { word: 'DAILY', hint: 'not special, but consistent. which is its own kind of special.' },
      ].sort(() => Math.random() - 0.5);
    }
    const f = window._scramblePool.pop();
    scrambleWord = f.word;
    scrambleHint = f.hint;
  }

  // build scrambled letter chips (guaranteed different order)
  const chars = scrambleWord.split('');
  let shuffled;
  do { shuffled = [...chars].sort(() => Math.random() - 0.5); }
  while (shuffled.join('') === scrambleWord);

  scrambleLetters = shuffled.map((ch, i) => ({ char: ch, id: i, used: false }));
  scrambleSlots = Array(scrambleWord.length).fill(null);
  scrambleLoading = false;
  renderScramble();
}

function renderScramble() {
  const card = document.getElementById('scramble-card');
  if (!card) return;

  if (scrambleLoading) {
    card.innerHTML = `
      <p class="sc-label">arrange the letters</p>
      <p class="sc-loading">thinking of a word for you...</p>`;
    return;
  }

  const chipsHTML = scrambleLetters.map(l => `
    <button
      class="sc-chip${l.used ? ' sc-chip-used' : ''}"
      id="chip-${l.id}"
      onclick="placeChip(${l.id})"
      ${l.used ? 'disabled' : ''}
    >${l.char}</button>
  `).join('');

  const slotsHTML = scrambleSlots.map((lid, i) => {
    const filled = lid !== null;
    const ch = filled ? scrambleLetters[lid].char : '';
    return `<button class="sc-slot${filled ? ' sc-slot-filled' : ''}" onclick="removeSlot(${i})">${ch || '&nbsp;'}</button>`;
  }).join('');

  const skippedReveal = scrambleSkipped ? `
    <div class="sc-reveal">
      it was <strong>${scrambleWord}</strong>. ${scrambleSkipMsgs[Math.floor(Math.random() * scrambleSkipMsgs.length)]}
      <br><small>now type it correctly below to continue.</small>
    </div>
    <div class="sc-type-row">
      <input id="sc-type-input" class="sc-type-input" maxlength="${scrambleWord.length}"
        placeholder="type it here..." autocomplete="off" autocorrect="off" spellcheck="false"
        oninput="checkTypeAnswer()" />
    </div>` : `
    <div class="sc-actions">
      <button class="sc-skip" onclick="skipScramble()">skip</button>
    </div>`;

  card.innerHTML = `
    <p class="sc-label">arrange the letters</p>
    <p class="sc-hint">💡 ${scrambleHint}</p>
    <div class="sc-chips" id="sc-chips">${chipsHTML}</div>
    <p class="sc-instruction">tap a letter to place it →</p>
    <div class="sc-slots" id="sc-slots">${slotsHTML}</div>
    <div class="sc-feedback" id="sc-feedback"></div>
    ${skippedReveal}
  `;

  if (scrambleSkipped) {
    const inp = document.getElementById('sc-type-input');
    if (inp) inp.focus();
  }
}

function placeChip(id) {
  if (scrambleSkipped) return;
  const letter = scrambleLetters[id];
  if (letter.used) return;
  // find first empty slot
  const emptyIdx = scrambleSlots.indexOf(null);
  if (emptyIdx === -1) return;
  scrambleSlots[emptyIdx] = id;
  letter.used = true;
  updateScrambleDOM();
  // check if all slots filled
  if (!scrambleSlots.includes(null)) checkScrambleAnswer();
}

function removeSlot(slotIdx) {
  if (scrambleSkipped) return;
  const lid = scrambleSlots[slotIdx];
  if (lid === null) return;
  scrambleLetters[lid].used = false;
  scrambleSlots[slotIdx] = null;
  clearFeedback();
  updateScrambleDOM();
}

function updateScrambleDOM() {
  // update chips
  scrambleLetters.forEach(l => {
    const chip = document.getElementById('chip-' + l.id);
    if (!chip) return;
    chip.disabled = l.used;
    chip.className = 'sc-chip' + (l.used ? ' sc-chip-used' : '');
  });
  // update slots
  const slotsEl = document.getElementById('sc-slots');
  if (slotsEl) {
    slotsEl.innerHTML = scrambleSlots.map((lid, i) => {
      const filled = lid !== null;
      const ch = filled ? scrambleLetters[lid].char : '';
      return `<button class="sc-slot${filled ? ' sc-slot-filled' : ''}" onclick="removeSlot(${i})">${ch || '&nbsp;'}</button>`;
    }).join('');
  }
}

function checkScrambleAnswer() {
  const guess = scrambleSlots.map(lid => scrambleLetters[lid].char).join('');
  const feedback = document.getElementById('sc-feedback');
  if (guess === scrambleWord) {
    feedback.textContent = scrambleWinMsgs[Math.floor(Math.random() * scrambleWinMsgs.length)];
    feedback.className = 'sc-feedback sc-correct';
    // swap skip for next
    const actions = document.querySelector('.sc-actions');
    if (actions) actions.innerHTML = `<button class="sc-next" onclick="fetchScrambleWord()">next word →</button>`;
    // light up slots green
    document.querySelectorAll('.sc-slot').forEach(s => s.classList.add('sc-slot-correct'));
  } else {
    feedback.textContent = 'not quite. tap a slot to remove a letter and try again.';
    feedback.className = 'sc-feedback sc-wrong';
  }
}

function clearFeedback() {
  const fb = document.getElementById('sc-feedback');
  if (fb) { fb.textContent = ''; fb.className = 'sc-feedback'; }
}

function skipScramble() {
  scrambleSkipped = true;
  renderScramble();
}

function checkTypeAnswer() {
  const inp = document.getElementById('sc-type-input');
  if (!inp) return;
  if (inp.value.toUpperCase() === scrambleWord) {
    inp.disabled = true;
    // show next button below input
    const row = document.querySelector('.sc-type-row');
    if (row) row.insertAdjacentHTML('afterend',
      `<div style="text-align:center;margin-top:12px">
        <button class="sc-next" onclick="fetchScrambleWord()">okay next one →</button>
       </div>`);
    const rev = document.querySelector('.sc-reveal');
    if (rev) rev.style.color = 'var(--brown-light)';
  }
}

function initScramble() { fetchScrambleWord(); }

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
initScramble();
initCanvas();
