/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Sidrah Ahmad's Portfolio",
  description:
    "I am a data analyst and marketer passionate about working with organisations that want to make effective use of their data; from the first ideas around what you want to measure and how to capture data accurately, through data preparation, analysis and management, all the way to impactful presentation of insights. I can support each step of the process to enable your organization in making evidence-driven decisions or share insights with new audiences. My specialty lies in gathering both qualitative and quantitative data for a well-rounded analysis and decision. I've worked in 3 diverse countries so far and love relating real life to work decisions. ",
  og: {
    title: "Sidrah Ahmad's Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Sidrah Ahmad",
  logo_name: "SidrahAhmad",
  nickname: "",
  subTitle:
    "I'm a data analyst and marketer with a strong passion for collaborating with organizations aiming to maximize the value of their data.",
  resumeLink:
    "https://cometmail-my.sharepoint.com/:b:/g/personal/ssa200002_utdallas_edu/EdWexAkc7pNIlb2erTkgGlEBN1PXDe0avRlJyPMmLDCdSA?e=rSWZke",
  portfolio_repository: "https://github.com/sidrah1998",
  githubProfile: "https://github.com/sidrah1998",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/sidrah1998",
  // linkedin: "https://www.linkedin.com/in/sidrah-ahmad-analyst/",
  // gmail: "sidrah1998@Hotmail.co.uk,
  // instagram: "https://www.instagram.com/sidrahmadx/"

  {
    name: "Github",
    link: "https://github.com/sidrah1998",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/sidrah-ahmad-analyst/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Email",
    link: "mailto:sidrah1998@hotmail.co.uk",
    fontAwesomeIcon: "fa-microsoft", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/sidrahmadx/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Analytics & Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Regression, Statistical analysis and NLP projects",
        "⚡ Complex quantitative modelling for sales prediction and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "R",
          fontAwesomeClassname: "logos:r-lang",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "logos:jupyter",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
        },
        {
          skillName: "Mongodb",
          fontAwesomeClassname: "devicon:mongodb-wordmark",
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
        },
        {
          skillName: "Knime",
          fontAwesomeClassname: "file-icons:knime",
        },
      ],
    },
    {
      title: "Data Visualization",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built responsive dashboards with automatic refresh through Google Analytics for internal company users ",
        "⚡ Analyzed and organized business process workflows and assisted in the development of ETL procedures ",
        "⚡ Created parameters for success and filters on live dashboards to manipulate data and reports",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Palantir",
          fontAwesomeClassname: "simple-icons:palantir",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "logos:microsoft-power-bi",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "Google Charts",
          fontAwesomeClassname: "logos:google-developers",
        },
        {
          skillName: "Matlab",
          fontAwesomeClassname: "vscode-icons:file-type-matlab",
        },
      ],
    },
    {
      title: "Marketing and Project Management",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Proposing solutions and built event setup from scratch, completing project ahead of time",
        "⚡ Analyzing customer data to develop market segmentation strategies ",
        "⚡ Deploying deep learning models on data trends to use for future predictions",
        "",
      ],
      softwareSkills: [
        {
          skillName: "Google Analytics",
          fontAwesomeClassname: "simple-icons:google360",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "simple-icons:jira",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Marketo",
          fontAwesomeClassname: "simple-icons:marketo",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Salesforce",
          fontAwesomeClassname: "simple-icons:salesforce",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#000000",
      },
      profileLink: "https://www.github.com/sidrah1998",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Texas at Dallas",
      subtitle:
        "Masters of Science in Management Science, Data analytics and Project Management",
      logo_path: "utdlogo.png",
      alt_name: "University of Texas at Dallas",
      duration: "2020 - 2022",
      descriptions: [
        "⚡ Courses included Database foundations, Financial Accounting, Digital Consulting, A/B Testing, Programming, Advanced Data Science etc. ",
        "⚡ Conducted a university-wide A/B test through survey on the effect of visualization and text types on Indian Students Organization's response rate. ",
        "⚡ During my time at university, I was also associated with the Project Management Club & Indian Students Organization.",
      ],
      website_link: "https://www.utdallas.edu/",
    },
    {
      title: "University of Mumbai",
      subtitle: "Bachelors of Mass Media, Advertisement",
      logo_path: "umumbail.png",
      alt_name: "UoMumbai",
      duration: "2016 - 2019",
      descriptions: [
        "⚡Completed Bachelors of Mass Media with a focus on Advertising, submitted a paper on the effect of violent media on children",
        "⚡ Courses included Organizational Psychology, Media studies, Understanding Cinema, Brand building, Media law etc.",
        "⚡ Submitted a documentary on the importance of psycholgical safety among teenagers in large cities, finishing 2nd among 20 universities.",
      ],
      website_link: "https://mu.ac.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "-DeepAI",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://cometmail-my.sharepoint.com/:b:/g/personal/ssa200002_utdallas_edu/EVwTGqaTwvxInXhBa1WymSkBWKlXOAfs_cu_T5xR-Y6dCw?e=DguSFz",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
    {
      title: "Foundations of Data Science",
      subtitle: "-Google",
      logo_path: "google_logo.png",
      certificate_link:
        "https://cometmail-my.sharepoint.com/:b:/g/personal/ssa200002_utdallas_edu/Ec5JgnrQgcJGtvgtdOTYusMBTLQmRGy7eNQU-sz6o1mjDA?e=G6yFLq",
      alt_name: "Google",
      color_code: "#00000099",
    },
    {
      title: "Accenture Discovery Program",
      subtitle: "-Forage",
      logo_path: "acc.png",
      certificate_link:
        "https://insidesherpa.s3.amazonaws.com/completion-certificates/Accenture/MD2p8dDih7zoQ9KRC_Accenture_ZRTuCAj89b5rq5oc5_completion_certificate.pdf",
      alt_name: "Accenture",
      color_code: "#0C9D5899",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've worked with many evolving startups and established organizations as an analyst and marketer with some experience in project management. I have experience in industries like Food & Beverages, Retail, Biochemistry & Life Science, Event management and Non-profit among others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Category Data Analyst",
          company: "Milliporesigma / Merck KGAA",
          company_url: "https://www.emdgroup.com/en",
          logo_path: "merck.png",
          duration: "June 2021 - Present",
          location: "Burlington, MA, USA",
          description:
            "- Built custom scripts to identify gaps and mine 400k+ product datapoints for Biology and Chemistry portfolios. Developed mathematical models for the eCommerce category growth playbook, generated 2M EUR+ in revenue. Developed FullStory content library for customer persona insight & created custom GA event action analyses in BigQuery, to identify scalable opportunities to improve PDP & SRP engagement. Performed NLP on 40K+ customer generated feedback, and developed an automated dashboard to create an actionable feedback loop, improving CSat and NPS for the website. Ingested, transformed & maintained eCommerce databases in Palantir Foundry to enable downstream data analysis",
          color: "#0879bf",
        },
        {
          title: "Student Assistant",
          company: "University of Texas at Dallas",
          company_url: "https://services.utdallas.edu/transit/",
          logo_path: "utdlogo.png",
          duration: "Jan 2021 - Jun 2021",
          location: "Dallas, TX, USA ",
          description:
            "Served as an ambassador, providing customer service as the first contact representative for thousands of visitors to UTD. Onboarded and trained students to report and manage maintenance issues across campus. Resolved customer conflicts and provided valuable information about campus while assisting guests, staff, faculty",
          color: "#9b1578",
        },
        {
          title: "Marketing Data Analyst",
          company: "The Hanging House",
          company_url: "https://www.hanginghouse.com",
          logo_path: "thh.png",
          duration: "May 2017 - Dec 2020",
          location: "Dubai , UAE ",
          description:
            "Managed experiential marketing projects valued at +$500K with 97% client retention rate in the EMEA region. Pitched, budgeted, and produced unique city-wide event with brand partner that optimized guest experiences by 35%. Spearheaded technological service development with IT to offer VR, AR, and AI experiences in retail events. Automated social and email marketing campaigns that improved an in-bound clicks by >30% and wrote compelling award entry submissions, winning 5+ awards. Conducted A/B testing for website design, increasing include click-through rate by 5% & lead generation by 1K AED+",
          color: "#9b1578",
        },
        {
          title: "Editorial & Social Media Intern",
          company: "Times of India",
          company_url: "https://timesofindia.indiatimes.com/us",
          logo_path: "ToI.webp",
          duration: "Sep 2018 - Dec 2018",
          location: "Mumbai, MH, India",
          description:
            "Synergized content for Facebook video series to increase campaign visibility for TOI subsidiary by 5%. Worked directly with the Editor-in-Chief to maintain competitive SEO position on Google for Femina magazine. Assisted management of paid omnichannel media with 1 million+ Followers, contributed a growth of 3% followers.",
          color: "#fc1f20",
        },
        {
          title: "Freelance - Event Management Intern",
          company: "Sharjah Book Authority",
          company_url: "https://sba.gov.ae",
          logo_path: "shj.jpeg",
          duration: "Nov 2017 - Dec 2017",
          location: "Sharjah, UAE",
          description:
            "Assist the Communications & Marketing department with day-to-day promotion of Sharjah Book Fair. Assist with the management of the SBA's social media outlets. This includes increasing frequency of interaction, brainstorming contest ideas, keeping the content fresh, and monitoring and analyzing results.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Other academic internships & experience",
      experiences: [
        {
          title: "Project Manager Consultant",
          company: "TruGreen",
          company_url: "https://www.trugreen.com/",
          logo_path: "tg.png",
          duration: "Jan 2022 - May 2022",
          location: "Dallas, TX, USA",
          description:
            "Lead a team of 5 people to create frameworks for operational processes to improve NPS & CSAT for website. Created a KPI dashboard using Tethr text analytics and Power BI used by C-executives for category growth (+30K$)",
          color: "#4285F4",
        },
        {
          title: "Marketing Lead & Head of Content",
          company:
            "University of Texas at Dallas - Indian Students Organization",
          company_url: "https://www.isautd.org",
          logo_path: "isa.png",
          duration: "Aug 2021 - March 2022",
          location: "Dallas, TX, USA",
          description:
            "Lead a team of 4, managing UI/UX, social media and media relations to integrate marketing strategies and ensure cohesive brand representation. Organized sponsored events such as Diwali Bash with free food and Welcome Home- free airport pick ups for new students through funding of the university.Increased CTR for website and Facebook likes YoY from 0.5% to 3% through both paid and unpaid campaigns. This lead to an increase in the number of signups for events from university students from 4% to 5% over the year.Increased value of organization through sponsored events and gifts from $10k to $15k through presentations and meetings with sponsors in the DFW area.",
          color: "#D83B01",
        },
        {
          title: "Marketing Head",
          company: "University of Texas at Dallas - Project Management Club",
          company_url: "https://www.linkedin.com/company/utd-pmc/about/",
          logo_path: "pmc.jpeg",
          duration: "Aug 2021 - March 2022",
          location: "Dallas, TX, USA",
          description:
            "Built and presented effective performance indicators for marketing campaigns, leading to a 9% raise in year-over-year sign ups for events. Strategically collaborated with other organizations in the university, contributing to successful project completion that generated more on-campus presence.",
          color: "#000000",
        },
        {
          title: "Contributing Editor",
          company: "University of Mumbai - Kiran Magazine (KC College)",
          company_url: "",
          logo_path: "kc.png",
          duration: "Nov 2017 - March 2018",
          location: "Mumbai, MH, India",
          description:
            "Contributed & edited 10+ articles that were published in the Kiran Magazine for University-wide circulation on topics such as currrent affairs, women's rights, health and beauty. ",
          color: "#0C9D58",
        },
        {
          title: "Volunteer Team Leader",
          company: "What Works Dubai",
          company_url:
            "http://www.whatworks.ae/en/our-story#:~:text=%27What%20Works%27%20is%20an%20event,more%20positivity%20and%20good%20practice.",
          logo_path: "ww.png",
          duration: "Jan 2015 - April 2016",
          location: "Dubai, UAE",
          description:
            "I  contributed to projects of acadrmic organisations across UAE, bringing students and teachers together for their input in improving UAE's educational standardized standards.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "Feel free to reach out to me for information on my profile and collaborations on projects with data analysis or project management",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Boston, MA - USA ",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
