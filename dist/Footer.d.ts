/// <reference types="react" />
import { WizardProps } from '.';
export interface FooterProps extends WizardProps {
    previousStepLabel?: string;
    nextStepLabel?: string;
    finishStepLabel?: string;
    className?: string;
}
export declare function Footer(props: FooterProps): JSX.Element;
