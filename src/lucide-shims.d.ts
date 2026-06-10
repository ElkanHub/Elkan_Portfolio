import { FC, SVGProps } from 'react';

declare module 'lucide-react' {
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type Icon = FC<IconProps>;
  export const ArrowRight: Icon;
  export const ExternalLink: Icon;
  export const Code: Icon;
  export const Terminal: Icon;
  export const Cpu: Icon;
  export const Layers: Icon;
  export const Globe: Icon;
  export const Database: Icon;
  export const Sparkles: Icon;
  export const CheckCircle2: Icon;
  export const Mail: Icon;
  export const MapPin: Icon;
  export const MessageSquare: Icon;
  export const Send: Icon;
  export const Github: Icon;
  export const Linkedin: Icon;
  export const Server: Icon;
  export const Wrench: Icon;
  export const MonitorSmartphone: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Twitter: Icon;
  export const ArrowUp: Icon;
  export const ArrowDown: Icon;
  export const ArrowUpRight: Icon;
  export const Monitor: Icon;
  export const Phone: Icon;
  export const CheckCircle: Icon;
}
