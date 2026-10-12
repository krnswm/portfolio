/*
  ─────────────────────────────────────────────────────────────
  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
  To add a new play, film or reel, copy one entry and edit it.
  Images: put the file in public/images/ and write its name,
  e.g. image: "/images/shristi.jpg". Leave "" for a placeholder.
  ─────────────────────────────────────────────────────────────
*/

const content = {
  profile: {
    name: "Karan Swami",
    nameHindi: "करण स्वामी",
    role: "Actor & theatre-maker",
    location: "Mumbai | Jaipur",
    available: "Open to roles",
    headline: ["Actor and theatre-maker,", "on stage", "and", "behind it."],
    intro:
      "I perform in theatre and on screen, and I work on the other side of the curtain too: backstage, show graphics, social media and my own short-form content.",
    portrait: "", // e.g. "/images/portrait.jpg"
    email: "karanswm934@gmail.com",
    instagram: "", // e.g. "https://instagram.com/yourhandle"
    youtube: "",
  },

  stats: [
    { value: "03", label: "Plays as actor" },
    { value: "05", label: "Stage productions" },
    { value: "45", label: "Day workshop at JKK" },
    { value: "03", label: "Languages" },
  ],

  actorDetails: [
    { label: "Age", value: "22" },
    { label: "Height", value: "5'10\"" },
    { label: "Based", value: "Mumbai | Jaipur · open to travel" },
    { label: "Languages", value: "Hindi, English, Sign Language" },
  ],

  // type: "stage" or "screen". roles: what you did. featured: shows in Selected Work.
  work: [
    {
      title: "Shristi ka Aakhiri Aadmi",
      titleHindi: "सृष्टि का आख़िरी आदमी",
      year: "2026",
      type: "stage",
      company: "Yatra Theatre",
      director: "Rahul Panwar",
      roles: ["Actor", "Graphics", "Social media", "Backstage"],
      note: "Acted in the play, designed its graphics, ran its social media and worked backstage.",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Holiday",
      year: "2026",
      type: "stage",
      company: "JKK, Jaipur",
      director: "Shubham Agarwal",
      roles: ["Actor", "Backstage", "Graphics & promotion"],
      note: "Performed, worked backstage, and handled the play's graphics and promotion.",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Devised play, Abhinay Darpan",
      year: "2025",
      type: "stage",
      company: "JKK, Jaipur",
      director: "Vishal Vijay",
      roles: ["Actor"],
      note: "Built and performed with the ensemble at the end of a 45-day theatre workshop.",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Kenchuli",
      titleHindi: "केंचुली",
      year: "2025",
      type: "stage",
      company: "Paildooj Art Society",
      director: "Shubham Ameta",
      roles: ["Backstage", "Set & props"],
      note: "",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Mad House",
      year: "2025",
      type: "stage",
      company: "Produced by Indianwomenimpact",
      director: "Mudita Chaaudhary",
      roles: ["Backstage", "Set & props"],
      note: "",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Short film",
      year: "",
      type: "screen",
      company: "Student production, Media & Design final year",
      director: "",
      roles: ["Lead actor", "Direction support"],
      note: "",
      image: "",
      link: "",
      featured: true,
    },
    {
      title: "Ad film",
      year: "",
      type: "screen",
      company: "Student production",
      director: "",
      roles: ["Actor"],
      note: "",
      image: "",
      link: "",
      featured: false,
    },
    {
      title: "Monologue",
      year: "",
      type: "screen",
      company: "Self-shot",
      director: "",
      roles: ["Actor"],
      note: "",
      image: "",
      link: "", // YouTube link
      featured: false,
    },
  ],

  training: [
    { name: "Abhinay Darpan, 45-day theatre workshop", meta: "JKK · Vishal Vijay · 2025" },
    { name: "Paper Stars Jaipur Actor's Training Workshop", meta: "Cinema acting" },
    { name: "Intensive Acting & Audition Workshop", meta: "6 days" },
    { name: "Acting workshop with Prerna Joshi", meta: "1 day" },
  ],

  fourthFrame: {
    title: "The Fourth Frame",
    role: "Co-founder · Creative strategy",
    text: "A creative studio I co-founded. I lead creative strategy for brands, from campaign ideas to the content itself.",
    // Add up to 3 pieces of client work: { image: "/images/ff-1.jpg", caption: "Client · Campaign", link: "" }
    work: [],
  },

  content: {
    text: "I build characters for short-form videos and write the scripts behind them. I perform, shoot and edit each piece, and every one starts from a small story.",
    // Add reels: { image: "/images/reel-1.jpg", title: "Reel title", link: "https://instagram.com/reel/..." }
    reels: [],
  },

  about: [
    "I'm Karan, an actor and theatre-maker from Jaipur, working between Mumbai and Jaipur. I trained through the 45-day Abhinay Darpan workshop at JKK and in cinema-acting workshops, and I've performed with Yatra Theatre and at JKK.",
    "When I'm not on stage, I'm usually close to it: building sets, designing a show's posters, running its social media, or writing and shooting my own content. I've also hosted college events and talks, including Aarohan and Dhundad Talks.",
    "I'm open to acting roles in theatre, film and ads, and to production and assistant direction work.",
  ],
};

export default content;
