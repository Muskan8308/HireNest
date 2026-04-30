import { IconBriefcase, IconMapPin, IconRecharging, IconSearch } from "@tabler/icons-react";

const dropdownData = [
    {
        title : "Job Title",
        icon : IconSearch,
        options : ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "DevOps Engineer", "QA Engineer", "System Administrator", "Database Administrator", "Network Engineer", "Security Analyst"] 
    },
    {
        title : "Location",
        icon : IconMapPin,
        options : ["New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA", "Boston, MA", "Chicago, IL", "Los Angeles, CA", "Denver, CO", "Atlanta, GA", "Miami, FL"]
    },
    {
        title : "Experience",
        icon : IconBriefcase,
        options : ["Internship", "Entry Level", "Mid Level", "Senior Level", "Director", "Executive"]
    },
    {
        title : "Job Type",
        icon : IconRecharging,
        options : ["Full-time", "Part-time", "Contract", "Temporary", "Internship", "Freelance"]
    }
];

const jobList = [
    {
        jobTitle: "Software Engineer",
        company: "Meta",
        applicants: 40,
        location: "New York, NY",
        experience: "Mid Level",
        jobType: "Full-time",
        package: "32 LPA",
        postedDaysAgo: 5,
        description: "Meta is seeking a skilled Software Engineer to join our dynamic team. The ideal candidate will have experience in building scalable applications and a passion for innovation.",
    },
    {
        jobTitle: "Data Scientist",
        company: "Spotify",
        applicants: 30,
        location: "San Francisco, CA",
        experience: "Senior Level",
        jobType: "Full-time",   
        package: "45 LPA",
        postedDaysAgo: 10,
        description: "Spotify is looking for a Data Scientist to analyze large datasets and provide insights that drive business decisions. Proficiency in machine learning and statistical analysis is required.",
    },
    {
        jobTitle: "Product Manager",
        company: "Microsoft",
        applicants: 25, 
        location: "India",
        experience: "Entry Level",
        jobType: "Remote",   
        package: "24 LPA",
        postedDaysAgo: 12,
        description: "Microsoft is hiring a Product Manager to lead cross-functional teams in delivering innovative products. Strong leadership and communication skills are essential.",
    },
    {
        jobTitle: "UX Designer",
        company: "Apple",
        applicants: 20,
        location: "Bangalore, India",
        experience: "Mid Level",
        jobType: "Full-time",   
        package: "30 LPA",
        postedDaysAgo: 8,
        description: "Apple is in search of a creative UX Designer to enhance user experiences across our product lines. Experience with user research and prototyping tools is a must.",
    },
    {
        jobTitle: "DevOps Engineer",
        company: "Amazon",
        applicants: 35,
        
        location: "Seattle, WA",
        experience: "Senior Level",
        jobType: "Full-time",
        package: "40 LPA",
        postedDaysAgo: 7,
        description: "Amazon is looking for a DevOps Engineer to streamline our deployment processes and ensure system reliability. Expertise in cloud platforms and automation tools is required.",
    },
    {
        jobTitle: "Software Engineer",
        company: "Microsoft",
        applicants: 40,
        location: "New York, NY",
        experience: "Mid Level",
        jobType: "Full-time",
        package: "32 LPA",
        postedDaysAgo: 5,
        description: "Microsoft is seeking a skilled Software Engineer to join our dynamic team. The ideal candidate will have experience in building scalable applications and a passion for innovation.",
    },
    {
        jobTitle: "Softwaere Engineer",
        company: "Google",
        applicants: 30,
        location: "San Francisco, CA",
        experience: "Senior Level",
        jobType: "Full-time",   
        package: "45 LPA",
        postedDaysAgo: 10,
        description: "Google is looking for a Software Engineer to analyze large datasets and provide insights that drive business decisions. Proficiency in machine learning and statistical analysis is required.",
    }
]

export { dropdownData, jobList };
