export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferred: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Testimonial {
  customerName?: string;
  location: string;
  message: string;
}
