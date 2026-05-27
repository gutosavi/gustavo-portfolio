type ContainerProps = {
  children: React.ReactNode;
}

interface SectionTitleProp {
  title: string;
  style?: React.CSSProperties;
}

type AnimationCardProps = {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
}

type SectionsCardProps = {
  children: React.ReactNode;
  classe?: string;
  delay?: number;
  id: string;
}

interface TypewriterProps {
  text: string;
  speed?: number;
}