import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A fully responsive e-commerce platform with product filtering, cart management, and checkout process.',
      image: 'assets/images/project1.jpg',
      tags: ['Angular', 'TypeScript', 'TailwindCSS', 'Firebase'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://ecommerce-demo.yourdomain.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A drag-and-drop task management application with user authentication and real-time updates.',
      image: 'assets/images/project2.jpg',
      tags: ['Angular', 'RxJS', 'NgRx', 'Firebase'],
      github: 'https://github.com/yourusername/taskmanager',
      demo: 'https://tasks.yourdomain.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A weather dashboard that displays current and forecasted weather data with interactive visualizations.',
      image: 'assets/images/project3.jpg',
      tags: ['Angular', 'D3.js', 'API Integration', 'TailwindCSS'],
      github: 'https://github.com/yourusername/weather',
      demo: 'https://weather.yourdomain.com',
    },
  ];

  getProjects(): Project[] {
    return this.projects;
  }
}
