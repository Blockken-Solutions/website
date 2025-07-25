import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SchemaService {
  private renderer: Renderer2;
  private scriptElement: HTMLScriptElement | null = null;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  addPersonSchema(config: {
    name: string;
    jobTitle: string;
    url: string;
    image: string;
    description: string;
    sameAs?: string[];
  }) {
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      'name': config.name,
      'jobTitle': config.jobTitle,
      'url': config.url,
      'image': config.image,
      'description': config.description,
      'sameAs': config.sameAs || [],
    };

    this.addSchema(personSchema);
  }

  addWebsiteSchema(config: {
    name: string;
    url: string;
    description: string;
    author: string;
    keywords?: string;
  }) {
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      'name': config.name,
      'url': config.url,
      'description': config.description,
      'author': {
        '@type': 'Person',
        'name': config.author,
      },
      'keywords': config.keywords,
    };

    this.addSchema(websiteSchema);
  }

  addProjectSchema(
    projects: Array<{
      name: string;
      description: string;
      url?: string;
      image?: string;
      dateCreated?: string;
      creator: string;
      keywords?: string;
      technologies?: string[];
    }>,
  ) {
    const projectSchemas = projects.map((project) => ({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      'name': project.name,
      'description': project.description,
      'url': project.url,
      'image': project.image,
      'dateCreated': project.dateCreated,
      'creator': {
        '@type': 'Person',
        'name': project.creator,
      },
      'keywords': project.keywords,
      ...(project.technologies && {
        featureList: project.technologies.join(', '),
      }),
    }));

    this.addSchema(projectSchemas);
  }

  addSkillsSchema(
    skills: Array<{
      name: string;
      description?: string;
      category?: string;
    }>,
  ) {
    const skillsSchema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      'itemListElement': skills.map((skill, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'Thing',
          'name': skill.name,
          'description': skill.description,
          ...(skill.category && { category: skill.category }),
        },
      })),
    };

    this.addSchema(skillsSchema);
  }

  private addSchema(schema: any) {
    if (this.scriptElement) {
      this.renderer.removeChild(document.head, this.scriptElement);
    }

    this.scriptElement = this.renderer.createElement('script');
    this.renderer.setAttribute(this.scriptElement, 'type', 'application/ld+json');
    this.renderer.setProperty(this.scriptElement, 'text', JSON.stringify(schema));
    this.renderer.appendChild(document.head, this.scriptElement);
  }
}
