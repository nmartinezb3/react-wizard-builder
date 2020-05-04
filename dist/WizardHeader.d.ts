/// <reference types="react" />
import PropTypes from 'prop-types';
export declare const Text: import("styled-components").StyledComponent<"div", any, any, never>;
interface IWizardHeaderProps {
    currentStep: number;
}
declare const WizardHeader: {
    ({ currentStep }: IWizardHeaderProps): JSX.Element;
    propTypes: {
        currentStep: PropTypes.Requireable<number>;
    };
};
export default WizardHeader;
