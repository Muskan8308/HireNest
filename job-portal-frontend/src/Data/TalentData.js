import { IconMapPin, IconSearch } from "@tabler/icons-react";

const searchFields = [
    {
        title : "Job Title", icon : IconSearch, options : ["Software Engineer", "Data Scientist", "Product Manager", "UX Designer", "DevOps Engineer", "QA Engineer", "System Administrator", "Database Administrator", "Network Engineer", "Security Analyst", "Content Writer", "Marketing Manager", "Sales Executive", "Customer Support Specialist", "Human Resources Manager", "Financial Analyst", "Business Analyst", "Project Manager", "Graphic Designer", "Digital Marketing Specialist"]
    },
    {
        title : "Location", icon : IconMapPin, options : ["Remote", "Delhi, India", "Mumbai, India", "Pune, India", "Gurgaon, India", "Noida, India", "Kolkata, India", "Ahmedabad, India", "Chandigarh, India", "Jaipur, India", "Indore, India","Jabalpur, India","Bangalore, India", "Hyderabad, India", "Chennai, India","New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA", "Boston, MA", "Chicago, IL", "Los Angeles, CA", "Denver, CO", "Atlanta, GA", "Miami, FL","London, UK", "Berlin, Germany", "Toronto, Canada", "Sydney, Australia",]
    },
    {
        title : "Skills", icon : IconSearch, options : ["JavaScript", "Python", "Java", "C#", "Ruby", "PHP", "HTML/CSS", "SQL", "NoSQL", "Machine Learning", "Data Analysis", "Project Management", "Agile Methodologies", "UI/UX Design", "Digital Marketing", "Content Creation", "Sales Strategies", "Customer Relationship Management", "Financial Modeling", "Business Intelligence", "Cloud Computing", "C", "C++", "Go", "Swift", "Kotlin", "R", "MATLAB", "Tableau", "Power BI", "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Testing", "Automation", "DevOps"]
    }

]

const talents = [
    {
        name : "Mikasa Ackerman",
        role : "Full Stack Developer",
        company : "Microsoft",
        location : "New York, NY",
        skills : ["JavaScript", "Python", "React"],
        about : "As a Full Stack Developer, I specialize in building scalable web applications with a focus on performance and user experience. With 5 years of experience in the tech industry, I have a proven track record of delivering high-quality software solutions.",
        expectedCtc : "10-30 LPA",
        image : "/Profiles/avatar1.jpg"
    },
    {
        name : "Erwin Smith",
        role : "Data Scientist",
        company : "Google",
        location : "San Francisco, CA",
        skills : ["Python", "Data Analysis", "TensorFlow"],
        about : "I am a Data Scientist with expertise in extracting insights from complex datasets. My passion lies in leveraging machine learning algorithms to solve real-world problems and drive business growth. With a strong background in statistics and programming, I am adept at turning data into actionable strategies.",
        expectedCtc : "10-40 LPA",
        image : "/Profiles/avatar2.jpg"
    },
    {
        name : "Loid Forger",
        role : "Product Manager",
        company : "Amazon",
        location : "Seattle, WA",
        skills : ["Product Management", "Agile", "Scrum"],
        about : "As a Product Manager, I excel at leading cross-functional teams to deliver innovative products that meet customer needs. With a strong focus on user-centric design and agile methodologies, I have successfully launched multiple products that have driven significant business impact.",
        expectedCtc : "15-35 LPA",
        image : "/Profiles/avatar3.png"
    },
    {
        name : "Crista Renzou",
        role : "UX/UI Designer",
        company : "Apple",
        location : "Austin, TX",
        skills : ["UI Design", "UX Research", "Figma"],
        about : "I am a UX/UI Designer passionate about creating intuitive and engaging user experiences. With a keen eye for detail and a deep understanding of user behavior, I strive to design products that are not only visually appealing but also highly functional.",
        expectedCtc : "6-28 LPA",
        image : "/Profiles/avatar4.jpg"
    },
    {
        name : "Eva Smith",
        role : "Digital Marketing Specialist",
        company : "Meta",   
        location : "Bangalore, India",
        skills : ["Digital Marketing", "Content Creation", "Social Media Strategy"],
        about : "I am a Digital Marketing Specialist with a strong background in creating and executing successful marketing campaigns. My expertise lies in leveraging data-driven strategies to enhance brand visibility and drive customer engagement across various digital channels.",
        expectedCtc : "5-25 LPA",
        image : "/Profiles/avatar5.png"
    },
    {
        name : "Muskan Chourasia",
        role : "Software Engineer",
        company : "Google",
        location : "Bangalore, India",
        skills : ["Java", "React", "Kubernetes"],
        about : "I am a Software Engineer with a passion for developing efficient and scalable software solutions. With experience in various programming languages and frameworks, I enjoy tackling complex problems and collaborating with cross-functional teams to deliver high-quality products.",
        expectedCtc : "30-42 LPA",
        image : "/Profiles/avatar6.jpg"
    },
    {
        name : "Eren Yeager",
        role : "DevOps Engineer",
        company : "Microsoft",
        location : "Hyderabad, India",
        skills : ["Docker", "Kubernetes", "AWS"],
        about : "I am a DevOps Engineer with expertise in automating deployment pipelines and managing cloud infrastructure. My experience includes working with various DevOps tools and methodologies to ensure seamless software delivery and system reliability.",
        expectedCtc : "12-38 LPA",
        image : "/Profiles/avatar7.jpg"
    }
]


const profile = {
    name : "Mikasa Yeager",
    role : "Software Engineer",
    company : "Google",
    location : "New York, US",
    about : "As a Software Engineer at Google, I specialize in developing innovative solutions that enhance user experiences and drive business growth. With a strong foundation in computer science and a passion for technology, I am committed to continuous learning and professional development.",
    skills : ["React", "Node.js", "Python", "Machine Learning", "Cloud Computing"],
    experiences : [
        {
            title : "Software Engineer",
            company : "Google",
            location : "New York, US",
            startDate : "Jan 2021",
            endDate : "Present",
            description : "Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to design scalable solutions."
            
        },
        {
            title : "Junior Software Engineer",
            company : "Microsoft",
            location : "Seattle, US",
            startDate : "Jun 2019",
            endDate : "Dec 2020",
            description : "Assisted in the development of cloud-based applications using Azure. Participated in code reviews and contributed to improving code quality."
        }
    ],
    certificates : [
        {
            name : "Cloud Certification",
            issuer : "Google",
            date : "Jun 2023",
            id : "HUSDSY34574587"
        },
        {
            name : "Azure Fundamentals",
            issuer : "Amazon",
            date : "Dec 2022",
            id : "MLSPC98765432"
        }
    ]
}



export { searchFields, talents , profile};