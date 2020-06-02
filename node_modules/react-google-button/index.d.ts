import * as React from 'react';

interface GoogleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  type?: "dark" | "light";
  disabled?: boolean;
}

/**
 * A React Component that renders a button that follows Google's Styleguide
 */
declare class GoogleButton extends React.Component<GoogleButtonProps, any> {

}

export default GoogleButton;
