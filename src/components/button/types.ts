import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
  ReactNode,
} from "react";

export declare interface UseButtonStyleProps {
  color?: "primary" | "secondary" | "transparent" | "success" | "danger";
  icon?: boolean;
}

type ButtonAttributes = ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorAttributes = AnchorHTMLAttributes<HTMLAnchorElement>;

export declare type ButtonProps = {
  children?: ReactNode;
} & ButtonAttributes &
  UseButtonStyleProps;

export declare type ButtonLinkProps = {
  children?: ReactNode;
} & AnchorAttributes &
  UseButtonStyleProps;

export declare type RedirectButtonProps = {
  href: string;
} & ButtonProps;

export declare type ButtonAsyncProps = {
  // eslint-disable-next-line no-unused-vars
  onClick: (event: MouseEvent<HTMLButtonElement>) => Promise<unknown>;
} & ButtonProps;

export declare type ButtonEmbedProps = {
  title: string;
  description: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & ButtonLinkProps;
