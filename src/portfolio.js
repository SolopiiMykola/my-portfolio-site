/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from 'react-easy-emoji';

const illustration = {
  animated: true, // set to false to use static SVG
};

const greeting = {
  username: 'Mykola Solopii',
  title: "Hi all, I'm Mykola",
  subTitle: emoji(
    'A passionate Software Developer Engineer in Tests 🚀 Having an experience of building Web and Mobile automation frameworks and tools with JavaScript on different test levels.'
  ),
  resumeLink:
    'https://docs.google.com/document/d/1LbiLU8RhtE-D8kKv2OoKAKvQRRl0OQKbb_KTmf0v4DE/edit?usp=sharing',
  displayGreeting: true, // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: 'https://github.com/SolopiiMykola/',
  linkedin: 'https://www.linkedin.com/in/mykola-solopii/',
  gmail: 'ms@qaurai.com',
  facebook: 'https://www.facebook.com/solopiymukola',
  // Instagram and Twitter are also supported in the links!
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: 'What I do',
  subTitle: 'SOFTWARE DEVELOPER IN TEST WHO WANTS TO MAKE THE WORLD BETTER',
  skills: [
    emoji(
      '⚡  Providing manual and automated testing of web, mobile, desctop applications during all their life cycle periods from technical specification stage to their deploy on live'
    ),
    emoji('⚡ I have an experience in Mentoring, teaching, consulting and interviewing.'),
    emoji(
      '⚡ Integration of third party services such as SauceLabs / AWS '
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'reactjs',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'nodejs',
      fontAwesomeClassname: 'fab fa-node',
    },
    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'sql-database',
      fontAwesomeClassname: 'fas fa-database',
    },
    {
      skillName: 'aws',
      fontAwesomeClassname: 'fab fa-aws',
    },
    {
      skillName: 'firebase',
      fontAwesomeClassname: 'fas fa-fire',
    },
    {
      skillName: 'python',
      fontAwesomeClassname: 'fab fa-python',
    },
    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: 'Kyiv Polytechnical Institute',
      logo: require('./assets/images/kpi-logo.png'),
      subHeader: 'Master of Science in Computer Science',
      duration: 'September 2010 - April 2015',
    },
    {
      schoolName: 'State University of Economics and Technology of Transport',
      logo: require('./assets/images/stanfordLogo.png'),
      subHeader: 'Bachelor of Electical Engineer',
      duration: 'September 2011 - April 2015',
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: 'Testing/Test Automation', //Insert stack or technology you have experience in
      progressPercentage: '90%', //Insert relative proficiency in percentage
    },
    {
      Stack: 'UI automation',
      progressPercentage: '90%',
    },
    {
      Stack: 'API automation',
      progressPercentage: '80%',
    },
    {
      Stack: 'Unit automation',
      progressPercentage: '70%',
    },
    {
      Stack: 'Programming',
      progressPercentage: '80%',
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'SDET',
      company: 'Alteryx',
      companylogo: require('./assets/images/alogo.png'),
      date: 'April 2019 – Present',
      desc:
        'Enabling development teams to deliver high-quality software through framework, tooling, and risk management capabilities',
      descBullets: [
        'Building and maintaining comprehensive code quality methods to provide real-time feedback to developers',
      ],
    },
    {
      role: 'Senior Test Automation Engineer',
      company: 'Social Network',
      companylogo: require('./assets/images/nda-logo.jpg'),
      date: 'October 2018 – April 2019',
      desc:
        'Creating automation tests for a microservices architecture and the third party services based on REST API, GRPS, WebSockets, SignalR using Requests Promise+Chai+Mocha (TS). ',
    },
    {
      role: 'Test Automation Engineer/Team Lead',
      company: 'Codemotion',
      companylogo: require('./assets/images/Codemotion_Logo.png'),
      date: 'February 2017 – October 2018',
      desc:
        'Writing testing documentation (Test Suits, test cases, checklists) based on product requirements. Creating automation tests for REST API using Frisby+Jasmin and Supertest+Chai+Mocha.',
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'saadpasta', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to true
  display: false, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO AUTOMATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/alogo.png'),
      projectName: "Alteryx",
      projectDesc: "Driving better outcomes is the end goal of analytics, but it requires empowering teams to answer questions together. The power of collaborative analytics unlocks meaningful business outcomes for modern organizations. With Alteryx Analytics Hub, every team can share analytic assets and automate processes, reports and insights in a central, secure, governed analytics environment.",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://alteryx.com/',
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image: require('./assets/images/nda-logo.jpg'),
      projectName: "Social Network NDA",
      projectDesc: "Social network like instagram.",
      footerLink: [
        {
          name: 'Visit Website',
          url:
            'http://nda.com/',
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'JavaScript Tutorial course',
      subtitle:
        '',
      image: require('./assets/images/solo-learn.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
      ],
    },
    {
      title: 'Certificate of achievement Designer core',
      subtitle:
        'Certificate of achievement Designer core',
      image: require('./assets/images/a-cert-logo.png'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://s3.us-east-2.amazonaws.com/ayx.certificates/20201211_AlterxDesignerCoreg3U5UNVR0T2E1VapHboVdW1201kMilnVt9EdONjlRjBHbt90MrRVT.pdf',
        },
      ],
    },

    {
      title: 'Certificate of Appreciantion',
      subtitle: 'Certificate of Appreciantion',
      image: require('./assets/images/qa-group.jpeg'),
      footerLink: [
        { name: 'Certification', url: 'https://drive.google.com/file/d/1_V_C2bS-GuAcBp6_s2nheCqfg2SIKC-C/view?usp=sharing' },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
  display: false, // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
  display: false, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+380935065501',
  emailAddress: 'ms@qaurai.com',
};

// Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
