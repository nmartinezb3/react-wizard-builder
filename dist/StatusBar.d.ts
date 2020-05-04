/// <reference types="react" />
export declare const StatusBarContainer: import("styled-components").StyledComponent<"div", any, {}, never>;
export declare const StatusBarProgress: import("styled-components").StyledComponent<"div", any, StatusBarProps, never>;
export interface StatusBarProps {
    currentStep: number;
    countSteps: number;
}
export declare const StatusBar: (props: StatusBarProps) => JSX.Element;
