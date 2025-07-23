// data/projectData.ts

export interface Project {
    name: string;
    slug: string;
    image: string;
    shortDescription?: string;        // Optional
    description?: string;            // Optional
    responsibility?: string[];     // Optional
    techStack?: string[];        // Optional - array of tech keywords
    link?: string;                // Optional - link to project or demo
}

export const projects: Project[] = [
    {
        name: 'Risk management',
        slug: 'risk-management',
        image: '/images/IDAX.png',
        description: 'This system is an AI-powered identity analytics platform that helps organizations manage access risks, automate user access reviews, and ensure compliance through intelligent role design, risk scoring, and audit-ready reporting.',
        responsibility: [
            'Report daily to both customers and internal team; conduct weekly demos and discussions with clients.',
            'Assign tasks and monitor progress within the development team.',
            'Maintain and enhance existing features to improve system performance and usability.',
            'Fix bugs and ensure system stability across environments.',
            'Conduct research on new technologies and share insights with team members.',
            'Collaborate closely with developers, Product Owners and Project Managers to deliver project goals effectively.'
        ],
        techStack: ['.NET', 'Angular', 'HTML/CSS', 'Tailwind', 'MS SQL Server', 'Azure Active Directory'],

    },
    {
        name: 'Empowering Global Remittances',
        slug: 'empowering-global-remittances',
        image: '/images/KASSI.png',
        description: 'A financial remittance management system that handles international fund transfers to and from Australia. The system supports secure, role-based access, generates audit-ready transaction reports, and provides a robust admin interface for managing agents and report settings.',
        responsibility: [
            'Manage and implement reporting features for inbound/outbound remittance operations.',
            'Handle large-scale reporting (XLSX, PDF, DOCX) using Hangfire and Microsoft Report Viewer.',
            'Implement background processing with timeout, retry logic, and AWS S3 integration for report storage.',
            'Design role-based report repository and dynamic admin settings for report agent.',
            'Create REST services using Web API.',
            'Fix bugs and ensure reliability of reporting system.'
        ],
        techStack: [
            '.NET',
            'Microsoft Report Viewer',
            'MS SQL Server',
            'Hangfire',
            'AWS S3 (for file storage and deployment)',
            'HTML/CSS',
            'JavaScript'
        ]
    },
    {
        name: 'Property Management Application',
        slug: 'property-management-application',
        image: '/images/greenlyfe.png',
        description: 'This system aims to property management system for a local business, allow employees to manage landlords, rental properties, tracking tenant information and payments, managing maintenance and repairs, generating financial reports.',
        responsibility: [
            'Work closely with team members and lead.',
            'Deployment and maintenance of functions and source code.',
            'Meet with team members to discuss and find solutions together.',
            'Create REST services using Web API.',
            'Fix bugs and ensure system stability.'
        ],
        techStack: [
            '.NET 6.0',
            'HTML/CSS',
            'Angular',
            'SQL Server',
            'Azure Active Directory',
            'Adobe Acrobat'
        ]
    },
    {
        name: 'Construction Management Application',
        slug: 'construction-management-application',
        image: '/images/bathroom.png',
        shortDescription:
            'Screenshot shown is from the official project introduction website. The features I worked on are internal and cannot be publicly displayed due to access restrictions',
        description: "A web-based application that provides a project’s owner(s) with effective management of the project's schedule, cost, quality, safety, scope, and function.",
        responsibility: [
            'Work directly with Australian customers, attending daily team meetings.',
            'Collaborate closely with team members and PO/PM.',
            'Deploy and maintain functions and source code.',
            'Meet with clients to understand their requirements and find solutions together.',
            'Create REST services using Web API.',
            'Fix bugs and ensure system stability.'
        ],
        techStack: [
            '.NET 5.0',
            'Telerik/Kendo UI',
            'MS Graph',
            'JavaScript',
            'Azure Active Directory',
            'Adobe Acrobat'
        ]
    },
    {
        name: 'Payment Approval System',
        slug: 'payment-approval-system',
        image: '/images/powerapp.png',
        shortDescription: 'Representative technical icon only – actual product visuals are restricted.',
        description: 'This system allows users to create, edit, and submit payment request forms, which can then be reviewed and approved or rejected by the accounting team. It also includes robust reporting features to track and analyze payment approvals on a monthly and yearly basis.',
        responsibility: [
            'Work directly with customers, attending daily team meetings.',
            'Collaborate closely with the developer team and PO/PM.',
            'Research and share knowledge with team members.',
            'Implement functionalities and improve system performance.'
        ],
        techStack: [
            'Power Apps',
            'Power Automate',
            'SharePoint',
            'Power BI'
        ]
    },
    {
        name: 'Heyotrip - Travel Application',
        slug: 'heyotrip-travel-application',
        image: '/images/heyo.png',
        description: 'This system is a travel technology platform that allows users to book flights, hotels, and travel services globally. The system supports both traditional and digital payment methods, aiming to provide a seamless and secure travel booking experience.',
        link: 'https://admin.heyotrip.com/',
        responsibility: [
            'Built and maintained the admin dashboard (CMS) to manage orders, content, and system configurations.',
            'Implemented core functionalities and features to support customer services and marketing.',
            'Collaborated closely with the PM to discuss requirements and contribute ideas for system improvements.',
            'Reported progress weekly to stakeholders and provided regular updates and demos.',
            'Participated in daily team meetings to ensure alignment and task tracking.',
            'Improved system performance and implemented key functionalities.'
        ],
        techStack: [
            'Laravel',
            'HTML/CSS',
            'MySQL'
        ]

    },
];
