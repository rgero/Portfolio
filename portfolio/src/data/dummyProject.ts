import { Project } from "../interfaces/Project";

export const ProjectList: Project[] = [
  {
    id: 1,
    name: "Achievement Tracker",
    repo: "https://github.com/rgero/AchievementTracker/",
    website: "https://achievement-tracker.vercel.app/",
    media: [],
    tags: ['react', 'achievement', 'tracking'],
    description: "This is the achievement tracker website."
  },
  {
    id: 2,
    name: "Expense Tracker",
    repo: "https://github.com/rgero/ExpenseTracker",
    website: "",
    media: [],
    tags: [],
    description: "This is the Expense Tracker made in React Native as a result of the course I took on it."
  },
  {
    id: 3,
    name: "Ling Hotel",
    repo: "https://github.com/rgero/LingHotel",
    website: "https://ling-hotel.vercel.app/login",
    media: [
      { 
        type: 'image',
        url: 'images/linghotel/logo-dark.png',
        description: "The Logo for Ling Hotel"
      },
      { 
        type: 'video',
        url: 'https://www.youtube.com/embed/LfpXMuMvcWQ',
        description: "This is a dumb video pretending to be for the project"
      },
      { 
        type: 'image',
        url: 'images/linghotel/logo-dark.png',
        description: "The Logo for Ling Hotel"
      },
      { 
        type: 'video',
        url: 'https://www.youtube.com/embed/LfpXMuMvcWQ',
        description: "This is a dumb video pretending to be for the project"
      },
      { 
        type: 'image',
        url: 'images/linghotel/logo-dark.png',
        description: "The Logo for Ling Hotel"
      },
      { 
        type: 'video',
        url: 'https://www.youtube.com/embed/LfpXMuMvcWQ',
        description: "This is a dumb video pretending to be for the project"
      },
    ],
    tags: ['react', 'course'],
    description: "This was the final project for a React course I took to expand my knowledge on React."
  },
]