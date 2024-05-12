import { Injectable } from "@angular/core";
import { Meta } from "@angular/platform-browser";

@Injectable({
    providedIn: 'root',
  })
export class MetaService {
    constructor(
      private meta: Meta,
    ) {}

    updateMetaTags(metaTags: MetaTags) {
        const { title, type, imageSrc, url, description, cardType } = metaTags;
        this.setTitle(title);
        this.setType(type);
        this.setImage(imageSrc);
        this.setURL(url);
        this.setDescription(description);
        this.setCardType(cardType);
    }

    public setTitle(title: string) {
        this.meta.updateTag({ property: 'og:title', content: title });
        this.meta.updateTag({ property: 'twitter:title', content: title });
    }
     
    private setType(type: string) {
        this.meta.updateTag({ property: 'og:type', content: type });
    }
     
    private setImage(imageSrc: string) {
        this.meta.updateTag({ property: 'og:image', content: imageSrc });
        this.meta.updateTag({ property: 'twitter:image', content: imageSrc });
    }
    
     
    private setDescription(description: string) {
        this.meta.updateTag({ property: 'og:description', content: description });
        this.meta.updateTag({ property: 'twitter:description', content: description });
    }
     
    private setCardType(cardType: string) {
        this.meta.updateTag({ name: 'twitter:card', content: cardType });
    }

    
    public setURL(url: string) {
        this.meta.updateTag({ name: 'twitter:url', content: `http://durangeneidad.com${url}` });
        this.meta.updateTag({ name: 'og:url', content: `http://durangeneidad.com${url}` });
    }


  }
   export interface MetaTags{
        title: string;
        type: string;
        imageSrc: string;
        url: string;
        description: string;
        cardType: string;
    }