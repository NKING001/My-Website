export type Certification = {
  org: string;
  title: string;
  year: string;
  topics: string;
  credentialId?: string;
  url?: string;
};

// Credential document URLs verified from NKING001/My-Website.
export const certifications: Certification[] = [
  {
    org: "Xcel Analytics",
    title: "C & C++ Programming",
    year: "Sep 2024",
    topics: "DSA · OOP · Pointers · STL · File Handling",
    credentialId: "No. 1392",
    url: "https://drive.google.com/file/d/1rgOXJ5G_wbK3dacxTA1hsrKWAzxeYoxX/view?usp=sharing",
  },
  {
    org: "Learning Education Hub, Bhopal",
    title: "Python with Data Science",
    year: "Jan 2026",
    topics: "Python · Data Analysis · Visualization · Preprocessing",
    credentialId: "PYDS-1028",
    url: "https://drive.google.com/file/d/1dYpbwwLPcjeZkuD20bkV6TUTYR6jyGMd/view",
  },
  {
    org: "NITTTR × Siemens",
    title: "Internet of Things",
    year: "Mar 2025",
    topics: "IoT Architecture · Sensors · Protocols · Cloud Integration",
    credentialId: "NC-CONS74/2024-2025/14271",
    url: "https://drive.google.com/file/d/1lrf9OAzOgEQN_wNBMMuY4G_mWjPgkRK4/view?usp=sharing",
  },
  {
    org: "Google · Santander Open Academy",
    title: "Artificial Intelligence & Productivity",
    year: "Jun 2025",
    topics: "AI Tools · Automation · Workflow Optimization",
    credentialId: "OA-2025-0810001565191",
    url: "https://drive.google.com/file/d/1Z3QHxRnlycQKd8RmIGJ_yA4C9h-yCmcI/view?usp=sharing",
  },
  {
    org: "IE University · Santander",
    title: "Introduction to Data Science",
    year: "Jul 2025",
    topics: "Data Analysis · Visualization · Statistics",
    credentialId: "OA-2025-0811001574652",
    url: "https://drive.google.com/file/d/1W0TseT1r7h1d96g6vjZjv_3MwN-WLihB/view?usp=sharing",
  },
  {
    org: "MIT · Santander",
    title: "Introduction to Generative AI",
    year: "Aug 2025",
    topics: "Generative AI · NLP · Ethics · Applications",
    credentialId: "OA-2025-0812001582283",
    url: "https://drive.google.com/file/d/1pDQpSZHRgl_Qbr1bk_6NPP1wjrsqjJcF/view?usp=sharing",
  },
  {
    org: "Santander Open Academy",
    title: "High-Performance Leadership: Lessons from F1",
    year: "Sep 2025",
    topics: "Decision-Making · Prioritization · Resilience",
    credentialId: "OA-2025-0809001560339",
    url: "https://drive.google.com/file/d/14FH1tWahr-MHodNaiH5kSnJ3OCrHimtF/view?usp=sharing",
  },
  {
    org: "Geeks of Gurukul",
    title: "Decentralized Voting · Blockchain",
    year: "Oct 2025",
    topics: "Blockchain · Smart Contracts · Cryptography",
    credentialId: "GOP-HKT-DCV-2025",
    url: "https://drive.google.com/file/d/1uq7MCKe40k1F36KeK47-oxrKh68lNgdT/view?usp=sharing",
  },
];
