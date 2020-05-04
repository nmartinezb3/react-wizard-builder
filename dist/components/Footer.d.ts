/// <reference types="react" />
import { WizardFramework } from './Wizard';
export interface FooterProps extends WizardFramework {
    previousStepLabel?: string;
    nextStepLabel?: string;
    finishStepLabel?: string;
    className?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
