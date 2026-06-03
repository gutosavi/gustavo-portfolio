interface ContainerProps {
  children: React.ReactNode;
}

interface SectionTitleProp {
  title: string;
  style?: React.CSSProperties;
}

interface CardProps {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
}

interface SectionsCardProps {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
  id: string;
}

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}
