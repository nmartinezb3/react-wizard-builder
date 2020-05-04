/// <reference types="react" />
export declare const Text: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const Subtitle: import("styled-components").StyledComponent<"div", any, {}, never>;
interface IWizardHeaderProps {
    currentStep: number;
}
declare const WizardHeader: ({ currentStep }: IWizardHeaderProps) => JSX.Element;
export default WizardHeader;
