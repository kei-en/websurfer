export const categories = [
  {
    id: "art",
    title: "Arts, Design & Crafts",
    description: "Painting, Illustration, Fashion, Photography, Sculpting...",
    color: "purple",
    sites: [
      {
        title: "Ethical Design Resources",
        description: "",
        slug: "https://www.ethicaldesignresources.com",
        submitter: "ShashankPoojari",
      },
      {
        title:
          "Invasive Diffusion: How one unwilling illustrator found herself turned into an AI model - Waxy.org",
        description:
          "How does it feel to be turned into an AI image model? To find out, I opened a door to the multiverse and interviewed the creator and unwilling subject of a controversial DreamBooth model.",
        slug: "https://waxy.org/2022/11/invasive-diffusion-how-one-unwilling-illustrator-found-herself-turned-into-an-ai-model/",
        submitter: "Kovah",
      },
      {
        title: "PatternFly",
        description:
          "An open source design system with dozens of components and layouts to choose from, built for teams to build consistent UIs.",
        slug: "https://www.patternfly.org",
        submitter: "ShashankPoojari",
      },
      {
        title: "Avvvatars - Open Source React UI Avatar Library",
        description:
          "Free React UI Avatars for Your Next Project, get placeholder avatars unique to your user.",
        slug: "https://avvvatars.com",
        submitter: "ShashankPoojari",
      },
    ],
  },
  {
    id: "business",
    title: "Business, Economics",
    description: "Entrepreneurship, Jobs, Money, Stocks...",
    color: "orange",
    sites: [
      {
        title: "The Art and Science of Spending Money · Collab Fund",
        description:
          "Former General Electric CEO Jack Welch once nearly died of a heart attack.",
        slug: "https://collabfund.com/blog/the-art-and-science-of-spending-money",
        submitter: "Kovah",
      },
      {
        title: "Developer marketing examples",
        description: "",
        slug: "https://www.developermarkepear.com/developer-marketing-examples",
        submitter: "ShashankPoojari",
      },
      {
        title: "How to avoid “death by LLM” - Big Think",
        description:
          "Generative AI — driven by large language models — has the potential to destroy or supercharge most businesses. Now is the time to pivot.",
        slug: "https://bigthink.com/business/how-to-avoid-death-by-llm",
        submitter: "ShashankPoojari",
      },
      {
        title:
          "How successful companies got their first users – Early User Growth",
        description:
          "Learn how 30+ companies such as GitHub, Zoom, Amazon, Twitch and Whatsapp got their first users",
        slug: "https://earlyusergrowth.com/startups",
        submitter: "Kovah",
      },
      {
        title: " Stradr: Real stocks, fake money",
        description:
          "Stadr: An online simulated stock trading platform. Use Stradr to learn about the stock market, risk free and for free. Education settings provided",
        slug: "https://stradr.com/onboarding",
        submitter: "Anonymous User",
      },
    ],
  },
  {
    id: "culture",
    title: "Culture, Society",
    description: "Law, Sociology, Travelling, Family, Politics...",
    color: "yellow",
    sites: [
      {
        title: "Life Stats",
        description:
          "Find out what has happened in your lifetime. How many times have you blinked? How much has the stock market gone up?",
        slug: "https://neal.fun/life-stats/",
        submitter: "Anonymous User",
      },
      {
        title: "The Dawn of Cultural Schizophrenia",
        description: "",
        slug: "https://www.jdemeta.net/p/the-dawn-of-cultural-schizophrenia",
        submitter: "Kovah",
      },
      {
        title: "Places near me - Explore your neighborhood",
        description:
          "Artwork near me, Nature near me, history near me. Find some interesting places around you. This page contains a map to help you find interesting places around you - whether you are in a foreign city or in your hometown.",
        slug: "https://www.near-me.guru",
        submitter: "Kovah",
      },
      {
        title: "NOIYS - Post, read, forget",
        description:
          "The anti-social network. Post a note anonymously. It's viewed by many, then deleted after 24 hours.",
        slug: "https://www.noiys.com",
        submitter: "ShashankPoojari",
      },
    ],
  },
  {
    id: "education",
    title: "Education, Learning",
    description: "Teaching, Knowledge Sharing, Schools...",
    color: "teal",
    sites: [
      {
        title: "OpenStax",
        description:
          "OpenStax offers free college textbooks for all types of students, making education accessible affordable for everyone. Browse our list of available subjects!",
        slug: "https://openstax.org",
        submitter: "Anonymous User",
      },
      {
        title:
          "Money Simulator: A browser based, retro sandbox game that let's you see the impact of your financial decisions",
        description:
          "A browser based, retro sandbox game that let's you see the impact of your financial decisions",
        slug: "https://simulator.money",
        submitter: "Kovah",
      },
      {
        title: "Thou shalt not commit logical fallacies",
        description:
          "A logical fallacy is a flaw in reasoning. Logical fallacies are like tricks or illusions of thought, and they're often very sneakily used by politicians and the media to fool people. Don't be fooled! This website has been designed to help you identify and call out dodgy logic wherever it may raise its ugly, incoherent head.",
        slug: "https://yourlogicalfallacyis.com",
        submitter: "Anonymous User",
      },
      {
        title: "Morse - Learn",
        description: "Learn Morse code with Google's Morse code learning tool",
        slug: "https://morse.withgoogle.com/learn",
        submitter: "purplerib",
      },
    ],
  },
];

