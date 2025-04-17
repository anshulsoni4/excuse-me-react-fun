
export interface Excuse {
  id: number;
  text: string;
  category: string;
}

export interface Category {
  id: string;
  name: string;
  emoji: string;
  color: string;
}

export const categories: Category[] = [
  { id: "text", name: "Didn't text back", emoji: "📱", color: "bg-pink-200" },
  { id: "deadline", name: "Missed deadline", emoji: "⏰", color: "bg-blue-200" },
  { id: "ghost", name: "Ghosted someone", emoji: "👻", color: "bg-purple-200" },
  { id: "late", name: "Being late", emoji: "🏃", color: "bg-yellow-200" },
  { id: "cancel", name: "Canceling plans", emoji: "🙅‍♀️", color: "bg-green-200" },
  { id: "borrow", name: "Borrowing money", emoji: "💸", color: "bg-red-200" },
  { id: "work", name: "Skipping work", emoji: "💼", color: "bg-indigo-200" },
  { id: "party", name: "Leaving early", emoji: "🚪", color: "bg-orange-200" },
];

export const excuses: Excuse[] = [
  // Didn't text back excuses
  { id: 1, text: "Sorry, my phone was kidnapped by my cat who refused to give it back until I promised extra treats", category: "text" },
  { id: 2, text: "I was responding to your text in my head and genuinely thought I sent it", category: "text" },
  { id: 3, text: "My thumbs went on strike demanding better working conditions", category: "text" },
  { id: 4, text: "I was abducted by aliens who had terrible Wi-Fi", category: "text" },
  { id: 5, text: "I dropped my phone in a parallel universe where time moves slower", category: "text" },
  
  // Missed deadline excuses
  { id: 6, text: "My document was almost finished when my computer decided to identify as a toaster", category: "deadline" },
  { id: 7, text: "Time is a social construct, so technically, there's no such thing as 'late'", category: "deadline" },
  { id: 8, text: "I was held hostage by a Netflix series finale", category: "deadline" },
  { id: 9, text: "My calendar app glitched and showed all deadlines in dog years", category: "deadline" },
  { id: 10, text: "The project was 99% complete but then Mercury went into retrograde", category: "deadline" },
  
  // Ghosted someone excuses
  { id: 11, text: "I wasn't ghosting you, I was giving you a chance to miss my amazing personality", category: "ghost" },
  { id: 12, text: "Sorry, I entered the witness protection program temporarily", category: "ghost" },
  { id: 13, text: "My phone died and took my social battery with it", category: "ghost" },
  { id: 14, text: "I was practicing social distancing before it was cool", category: "ghost" },
  { id: 15, text: "My therapist suggested I take a break from awesome people because I was getting too cool", category: "ghost" },
  
  // Being late excuses
  { id: 16, text: "I was on time in another time zone", category: "late" },
  { id: 17, text: "My clock was experiencing technical difficulties", category: "late" },
  { id: 18, text: "I had to wait for my shadow to catch up", category: "late" },
  { id: 19, text: "I got caught in an existential loop questioning why we're always rushing", category: "late" },
  { id: 20, text: "My alarm spoke to me in a foreign language this morning", category: "late" },
  
  // Canceling plans excuses
  { id: 21, text: "My horoscope specifically said to avoid fun today", category: "cancel" },
  { id: 22, text: "I suddenly developed an allergic reaction to making good decisions", category: "cancel" },
  { id: 23, text: "My pet goldfish is having an emotional crisis and needs me", category: "cancel" },
  { id: 24, text: "I accidentally scheduled myself for mandatory napping", category: "cancel" },
  { id: 25, text: "I have to alphabetize my spice rack—it's an emergency", category: "cancel" },
  
  // Borrowing money excuses
  { id: 26, text: "My money is currently in a long-distance relationship with my bank account", category: "borrow" },
  { id: 27, text: "I invested all my money in NFTs of pictures of my lunch", category: "borrow" },
  { id: 28, text: "My wallet is practicing social distancing from my expenses", category: "borrow" },
  { id: 29, text: "I'm temporarily financially embarrassed until my inheritance from that Nigerian prince comes through", category: "borrow" },
  { id: 30, text: "My budget has decided to quiet quit", category: "borrow" },
  
  // Skipping work excuses
  { id: 31, text: "I can't come to work because I'm trying to figure out why the dinosaurs didn't have a space program", category: "work" },
  { id: 32, text: "My bed and I are in a serious relationship and going through separation anxiety", category: "work" },
  { id: 33, text: "I'm observing the national holiday of 'Not Today'", category: "work" },
  { id: 34, text: "I've come down with a case of selective productivity disorder", category: "work" },
  { id: 35, text: "My motivation called in sick, so I had to as well", category: "work" },
  
  // Leaving early excuses
  { id: 36, text: "I need to leave because my imaginary friend is waiting outside", category: "party" },
  { id: 37, text: "My plant texted that it needs watering immediately", category: "party" },
  { id: 38, text: "I just remembered I left my identity in my other personality", category: "party" },
  { id: 39, text: "My Netflix account threatened to watch the next episode without me", category: "party" },
  { id: 40, text: "I have an urgent appointment with my bed to discuss dreams", category: "party" },
];
