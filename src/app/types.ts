// types.ts
import { ReactNode } from "react";

export interface Service {
  icon?: ReactNode;
  name: string;
  description: string;
}

export interface AdditionalInfo {
  icon?: ReactNode;
  title: string;
  description: string;
  serviceName?: string;
  seriviceDescription?: string; // Note: There's a typo in your original code
  services?: Service[];
  buttonText: string;
}

export interface CardData {
  icon: ReactNode;
  title: string;
  description: string;
  imagePath?: string;
  additionalInfo: AdditionalInfo;
}