export const rules = {
  allowed: [
    {
      title: " Anything interesting, weird or astonishing",
      description:
        "We love content which is interesting, weird, crazy, hilarious or really mind-blowing.",
    },
    {
      title: "Exceptional blog posts",
      description:
        "Usually in essay form, articles of exceptional quality are likely accepted.",
    },
    {
      title: "Exceptional company or personal websites",
      description:
        "Seen a website of a company or a private person which really strikes your mind? Submit it here!",
    },
    {
      title: "Exceptional browser games",
      description:
        "Playing in the browser is cool. Candy Crush is not. Submit really cool browser games only.",
    },
    {
      title: "tuff to learn with or from",
      description:
        "We love interactive tutorials, high quality how-to articles or any other stuff to feed your curious mind. However, we won't accept links to some random Udemy courses or 10 min. Youtube videos.",
    },
  ],
  not_allowed: [
    {
      title: "Low quality content or news articles",
      description:
        "News articles, boring blog posts and other low-quality content is nothing what we want on SurfBored. \\nExceptions may apply.\\n Examples: Buzzfeed articles",
    },
    {
      title: "Political or highly controversial content",
      description:
        "If you want to discuss political topics, please go to Facebook. Also, SurfBored is not a place to publish your absurd conspiracy theories.",
    },
    {
      title: "Social network posts",
      description:
        "Any content from Facebook, Twitter or similar networks is not permitted. YouTube videos of outstanding quality may be accepted as an exception.",
    },
    {
      title: "No content behind paywalls or logins",
      description:
        "If you have to pay or register to access a website, it is not a good fit for SurfBored.\\n Examples: The Wallstreet Journal, Medium premium articles",
    },
    {
      title: "No raw images or other media",
      description:
        "interesting-charts.pdf or must-see.gif are not allowed. Media must be embedded on a website.",
    },
    {
      title: "No software downloads",
      description:
        "Software should be usable in the browser. Info pages for very unique software may be approved.",
    },
    {
      title: "No online shops",
      description:
        "Plain online shops selling regular goods are not a good fit for SurfBored.",
    },
    {
      title: "No archive links or URL shorteners",
      description:
        "Please submit the original websites and links to the Internet Archive or other archives, and no URLs shortened with any service.",
    },
    {
      title: "Pornographic, racist, graphic or other illegal content",
      description:
        "This should not need any explanation. We like a friendly and open-minded internet.",
    },
  ],
};
