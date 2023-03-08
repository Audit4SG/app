/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
    }
    interface CCard {
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface EButton {
        "action": string;
        "value": any;
        "variant": string;
    }
    interface EInput {
        "checked": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "type": string;
        "value": string;
    }
    interface ELink {
        "action": string;
        "event": boolean;
        "href": string;
        "target": string;
        "theme": string;
        "value": any;
        "variant": string;
    }
    interface EText {
        "theme": string;
        "variant": string;
    }
    interface LRow {
        "justifyContent": string;
        "variant": string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value": number;
        "variant": string;
    }
    interface PGallery {
    }
    interface PItemDoc {
        "cover": string;
        "purpose": string;
        "title": string;
    }
    interface PUserControl {
    }
    interface VCheckout {
    }
    interface VForgotPassword {
    }
    interface VLogin {
    }
    interface VMyLibrary {
        "history": RouterHistory;
    }
    interface VPaymentFailed {
    }
    interface VPaymentSuccess {
    }
    interface VReader {
    }
    interface VSignup {
    }
    interface VStore {
        "history": RouterHistory;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLCCardElement extends Components.CCard, HTMLStencilElement {
    }
    var HTMLCCardElement: {
        prototype: HTMLCCardElement;
        new (): HTMLCCardElement;
    };
    interface HTMLCPageElement extends Components.CPage, HTMLStencilElement {
    }
    var HTMLCPageElement: {
        prototype: HTMLCPageElement;
        new (): HTMLCPageElement;
    };
    interface HTMLCSidebarElement extends Components.CSidebar, HTMLStencilElement {
    }
    var HTMLCSidebarElement: {
        prototype: HTMLCSidebarElement;
        new (): HTMLCSidebarElement;
    };
    interface HTMLEButtonElement extends Components.EButton, HTMLStencilElement {
    }
    var HTMLEButtonElement: {
        prototype: HTMLEButtonElement;
        new (): HTMLEButtonElement;
    };
    interface HTMLEInputElement extends Components.EInput, HTMLStencilElement {
    }
    var HTMLEInputElement: {
        prototype: HTMLEInputElement;
        new (): HTMLEInputElement;
    };
    interface HTMLELinkElement extends Components.ELink, HTMLStencilElement {
    }
    var HTMLELinkElement: {
        prototype: HTMLELinkElement;
        new (): HTMLELinkElement;
    };
    interface HTMLETextElement extends Components.EText, HTMLStencilElement {
    }
    var HTMLETextElement: {
        prototype: HTMLETextElement;
        new (): HTMLETextElement;
    };
    interface HTMLLRowElement extends Components.LRow, HTMLStencilElement {
    }
    var HTMLLRowElement: {
        prototype: HTMLLRowElement;
        new (): HTMLLRowElement;
    };
    interface HTMLLSeperatorElement extends Components.LSeperator, HTMLStencilElement {
    }
    var HTMLLSeperatorElement: {
        prototype: HTMLLSeperatorElement;
        new (): HTMLLSeperatorElement;
    };
    interface HTMLLSpacerElement extends Components.LSpacer, HTMLStencilElement {
    }
    var HTMLLSpacerElement: {
        prototype: HTMLLSpacerElement;
        new (): HTMLLSpacerElement;
    };
    interface HTMLPGalleryElement extends Components.PGallery, HTMLStencilElement {
    }
    var HTMLPGalleryElement: {
        prototype: HTMLPGalleryElement;
        new (): HTMLPGalleryElement;
    };
    interface HTMLPItemDocElement extends Components.PItemDoc, HTMLStencilElement {
    }
    var HTMLPItemDocElement: {
        prototype: HTMLPItemDocElement;
        new (): HTMLPItemDocElement;
    };
    interface HTMLPUserControlElement extends Components.PUserControl, HTMLStencilElement {
    }
    var HTMLPUserControlElement: {
        prototype: HTMLPUserControlElement;
        new (): HTMLPUserControlElement;
    };
    interface HTMLVCheckoutElement extends Components.VCheckout, HTMLStencilElement {
    }
    var HTMLVCheckoutElement: {
        prototype: HTMLVCheckoutElement;
        new (): HTMLVCheckoutElement;
    };
    interface HTMLVForgotPasswordElement extends Components.VForgotPassword, HTMLStencilElement {
    }
    var HTMLVForgotPasswordElement: {
        prototype: HTMLVForgotPasswordElement;
        new (): HTMLVForgotPasswordElement;
    };
    interface HTMLVLoginElement extends Components.VLogin, HTMLStencilElement {
    }
    var HTMLVLoginElement: {
        prototype: HTMLVLoginElement;
        new (): HTMLVLoginElement;
    };
    interface HTMLVMyLibraryElement extends Components.VMyLibrary, HTMLStencilElement {
    }
    var HTMLVMyLibraryElement: {
        prototype: HTMLVMyLibraryElement;
        new (): HTMLVMyLibraryElement;
    };
    interface HTMLVPaymentFailedElement extends Components.VPaymentFailed, HTMLStencilElement {
    }
    var HTMLVPaymentFailedElement: {
        prototype: HTMLVPaymentFailedElement;
        new (): HTMLVPaymentFailedElement;
    };
    interface HTMLVPaymentSuccessElement extends Components.VPaymentSuccess, HTMLStencilElement {
    }
    var HTMLVPaymentSuccessElement: {
        prototype: HTMLVPaymentSuccessElement;
        new (): HTMLVPaymentSuccessElement;
    };
    interface HTMLVReaderElement extends Components.VReader, HTMLStencilElement {
    }
    var HTMLVReaderElement: {
        prototype: HTMLVReaderElement;
        new (): HTMLVReaderElement;
    };
    interface HTMLVSignupElement extends Components.VSignup, HTMLStencilElement {
    }
    var HTMLVSignupElement: {
        prototype: HTMLVSignupElement;
        new (): HTMLVSignupElement;
    };
    interface HTMLVStoreElement extends Components.VStore, HTMLStencilElement {
    }
    var HTMLVStoreElement: {
        prototype: HTMLVStoreElement;
        new (): HTMLVStoreElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-card": HTMLCCardElement;
        "c-page": HTMLCPageElement;
        "c-sidebar": HTMLCSidebarElement;
        "e-button": HTMLEButtonElement;
        "e-input": HTMLEInputElement;
        "e-link": HTMLELinkElement;
        "e-text": HTMLETextElement;
        "l-row": HTMLLRowElement;
        "l-seperator": HTMLLSeperatorElement;
        "l-spacer": HTMLLSpacerElement;
        "p-gallery": HTMLPGalleryElement;
        "p-item-doc": HTMLPItemDocElement;
        "p-user-control": HTMLPUserControlElement;
        "v-checkout": HTMLVCheckoutElement;
        "v-forgot-password": HTMLVForgotPasswordElement;
        "v-login": HTMLVLoginElement;
        "v-my-library": HTMLVMyLibraryElement;
        "v-payment-failed": HTMLVPaymentFailedElement;
        "v-payment-success": HTMLVPaymentSuccessElement;
        "v-reader": HTMLVReaderElement;
        "v-signup": HTMLVSignupElement;
        "v-store": HTMLVStoreElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface CCard {
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface EButton {
        "action"?: string;
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        "value"?: any;
        "variant"?: string;
    }
    interface EInput {
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onTextInput"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
    }
    interface ELink {
        "action"?: string;
        "event"?: boolean;
        "href"?: string;
        "onEvent_LinkClick"?: (event: CustomEvent<any>) => void;
        "target"?: string;
        "theme"?: string;
        "value"?: any;
        "variant"?: string;
    }
    interface EText {
        "theme"?: string;
        "variant"?: string;
    }
    interface LRow {
        "justifyContent"?: string;
        "variant"?: string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value"?: number;
        "variant"?: string;
    }
    interface PGallery {
    }
    interface PItemDoc {
        "cover"?: string;
        "purpose"?: string;
        "title"?: string;
    }
    interface PUserControl {
    }
    interface VCheckout {
    }
    interface VForgotPassword {
    }
    interface VLogin {
    }
    interface VMyLibrary {
        "history"?: RouterHistory;
    }
    interface VPaymentFailed {
    }
    interface VPaymentSuccess {
    }
    interface VReader {
    }
    interface VSignup {
    }
    interface VStore {
        "history"?: RouterHistory;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-card": CCard;
        "c-page": CPage;
        "c-sidebar": CSidebar;
        "e-button": EButton;
        "e-input": EInput;
        "e-link": ELink;
        "e-text": EText;
        "l-row": LRow;
        "l-seperator": LSeperator;
        "l-spacer": LSpacer;
        "p-gallery": PGallery;
        "p-item-doc": PItemDoc;
        "p-user-control": PUserControl;
        "v-checkout": VCheckout;
        "v-forgot-password": VForgotPassword;
        "v-login": VLogin;
        "v-my-library": VMyLibrary;
        "v-payment-failed": VPaymentFailed;
        "v-payment-success": VPaymentSuccess;
        "v-reader": VReader;
        "v-signup": VSignup;
        "v-store": VStore;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-page": LocalJSX.CPage & JSXBase.HTMLAttributes<HTMLCPageElement>;
            "c-sidebar": LocalJSX.CSidebar & JSXBase.HTMLAttributes<HTMLCSidebarElement>;
            "e-button": LocalJSX.EButton & JSXBase.HTMLAttributes<HTMLEButtonElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-link": LocalJSX.ELink & JSXBase.HTMLAttributes<HTMLELinkElement>;
            "e-text": LocalJSX.EText & JSXBase.HTMLAttributes<HTMLETextElement>;
            "l-row": LocalJSX.LRow & JSXBase.HTMLAttributes<HTMLLRowElement>;
            "l-seperator": LocalJSX.LSeperator & JSXBase.HTMLAttributes<HTMLLSeperatorElement>;
            "l-spacer": LocalJSX.LSpacer & JSXBase.HTMLAttributes<HTMLLSpacerElement>;
            "p-gallery": LocalJSX.PGallery & JSXBase.HTMLAttributes<HTMLPGalleryElement>;
            "p-item-doc": LocalJSX.PItemDoc & JSXBase.HTMLAttributes<HTMLPItemDocElement>;
            "p-user-control": LocalJSX.PUserControl & JSXBase.HTMLAttributes<HTMLPUserControlElement>;
            "v-checkout": LocalJSX.VCheckout & JSXBase.HTMLAttributes<HTMLVCheckoutElement>;
            "v-forgot-password": LocalJSX.VForgotPassword & JSXBase.HTMLAttributes<HTMLVForgotPasswordElement>;
            "v-login": LocalJSX.VLogin & JSXBase.HTMLAttributes<HTMLVLoginElement>;
            "v-my-library": LocalJSX.VMyLibrary & JSXBase.HTMLAttributes<HTMLVMyLibraryElement>;
            "v-payment-failed": LocalJSX.VPaymentFailed & JSXBase.HTMLAttributes<HTMLVPaymentFailedElement>;
            "v-payment-success": LocalJSX.VPaymentSuccess & JSXBase.HTMLAttributes<HTMLVPaymentSuccessElement>;
            "v-reader": LocalJSX.VReader & JSXBase.HTMLAttributes<HTMLVReaderElement>;
            "v-signup": LocalJSX.VSignup & JSXBase.HTMLAttributes<HTMLVSignupElement>;
            "v-store": LocalJSX.VStore & JSXBase.HTMLAttributes<HTMLVStoreElement>;
        }
    }
}
