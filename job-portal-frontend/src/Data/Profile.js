import { IconBriefcase, IconMapPin } from "@tabler/icons-react";

const fields = [
      {
        label : "Job Title",
        placeHolder : "Enter the Job Title",
        options : ["Designer", "Developer", "Product Manager", "Marketing Specialist", "Sales", "Data Analyst", "Content Writer", "Customer Support"],
        value : "Developer",
        leftSection : IconBriefcase
    },
    {
        label : "Company",
        placeHolder : "Enter company name",
        options : ['Google', 'Microsoft', 'Meta', 'Netflix', 'Adobe', 'Amazon', 'Apple', 'Spotify', 'Wipro', 'Deloitte', 'Figma', 'Flipkart','Uber'],
        value : "Google",
        leftSection : IconBriefcase
    },
    {
        label : "Location",
        placeHolder : "Enter the Location",
        options : ["Remote", "Delhi, India", "Mumbai, India", "Pune, India", "Gurgaon, India", "Noida, India", "Kolkata, India", "Ahmedabad, India", "Chandigarh, India", "Jaipur, India", "Indore, India","Jabalpur, India","Bangalore, India", "Hyderabad, India", "Chennai, India","New York, NY", "San Francisco, CA", "Austin, TX", "Seattle, WA", "Boston, MA", "Chicago, IL", "Los Angeles, CA", "Denver, CO", "Atlanta, GA", "Miami, FL","London, UK", "Berlin, Germany", "Toronto, Canada", "Sydney, Australia",],
        value : "Bangalore, India",
        leftSection : IconMapPin
    }
]

export default fields;