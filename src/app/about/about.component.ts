import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'az-about',
  templateUrl: './about.component.html',
  styleUrls: [ './about.component.scss' ]
} )
export class AboutComponent implements OnInit {


  public skills: string[] = [
    'OpenCV',
    'TensorFlow',
    'ROS',
    'C#',
    'Java'
  ];

  public strongSkills: string[] = [
    'Angular',
    'Electron',
    'NodeJS',
    'Express',
    'HTML/CSS',
    'Javascript',
    'TypeScript',
    'C++',
    'Python',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Amazon Web Services',
    'REST APIs',
    'Agile Methodologies',
    'Scrum'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}