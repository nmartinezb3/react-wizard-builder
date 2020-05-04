import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

export const Text = styled('div')<any>`
  font-weight: ${(props) => props.fontWeight || '400'};
  font-size: ${(props) => props.fontSize || '14px'};
  letter-spacing: ${(props) => props.letterSpacing || ''};
  line-height: ${(props) => props.lineHeight || '1.09'};
  margin-bottom: ${(props) => props.marginBottom || ''};
  margin-top: ${(props) => props.marginTop || ''};
  margin-left: ${(props) => props.marginLeft || ''};
  margin-right: ${(props) => props.marginRight || ''};
  margin: ${(props) => props.margin || ''};
  padding: ${(props) => props.padding || '0'};
  text-align: ${(props) => props.textAlign || ''};
  font-style: ${(props) => props.fontStyle || ''};
  text-transform: ${(props) => props.textTransform || ''};
  width: ${(props) => props.width || ''};
  height: ${(props) => props.height || ''};
  display: ${(props) => props.display || ''};
  color: ${(props) => props.color || ''};
  ${(props) =>
    props.wrapText &&
    css`
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      width: ${props.wrapWidth};
    `};

  ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
    `};

  ${(props) =>
    props.type === 'label' &&
    css`
      color: var(--label-text-color);
    `};

  ${(props) =>
    props.type === 'label-strong' &&
    css`
      font-weight: 600;
    `};

  ${(props) =>
    props.type === 'label-title' &&
    css`
      font-size: 18px;
      font-weight: 700;
    `};

  ${(props) =>
    props.type === 'label-light' &&
    css`
      color: var(--placeholder-color);
      color: var(--placeholder-color);
      fontweight: 300;
    `};

  ${(props) =>
    props.type === 'link' &&
    css`
      color: var(--button-color);
    `};

  ${(props) =>
    props.disabled &&
    css`
      color: var(--disabled-color);
    `};

  ${(props) =>
    props.type === 'label-error' &&
    css`
      color: var(--error-color);
      font-size: 13px;
      letter-spacing: 0.2px;
    `};

  ${(props) =>
    props.type === 'label-success' &&
    css`
      color: var(--success-color);
      font-size: 13px;
      letter-spacing: 0.2px;
    `};

  ${(props) =>
    props.type === 'label-italic' &&
    css`
      font-size: 13px;
      font-weight: normal;
      font-style: italic;
      text-align: left;
      color: #b2c2ca;
    `};

  ${(props) =>
    props.type === 'label-subtitle' &&
    css`
      font-size: 13px;
      font-weight: 700;
      font-style: normal;
      text-align: left;
      color: #647c89;
      text-transform: uppercase;
      line-height: 1.31;
      letter-spacing: 0.2px;
    `};

  ${(props) =>
    props.type === 'label-subtitle-bold' &&
    css`
      font-size: 13px;
      font-weight: 400;
      font-style: normal;
      text-align: left;
      color: #647c89;
      text-transform: unset;
      line-height: 1.31;
      letter-spacing: 0.2px;
    `};
  ${(props) =>
    props.disabled &&
    css`
      color: #b2c2ca;
    `};
  ${(props) =>
    props.primary &&
    css`
      color: var(--primary-text-color);
    `};
`

interface IWizardHeaderProps {
  currentStep: number
}

const WizardHeader = ({ currentStep }: IWizardHeaderProps) => {
  return (
    <Fragment>
      <Text display='inline' type='link' fontSize='18px' fontWeight='bold'>
        Title
      </Text>
      <Text type='label' fontSize='14px' marginTop='6px' marginBottom='30px'>
        Subtitle {currentStep}
      </Text>
    </Fragment>
  )
}

WizardHeader.propTypes = {
  currentStep: PropTypes.number
}

export default WizardHeader
