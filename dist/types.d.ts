/// <reference types="react" />
export interface WizardProps {
    currentStep: number;
    countSteps: number;
    next: () => any;
    previous: () => any;
    goToStep: (step: number) => any;
    lastStep: boolean;
    firstStep: boolean;
}
export interface WizardRenderProps extends WizardProps {
    render: (props: WizardProps) => React.ReactChild;
}
