export interface Document {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedAt: string;
  category: string;
}

export const documentsData: Document[] = [
  {
    id: 1,
    title: "Terms of Service",
    slug: "terms-of-service",
    content: `# Terms of Service

## 1. Acceptance of Terms
By accessing and using this service, you accept and agree to be bound by the terms and provision of this agreement.

## 2. Use License
Permission is granted to temporarily download one copy of the materials on this website for personal, non-commercial transitory viewing only.

## 3. Disclaimer
The materials on this website are provided on an 'as is' basis. This website makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.

## 4. Limitations
In no event shall this website or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.

## 5. Revisions
This website may revise these terms of service at any time without notice.`,
    excerpt:
      "Terms and conditions for using our service. Please read carefully before using our platform.",
    publishedAt: "2024-01-01",
    category: "legal",
  },
  {
    id: 2,
    title: "Privacy Policy",
    slug: "privacy-policy",
    content: `# Privacy Policy

## 1. Information We Collect
We collect information you provide directly to us, such as when you create an account, make a purchase, or contact us for support.

## 2. How We Use Your Information
We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.

## 3. Information Sharing
We do not sell, trade, or otherwise transfer your personal information to third parties without your consent.

## 4. Data Security
We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.

## 5. Your Rights
You have the right to access, update, or delete your personal information. You may also opt out of certain communications from us.`,
    excerpt:
      "Our privacy policy explains how we collect, use, and protect your personal information.",
    publishedAt: "2024-01-01",
    category: "legal",
  },
  {
    id: 3,
    title: "Cookie Policy",
    slug: "cookie-policy",
    content: `# Cookie Policy

## 1. What Are Cookies
Cookies are small text files that are placed on your computer or mobile device when you visit our website.

## 2. How We Use Cookies
We use cookies to improve your experience on our website, analyze site traffic, and personalize content.

## 3. Types of Cookies
- Essential cookies: Necessary for the website to function properly
- Analytics cookies: Help us understand how visitors interact with our website
- Marketing cookies: Used to track visitors across websites

## 4. Managing Cookies
You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer.

## 5. Third-Party Cookies
Some cookies on our website are set by third-party services that appear on our pages.`,
    excerpt:
      "Information about how we use cookies and similar technologies on our website.",
    publishedAt: "2024-01-01",
    category: "legal",
  },
];

export const getDocumentBySlug = (slug: string) => {
  return documentsData.find((doc) => doc.slug === slug);
};

export const getAllDocuments = () => {
  return documentsData;
};

export const getDocumentsByCategory = (category: string) => {
  return documentsData.filter((doc) => doc.category === category);
};
