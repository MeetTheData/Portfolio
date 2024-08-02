export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    // { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "",
      titleClassName: "justify-end",
      img: "/grid2.webp",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "Currently building Large Language Model Apps",
      description: "The Inside Scoop",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/llm2.gif",
      spareImg: "/grid.svg",
    },
    // {
    //   id: 3,
    //   title: "My tech stack",
    //   description: "I constantly try to improve",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    //   imgClassName: "",
    //   titleClassName: "justify-center",
    //   img: "",
    //   spareImg: "",
    // },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
    // {
    //   id: 5,
    //   title: "Currently building a Large Language Model Apps",
    //   description: "The Inside Scoop",
    //   className: "md:col-span-3 md:row-span-2",
    //   imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    //   titleClassName: "justify-center md:justify-start lg:justify-center",
    //   img: "/b5.svg",
    //   spareImg: "/grid.svg",
    // },
    {
      id: 5,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Hospital CAHPS Patient Satisfaction Healthcare Data Analysis",
      des: "Harnessing SQL for data cleaning and integration to drive impactful visualizations in Tableau for hospital CAHPS data analysis",
      img: "/pro7.png",
      iconLists: ["/tab.png", "/sql.png"],
      iconDesc: ["Tableau", "SQL"],
      link: "https://public.tableau.com/app/profile/meet.mukeshkumar.patel/viz/HospitalCAHPSPatientSatisfactionScoreHealthcareDataset/HCAHPSDashboard",
    },
    {
      id: 2,
      title: "People Analytics - Human Resource Dashboard",
      des: "Crafted a dynamic HR dashboard in Tableau, encompassing user requirements, data visualization, and dashboard mockups using Figma",
      img: "/pro6.png",
      iconLists: ["/tab.png", "/figma.png"],
      iconDesc: ["Tableau", "Figma"],
      link: "https://public.tableau.com/app/profile/meet.mukeshkumar.patel/viz/PeopleAnalyticsHRDashboard/HRSummary",
    },
    {
      id: 3,
      title: "Predicting Drug Discovery Leads with Machine Learning",
      des: "Leveraged RDKit, pandas, and a supervised ML model to predict bioactivity, achieving online deployment for interactive use",
      img: "/pro1.png",
      iconLists: ["/python.png", "/chembl.png", "/rdkit.png", "/streamlit.png", "/scikit.png"],
      iconDesc: ["Python", "Chembl", "RDkit", "Streamlit", "Scikit"],
      link: "https://bioactivityprediction-mtor.streamlit.app/",
    },
    {
      id: 4,
      title: "British Airways Reviews Analysis",
      des: "Created a comprehensive Tableau dashboard analyzing British Airways reviews with advanced data visualization using transformed data performed on Python",
      img: "/pro5.png",
      iconLists: ["/python.png", "/tab.png"],
      iconDesc: ["Tableau", "Python"],
      link: "https://public.tableau.com/app/profile/meet.mukeshkumar.patel/viz/BritishAirwaysTableau/Dashboard1",
    },
    {
      id: 5,
      title: "Predicting Loan Defaulters with Statistical Analysis",
      des: "Utilized statsmodels, sciPy, and Random Forest with hyperparameter tuning to accurately predict loan defaulters, achieving an F1 score of 0.81.",
      img: "/pro2.webp",
      iconLists: ["/python.png", "/scipy.png", "/statmod.svg", "/scikit.png", "/seaborn.svg"],
      iconDesc: ["Python", "Scipy", "Statmod", "Scikit", "Seaborn"],
      link: "https://github.com/MeetTheData/LoanDefaulterPrediction/blob/main/MA-541%20Project%20-%20Meet%20Mukeshkumar%20Patel.ipynb",
    },
    {
      id: 6,
      title: "Forecasting Stock and Sales Trends with Time Series Analysis",
      des: "Implemented ARIMA and SARIMA models using R to forecast stock prices and sales trends, achieving precise projections with a MAPE of 11.6%.",
      img: "/pro3.jpg",
      iconLists: ["/r.png", "/python.png"],
      iconDesc: ["R", "Python"],
      link: "https://github.com/MeetTheData/TimeSeriesAnalysis/blob/main/MA641_MeetPatel_Project.pdf",
    },
    {
      id: 7,
      title: "Personal Portfolio Website",
      des: "Developed personal website, combining components from AceternityUI and Next.js, for styling used TailwindCSS",
      img: "/pro4.png",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg"],
      iconDesc: ["NextJS", "TailwindCSS", "TypeScript", "ThreeJS"],
      link: "https://portfolio-five-inky-43.vercel.app/",
    },
    {
      id: 8,
      title: "Sushi Restaurant Website",
      des: "Crafted and designed a visually stunning sushi restaurant website using HTML, CSS, and JavaScript and modern design principles.",
      img: "/pro8.png",
      iconLists: ["/html.jpeg", "/css.jpeg", "/js.webp"],
      iconDesc: ["HTML", "CSS", "JavaScript"],
      link: "https://sushimanui.netlify.app/",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Michael Johnson",
      title: "Director of AlphaStream Technologies",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Developer - TechQsoft",
      desc: "Assisted in the development of a web-based platform using AngularJS, enhancing interactivity.",
      dur: "TechQsoft | Oct 2020 - Jun 2022",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Graduate Grading Assistant",
      desc: "Enhanced student engagement and learning by designing in-class activities and mentoring 90 students.",
      dur: "Stevens Institute of Technology | Sep 2023 - May 2024",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },
    // {
    //   id: 3,
    //   title: "Freelance App Dev Project",
    //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp3.svg",
    // },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: 'https://github.com/MeetTheData'
    },
    {
      id: 2,
      img: "/twit.svg",
      link: ''
    },
    {
      id: 3,
      img: "/link.svg",
      link: 'https://www.linkedin.com/in/mpate150/'
    },
  ];