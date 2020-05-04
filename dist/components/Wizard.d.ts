import React from 'react';
import { StatusBarProps } from './StatusBar';
import { FooterProps } from './Footer';
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
interface IWizardProps {
    renderHeader: (props: WizardProps) => React.ReactNode;
    renderStatusBar: (props: WizardProps) => React.ReactNode;
    hideStatusBar: boolean;
    renderFooter: (props: WizardProps) => React.ReactNode;
    hideFooter: boolean;
    onNextStep: (params: WizardProps) => any;
    onPreviousStep: (params: WizardProps) => any;
    onFinish: (params: WizardProps) => any;
    children: React.ReactChild;
    initialStep?: number;
    previousStepLabel?: string;
    nextStepLabel?: string;
    finishStepLabel?: string;
}
export declare function Wizard(props: IWizardProps): JSX.Element;
export declare namespace Wizard {
    var StatusBar: (props: StatusBarProps) => JSX.Element;
    var Footer: (props: FooterProps) => JSX.Element;
    var Step: ({ render, ...props }: WizardRenderProps) => string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
}
export {};
