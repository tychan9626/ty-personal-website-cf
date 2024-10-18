import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  imports: [NgFor, NgIf]
})
export class PortfolioComponent {
  userLegalFirstName = 'Tsz Yin';
  userLegalLastName = 'Chan';
  userLegalFullName = `${this.userLegalFirstName} ${this.userLegalLastName}`;
  userPreferredFirstName = 'TY';
  userPreferredFullName = `${this.userPreferredFirstName} ${this.userLegalLastName}`;
  userDisplayTitleName = `${this.userLegalFullName} (${this.userPreferredFirstName})`;
  userSummary = 'Results-driven software developer with 2.5 years of experience in the industry. Proficient in building scalable applications, full-stack development, cloud technologies, and system design. Demonstrated strong problem-solving skills with a proven track record of boosting system performance and reliability. Fast learner of new technologies with a commitment to delivering high-quality code.';

  workExperience = [
    {
      title: 'Programmer',
      company: 'St. Teresas Hospital',
      period: 'November 2022 - May 2024',
      description: [
        "Reduced the speed of loading patient's allergy information in Prescription Information System by 60% through revamping key components for reading patients' data from the government's API.",
        "Redesigned the backup and local database solution used in the Pharmacy for reducing manual interventions during server outages by implementing automatic data and database schema synchronization with the central server.",
        "Integrated Lexicomp modules into Doctor, Pharmacy, and Ward Systems, providing real-time comprehensive drug data that empowered over 200 medical staffs to make more informed decisions."
      ],
      skills: [
        'VB .NET',
        'Android Java',
        'MS SQL Server Database',
        'Web Services',
        'RESTful API',
        'Retrofit 2',
        'Angular',
        'Nest JS',
        'Git',
        'Bitbucket',
        'Jira',
        'Software testing'
      ]
    },
    {
      title: 'System Engineer (Intern)',
      company: 'Multisoft Limited',
      period: 'June 2020 - June 2021',
      description: [
        "Reduced manual workload for 70% in handling client FTP requests by developing and deploying a Java-based FTP automation solution which structured and executed commands based on client requirements, streamlining the process.",
        "Led the migration of 120 users' PCs, ensuring minimal downtime through an efficient process.",
        "Improved collaboration efficiency by 30% during the pandemic through provided technical guidance and created tutorials for using remote computing and video conferencing tools."
      ],
      skills: [
        'Java',
        'Troubleshooting',
        'Understanding complex systems',
        'Automation',
        'Creating technical guides'
      ]
    }
  ];

  softwareProjects = [
    {
      title: 'AI-powered Video Super Resolution Tool based on Convolutional Neural Network (CNN)',
      description: [
        "Utilizing the Image Super-Resolution Using Deep Convolutional Networks (SR-CNN) algorithm to upscale low-resolution videos into high definition. Integrated deep learning techniques to enhance image clarity, reduce noise, and restore fine details, resulting in sharper and more realistic outputs.",
        "Supported a wide range of video formats; offered customizable settings, enabling users to adjust resolution, processing intensity, and output quality based on their specific requirements."
      ],
      skills: [
        "Python",
        "PyTorch",
        "OpenCV",
        "Pillow",
        "FFmpeg",
        "Numpy",
        "Tkinter",
        "tkVideo",
        "Json",
        "Anaconda",
        "Machine learning algorithms"
      ],
      githubLink: 'https://github.com/tychan9626/AI-powered-Video-Super-Resolution-Tool-based-on-Convolutional-Neural-Network',
      screenCaptures: ["/proj_ai-vid-super-res-flow.png"],
      codeSample: ""
    },
    {
      title: 'Big 2 Poker game play with command line interface',
      description: [
        "Implemented game mechanics that followed official Big 2 rules, including card ranking, turn logic, and winning conditions.",
        "Integrated error handling and validation to ensure only valid moves are allowed, enhancing the stability and user experience of the game."
      ],
      skills: [
        "Java",
        "Java Development Kit",
        "Eclipse IDE",
        "Object-Oriented Programming",
        "System I/O",
        "JUnit Testing",
        "Git"
      ],
      githubLink: 'https://github.com/tychan9626/Big-2-Poker-game-play-with-command-line-interface',
      screenCaptures: [],
      codeSample: ""
    }
  ];

  education = {
    degree: 'Bachelor of Science in Computer Science',
    university: 'City University of Hong Kong',
    period: '2018-2022',
    gpa: '3.12 (Upper Second Class Honours)',
    featuredCourses: [
      "Software Engineering Practice (Grade: A)",
      "Design and Analysis of Algorithms (Grade: A-)",
      "Internet Applications and Security (Grade: A)",
      "English Communication Skills for Computing (Grade: A-)"
    ],
    otherCourses: [
      "Database Systems",
      "Data Structures",
      "Software Design",
      "Operating Systems",
      "Computer Networks",
      "Computer Organization",
      "Internet Applications Development",
      "Problem Solving and Programming",
      "Software Testing and Maintenance",
      "Managing Software Projects",
      "Software Quality Management"
    ]
  };

  technicalSkills = {
    proficient: [
      "VB .NET",
      "Java",
      "Python",
      "Android (Java)",
      "Microsoft SQL",
      "Angular",
      "Node JS",
      "MongoDB",
      "RESTful API",
      "JavaScript",
      "TypeScript",
      "HTML/CSS",
      "Git",
      "Jira",
      "CI/CD pipelines",
      "Software testing & debugging"
    ],
    familiar: [
      "C++",
      "Web Services",
      "Android (Kotlin)",
      "Microsoft Azure"
    ]
  };

  navigateURL(url: string) {
    window.location.href = url;
  }
}
