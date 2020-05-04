import React, { Component } from 'react';
import styled from 'styled-components';

export const StatusBarContainer = styled.div``;
export const StatusBarProgress = styled.div`
  width: ${props => (props.countSteps * 100) / (props.currentStep + 1)} px;
  transition: width 0.2s;
`;
