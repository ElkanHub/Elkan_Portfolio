import { FC, SVGProps } from 'react';

declare module 'lucide-react' {
  export interface IconProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
  }
  export type Icon = FC<IconProps>;
  
  export const ArrowRight: Icon;
  export const Mail: Icon;
  export const Phone: Icon;
  export const MapPin: Icon;
  export const CheckCircle: Icon;
  export const ArrowUp: Icon;
  export const Github: Icon;
  export const Linkedin: Icon;
  export const Twitter: Icon;
  export const Menu: Icon;
  export const ArrowDown: Icon;
  export const Layers: Icon;
  export const Monitor: Icon;
  export const Cpu: Icon;
  export const Sparkles: Icon;
  export const ChevronRight: Icon;
  export const MoreHorizontal: Icon;
  export const CheckIcon: Icon;
  export const ChevronRightIcon: Icon;
  export const CircleIcon: Icon;
  export const ChevronDownIcon: Icon;
  export const ChevronUpIcon: Icon;
  export const XIcon: Icon;
  export const PanelLeftIcon: Icon;
  export const ArrowUpRight: Icon;
}
