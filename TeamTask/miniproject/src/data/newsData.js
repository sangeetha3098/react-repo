import fifaImage from '../assets/fifa_finals.png';
import spaceImage from '../assets/space_exploration.png';
import solarImage from '../assets/solar_energy.png';
import techImage from '../assets/tech_boom.png';

export const newsArticles = [
  {
    id: 1,
    title: "FIFA World Cup Finals: A Historic Clash of Giants",
    summary: "The ultimate football showdown concluded with an unforgettable final match, rewriting sporting history with dynamic plays, extreme tension, and a dramatic penalty shootout.",
    category: "Sports",
    date: "July 20, 2026",
    readTime: "8 min read",
    image: fifaImage,
    author: "Elena Rostova",
    location: "Global Arena",
    content: `The stadium was electric, packed with over 90,000 spectators screaming at the top of their lungs as the two football powerhouses locked horns in what will go down in history as the greatest FIFA World Cup Final ever played.

    From the opening whistle, the intensity was unmatched. Tactical formations were pushed to their absolute limits. The underdog team took an early lead, scoring a brilliant header in the 18th minute, catching the reigning champions off guard. However, a stunning counter-attack in the second half equalized the score, setting off a rollercoaster of emotions.

    ### Key Match Highlights:
    - **18th Minute**: A spectacular cross from the left wing met by a diving header, giving the underdogs an unexpected early lead.
    - **44th Minute**: Brilliant defensive clearance prevents the champions from equalizing just before the half-time whistle.
    - **72nd Minute**: A controversial penalty awarded to the champions, converted calmly to level the score at 1-1.
    - **98th Minute (Extra Time)**: An absolute rocket of a shot from outside the box puts the champions ahead for the first time.
    - **112th Minute**: A dramatic handball in the box leads to a second penalty for the underdogs, bringing the scoreline to a breathtaking 3-3 deadlock.

    With exhaustion showing on the players' faces, the match went to a nail-biting penalty shootout. Ultimately, nerves of steel and phenomenal goalkeeping crowned the new world champions, sending millions of fans worldwide into pure euphoria. Both managers praised the incredible spirit displayed by both squads, agreeing that the match represented the absolute pinnacle of global football.`,
    reviews: [
      { id: 101, author: "Aarav Sharma", rating: 5, comment: "Absolutely legendary final! The penalty shootout had me on the edge of my seat. Worth every minute.", date: "July 20, 2026" },
      { id: 102, author: "Sarah Jenkins", rating: 4, comment: "Incredible display of sportsmanship. Though my favorite team lost, the drama was unmatched.", date: "July 21, 2026" },
      { id: 103, author: "Carlos Mendez", rating: 5, comment: "Best World Cup final in the last 20 years. That 112th-minute penalty was pure heart-stopping action!", date: "July 21, 2026" }
    ]
  },
  {
    id: 2,
    title: "India's Next Frontier: ISRO Launches Deep Space Moon Mission",
    summary: "ISRO has successfully initiated its next-generation lunar probe, solidifying India's position as a leading global pioneer in deep-space exploration and lunar mapping.",
    category: "Space & Tech",
    date: "July 22, 2026",
    readTime: "9 min read",
    image: spaceImage,
    author: "Dr. Aravind Swaminathan",
    location: "Sriharikota, India",
    content: `The Indian Space Research Organisation (ISRO) has once again made history. Early this morning, the heavy-lift LVM3 rocket rose majestically from the Satish Dhawan Space Centre in Sriharikota, carrying India's latest advanced lunar explorer.

    The spacecraft's primary objective is to survey deep-seated water-ice deposits and map unexplored polar craters with unprecedented precision. Using state-of-the-art radar sensors and specialized spectrometers, the lander seeks to uncover secrets of the moon's early geological history.

    ### Technical Accomplishments of the Launch:
    - **Precision Insertion**: The rocket placed the payload into an orbit with less than 0.5% margin of error.
    - **Solar Array Deployment**: Automated systems confirmed the 100% deployment of the primary solar panels 15 minutes after separation.
    - **Propulsion Systems**: Next-generation cryogenic engines operated with record-breaking fuel efficiency.
    - **Polar Crater Mapping**: The probe is equipped with high-resolution synthetic aperture radar (SAR) capable of scanning beneath the lunar dust.

    Scientists at the mission control center broke into thunderous applause as the spacecraft successfully separated from the launch vehicle and entered its planned trans-lunar trajectory. Over the next month, the probe will perform precise orbital maneuvers, setting the stage for a soft-landing attempt that will continue India's legacy of cost-effective, high-impact scientific exploration. This mission represents a massive step forward for human understanding of resource availability on the moon.`,
    reviews: [
      { id: 201, author: "Nisha Patel", rating: 5, comment: "A proud day for India! ISRO continues to inspire the entire nation with its budget-friendly space milestones.", date: "July 22, 2026" },
      { id: 202, author: "David Vance", rating: 5, comment: "Fascinating technology. The search for lunar water-ice is critical for future crewed space stations.", date: "July 23, 2026" },
      { id: 203, author: "Amit Verma", rating: 4, comment: "Superb execution by the team. Looking forward to the soft landing next month!", date: "July 23, 2026" }
    ]
  },
  {
    id: 3,
    title: "India's Green Milestone: Mega Solar Park Commences Full Operations",
    summary: "Spanning thousands of acres, the newly commissioned solar facility powers millions of homes, marking a major triumph in India's pledge for sustainable green energy transition.",
    category: "Environment",
    date: "July 23, 2026",
    readTime: "7 min read",
    image: solarImage,
    author: "Priyanka Sen",
    location: "Rajasthan, India",
    content: `In a colossal push towards carbon neutrality, India has officially activated one of the world's largest ultra-mega solar parks. Located in the sun-drenched plains, the facility covers a massive area and possesses a generating capacity that can single-handedly support multiple major cities.

    The project utilizes modern bifacial solar tracking panels that absorb sunlight from both sides, maximizing efficiency throughout the day. It also features a massive lithium-ion battery storage system to ensure stable grid supply even after sunset.

    ### Key Project Statistics:
    - **Total Land Area**: Covers over 14,000 acres of desert wasteland, turning non-arable land into a power hub.
    - **Household Powering Capacity**: Generates enough clean energy to light up over 4.5 million homes.
    - **Carbon Offset**: Estimated to reduce carbon emissions by 6.2 million tons annually.
    - **Local Employment**: The project has employed over 12,000 local technicians and engineers during its design and deployment phase.

    Local communities have also seen immediate benefits, with thousands of clean energy jobs created during construction and operation. Officials stated this park represents a giant leap towards fulfilling India's ambitious targets for renewable energy capacity, proving that massive industrial scale and eco-friendly practices can go hand-in-hand. This marks a new template for global green infrastructure.`,
    reviews: [
      { id: 301, author: "Rohan Roy", rating: 5, comment: "Truly a massive scale. Renewable energy is the only way forward, and India is leading by example.", date: "July 23, 2026" },
      { id: 302, author: "Emma Watson", rating: 4, comment: "Converting desert wasteland into clean energy is a brilliant strategy. Excellent job!", date: "July 24, 2026" },
      { id: 303, author: "Rajesh Kumar", rating: 5, comment: "Fabulous engineering. The battery storage backup makes it a highly reliable green solution.", date: "July 24, 2026" }
    ]
  },
  {
    id: 4,
    title: "India's Silicon Valley Sparks Next-Gen AI Startup Revolution",
    summary: "Bengaluru becomes the epicenter of global generative AI innovation, as local deep-tech startups secure major funding and develop indigenous LLMs tailored for diverse Indian languages.",
    category: "Technology",
    date: "July 24, 2026",
    readTime: "8 min read",
    image: techImage,
    author: "Rohan Dasgupta",
    location: "Bengaluru, India",
    content: `Bengaluru, long celebrated as India's Silicon Valley, has entered a brand new era dominated by generative AI. A wave of local tech startups is securing global venture capital to build foundation models specifically optimized for India's diverse linguistic landscape.

    Rather than relying solely on Western models, these startups are training systems from the ground up to understand local nuances, dialects, and idioms in over 15 major Indian languages. This enables high-performance conversational AI for agriculture, rural healthcare, and local governance.

    ### Innovation Pillars:
    - **Multilingual LLMs**: Models built explicitly for low-resource languages like Kannada, Telugu, Bengali, and Marathi.
    - **Agritech Integrations**: AI voice assistants that advise farmers on crop diseases and real-time market prices in local tongues.
    - **Healthcare Assist**: Portable AI systems helping community workers diagnose basic illnesses in rural clinics.
    - **Venture Funding**: Over $1.2 billion raised by Bengaluru-based AI startups in the first half of 2026 alone.

    Tech experts indicate that the concentration of highly skilled software engineers, combined with a vibrant entrepreneurial ecosystem, makes Bengaluru one of the most exciting AI hubs globally. As these solutions scale, they promise to democratize high-tech access for hundreds of millions of people.`,
    reviews: [
      { id: 401, author: "Vikram Malhotra", rating: 5, comment: "Building LLMs for local Indian languages is a game changer. This will bridge the digital divide.", date: "July 24, 2026" },
      { id: 402, author: "Sophia Lin", rating: 5, comment: "Bengaluru's tech ecosystem is incredibly fast. The focus on agritech shows AI's real utility.", date: "July 24, 2026" },
      { id: 403, author: "Sanjay Joshi", rating: 4, comment: "Excellent startup ecosystem. Very proud to see India building foundational AI tech.", date: "July 25, 2026" }
    ]
  }
];
