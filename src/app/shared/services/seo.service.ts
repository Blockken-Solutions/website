import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {}

  init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data),
      )
      .subscribe((data) => {
        if (data['title']) {
          this.updateTitle(data['title']);
        }

        if (data['description']) {
          this.updateDescription(data['description']);
        }

        if (data['keywords']) {
          this.updateKeywords(data['keywords']);
        }
      });
  }

  updateTitle(title: string) {
    const fullTitle = `${title} | Blockken Solutions`;
    this.title.setTitle(fullTitle);
  }

  updateDescription(description: string) {
    if (this.meta.getTag('name="description"')) {
      this.meta.updateTag({ name: 'description', content: description });
    } else {
      this.meta.addTag({ name: 'description', content: description });
    }

    this.updateOpenGraphTag('og:description', description);
  }

  updateKeywords(keywords: string) {
    if (this.meta.getTag('name="keywords"')) {
      this.meta.updateTag({ name: 'keywords', content: keywords });
    } else {
      this.meta.addTag({ name: 'keywords', content: keywords });
    }
  }

  updateOpenGraphTag(property: string, content: string) {
    if (this.meta.getTag(`property="${property}"`)) {
      this.meta.updateTag({ property, content });
    } else {
      this.meta.addTag({ property, content });
    }
  }

  setDefaultTags(config: {
    title?: string;
    description?: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
  }) {
    if (config.title) {
      this.updateTitle(config.title);
    }

    if (config.description) {
      this.updateDescription(config.description);
    }

    if (config.keywords) {
      this.updateKeywords(config.keywords);
    }

    if (config.title) {
      this.updateOpenGraphTag('og:title', config.title);
    }

    if (config.url) {
      this.updateOpenGraphTag('og:url', config.url);
    }

    if (config.image) {
      this.updateOpenGraphTag('og:image', config.image);
    }

    if (config.type) {
      this.updateOpenGraphTag('og:type', config.type);
    }

    if (config.url) {
      if (this.meta.getTag('rel="canonical"')) {
        this.meta.updateTag({ rel: 'canonical', href: config.url });
      } else {
        this.meta.addTag({ rel: 'canonical', href: config.url });
      }
    }
  }
}
