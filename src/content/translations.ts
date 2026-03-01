import { Translations, CaseStudy, Pattern } from '../lib/types';

export const en: Translations = {
  nav: {
    home: 'Home',
    caseStudies: 'Case Studies',
    patterns: 'Patterns',
    about: 'About',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Solution Architect | Integration & Security Architecture (API, Identity, Networks)',
      subtitle: 'I design secure API integration, identity flows, and network-aware architectures for banking and regulated enterprise environments.',
      cta: {
        cases: 'View Real Case Studies →',
        patterns: 'Explore Architecture Patterns',
        linkedin: 'LinkedIn Profile',
      },
    },
    pillars: {
      integration: {
        title: 'API & Integration Architecture',
        description: 'Design REST and SOAP integrations with contract-first OpenAPI/YAML to keep interoperability stable across complex enterprise landscapes.',
      },
      security: {
        title: 'Identity & Security',
        description: 'Design consistent, auditable authentication and authorisation flows (OIDC, Kerberos, MFA) aligned with internal security baselines.',
      },
      networks: {
        title: 'Networks & Communication',
        description: 'Turn ports, proxies, and security layers into clear, documented, deployable target architectures.',
      },
    },
    trust: {
      title: 'Why organisations choose to work with me',
      points: [
        'I design architectures that respect real enterprise constraints — security policies, network boundaries, and operational realities',
        'I help teams make sense of complex application landscapes and turn them into clear, implementable target designs',
        'I focus on secure and maintainable integrations rather than short-term technical fixes',
        'I bridge architecture, security, infrastructure and delivery to prevent late-stage surprises',
        'I bring a calm, structured approach to decision-making in business-critical and regulated environments',
      ],
    },
    caseStudiesNav: {
      title: 'Evidence-based Architecture',
      description: 'Explore anonymised case studies focusing on real-world decisions and impact.',
      items: [
        'Analysis and design of application architecture for digital workspaces',
        'Controlled integration of legacy systems via a central integration layer',
        'Consistent identity & authentication architecture',
        'Proposal for operational and security monitoring of the digital enterprise environment',
      ],
      cta: 'View All Case Studies',
    },
  },
  caseStudies: {
    title: 'Case Studies',
    intro: 'These case studies are based on real architectural work in a regulated enterprise environment and have been deliberately anonymized. They focus primarily on architectural and security decisions and how solutions were delivered in practice, rather than on specific organizations or detailed implementation steps.',
    labels: {
      context: 'Context',
      problem: 'Problem',
      constraints: 'Constraints',
      role: 'My role',
      solution: 'Solution',
      keyDecisions: 'Key decisions',
      outcome: 'Outcome',
      tech: 'Technologies & Standards',
      diagram: 'Diagram',
      diagramPlaceholder: 'Diagram placeholder (redacted / coming soon)',
    },
  },
  patterns: {
    title: 'Enterprise Architecture Patterns for Secure and Regulated Environments',
    subtitle: 'Reusable integration, identity, network and monitoring patterns derived from real-world enterprise systems.',
    intro: 'These patterns represent architectural decisions repeatedly applied across different applications and environments. They focus on security, operational clarity and long-term maintainability in complex enterprise landscapes.',
  },
  about: {
    title: 'About',
    sections: {
      summary: 'About',
      work: 'What I work on',
      focus: 'Core focus areas',
      experience: 'Professional background',
      certifications: 'Certifications & continuous learning',
    },
    summaryParagraphs: [
      'I’m a Solution Architect specialising in integration and security architecture in banking and regulated enterprise environments.',
      'I turn complex application landscapes into secure, understandable and operationally sustainable architectures — with emphasis on identity, network constraints and integration standards.',
      'I bridge analysis, security, infrastructure and delivery teams to turn constraints into clear, actionable target designs.',
    ],
    workItems: [
      'AS-IS analysis of systems, integrations and dependencies',
      'TO-BE architecture aligned with identity, network and security standards',
      'Validation of authentication, authorisation and communication flows',
      'Support for predictable application onboarding in regulated environments',
      'Cross-team alignment across architecture, security, infrastructure and delivery',
    ],
    coreFocusAreas: [
      'Solution & Integration Architecture',
      'Application & Identity Security',
      'API Design & Standards (OpenAPI, REST, SOAP)',
      'Network & Communication Analysis',
      'Banking & Regulated Environments',
    ],
    certifications: [
      { title: 'Full-stack developer', issuer: 'robot_dreams', issued: '09/2025' },
      { title: 'Application Architect', issuer: 'robot_dreams', issued: '09/2025' },
      { title: 'Ethical hacker', issuer: 'robot_dreams', issued: '04/2025' },
      { title: 'Penetration tester', issuer: 'robot_dreams', issued: '03/2025' },
      { title: 'Cybersecurity Architect', issuer: 'robot_dreams', issued: '12/2024' },
      { title: 'SOA and Integration', issuer: 'Goodea', issued: '11/2024' },
      { title: 'Standard 10.0 - Level 1 Enterprise Architect Course (TOGAF)', issuer: 'Udemy', issued: '06/2024' },
      { title: 'Integrace v praxi', issuer: 'Beanz s.r.o.', issued: '04/2024' },
      { title: 'Business Analysis Fundamentals', issuer: 'Udemy', issued: '04/2024' },
      { title: 'REST API Design', issuer: 'DataScript s.r.o.', issued: '03/2024' },
      { title: 'Design REST API', issuer: 'Udemy', issued: '08/2022' },
    ],
    experience: [
      {
        company: 'ČSOB',
        role: 'Solution Architect',
        period: 'Jan 2025 – Present',
        location: 'Prague, Czechia · Hybrid',
        summary: 'End-to-end architecture and security validation for business-critical applications migrating to a new digital workspace.',
        bullets: [
          'AS-IS / TO-BE architecture analysis',
          'Integration and security architecture design',
          'Identity flows (OIDC, Kerberos, MFA)',
          'Network communication analysis (ports, proxies, security layers)',
          'Cross-team coordination and standards compliance',
        ],
      },
      {
        company: 'ČSOB',
        role: 'Information Technology Business Analyst',
        period: 'Jan 2023 – Jan 2025',
        summary: 'Analysis and transformation of banking applications within a large-scale migration programme.',
        bullets: [
          'AuthN/AuthZ and network dependency analysis',
          'Support for redesign and target integration',
          'Testing and validation support',
          'Close cooperation with architects, security and developers',
        ],
      },
      {
        company: 'Erste Group',
        role: 'Information Technology Business Analyst',
        period: 'Aug 2023 – Aug 2024',
        location: 'Bratislava metropolitan area · Hybrid',
        summary: 'Analysis and refinement of business and technical requirements impacting solution architecture and system integration.',
        bullets: [
          'Translation of business requirements into technical solutions',
          'Collaboration across IT and business',
          'Contribution to scalable and secure enterprise designs',
        ],
        note: 'Parallel engagement focused on requirements and integration work in an enterprise environment.',
      },
      {
        company: 'ZENTITY a.s.',
        role: 'Information Technology Analyst',
        period: 'Jun 2022 – Dec 2022',
        location: 'Brno, Prague',
        summary: 'Technical analysis and design of mobile application modules.',
        bullets: [
          'Design and validation with customers',
          'Technical analysis (DB models, APIs, processes)',
          'Bridge between customers and development teams',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'Information Technology Analyst',
        period: 'Oct 2021 – May 2022',
        location: 'Brno, South Moravian, Czechia',
        bullets: [
          'System modelling (UML, BPMN, SoaML)',
          'Analytical documentation for development teams',
          'Task coordination via JIRA',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'Junior Information Technology analyst',
        period: 'Sep 2020 – Sep 2021',
        location: 'Brno, South Moravian, Czechia',
        bullets: [
          'System modelling (UML, BPMN, SoaML)',
          'Analytical documentation for development teams',
          'Task coordination via JIRA',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'Junior Information technology analyst (part-time)',
        period: 'Mar 2020 – Sep 2020',
        location: 'Brno, South Moravian, Czechia',
        bullets: [
          'System modelling (UML, BPMN, SoaML)',
          'Analytical documentation for development teams',
          'Task coordination via JIRA',
        ],
      },
    ],
  },
  contact: {
    title: 'Contact',
    intro: 'If you’re dealing with integration, identity or security challenges in a regulated enterprise environment, feel free to reach out. I’m most responsive via LinkedIn and prefer initial contact there.',
    whenToReachOut: [
      'Designing or reviewing integration and security architecture',
      'Migrating applications in regulated or banking environments',
      'Standardising API, identity or network communication patterns',
      'Looking for a Solution Architect with strong analysis and security background',
      'Discussing real-world architecture decisions and trade-offs',
    ],
    preferredChannel: {
      title: 'Preferred channel',
      description: 'Connect via LinkedIn for introductions, opportunities, or architecture discussions.',
      label: 'LinkedIn (Primary)',
      value: 'linkedin.com/in/vojtech-hampl',
      href: 'https://www.linkedin.com/in/vojtech-hampl/',
    },
    cvNote: {
      title: 'CV / Profile details',
      description: 'CV is available upon request and typically shared after initial contact via LinkedIn.',
    },
    privacyNote: 'This site does not collect personal data and does not use contact forms. Communication is initiated directly via external channels.',
  },
};

export const cs: Translations = {
  nav: {
    home: 'Domů',
    caseStudies: 'Případové studie',
    patterns: 'Patterny',
    about: 'O mně',
    contact: 'Kontakt',
  },
  home: {
    hero: {
      title: 'Solution architekt | Integrační a bezpečnostní architektura (API, identita, sítě)',
      subtitle: 'Navrhuji bezpečnou API integraci, identity flow a síťově orientované architektury pro bankovnictví a regulované enterprise prostředí.',
      cta: {
        cases: 'Zobrazit skutečné Case Studies →',
        patterns: 'Prozkoumat architektonické patterny',
        linkedin: 'LinkedIn profil',
      },
    },
    pillars: {
      integration: {
        title: 'API a integrační architektura',
        description: 'Návrh REST a SOAP integrací s contract-first OpenAPI/YAML pro stabilní interoperabilitu v komplexním enterprise prostředí.',
      },
      security: {
        title: 'Identita a bezpečnost',
        description: 'Návrh konzistentních, auditovatelných autentizačních a autorizačních toků (OIDC, Kerberos, MFA) v souladu s bezpečnostními standardy.',
      },
      networks: {
        title: 'Sítě a komunikace',
        description: 'Převod portů, proxy a bezpečnostních vrstev do jasných, dokumentovaných a nasaditelných cílových architektur.',
      },
    },
    trust: {
      title: 'Proč se mnou organizace spolupracují',
      points: [
        'Zkušenosti s business-kritickými systémy v regulovaném prostředí',
        'Silný důraz na bezpečnost, identitu a síťová omezení',
        'Jasné architektonické myšlení AS-IS / TO-BE',
        'Schopnost převést komplexní prostředí do akčních návrhů',
        'Efektivní práce napříč týmy architektury, bezpečnosti a delivery',
      ],
    },
    experienceSignal: 'Zkušenosti získané v rámci enterprise architektur v bankovnictví a vysoce regulovaném prostředí.',
    caseStudiesNav: {
      title: 'Architektura podložená důkazy',
      description: 'Prozkoumejte anonymizované případové studie zaměřené na reálná rozhodnutí a dopady.',
      items: [
        'Analýza a návrh architektury aplikací pro digitální workspace',
        'Řízená integrace legacy systémů přes centrální integrační vrstvu',
        'Návrh a správa OpenAPI kontraktů v multi-country enterprise prostředí',
        'Návrh provozního a bezpečnostního monitoringu digitálního enterprise prostředí',
      ],
      cta: 'Zobrazit všechny Case Studies',
    },
  },
  caseStudies: {
    title: 'Případové studie',
    intro: 'Tyto případové studie vycházejí z reálné architektonické práce v regulovaném enterprise prostředí a jsou záměrně anonymizované. Soustředí se hlavně na architektonická a bezpečnostní rozhodnutí a na to, jak byla řešení doručena v praxi, nikoli na konkrétní organizace nebo detailní implementační kroky.',
    labels: {
      context: 'Kontext',
      problem: 'Problém',
      constraints: 'Omezení',
      role: 'Moje role',
      solution: 'Řešení',
      keyDecisions: 'Klíčová rozhodnutí',
      outcome: 'Výsledek',
      tech: 'Technologie a standardy',
      diagram: 'Diagram',
      diagramPlaceholder: 'Místo pro diagram (redigováno / připravuje se)',
    },
  },
  patterns: {
    title: 'Enterprise architektonické patterny pro bezpečná a regulovaná prostředí',
    subtitle: 'Opakovatelné patterny pro integraci, identitu, sítě a monitoring odvozené z praxe v enterprise systémech.',
    intro: 'Tyto patterny představují architektonická rozhodnutí opakovaně používaná napříč různými aplikacemi a prostředími. Zaměřují se na bezpečnost, provozní srozumitelnost a dlouhodobou udržovatelnost v komplexním enterprise prostředí.',
  },
  about: {
    title: 'O mně',
    sections: {
      summary: 'O mně',
      work: 'Na čem pracuji',
      focus: 'Hlavní zaměření',
      experience: 'Profesní zkušenosti',
      certifications: 'Certifikace a vzdělávání',
    },
    summaryParagraphs: [
      'Jsem solution architekt se zaměřením na integrační a bezpečnostní architekturu v bankovnictví a regulovaném enterprise prostředí.',
      'Převádím komplexní aplikační landscape do bezpečné, srozumitelné a provozně udržitelné architektury — s důrazem na identitu, síťová omezení a integrační standardy.',
      'Propojuji analýzu, bezpečnost, infrastrukturu a delivery a převádím omezení do jasných, akčních cílových návrhů.',
    ],
    workItems: [
      'AS-IS analýza systémů, integrací a závislostí',
      'TO-BE architektura v souladu s identity, síťovými a bezpečnostními standardy',
      'Validace autentizačních, autorizačních a komunikačních toků',
      'Podpora predikovatelného onboardingu aplikací v regulovaném prostředí',
      'Sladění napříč architekturou, bezpečností, infrastrukturou a delivery',
    ],
    coreFocusAreas: [
      'Solution a integrační architektura',
      'Aplikační bezpečnost a identita',
      'Návrh API a standardy (OpenAPI, REST, SOAP)',
      'Síťová a komunikační analýza',
      'Bankovnictví a regulované prostředí',
    ],
    certifications: [
      { title: 'Full-stack developer', issuer: 'robot_dreams', issued: 'Vydáno 09/2025' },
      { title: 'Application Architect', issuer: 'robot_dreams', issued: 'Vydáno 09/2025' },
      { title: 'Ethical hacker', issuer: 'robot_dreams', issued: 'Vydáno 04/2025' },
      { title: 'Penetration tester', issuer: 'robot_dreams', issued: 'Vydáno 03/2025' },
      { title: 'Cybersecurity Architect', issuer: 'robot_dreams', issued: 'Vydáno 12/2024' },
      { title: 'SOA and Integration', issuer: 'Goodea', issued: 'Vydáno 11/2024' },
      { title: 'Standard 10.0 - Level 1 Enterprise Architect Course (TOGAF)', issuer: 'Udemy', issued: 'Vydáno 06/2024' },
      { title: 'Integrace v praxi', issuer: 'Beanz s.r.o.', issued: 'Vydáno 04/2024' },
      { title: 'Business Analysis Fundamentals', issuer: 'Udemy', issued: 'Vydáno 04/2024' },
      { title: 'REST API Design', issuer: 'DataScript s.r.o.', issued: 'Vydáno 03/2024' },
      { title: 'Design REST API', issuer: 'Udemy', issued: 'Vydáno 08/2022' },
    ],
    experience: [
      {
        company: 'ČSOB',
        role: 'Solution architekt',
        period: 'Led 2025 – Současnost',
        location: 'Praha, Česko · Hybrid',
        summary: 'End-to-end architektura a bezpečnostní validace pro business-kritické aplikace migrující do nového digitálního pracovního prostředí.',
        bullets: [
          'AS-IS / TO-BE architektonická analýza',
          'Návrh integrační a bezpečnostní architektury',
          'Identity flow (OIDC, Kerberos, MFA)',
          'Analýza síťové komunikace (porty, proxy, bezpečnostní vrstvy)',
          'Koordinace napříč týmy a soulad se standardy',
        ],
      },
      {
        company: 'ČSOB',
        role: 'IT business analytik',
        period: 'Led 2023 – Led 2025',
        summary: 'Analýza a transformace bankovních aplikací v rámci rozsáhlého migračního programu.',
        bullets: [
          'Analýza AuthN/AuthZ a síťových závislostí',
          'Podpora pro redesign a cílovou integraci',
          'Podpora testování a validace',
          'Úzká spolupráce s architekty, bezpečností a vývojáři',
        ],
      },
      {
        company: 'Erste Group',
        role: 'IT business analytik',
        period: 'Srp 2023 – Srp 2024',
        location: 'Bratislava a okolí · Hybrid',
        summary: 'Analýza a upřesňování businessových a technických požadavků s dopadem na architekturu řešení a systémovou integraci.',
        bullets: [
          'Překlad business požadavků do technických řešení',
          'Spolupráce napříč IT a businessem',
          'Příspěvek k návrhu škálovatelných a bezpečných enterprise řešení',
        ],
        note: 'Paralelní angažmá zaměřené na požadavky a integrace v enterprise prostředí.',
      },
      {
        company: 'ZENTITY a.s.',
        role: 'IT analytik',
        period: 'Čer 2022 – Pro 2022',
        location: 'Brno, Praha',
        summary: 'Technická analýza a návrh modulů mobilních aplikací.',
        bullets: [
          'Návrh a validace se zákazníky',
          'Technická analýza (DB modely, API, procesy)',
          'Most mezi zákazníky a vývojovými týmy',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'IT analytik',
        period: 'Říj 2021 – Kvě 2022',
        location: 'Brno, Jihomoravský kraj, Česko',
        bullets: [
          'Modelování systémů (UML, BPMN, SoaML)',
          'Analytická dokumentace pro vývojové týmy',
          'Koordinace úkolů přes JIRA',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'Junior IT analytik',
        period: 'Zář 2020 – Zář 2021',
        location: 'Brno, Jihomoravský kraj, Česko',
        bullets: [
          'Modelování systémů (UML, BPMN, SoaML)',
          'Analytická dokumentace pro vývojové týmy',
          'Koordinace úkolů přes JIRA',
        ],
      },
      {
        company: 'Asseco Central Europe',
        role: 'Junior IT analytik (částečný úvazek)',
        period: 'Bře 2020 – Zář 2020',
        location: 'Brno, Jihomoravský kraj, Česko',
        bullets: [
          'Modelování systémů (UML, BPMN, SoaML)',
          'Analytická dokumentace pro vývojové týmy',
          'Koordinace úkolů přes JIRA',
        ],
      },
    ],
  },
  contact: {
    title: 'Kontakt',
    intro: 'Pokud řešíte integrační, identity nebo bezpečnostní výzvy v regulovaném enterprise prostředí, ozvěte se. Nejrychleji reaguji na LinkedIn a preferuji první kontakt tam.',
    whenToReachOut: [
      'Návrh nebo revize integrační a bezpečnostní architektury',
      'Migrace aplikací v regulovaném nebo bankovním prostředí',
      'Standardizace API, identity nebo síťových komunikačních patternů',
      'Hledáte solution architekta se silným backgroundem v analýze a bezpečnosti',
      'Diskuze nad reálnými architektonickými rozhodnutími a trade-offy',
    ],
    preferredChannel: {
      title: 'Preferovaný kanál',
      description: 'Pro seznámení, příležitosti nebo architektonickou diskuzi mě kontaktujte přes LinkedIn.',
      label: 'LinkedIn (primární)',
      value: 'linkedin.com/in/vojtech-hampl',
      href: 'https://www.linkedin.com/in/vojtech-hampl/',
    },
    cvNote: {
      title: 'CV / Profilové detaily',
      description: 'CV posílám na vyžádání, typicky po prvním kontaktu přes LinkedIn.',
    },
    privacyNote: 'Tento web nesbírá osobní údaje a nepoužívá kontaktní formuláře. Komunikace probíhá přímo přes externí kanály.',
  },
};

export const caseStudiesEn: CaseStudy[] = [
  {
    id: 'digital-workspace-migration',
    title: 'Analysis and design of application architecture for digital workspaces',
    shortDescription: 'End-to-end AS-IS/TO-BE application analysis, including identity validation and authentication flows, assessment of network constraints, and evaluation of operational and security readiness.',
    context: 'The applications were part of a large enterprise environment and had to meet strict security, network, and regulatory requirements typical for regulated industries. The assessment was conducted as part of a broader application portfolio across business domains.',
    problem: 'The existing approach to applications integration was inconsistent and difficult to audit. There was a lack of consistent architectural validation of identity, authentication flows, and network assumptions, which increased risks in later stages of migration.',
    constraints: [
      'Regulatory and internal security requirements',
      'Network segmentation, firewalls and proxy routing',
      'Legacy technologies and existing technical dependencies',
    ],
    role: 'Responsibility for end-to-end architectural analysis of the application, assessment of identity and security aspects, and collaboration on the design of the target (TO-BE) architectural solution.',
    solution: 'Design of target architecture based on clearly defined identity and authentication flows and explicitly described network and operational prerequisites. The goal was to enable consistent and repeatable assessment of applications in a regulated enterprise environment.',
    keyDecisions: [
      'Evaluation of authentication mechanisms and identity flow options',
      'Validation of network model, proxy routing, and segmentation',
    ],
    outcomeKpis: [
      'Clear and repeatable framework for architectural assessment of applications',
      'Fewer architectural changes in later stages of migration',
      'Better overview of identity, network, and security dependencies',
      'Clearly defined ownership of authentication and authorization flows',
      'Compliance with enterprise security and network standards',
    ],
    tech: ['REST', 'SOAP', 'OpenAPI', 'OIDC', 'TLS', 'Kerberos', 'Enterprise Security Baseline', 'Active Directory', 'LDAP'],
    imageUrl: '/images/case-studies/digital-workspace-migration.png',
    imageCaption: 'This diagram shows a layered HLD view of user identity trust, network routing/proxy restrictions, and the SSO entry point. The right flow illustrates a typical access path from an on-site network and the locations where key controls are applied. Real-world implementations are significantly more complex and vary depending on the specific environment, identity model (on-prem/cloud), and baseline requirements for network, authentication/authorization, and access point controls.',
  },
  {
    id: 'secure-legacy-soap',
    title: 'Controlled outbound integration to third parties via a central integration layer',
    shortDescription: 'The case study is based on an extensive integration project whose goal was to securely and consistently expose legacy systems to third parties through a central integration layer. The main focus was on analyzing existing services, managing integration logic, and validating API communication.',
    context: 'The organisation operated multiple internal legacy systems that needed to exchange data with external third parties. Direct outbound connectivity from individual systems was difficult to govern, audit and evolve, so a central integration layer became the controlled point for outbound communication.',
    problem: 'Outbound integrations to third parties were inconsistent across internal systems. Security and transport requirements (e.g., mutual TLS and policy checks) varied by consumer, request transformations were duplicated, and there was no single place to validate requests and enforce contracts—leading to higher operational risk and poor auditability.',
    constraints: [
      'Dependence on existing legacy systems',
      'Limited possibilities for changes in backend applications',
      'Regulatory and security requirements for communication with third parties',
      'Need to maintain operational continuity during integration',
    ],
    role: 'Responsible for analysing outbound integration scenarios, mapping internal data structures to partner contracts, and designing a controlled integration flow through the central integration layer. I also collaborated on workflow-based validation and decision logic (Camunda) to standardise request checks, transformations and error handling.',
    solution: 'A central outbound integration pattern was designed where internal systems call the integration layer using an internal contract, the gateway enforces security and transport controls, and validation/orchestration logic is executed via workflow before communicating with the third party. Requests are transformed/enriched to the partner contract and responses are mapped back consistently to internal consumers, improving governance and auditability. The integration layer also standardised correlation IDs, audit logs and consistent error mapping so every outbound call is traceable end‑to‑end and incidents can be triaged quickly.',
    keyDecisions: [
      'Use a central integration layer as the single controlled outbound point to third parties',
      'Standardise security and transport controls (e.g., mTLS) at the gateway layer',
      'Implement validation and integration decision logic via workflow (Camunda) to keep rules auditable and maintainable',
    ],
    outcomeKpis: [
      'Better interoperability between legacy and modern systems',
      'Better control over data and API contracts',
      'Reduced risks associated with direct integrations of legacy systems',
      'Greater transparency and auditability of integration flows',
      'Possibility of further expansion without interfering with core legacy applications',
    ],
    tech: ['SOAP', 'WSDL', 'WS-Security', 'TLS', 'API Gateway', 'Camunda', 'Integration Analysis and Architecture Review', 'Integration testing'],
    imageUrl: '/images/case-studies/secure-legacy-soap.png',
  },
  {
    id: 'open-API-contracts',
    title: 'Design and management of OpenAPI contracts in a multi-country enterprise environment',
    shortDescription: 'Analysis, design, and management of the OpenAPI specification for the central integration layer, coordination of changes with individual countries, and cooperation with development teams.',
    context: 'The project was carried out within an enterprise environment with a central core system used across multiple countries. Communication between systems was implemented via a central integration layer built on OpenAPI contracts.',
    problem: 'Individual countries had different requirements for data structures and API behavior, which complicated the design of a unified contract. Without a controlled change process, there was a risk of API inconsistency, regression errors, and unclear ownership of responsibilities.',
    constraints: [
      'The need to maintain a unified central API contract',
      'Different regulatory and business requirements in individual countries',
      'Dependence on the existing core system and integration layer',
    ],
    role: 'Analyst responsible for one module of the OpenAPI specification, its analysis, change proposals, version management, and coordination with development teams and local stakeholders.',
    solution: 'A controlled OpenAPI contract management process was introduced, with changes based on an analysis of individual countries\' requirements. The central API design was gradually expanded to maintain compatibility, allow optional attributes for local needs, and remain sustainable in the long term.',
    keyDecisions: [
      'Definition of a central OpenAPI specification as the single source of truth',
      'Use of optional fields for local extensions without disrupting other countries',
      'Change management using Git workflow and code review with development teams',
    ],
    outcomeKpis: [
      'Consistent and versionable OpenAPI contract across countries',
      'Reduced risk of regression when changing APIs',
      'Clearly defined process for changes and ownership of API specifications',
      'Better collaboration between architecture, development, and local teams',
      'Easier adoption of a central integration layer by individual countries',
    ],
    tech: ['OpenAPI', 'REST API', 'Git', 'Confluence', 'Integration Architecture'],
    openApiSpec: `openapi: 3.0.3
info:
  title: Customer Profile API
  version: 1.3.0
  description: >
    Single-endpoint contract-first API example for a multi-country platform.
    Core schema is common and stable; country-specific attributes are optional and explicit.
    Address validation and extensions are country-aware while keeping one unified contract.

servers:
  - url: https://api.example.com

paths:
  /v1/customers/{customerId}:
    get:
      operationId: getCustomerProfile
      summary: Get customer profile (core + optional country specifics dependent of country implementation and business/technical requirements)
      parameters:
        - $ref: '#/components/parameters/CustomerId'
        - $ref: '#/components/parameters/Country'
        - $ref: '#/components/parameters/TraceId'
      responses:
        '200':
          description: OK
          headers:
            X-Trace-Id:
              schema: { type: string }
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CustomerProfile'
              examples:
                cz-example:
                  summary: CZ variant
                  value:
                    customerId: "c_8f2c1a3b"
                    country: "CZ"
                    identity:
                      nationalIdMasked: "******1234"
                      assuranceLevel: "HIGH"
                    contacts:
                      - type: "EMAIL"
                        value: "user@example.com"
                        verified: true
                    addresses:
                      - kind: "RESIDENTIAL"
                        country: "CZ"
                        line1: "Example street 1"
                        city: "Prague"
                        postalCode: "11000"
                        locality:
                          district: "Praha 1"
                        geo:
                          lat: 50.087
                          lon: 14.421
                    extension:
                      type: "CZ"
                      cz:
                        taxResidency: "CZ"
                        bankSegment: "RETAIL"

                sk-example:
                  summary: SK variant
                  value:
                    customerId: "c_91a2b3c4"
                    country: "SK"
                    identity:
                      nationalIdMasked: "******9876"
                      assuranceLevel: "SUBSTANTIAL"
                    contacts:
                      - type: "PHONE"
                        value: "+421900000000"
                        verified: false
                    addresses:
                      - kind: "RESIDENTIAL"
                        country: "SK"
                        line1: "Hlavná 12"
                        city: "Košice"
                        postalCode: "040 01"
                        locality:
                          municipalityCode: "599981"
                    extension:
                      type: "SK"
                      sk:
                        taxResidency: "SK"
                        pepFlag: false

                at-example:
                  summary: AT variant
                  value:
                    customerId: "c_a1b2c3d4"
                    country: "AT"
                    identity:
                      nationalIdMasked: "******4321"
                      assuranceLevel: "HIGH"
                      eidasLevel: "HIGH"
                    contacts:
                      - type: "PHONE"
                        value: "+421900000000"
                        verified: true
                      - type: "EMAIL"
                        value: "userAT@example.com"
                        verified: true
                    addresses:
                      - kind: "POSTAL"
                        country: "AT"
                        line1: "Karlsplatz 1"
                        city: "Wien"
                        postalCode: "1010"
                        locality:
                          regionCode: "AT-09"
                    extension:
                      type: "AT"
                      at:
                        regionCode: "AT-09"
        '400': {$ref: '#/components/responses/BadRequest'}
        '404': {$ref: '#/components/responses/NotFound'}
        '422': {$ref: '#/components/responses/UnprocessableEntity'}
        '429': {$ref: '#/components/responses/TooManyRequests'}
        '500': {$ref: '#/components/responses/InternalError'}

components:
  parameters:
    CustomerId:
      name: customerId
      in: path
      required: true
      schema:
        type: string
      description: Stable customer identifier.
      examples:
        cz-customer:
          summary: CZ test customer
          value: c_8f2c1a3b
        sk-customer:
          summary: SK test customer
          value: c_91a2b3c4
        at-customer:
          summary: AT test customer
          value: c_a1b2c3d4
    Country:
      name: CountryId
      schema:
        type: string
        enum: [CZ, SK, AT]
    TraceId:
      name: X-Trace-Id
      in: header
      required: false
      schema:
        type: string
        maxLength: 64
      description: Optional correlation id from caller; echoed back in response.

  responses:
    BadRequest:
      description: Invalid request (syntax/headers/parameters).
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    UnprocessableEntity:
      description: Validation failed (business/contract rules).
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    TooManyRequests:
      description: Rate limit exceeded.
      headers:
        Retry-After:
          schema: { type: integer, minimum: 1 }
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    InternalError:
      description: Unexpected error.
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

  schemas:
    CustomerProfile:
      type: object
      required: [customerId, country, identity]
      additionalProperties: false
      properties:
        customerId:
          type: string
        country:
          type: string
          enum: [CZ, SK, AT]
        identity:
          $ref: '#/components/schemas/IdentityCore'
        contacts:
          type: array
          maxItems: 10
          items:
            $ref: '#/components/schemas/Contact'
        addresses:
          type: array
          maxItems: 5
          items:
            $ref: '#/components/schemas/Address'
        extension:
          $ref: '#/components/schemas/CountryExtension'

    IdentityCore:
      type: object
      required: [assuranceLevel]
      additionalProperties: false
      properties:
        nationalIdMasked:
          type: string
          description: Masked identifier, never raw.
          maxLength: 32
        assuranceLevel:
          type: string
          enum: [LOW, SUBSTANTIAL, HIGH]
        eidasLevel:
          type: string
          enum: [LOW, SUBSTANTIAL, HIGH]
          nullable: true
          description: Optional mapping when available.

    Contact:
      type: object
      required: [type, value, verified]
      additionalProperties: false
      properties:
        type:
          type: string
          enum: [EMAIL, PHONE]
        value:
          type: string
          minLength: 5
          maxLength: 254
        verified:
          type: boolean

    # Multi-country address:
    # - common core fields shared by all
    # - country-aware validation via oneOf (postalCode rules differ)
    # - optional per-country "locality" & "geo" blocks (non-common => optional)
    Address:
      type: object
      required: [kind, country, line1, city, postalCode]
      additionalProperties: false
      properties:
        kind:
          type: string
          enum: [RESIDENTIAL, POSTAL]
        country:
          type: string
          enum: [CZ, SK, AT]
        line1:
          type: string
          minLength: 1
          maxLength: 120
        line2:
          type: string
          maxLength: 120
          nullable: true
          description: Optional address line (not always used across countries).
        city:
          type: string
          minLength: 1
          maxLength: 80
        postalCode:
          type: string
          description: Country-validated postal code.
        locality:
          $ref: '#/components/schemas/AddressLocality'
        geo:
          $ref: '#/components/schemas/GeoPoint'
      oneOf:
        - $ref: '#/components/schemas/AddressCZ'
        - $ref: '#/components/schemas/AddressSK'
        - $ref: '#/components/schemas/AddressAT'

    AddressCZ:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [CZ] }
            postalCode:
              type: string
              pattern: '^\d{3}\s?\d{2}$' # 11000 or 110 00
    AddressSK:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [SK] }
            postalCode:
              type: string
              pattern: '^\d{3}\s?\d{2}$' # 04001 or 040 01
    AddressAT:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [AT] }
            postalCode:
              type: string
              pattern: '^\d{4}$' # 1010

    AddressLocality:
      type: object
      additionalProperties: false
      description: Optional country-specific locality metadata.
      properties:
        district:
          type: string
          maxLength: 80
          nullable: true
          description: e.g. CZ district (optional)
        municipalityCode:
          type: string
          maxLength: 24
          nullable: true
          description: e.g. SK municipality code (optional)
        regionCode:
          type: string
          pattern: '^[A-Z]{2}-\d{2}$'
          nullable: true
          description: e.g. AT region code (optional)

    GeoPoint:
      type: object
      additionalProperties: false
      description: Optional geolocation (if available).
      properties:
        lat: { type: number, format: double, nullable: true }
        lon: { type: number, format: double, nullable: true }

    # Multi-country extension pattern:
    # Core stays stable, per-country additions are optional + explicit.
    CountryExtension:
      type: object
      required: [type]
      additionalProperties: false
      properties:
        type:
          type: string
          enum: [CZ, SK, AT]
        cz: { $ref: '#/components/schemas/ExtCZ' }
        sk: { $ref: '#/components/schemas/ExtSK' }
        at: { $ref: '#/components/schemas/ExtAT' }
      oneOf:
        - required: [type, cz]
          properties: { type: { enum: [CZ] } }
        - required: [type, sk]
          properties: { type: { enum: [SK] } }
        - required: [type, at]
          properties: { type: { enum: [AT] } }

    ExtCZ:
      type: object
      additionalProperties: false
      required: [taxResidency]
      properties:
        taxResidency:
          type: string
          enum: [CZ, EU, NON_EU]
        bankSegment:
          type: string
          enum: [RETAIL, SME, CORPORATE]
          nullable: true

    ExtSK:
      type: object
      additionalProperties: false
      required: [taxResidency]
      properties:
        taxResidency:
          type: string
          enum: [SK, EU, NON_EU]
        pepFlag:
          type: boolean
          description: Politically exposed person indicator (derived).

    ExtAT:
      type: object
      additionalProperties: false
      properties:
        regionCode:
          type: string
          pattern: '^[A-Z]{2}-\d{2}$'
          nullable: true

    ErrorResponse:
      type: object
      required: [error]
      additionalProperties: false
      properties:
        error:
          type: object
          required: [code, message, traceId]
          additionalProperties: false
          properties:
            code: { type: string, example: "VALIDATION_FAILED" }
            message: { type: string, example: "postalCode does not match required format" }
            traceId: { type: string, example: "a1b2c3d4e5" }
            details:
              type: array
              items:
                type: object
                additionalProperties: false
                properties:
                  field: { type: string, example: "addresses[0].postalCode" }
                  rule: { type: string, example: "pattern" }
                  value: { type: string, example: "ABC" }`,
  },
  {
    id: 'monitoring-external-saas',
    title: 'Proposal for operational and security monitoring of the digital enterprise environment',
    shortDescription: 'Analysis, design, and coordination of operational and security monitoring across application, identity, and infrastructure components of the digital environment.',
    context: 'The digital enterprise environment consisted of a combination of cloud and on-premise components, including identity services, integration points, and application platforms. Operational responsibilities were divided among multiple teams and individual service owners.',
    problem: 'Historically, monitoring was handled in isolation at the level of individual technologies, without a unified view of the availability, security, and operational health of the entire environment. Incidents were often detected only by users, and there was no clear correlation between operational and security signals.',
    constraints: [
      'Hybrid environment combining cloud and on-premises services',
      'Different service owners with different operational priorities',
      'Dependence on existing monitoring tools and processes',
      'Need to separate operational and security monitoring',
    ],
    role: 'Solution architect responsible for analyzing the digital environment, designing operational and security monitoring of individual components, and coordinating requirements between service owners and the monitoring team.',
    solution: 'A unified approach to operational and security monitoring based on cooperation with the owners of individual components was proposed. Meaningful operational metrics and separate security use cases were defined for each service. These requirements were formalized into specifications and subsequently handed over to the monitoring team for implementation.',
    keyDecisions: [
      'Division of monitoring into operational and security perspectives',
      'Definition of monitoring requirements in cooperation with service owners',
      'Focus on monitoring key integration and identity points',
      'Separation of monitoring design from its technical implementation',
    ],
    outcomeKpis: [
      'Better overview of the operational health of the digital environment',
      'Faster identification and triage of incidents',
      'Clearly defined monitoring responsibilities across teams',
      'Meaningful security use cases linked to real-world operations',
      'Higher operational stability of business-critical services',
    ],
    tech: ['SNMP', 'REST', 'SOAP', 'OAuth2', 'Synthetic Monitoring', 'HTTP Probes', 'Proxy', 'Identity Services', 'Observability'],
    monitoringIntro: 'Below is an example of a requirements monitoring matrix that shows the monitoring options in a regulated business environment—an example at the network, identity, integration, and infrastructure layers. It maps technical signals (availability, performance, capacity, security), severity, and ownership, enabling repeatable incident detection, classification, and clear accountability. Specific examples of monitoring depend on the environment of the company in question.',
    tables: [
      {
        title: 'Operational monitoring',
        headers: ['Component', 'Layer', 'What is monitored', 'Signal type', 'How', 'Trigger / Threshold', 'Severity', 'Primary owner', 'Notes'],
        rows: [
          ['DNS', 'Network', 'Name resolution availability', 'Availability', 'DNS query (A/AAAA)', 'Timeout', 'Critical', 'Network team', 'Core dependency for all services'],
          ['DNS', 'Network', 'Query latency', 'Performance', 'DNS response time', 'Latency above agreed threshold', 'Major', 'Network team', 'Early signal of network issues'],
          ['DHCP', 'Network', 'Scope capacity', 'Capacity', 'Lease utilization', 'Capacity above agreed threshold', 'Major', 'Network team', 'Prevents new clients from connecting'],
          ['F5 Load Balancer', 'Network / L7', 'Availibility/HealthCheck VIP', 'Availability', 'Health check', 'VS down', 'Critical', 'Network team', 'Entry point for applications'],
          ['F5 Load Balancer', 'Network / L7', 'Pool member health', 'Availability', 'Node/pool status', 'Healthy members < N', 'Major', 'Network team', 'Detects backend degradation'],
          ['Firewall', 'Network / Security', 'Dropped packets', 'Security / Network', 'Firewall counters', 'Spike over baseline', 'Major', 'SecOps', 'Detects misrouting or attack'],
          ['Proxy', 'Network', 'Outbound connectivity', 'Availability', 'Synthetic HTTP probe', 'Timeout / 5xx', 'Critical', 'Network team', 'Affects SaaS and external APIs'],
          ['Active Directory', 'Identity', 'LDAP availability', 'Availability', 'LDAP bind check', 'Bind failure', 'Critical', 'Identity team', 'Authentication dependency'],
          ['Active Directory', 'Identity', 'Replication health', 'Consistency', 'AD replication status', 'Replication delay', 'Major', 'Identity team', 'Prevents stale identity data'],
          ['Active Directory', 'Identity', 'Authentication failures', 'Security', 'Auth error rate', 'Spike over baseline', 'Major', 'Identity team', 'Detects misconfig or attack'],
          ['NTP', 'Infrastructure', 'Time synchronization', 'Availability', 'Time drift check', 'time sync over baseline', 'Major', 'Platform team', 'Critical for auth and logs'],
          ['Monitoring Agent', 'Observability', 'Agent heartbeat', 'Availability', 'Heartbeat signal', 'heartbeat missing for agreed time', 'Major', 'Platform team', 'Blind spot detection']
        ]
      },
      {
        title: 'Security monitoring',
        headers: ['Component', 'Layer', 'Use case', 'What is monitored', 'Signal type', 'How', 'Trigger / Threshold', 'Severity', 'Primary owner', 'Notes'],
        rows: [
          ['DNS', 'Network', 'DNS abuse / tunneling', 'Abnormal query patterns', 'Security', 'DNS logs / Sec monitoring tool', 'Spike in TX/long queries', 'High', 'SecOps', 'Early sign of data exfiltration'],
          ['DNS', 'Network', 'Malware C2 resolution', 'Resolution of known bad domains', 'Security', 'Threat intel feed + DNS logs', 'Match on IOC', 'Critical', 'SecOps', 'Blocks malware communication'],
          ['Firewall', 'Network / Security', 'Unauthorized access attempt', 'Denied inbound connections', 'Security', 'Firewall logs', 'Repeated denies from same source', 'High', 'SecOps', 'Recon or brute-force attempt'],
          ['Firewall', 'Network / Security', 'Policy violation', 'Traffic outside allowed zones', 'Security', 'Firewall policy logs', 'Rule hit anomaly', 'High', 'SecOps', 'Detects misconfigured or bypassed flows'],
          ['Proxy', 'Network / Security', 'Suspicious outbound traffic', 'Requests to risky categories', 'Security', 'Proxy logs + URL categories', 'Access to malware/phishing category', 'Critical', 'SecOps', 'User or service compromise'],
          ['Active Directory', 'Identity', 'Brute-force authentication', 'Failed logon attempts', 'Security', 'AD security events', 'Failures > baseline', 'Critical', 'Identity / SecOps', 'Credential stuffing or password spray'],
          ['Active Directory', 'Identity', 'Privilege escalation', 'Group membership changes', 'Security', 'AD audit logs', 'Admin group modification', 'Critical', 'Identity / SecOps', 'High-impact identity event'],
          ['Active Directory', 'Identity', 'Suspicious Kerberos activity', 'Ticket anomalies', 'Security', 'Kerberos logs', 'Golden/Silver ticket patterns', 'Critical', 'SecOps', 'Advanced attack detection'],
          ['Load Balancer', 'L7', 'Application abuse', 'Unusual request rate', 'Security', 'L7 metrics', 'Traffic spike per client', 'High', 'AppSec', 'Bot or DoS behavior'],
          ['NTP', 'Infrastructure', 'Time manipulation attempt', 'Time drift anomalies', 'Security', 'NTP offset monitoring', 'Sudden drift change', 'High', 'Platform team', 'Can impact auth & logging']
        ]
      }
    ]
  },
];

export const caseStudiesCs: CaseStudy[] = [
  {
    id: 'digital-workspace-migration',
    title: 'Analýza a návrh architektury aplikací pro digitální workspace',
    shortDescription: 'End-to-end AS-IS / TO-BE analýza aplikací, včetně validace identity a autentizačních toků, posouzení síťových omezení a vyhodnocení provozní a bezpečnostní připravenosti.',
    context: 'Aplikace byly součástí rozsáhlého enterprise prostředí a musely splnit přísné bezpečnostní, síťové a regulační požadavky typické pro regulovaná odvětví. Posouzení probíhalo v rámci širšího aplikačního portfolia napříč business doménami.',
    problem: 'Stávající přístup k integraci aplikací byl nejednotný a obtížně auditovatelný. Chyběla konzistentní architektonická validace identity, autentizačních toků a síťových předpokladů, což zvyšovalo rizika v pozdějších fázích migrace.',
    constraints: [
      'Regulační a interní bezpečnostní požadavky',
      'Segmentace sítě, firewally a proxy routing',
      'Legacy technologie a existující technické závislosti',
    ],
    role: 'Zodpovědnost za end-to-end architektonickou analýzu aplikací, posouzení identity a bezpečnostních aspektů a spolupráci na návrhu cílového (TO-BE) architektonického řešení.',
    solution: 'Návrh cílové architektury založené na jasně definovaných identitních a autentizačních flow a explicitně popsaných síťových a provozních předpokladech. Cílem bylo umožnit konzistentní a opakovatelné posuzování aplikací v regulovaném enterprise prostředí.',
    keyDecisions: [
      'Vyhodnocení použitých autentizačních mechanismů a možností identitních flow',
      'Validace síťového modelu, proxy routování a segmentace',
    ],
    outcomeKpis: [
      'Jasný a opakovatelný rámec pro architektonické posouzení aplikací',
      'Méně změn architektury v pozdních fázích migrace',
      'Lepší přehled o identitních, síťových a bezpečnostních závislostech',
      'Jasně definované vlastnictví autentizačních a autorizačních toků',
      'Soulad s enterprise bezpečnostními a síťovými standardy',
    ],
    tech: ['REST', 'SOAP', 'OpenAPI', 'OIDC', 'TLS', 'Kerberos', 'Enterprise Security Baseline', 'Active Directory', 'LDAP'],
    imageUrl: '/images/case-studies/digital-workspace-migration.png',
    imageCaption: 'Tento diagram znázorňuje vrstvený HLD pohled na důvěryhodnost uživatelských identit, omezení síťového směrování/proxy a vstupní bod SSO. Pravý tok ilustruje typickou přístupovou cestu z on‑site sítě a místa, kde jsou uplatňovány klíčové kontroly. Reálné implementace jsou výrazně komplexnější a liší se podle konkrétního prostředí, identity modelu (on‑prem/cloud) a baseline požadavků na síť, autentizaci/autorizaci a kontrolu přístupových bodů.',
  },
  {
    id: 'secure-legacy-soap',
    title: 'Řízená outbound integrace ke třetím stranám přes centrální integrační vrstvu',
    shortDescription: 'Případová studie vychází z rozsáhlého integračního projektu, jehož cílem bylo bezpečně a konzistentně vystavit legacy systémy směrem ke třetím stranám prostřednictvím centrální integrační vrstvy. Hlavním zaměřením byla analýza existujících služeb, řízení integrační logiky a validace API komunikace.',
    context: 'Organizace provozovala více interních legacy systémů, které potřebovaly komunikovat se systémy třetích stran. Přímé outbound napojování z jednotlivých systémů bylo obtížně dlouhodobě řídit, auditovat a rozvíjet, proto byla zavedena centrální integrační vrstva jako řízený bod pro externí komunikaci.',
    problem: 'Outbound integrace směrem ke třetím stranám byly nejednotné napříč interními systémy. Požadavky na bezpečnost a transport (např. mTLS a policy kontroly) se lišily, transformační logika se duplikovala a chybělo jednotné místo pro validaci požadavků a vynucení kontraktů. To zvyšovalo provozní i bezpečnostní riziko a snižovalo auditovatelnost.',
    constraints: [
      'Závislost na existujících legacy systémech',
      'Omezené možnosti změn v backendových aplikacích',
      'Regulační a bezpečnostní požadavky na komunikaci se třetími stranami',
      'Nutnost zachovat provozní kontinuitu během integrace',
    ],
    role: 'Zodpovědnost za analýzu outbound integračních scénářů, mapování interních datových struktur na partner kontrakty a návrh řízeného toku přes centrální integrační vrstvu. Součástí byla i spolupráce na workflow validaci a integrační logice (Camunda) pro standardizaci kontrol, transformací a chybového zpracování.',
    solution: 'Byl navržen pattern pro řízenou outbound integraci, kde interní systémy volají integrační vrstvu přes interní kontrakt, gateway vynucuje bezpečnostní a transportní požadavky a před komunikací s partnerem probíhá workflow validace/orchestrace. Požadavky jsou transformovány/enrichovány do partner kontraktu a odpovědi jsou konzistentně mapovány zpět, což zlepšilo governance i auditovatelnost. Integrační vrstva zároveň standardizovala korelační ID, auditní logování a jednotné mapování chyb, aby byla každá outbound komunikace dohledatelná end‑to‑end a incidenty šly rychle triagovat.',
    keyDecisions: [
      'Centrální integrační vrstva jako jediný řízený outbound bod ke třetím stranám',
      'Standardizace bezpečnosti a transportu (např. mTLS) na gateway vrstvě',
      'Workflow (Camunda) pro validaci a integrační rozhodování kvůli auditovatelnosti a udržitelnosti pravidel',
    ],
    outcomeKpis: [
      'Lepší interoperabilita mezi legacy a moderními systémy',
      'Lepší kontrola nad daty a API kontrakty',
      'Snížení rizik spojených s přímými integracemi legacy systémů',
      'Větší transparentnost a auditovatelnost integračních flow',
      'Možnost dalšího rozšiřování bez zásahu do core legacy aplikací',
    ],
    tech: ['SOAP', 'WSDL', 'WS-Security', 'TLS', 'API Gateway', 'Camunda', 'Integration Analysis and Architecture Review', 'Integration testing'],
    imageUrl: '/images/case-studies/secure-legacy-soap.png',
  },
  {
    id: 'Open-API-contracts',
    title: 'Návrh a správa OpenAPI kontraktů v multi-country enterprise prostředí',
    shortDescription: 'Analýza, návrh a správa OpenAPI specifikace centrální integrační vrstvy, koordinace změn s jednotlivými zeměmi a spolupráce s vývojovými týmy.',
    context: 'Projekt probíhal v rámci enterprise prostředí s centrálním core systémem využívaným napříč více zeměmi. Komunikace mezi systémy byla realizována přes centrální integrační vrstvu postavenou na OpenAPI kontraktech.',
    problem: 'Jednotlivé země měly odlišné požadavky na datové struktury a chování API, což komplikovalo návrh jednotného kontraktu. Bez řízeného procesu změn hrozila nekonzistence API, regresní chyby a nejasné vlastnictví odpovědností.',
    constraints: [
      'Nutnost zachovat jednotný centrální API kontrakt',
      'Odlišné regulatorní a business požadavky jednotlivých zemí',
      'Závislost na existujícím core systému a integrační vrstvě',
    ],
    role: 'Analytik zodpovědný za jeden modul OpenAPI specifikace, jeho analýzu, návrh změn, správu verzí a koordinaci s vývojovými týmy a lokálními stakeholdery.',
    solution: 'Byl zaveden řízený proces správy OpenAPI kontraktu, kde změny vycházely z analýzy požadavků jednotlivých zemí. Centrální API návrh byl postupně rozšiřován tak, aby zachoval kompatibilitu, umožnil volitelné atributy pro lokální potřeby a zůstal dlouhodobě udržitelný.',
    keyDecisions: [
      'Definice centrální OpenAPI specifikace jako jediného zdroje pravdy',
      'Použití volitelných polí pro lokální rozšíření bez narušení ostatních zemí',
      'Správa změn pomocí Git workflow a code review s vývojovými týmy',
    ],
    outcomeKpis: [
      'Konzistentní a verzovatelný OpenAPI kontrakt napříč zeměmi',
      'Snížení rizika regresí při změnách API',
      'Jasně definovaný proces změn a vlastnictví API specifikace',
      'Lepší spolupráce mezi architekturou, vývojem a lokálními týmy',
      'Snazší adopce centrální integrační vrstvy jednotlivými zeměmi',
    ],
    tech: ['OpenAPI', 'REST API', 'Git', 'Confluence', 'Integration Architecture'],
    openApiSpec: `openapi: 3.0.3
info:
  title: Customer Profile API
  version: 1.3.0
  description: >
    Single-endpoint contract-first API example for a multi-country platform.
    Core schema is common and stable; country-specific attributes are optional and explicit.
    Address validation and extensions are country-aware while keeping one unified contract.

servers:
  - url: https://api.example.com

paths:
  /v1/customers/{customerId}:
    get:
      operationId: getCustomerProfile
      summary: Get customer profile (core + optional country specifics dependent of country implementation and business/technical requirements)
      parameters:
        - $ref: '#/components/parameters/CustomerId'
        - $ref: '#/components/parameters/Country'
        - $ref: '#/components/parameters/TraceId'
      responses:
        '200':
          description: OK
          headers:
            X-Trace-Id:
              schema: { type: string }
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/CustomerProfile'
              examples:
                cz-example:
                  summary: CZ variant
                  value:
                    customerId: "c_8f2c1a3b"
                    country: "CZ"
                    identity:
                      nationalIdMasked: "******1234"
                      assuranceLevel: "HIGH"
                    contacts:
                      - type: "EMAIL"
                        value: "user@example.com"
                        verified: true
                    addresses:
                      - kind: "RESIDENTIAL"
                        country: "CZ"
                        line1: "Example street 1"
                        city: "Prague"
                        postalCode: "11000"
                        locality:
                          district: "Praha 1"
                        geo:
                          lat: 50.087
                          lon: 14.421
                    extension:
                      type: "CZ"
                      cz:
                        taxResidency: "CZ"
                        bankSegment: "RETAIL"

                sk-example:
                  summary: SK variant
                  value:
                    customerId: "c_91a2b3c4"
                    country: "SK"
                    identity:
                      nationalIdMasked: "******9876"
                      assuranceLevel: "SUBSTANTIAL"
                    contacts:
                      - type: "PHONE"
                        value: "+421900000000"
                        verified: false
                    addresses:
                      - kind: "RESIDENTIAL"
                        country: "SK"
                        line1: "Hlavná 12"
                        city: "Košice"
                        postalCode: "040 01"
                        locality:
                          municipalityCode: "599981"
                    extension:
                      type: "SK"
                      sk:
                        taxResidency: "SK"
                        pepFlag: false

                at-example:
                  summary: AT variant
                  value:
                    customerId: "c_a1b2c3d4"
                    country: "AT"
                    identity:
                      nationalIdMasked: "******4321"
                      assuranceLevel: "HIGH"
                      eidasLevel: "HIGH"
                    contacts:
                      - type: "PHONE"
                        value: "+421900000000"
                        verified: true
                      - type: "EMAIL"
                        value: "userAT@example.com"
                        verified: true
                    addresses:
                      - kind: "POSTAL"
                        country: "AT"
                        line1: "Karlsplatz 1"
                        city: "Wien"
                        postalCode: "1010"
                        locality:
                          regionCode: "AT-09"
                    extension:
                      type: "AT"
                      at:
                        regionCode: "AT-09"
        '400': {$ref: '#/components/responses/BadRequest'}
        '404': {$ref: '#/components/responses/NotFound'}
        '422': {$ref: '#/components/responses/UnprocessableEntity'}
        '429': {$ref: '#/components/responses/TooManyRequests'}
        '500': {$ref: '#/components/responses/InternalError'}

components:
  parameters:
    CustomerId:
      name: customerId
      in: path
      required: true
      schema:
        type: string
      description: Stable customer identifier.
      examples:
        cz-customer:
          summary: CZ test customer
          value: c_8f2c1a3b
        sk-customer:
          summary: SK test customer
          value: c_91a2b3c4
        at-customer:
          summary: AT test customer
          value: c_a1b2c3d4
    Country:
      name: CountryId
      schema:
        type: string
        enum: [CZ, SK, AT]
    TraceId:
      name: X-Trace-Id
      in: header
      required: false
      schema:
        type: string
        maxLength: 64
      description: Optional correlation id from caller; echoed back in response.

  responses:
    BadRequest:
      description: Invalid request (syntax/headers/parameters).
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    NotFound:
      description: Resource not found.
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    UnprocessableEntity:
      description: Validation failed (business/contract rules).
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    TooManyRequests:
      description: Rate limit exceeded.
      headers:
        Retry-After:
          schema: { type: integer, minimum: 1 }
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

    InternalError:
      description: Unexpected error.
      content:
        application/json:
          schema: { $ref: '#/components/schemas/ErrorResponse' }

  schemas:
    CustomerProfile:
      type: object
      required: [customerId, country, identity]
      additionalProperties: false
      properties:
        customerId:
          type: string
        country:
          type: string
          enum: [CZ, SK, AT]
        identity:
          $ref: '#/components/schemas/IdentityCore'
        contacts:
          type: array
          maxItems: 10
          items:
            $ref: '#/components/schemas/Contact'
        addresses:
          type: array
          maxItems: 5
          items:
            $ref: '#/components/schemas/Address'
        extension:
          $ref: '#/components/schemas/CountryExtension'

    IdentityCore:
      type: object
      required: [assuranceLevel]
      additionalProperties: false
      properties:
        nationalIdMasked:
          type: string
          description: Masked identifier, never raw.
          maxLength: 32
        assuranceLevel:
          type: string
          enum: [LOW, SUBSTANTIAL, HIGH]
        eidasLevel:
          type: string
          enum: [LOW, SUBSTANTIAL, HIGH]
          nullable: true
          description: Optional mapping when available.

    Contact:
      type: object
      required: [type, value, verified]
      additionalProperties: false
      properties:
        type:
          type: string
          enum: [EMAIL, PHONE]
        value:
          type: string
          minLength: 5
          maxLength: 254
        verified:
          type: boolean

    # Multi-country address:
    # - common core fields shared by all
    # - country-aware validation via oneOf (postalCode rules differ)
    # - optional per-country "locality" & "geo" blocks (non-common => optional)
    Address:
      type: object
      required: [kind, country, line1, city, postalCode]
      additionalProperties: false
      properties:
        kind:
          type: string
          enum: [RESIDENTIAL, POSTAL]
        country:
          type: string
          enum: [CZ, SK, AT]
        line1:
          type: string
          minLength: 1
          maxLength: 120
        line2:
          type: string
          maxLength: 120
          nullable: true
          description: Optional address line (not always used across countries).
        city:
          type: string
          minLength: 1
          maxLength: 80
        postalCode:
          type: string
          description: Country-validated postal code.
        locality:
          $ref: '#/components/schemas/AddressLocality'
        geo:
          $ref: '#/components/schemas/GeoPoint'
      oneOf:
        - $ref: '#/components/schemas/AddressCZ'
        - $ref: '#/components/schemas/AddressSK'
        - $ref: '#/components/schemas/AddressAT'

    AddressCZ:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [CZ] }
            postalCode:
              type: string
              pattern: '^\d{3}\s?\d{2}$' # 11000 or 110 00
    AddressSK:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [SK] }
            postalCode:
              type: string
              pattern: '^\d{3}\s?\d{2}$' # 04001 or 040 01
    AddressAT:
      allOf:
        - type: object
          required: [country, postalCode]
          properties:
            country: { enum: [AT] }
            postalCode:
              type: string
              pattern: '^\d{4}$' # 1010

    AddressLocality:
      type: object
      additionalProperties: false
      description: Optional country-specific locality metadata.
      properties:
        district:
          type: string
          maxLength: 80
          nullable: true
          description: e.g. CZ district (optional)
        municipalityCode:
          type: string
          maxLength: 24
          nullable: true
          description: e.g. SK municipality code (optional)
        regionCode:
          type: string
          pattern: '^[A-Z]{2}-\d{2}$'
          nullable: true
          description: e.g. AT region code (optional)

    GeoPoint:
      type: object
      additionalProperties: false
      description: Optional geolocation (if available).
      properties:
        lat: { type: number, format: double, nullable: true }
        lon: { type: number, format: double, nullable: true }

    # Multi-country extension pattern:
    # Core stays stable, per-country additions are optional + explicit.
    CountryExtension:
      type: object
      required: [type]
      additionalProperties: false
      properties:
        type:
          type: string
          enum: [CZ, SK, AT]
        cz: { $ref: '#/components/schemas/ExtCZ' }
        sk: { $ref: '#/components/schemas/ExtSK' }
        at: { $ref: '#/components/schemas/ExtAT' }
      oneOf:
        - required: [type, cz]
          properties: { type: { enum: [CZ] } }
        - required: [type, sk]
          properties: { type: { enum: [SK] } }
        - required: [type, at]
          properties: { type: { enum: [AT] } }

    ExtCZ:
      type: object
      additionalProperties: false
      required: [taxResidency]
      properties:
        taxResidency:
          type: string
          enum: [CZ, EU, NON_EU]
        bankSegment:
          type: string
          enum: [RETAIL, SME, CORPORATE]
          nullable: true

    ExtSK:
      type: object
      additionalProperties: false
      required: [taxResidency]
      properties:
        taxResidency:
          type: string
          enum: [SK, EU, NON_EU]
        pepFlag:
          type: boolean
          description: Politically exposed person indicator (derived).

    ExtAT:
      type: object
      additionalProperties: false
      properties:
        regionCode:
          type: string
          pattern: '^[A-Z]{2}-\d{2}$'
          nullable: true

    ErrorResponse:
      type: object
      required: [error]
      additionalProperties: false
      properties:
        error:
          type: object
          required: [code, message, traceId]
          additionalProperties: false
          properties:
            code: { type: string, example: "VALIDATION_FAILED" }
            message: { type: string, example: "postalCode does not match required format" }
            traceId: { type: string, example: "a1b2c3d4e5" }
            details:
              type: array
              items:
                type: object
                additionalProperties: false
                properties:
                  field: { type: string, example: "addresses[0].postalCode" }
                  rule: { type: string, example: "pattern" }
                  value: { type: string, example: "ABC" }`,
  },
  {
    id: 'monitoring-external-saas',
    title: 'Návrh provozního a bezpečnostního monitoringu digitálního enterprise prostředí',
    shortDescription: 'Analýza, návrh a koordinace provozního a bezpečnostního monitoringu napříč aplikačními, identitními a infrastrukturními komponentami digitálního prostředí.',
    context: 'Digitální enterprise prostředí se skládalo z kombinace cloudových a on-prem komponent, včetně identitních služeb, integračních bodů a aplikačních platforem. Provozní odpovědnosti byly rozděleny mezi více týmů a vlastníků jednotlivých služeb.',
    problem: 'Monitoring byl historicky řešen izolovaně na úrovni jednotlivých technologií bez jednotného pohledu na dostupnost, bezpečnost a provozní zdraví celého prostředí. Incidenty byly často detekovány až uživateli a chyběla jasná korelace mezi provozními a bezpečnostními signály.',
    constraints: [
      'Hybridní prostředí kombinující cloudové a on-prem služby',
      'Různí vlastníci služeb s odlišnými provozními prioritami',
      'Závislost na existujících monitorovacích nástrojích a procesech',
      'Nutnost oddělit provozní a bezpečnostní monitoring',
    ],
    role: 'Solution architekt zodpovědný za analýzu digitálního prostředí, návrh provozního a bezpečnostního monitoringu jednotlivých komponent a koordinaci požadavků mezi vlastníky služeb a týmem monitoringu.',
    solution: 'Byl navržen jednotný přístup k provoznímu a bezpečnostnímu monitoringu založený na spolupráci s vlastníky jednotlivých komponent. Pro každou službu byly definovány smysluplné provozní metriky a samostatné bezpečnostní use casy. Tyto požadavky byly formalizovány do zadání a následně předány monitorovacímu týmu k implementaci.',
    keyDecisions: [
      'Rozdělení monitoringu na provozní a bezpečnostní pohled',
      'Definice monitorovacích požadavků ve spolupráci s vlastníky služeb',
      'Zaměření na monitorování klíčových integračních a identitních bodů',
      'Oddělení návrhu monitoringu od jeho technické implementace',
    ],
    outcomeKpis: [
      'Lepší přehled o provozním zdraví digitálního prostředí',
      'Rychlejší identifikace a triage incidentů',
      'Jasně definované monitorovací odpovědnosti napříč týmy',
      'Smysluplné bezpečnostní use casy navázané na reálný provoz',
      'Vyšší provozní stabilita business-kritických služeb',
    ],
    tech: ['SNMP', 'REST', 'SOAP', 'OAuth2', 'Synthetic Monitoring', 'HTTP Probes', 'Proxy', 'Identity Services', 'Observability'],
    monitoringIntro: 'Níže je uveden příklad matice monitoring požadavků, který ukazuje, jaké jsou možnosti monitoringu v regulovaném podnikovém prostředí - příklad na síťové, identitní, integrační a infrastrukturní vrstvě. Mapuje technické signály (dostupnost, výkon, kapacita, bezpečnost), závažnost a vlastnictví, což umožňuje opakovatelnou detekci incidentů, třídění a jasnou odpovědnost. Konkrétní příklady monitoringu závisí na prostředí dané firmy.',
    tables: [
      {
        title: 'Provozní monitoring',
        headers: ['Komponenta', 'Vrstva', 'Co se monitoruje', 'Typ signálu', 'Jak', 'Prahová hodnota / trigger', 'Závažnost', 'Primární vlastník', 'Poznámka'],
        rows: [
          ['DNS', 'Network', 'Dostupnost překladu jmen', 'Dostupnost', 'DNS dotaz (A/AAAA)', 'Timeout', 'Kritická', 'Network', 'Základní závislost všech služeb'],
          ['DNS', 'Network', 'Latence DNS dotazů', 'Výkon', 'Doba odezvy DNS', 'Latence nad domluveným thresholdem', 'Závažná', 'Network', 'Včasný indikátor síťových problémů'],
          ['DHCP', 'Network', 'Vytížení rozsahu', 'Kapacita', 'Využití lease', 'Kapacita nad domluveným thresholdem', 'Závažná', 'Network', 'Zabraňuje připojení nových zařízení'],
          ['F5 Load Balancer', 'Network', 'Dostupnost/HealthCheck VIP', 'Dostupnost', 'Health check', 'VIP nedostupná', 'Kritická', 'Network', 'Vstupní bod pro aplikace'],
          ['F5 Load Balancer', 'Network', 'HealthCheck poolů', 'Dostupnost', 'Stav nodů/poolu', 'Počet zdravých < N', 'Závažná', 'Network', 'Detekce degradace backendu'],
          ['Firewall', 'Network/ Security', 'Drop/deny provozu', 'Bezpečnost / Síť', 'Firewall čítače / logy', 'Nárůst nad baseline', 'Závažná', 'SecOps', 'Blokace provozu nebo útok'],
          ['Proxy', 'Network', 'Odchozí konektivita', 'Dostupnost', 'Syntetický HTTP test', 'Timeout / 5xx', 'Kritická', 'Network', 'Dopad na SaaS a externí API'],
          ['Active Directory', 'Identita', 'Dostupnost LDAP', 'Dostupnost', 'LDAP bind test', 'Bind selhání', 'Kritická', 'Identity tým', 'Závislost autentizace'],
          ['Active Directory', 'Identita', 'Replikace AD', 'Konzistence', 'Stav replikace', 'Zpoždění replikace', 'Závažná', 'Identity tým', 'Riziko nekonzistentních dat'],
          ['Active Directory', 'Identita', 'Chybovost autentizace', 'Bezpečnost', 'Míra auth chyb', 'Nárůst nad baseline', 'Závažná', 'Identity tým', 'Chybná konfigurace nebo útok'],
          ['NTP', 'Infra', 'Synchronizace času', 'Dostupnost', 'Kontrola odchylky času', 'Odchylka nad baseline', 'Závažná', 'Platformní tým', 'Kritické pro Kerberos a logy'],
          ['Monitoring agent', 'Network', 'Heartbeat agenta', 'Dostupnost', 'Heartbeat signál', 'Chybí po dobu domluveného thresholdu', 'Závažná', 'Platformní tým', 'Detekce slepých míst monitoringu']
        ]
      },
      {
        title: 'Bezpečnostní monitoring',
        headers: ['Komponenta', 'Vrstva', 'Bezpečnostní use case', 'Co se monitoruje', 'Typ signálu', 'Jak', 'Prahová hodnota / trigger', 'Závažnost', 'Primární vlastník', 'Poznámka'],
        rows: [
          ['DNS', 'Síť', 'Zneužití DNS / tunelování', 'Neobvyklé DNS dotazy', 'Bezpečnost', 'DNS logy / monitoring nástroj bezpečnosti', 'Nárůst TXT / dlouhé dotazy', 'Vysoká', 'SecOps', 'Možná exfiltrace dat'],
          ['DNS', 'Síť', 'Komunikace s C2', 'Dotazy na škodlivé domény', 'Bezpečnost', 'Threat intel + DNS logy', 'Shoda s IOC', 'Kritická', 'SecOps', 'Blokace malwaru'],
          ['Firewall', 'Síť / Bezpečnost', 'Neoprávněný přístup', 'Zamítnuté příchozí spojení', 'Bezpečnost', 'Firewall logy', 'Opakované deny', 'Vysoká', 'SecOps', 'Skenování nebo brute-force'],
          ['Firewall', 'Síť / Bezpečnost', 'Porušení politiky', 'Provoz mimo povolené zóny', 'Bezpečnost', 'Policy logy', 'Anomálie hitů pravidel', 'Vysoká', 'SecOps', 'Obcházení bezpečnosti'],
          ['Proxy', 'Síť / Bezpečnost', 'Podezřelý odchozí provoz', 'Přístup na rizikové weby', 'Bezpečnost', 'Proxy logy', 'Malware/phishing kategorie', 'Kritická', 'SecOps', 'Možná kompromitace'],
          ['Active Directory', 'Identita', 'Brute-force autentizace', 'Neúspěšná přihlášení', 'Bezpečnost', 'AD security logy', 'Nárůst nad baseline', 'Kritická', 'Identity / SecOps', 'Password spray'],
          ['Active Directory', 'Identita', 'Eskalace oprávnění', 'Změny členství ve skupinách', 'Bezpečnost', 'Auditní logy AD', 'Změna admin skupin', 'Kritická', 'Identity / SecOps', 'Vysoce riziková změna'],
          ['Active Directory', 'Identita', 'Podezřelé Kerberos chování', 'Anomálie tiketů', 'Bezpečnost', 'Kerberos logy', 'Vzory Golden/Silver ticket', 'Kritická', 'SecOps', 'Pokročilý útok'],
          ['Load Balancer', 'L7', 'Zneužití aplikace', 'Neobvyklá frekvence požadavků', 'Bezpečnost', 'L7 metriky', 'Spike na klienta', 'Vysoká', 'AppSec', 'Bot / DoS chování'],
          ['NTP', 'Infrastruktura', 'Manipulace s časem', 'Odchylky času', 'Bezpečnost', 'Monitoring NTP offsetu', 'Náhlá změna driftu', 'Vysoká', 'Platformní tým', 'Dopad na autentizaci']
        ]
      }
    ]
  },
];

export const patternsEn: Pattern[] = [
  {
    id: 'reverse-proxy-identity',
    title: 'Reverse Proxy–Centric Identity Pattern',
    what: 'Authentication and authorisation are handled at the reverse proxy/access layer, allowing applications to focus on business logic while enforcing consistent controls.',
    whenToUse: 'When onboarding applications into an enterprise identity landscape with strict security and audit requirements.',
    whyItMatters: 'Centralised identity enforcement reduces implementation errors, simplifies audits and improves long-term maintainability.',
    relatedCaseStudies: ['digital-workspace-migration'],
  },
  {
    id: 'contract-first-api',
    title: 'Contract-first API delivery',
    what: 'API contracts (OpenAPI/WSDL) are treated as the source of truth, enabling early validation, testing and cross-team alignment.',
    whenToUse: 'When integrating multiple teams, vendors or legacy systems across organisational boundaries.',
    whyItMatters: 'Contract-first delivery reduces integration risk and prevents late-stage architectural changes.',
    relatedCaseStudies: ['secure-legacy-soap'],
  },
  {
    id: 'network-first-onboarding',
    title: 'Network-First Application Onboarding Pattern',
    what: 'Network constraints, port mappings and routing paths are analysed and documented before application-level changes are implemented.',
    whenToUse: 'In segmented environments with proxies and strict firewall rules.',
    whyItMatters: 'Early network validation prevents deployment delays and security exceptions later in the delivery lifecycle.',
    relatedCaseStudies: ['digital-workspace-migration'],
  },
  {
    id: 'operational-monitoring',
    title: 'Operational Monitoring Baseline Pattern',
    what: 'A monitoring baseline combining infrastructure signals, API-based checks and synthetic HTTP probes to cover connectivity, authentication and integration health.',
    whenToUse: 'For hybrid cloud/on-prem environments relying on external SaaS and critical integrations.',
    whyItMatters: 'Clear separation of failure domains improves incident response and operational confidence.',
    relatedCaseStudies: ['monitoring-external-saas'],
  },
];

export const patternsCs: Pattern[] = [
  {
    id: 'reverse-proxy-identity',
    title: 'Identity pattern řízený reverse proxy',
    what: 'Autentizace a autorizace jsou řešeny na vrstvě reverse proxy/access, zatímco aplikace se soustředí na business logiku při zachování konzistentních kontrol.',
    whenToUse: 'Při onboardingu aplikací do enterprise identity prostředí s přísnými bezpečnostními a auditními požadavky.',
    whyItMatters: 'Centralizované vynucení identity snižuje chyby v implementaci, zjednodušuje audit a zlepšuje dlouhodobou udržovatelnost.',
    relatedCaseStudies: ['digital-workspace-migration'],
  },
  {
    id: 'contract-first-api',
    title: 'Contract-first dodávka API',
    what: 'API kontrakty (OpenAPI/WSDL) jsou “source of truth”, což umožňuje včasnou validaci, testování a sladění napříč týmy.',
    whenToUse: 'Při integraci více týmů, dodavatelů nebo legacy systémů napříč organizačními hranicemi.',
    whyItMatters: 'Contract-first přístup snižuje integrační riziko a omezuje pozdní změny architektury.',
    relatedCaseStudies: ['secure-legacy-soap'],
  },
  {
    id: 'network-first-onboarding',
    title: 'Network-first onboarding aplikací',
    what: 'Síťová omezení, mapování portů a routing jsou analyzovány a zdokumentovány dříve, než dojde k aplikačním změnám.',
    whenToUse: 'V segmentovaných prostředích s proxy a přísnými firewall pravidly.',
    whyItMatters: 'Včasná validace sítě předchází zpoždění nasazení a bezpečnostním výjimkám v pozdějších fázích delivery.',
    relatedCaseStudies: ['digital-workspace-migration'],
  },
  {
    id: 'operational-monitoring',
    title: 'Baseline provozního monitoringu',
    what: 'Monitorovací baseline kombinující signály z infrastruktury, API kontroly a syntetické HTTP sondy pro pokrytí konektivity, autentizace a zdraví integrací.',
    whenToUse: 'V hybridních cloud/on-prem prostředích s externími SaaS a kritickými integracemi.',
    whyItMatters: 'Jasné oddělení failure domén zlepšuje reakci na incidenty a provozní jistotu.',
    relatedCaseStudies: ['monitoring-external-saas'],
  },
];
