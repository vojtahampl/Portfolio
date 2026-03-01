export interface CaseStudy {
  id: string;
  title: string;
  shortDescription: string;
  context: string;
  problem: string;
  constraints: string[];
  role: string;
  solution: string;
  keyDecisions: string[];
  outcomeKpis: string[];
  tech: string[];
  openApiSpec?: string;
  monitoringIntro?: string;
  imageUrl?: string;
  imageCaption?: string;
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
}

export interface Pattern {
  id: string;
  title: string;
  what: string;
  whenToUse: string;
  whyItMatters: string;
  relatedCaseStudies?: string[];
}

export interface Translations {
  nav: {
    home: string;
    caseStudies: string;
    patterns: string;
    about: string;
    contact: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
      cta: {
        cases: string;
        patterns: string;
        linkedin: string;
      };
    };
    pillars: {
      integration: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
      networks: {
        title: string;
        description: string;
      };
    };
    trust: {
      title: string;
      points: string[];
    };
    experienceSignal?: string;
    caseStudiesNav: {
      title: string;
      description: string;
      items: string[];
      cta: string;
    };
  };
  caseStudies: {
    title: string;
    intro: string;
    labels: {
      context: string;
      problem: string;
      constraints: string;
      role: string;
      solution: string;
      keyDecisions: string;
      outcome: string;
      tech: string;
      diagram: string;
      diagramPlaceholder: string;
    };
  };
  patterns: {
    title: string;
    subtitle: string;
    intro: string;
  };
  about: {
    title: string;
    sections: {
      summary: string;
      focus: string;
      experience: string;
      certifications: string;
      work: string;
    };
    summaryParagraphs: string[];
    workItems: string[];
    coreFocusAreas: string[];
    certifications: {
      title: string;
      issuer: string;
      issued: string;
    }[];
    experience: {
      company: string;
      role: string;
      period: string;
      location?: string;
      workMode?: string;
      summary?: string;
      bullets: string[];
      note?: string;
    }[];
  };
  contact: {
    title: string;
    intro: string;
    whenToReachOut: string[];
    preferredChannel: {
      title: string;
      description: string;
      label: string;
      value: string;
      href: string;
    };
    cvNote: {
      title: string;
      description: string;
    };
    privacyNote: string;
  };
}
