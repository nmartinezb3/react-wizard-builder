import React from 'react';
import { StatusBarProps } from './StatusBar';
interface RenderComponentProps {
    currentStep: number;
    countSteps: number;
    next: () => any;
    previous: () => any;
    goToStep: (step: number) => any;
    lastStep: boolean;
    firstStep: boolean;
    render?: (props: RenderComponentProps) => React.ReactChild;
}
interface IWizardProps {
    renderHeader: (props: RenderComponentProps) => React.ReactNode;
    renderStatusBar: (props: RenderComponentProps) => React.ReactNode;
    onNextStep: (params: {
        currentStep: number;
    }) => any;
    onPreviousStep: (params: {
        currentStep: number;
    }) => any;
    hideStatusBar: boolean;
    children: React.ReactChild;
    initialStep?: number;
}
interface ISWizardState {
    currentStep: number;
}
declare class Wizard extends React.Component<IWizardProps, ISWizardState> {
    static StatusBar: (props: StatusBarProps) => JSX.Element;
    static Step: ({ render, ...props }: RenderComponentProps) => string | number | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)> | null;
    constructor(props: IWizardProps);
    goToStep: (step: number) => void;
    next: () => void;
    previous: () => void;
    isLastStep: () => boolean;
    isFirstStep: () => boolean;
    renderStatusBar: () => {} | null | undefined;
    render(): JSX.Element;
}
export default Wizard;
