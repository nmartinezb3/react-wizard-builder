import React from 'react';
export interface WizardFramework {
    currentStep: number;
    countSteps: number;
    next: () => any;
    previous: () => any;
    goToStep: (step: number) => any;
    lastStep: boolean;
    firstStep: boolean;
}
export interface WizardRenderProps extends WizardFramework {
    render: (props: WizardFramework) => React.ReactChild;
}
interface WizardProps {
    renderHeader: (props: WizardFramework) => React.ReactNode;
    renderStatusBar: (props: WizardFramework) => React.ReactNode;
    hideStatusBar: boolean;
    renderFooter: (props: WizardFramework) => React.ReactNode;
    hideFooter: boolean;
    onNextStep: (params: WizardFramework) => any;
    onPreviousStep: (params: WizardFramework) => any;
    onFinish: (params: WizardFramework) => any;
    children: React.ReactChild;
    initialStep?: number;
    previousStepLabel?: string;
    nextStepLabel?: string;
    finishStepLabel?: string;
    className?: string;
    footerClassName?: string;
    statusBarClassName?: string;
    statusBarProgressClassName?: string;
}
export declare function Wizard(props: WizardProps): JSX.Element;
export declare namespace Wizard {
    var StatusBar: (props: import("./StatusBar").StatusBarProps) => JSX.Element;
    var Footer: typeof import("./Footer").Footer;
    var Step: ({ render, ...props }: WizardRenderProps) => string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
export {};
