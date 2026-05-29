type ContainerProps = {
  children: React.ReactNode;
};

interface SectionTitleProp {
  title: string;
  style?: React.CSSProperties;
}

type CardProps = {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
};

type SectionsCardProps = {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
  id: string;
};

interface TypewriterProps {
  text: string;
  className?: string;
  speed?: number;
  onComplete?: () => void;
}
