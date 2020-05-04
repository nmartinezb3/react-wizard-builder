/// <reference types="react" />
export interface StatusBarProps {
    currentStep: number;
    countSteps: number;
    statusBarClassName?: string;
    statusBarProgressClassName?: string;
}
interface StatusBarProgressProps {
    currentStep: number;
    countSteps: number;
}
export declare const StatusBarProgress: import("styled-components").StyledComponent<"div", any, StatusBarProgressProps, never>;
export declare const StatusBarContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StatusBar: (props: StatusBarProps) => JSX.Element;
export {};
