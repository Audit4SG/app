/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { MatchResults, RouterHistory } from "@stencil/router";
export namespace Components {
    interface AppRoot {
        "history": RouterHistory;
    }
    interface CCard {
        "theme": string;
    }
    interface CFadebox {
        "fadeBottom": string;
        "fadeTop": string;
        "maxHeight": string;
        "overflow": string;
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface CStickyArea {
        "bottom": string;
        "left": string;
        "right": string;
        "top": string;
        "zIndex": number;
    }
    interface EButton {
        "action": string;
        "active": boolean;
        "disabled": boolean;
        "size": string;
        "theme": string;
        "value": any;
        "variant": string;
    }
    interface EInput {
        "action": string;
        "checked": boolean;
        "label": string;
        "name": string;
        "placeholder": string;
        "type": string;
        "value": string;
        "variant": string;
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
    interface EList {
        "bullet": string;
    }
    interface EListItem {
    }
    interface ESelect {
        "name": string;
        "options": any;
    }
    interface EText {
        "theme": string;
        "variant": string;
    }
    interface LRow {
        "align": string;
        "direction": string;
        "justify": string;
        "variant": string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value": number;
        "variant": string;
    }
    interface PCardBasic {
        "definition": string;
        "expand": boolean;
        "label": string;
        "nodeId": string;
        "provocation": string;
        "reference": string;
        "variant": string;
    }
    interface PCardCompact {
        "description": string;
        "label": string;
        "nodeId": string;
        "provocation": string;
        "references": string;
    }
    interface PCardStack {
        "data": any;
    }
    interface PGallery {
    }
    interface PModal {
        "definition": string;
        "label": string;
        "nodeId": string;
        "open": boolean;
        "provocation": string;
        "references": string;
    }
    interface PNavigation {
        "share": boolean;
    }
    interface PSearch {
        "expand": boolean;
    }
    interface PTooltip {
        "definition": string;
        "label": string;
        "provocation": string;
        "reference": string;
        "x": number;
        "y": number;
    }
    interface PTopicList {
    }
    interface VCatchAll {
        "history": RouterHistory;
    }
    interface VInit {
        "history": RouterHistory;
    }
    interface VOntology {
        "history": RouterHistory;
    }
    interface VReading {
        "history": RouterHistory;
        "match": MatchResults;
    }
    interface VSummary {
        "history": RouterHistory;
    }
    interface VUpload {
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
    interface HTMLCFadeboxElement extends Components.CFadebox, HTMLStencilElement {
    }
    var HTMLCFadeboxElement: {
        prototype: HTMLCFadeboxElement;
        new (): HTMLCFadeboxElement;
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
    interface HTMLCStickyAreaElement extends Components.CStickyArea, HTMLStencilElement {
    }
    var HTMLCStickyAreaElement: {
        prototype: HTMLCStickyAreaElement;
        new (): HTMLCStickyAreaElement;
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
    interface HTMLEListElement extends Components.EList, HTMLStencilElement {
    }
    var HTMLEListElement: {
        prototype: HTMLEListElement;
        new (): HTMLEListElement;
    };
    interface HTMLEListItemElement extends Components.EListItem, HTMLStencilElement {
    }
    var HTMLEListItemElement: {
        prototype: HTMLEListItemElement;
        new (): HTMLEListItemElement;
    };
    interface HTMLESelectElement extends Components.ESelect, HTMLStencilElement {
    }
    var HTMLESelectElement: {
        prototype: HTMLESelectElement;
        new (): HTMLESelectElement;
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
    interface HTMLPCardBasicElement extends Components.PCardBasic, HTMLStencilElement {
    }
    var HTMLPCardBasicElement: {
        prototype: HTMLPCardBasicElement;
        new (): HTMLPCardBasicElement;
    };
    interface HTMLPCardCompactElement extends Components.PCardCompact, HTMLStencilElement {
    }
    var HTMLPCardCompactElement: {
        prototype: HTMLPCardCompactElement;
        new (): HTMLPCardCompactElement;
    };
    interface HTMLPCardStackElement extends Components.PCardStack, HTMLStencilElement {
    }
    var HTMLPCardStackElement: {
        prototype: HTMLPCardStackElement;
        new (): HTMLPCardStackElement;
    };
    interface HTMLPGalleryElement extends Components.PGallery, HTMLStencilElement {
    }
    var HTMLPGalleryElement: {
        prototype: HTMLPGalleryElement;
        new (): HTMLPGalleryElement;
    };
    interface HTMLPModalElement extends Components.PModal, HTMLStencilElement {
    }
    var HTMLPModalElement: {
        prototype: HTMLPModalElement;
        new (): HTMLPModalElement;
    };
    interface HTMLPNavigationElement extends Components.PNavigation, HTMLStencilElement {
    }
    var HTMLPNavigationElement: {
        prototype: HTMLPNavigationElement;
        new (): HTMLPNavigationElement;
    };
    interface HTMLPSearchElement extends Components.PSearch, HTMLStencilElement {
    }
    var HTMLPSearchElement: {
        prototype: HTMLPSearchElement;
        new (): HTMLPSearchElement;
    };
    interface HTMLPTooltipElement extends Components.PTooltip, HTMLStencilElement {
    }
    var HTMLPTooltipElement: {
        prototype: HTMLPTooltipElement;
        new (): HTMLPTooltipElement;
    };
    interface HTMLPTopicListElement extends Components.PTopicList, HTMLStencilElement {
    }
    var HTMLPTopicListElement: {
        prototype: HTMLPTopicListElement;
        new (): HTMLPTopicListElement;
    };
    interface HTMLVCatchAllElement extends Components.VCatchAll, HTMLStencilElement {
    }
    var HTMLVCatchAllElement: {
        prototype: HTMLVCatchAllElement;
        new (): HTMLVCatchAllElement;
    };
    interface HTMLVInitElement extends Components.VInit, HTMLStencilElement {
    }
    var HTMLVInitElement: {
        prototype: HTMLVInitElement;
        new (): HTMLVInitElement;
    };
    interface HTMLVOntologyElement extends Components.VOntology, HTMLStencilElement {
    }
    var HTMLVOntologyElement: {
        prototype: HTMLVOntologyElement;
        new (): HTMLVOntologyElement;
    };
    interface HTMLVReadingElement extends Components.VReading, HTMLStencilElement {
    }
    var HTMLVReadingElement: {
        prototype: HTMLVReadingElement;
        new (): HTMLVReadingElement;
    };
    interface HTMLVSummaryElement extends Components.VSummary, HTMLStencilElement {
    }
    var HTMLVSummaryElement: {
        prototype: HTMLVSummaryElement;
        new (): HTMLVSummaryElement;
    };
    interface HTMLVUploadElement extends Components.VUpload, HTMLStencilElement {
    }
    var HTMLVUploadElement: {
        prototype: HTMLVUploadElement;
        new (): HTMLVUploadElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "c-card": HTMLCCardElement;
        "c-fadebox": HTMLCFadeboxElement;
        "c-page": HTMLCPageElement;
        "c-sidebar": HTMLCSidebarElement;
        "c-sticky-area": HTMLCStickyAreaElement;
        "e-button": HTMLEButtonElement;
        "e-input": HTMLEInputElement;
        "e-link": HTMLELinkElement;
        "e-list": HTMLEListElement;
        "e-list-item": HTMLEListItemElement;
        "e-select": HTMLESelectElement;
        "e-text": HTMLETextElement;
        "l-row": HTMLLRowElement;
        "l-seperator": HTMLLSeperatorElement;
        "l-spacer": HTMLLSpacerElement;
        "p-card-basic": HTMLPCardBasicElement;
        "p-card-compact": HTMLPCardCompactElement;
        "p-card-stack": HTMLPCardStackElement;
        "p-gallery": HTMLPGalleryElement;
        "p-modal": HTMLPModalElement;
        "p-navigation": HTMLPNavigationElement;
        "p-search": HTMLPSearchElement;
        "p-tooltip": HTMLPTooltipElement;
        "p-topic-list": HTMLPTopicListElement;
        "v-catch-all": HTMLVCatchAllElement;
        "v-init": HTMLVInitElement;
        "v-ontology": HTMLVOntologyElement;
        "v-reading": HTMLVReadingElement;
        "v-summary": HTMLVSummaryElement;
        "v-upload": HTMLVUploadElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
        "history"?: RouterHistory;
    }
    interface CCard {
        "theme"?: string;
    }
    interface CFadebox {
        "fadeBottom"?: string;
        "fadeTop"?: string;
        "maxHeight"?: string;
        "overflow"?: string;
    }
    interface CPage {
    }
    interface CSidebar {
    }
    interface CStickyArea {
        "bottom"?: string;
        "left"?: string;
        "right"?: string;
        "top"?: string;
        "zIndex"?: number;
    }
    interface EButton {
        "action"?: string;
        "active"?: boolean;
        "disabled"?: boolean;
        "onButtonClick"?: (event: CustomEvent<any>) => void;
        "size"?: string;
        "theme"?: string;
        "value"?: any;
        "variant"?: string;
    }
    interface EInput {
        "action"?: string;
        "checked"?: boolean;
        "label"?: string;
        "name"?: string;
        "onInputEvent"?: (event: CustomEvent<any>) => void;
        "placeholder"?: string;
        "type"?: string;
        "value"?: string;
        "variant"?: string;
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
    interface EList {
        "bullet"?: string;
    }
    interface EListItem {
    }
    interface ESelect {
        "name"?: string;
        "onEvent_selectInput"?: (event: CustomEvent<any>) => void;
        "options"?: any;
    }
    interface EText {
        "theme"?: string;
        "variant"?: string;
    }
    interface LRow {
        "align"?: string;
        "direction"?: string;
        "justify"?: string;
        "variant"?: string;
    }
    interface LSeperator {
    }
    interface LSpacer {
        "value"?: number;
        "variant"?: string;
    }
    interface PCardBasic {
        "definition"?: string;
        "expand"?: boolean;
        "label"?: string;
        "nodeId"?: string;
        "provocation"?: string;
        "reference"?: string;
        "variant"?: string;
    }
    interface PCardCompact {
        "description"?: string;
        "label"?: string;
        "nodeId"?: string;
        "onDeleteCardEvent"?: (event: CustomEvent<any>) => void;
        "onOpenModal"?: (event: CustomEvent<any>) => void;
        "provocation"?: string;
        "references"?: string;
    }
    interface PCardStack {
        "data"?: any;
    }
    interface PGallery {
    }
    interface PModal {
        "definition"?: string;
        "label"?: string;
        "nodeId"?: string;
        "open"?: boolean;
        "provocation"?: string;
        "references"?: string;
    }
    interface PNavigation {
        "share"?: boolean;
    }
    interface PSearch {
        "expand"?: boolean;
        "onSearchContraction"?: (event: CustomEvent<any>) => void;
        "onSearchExpansion"?: (event: CustomEvent<any>) => void;
        "onSearchItemClick"?: (event: CustomEvent<any>) => void;
    }
    interface PTooltip {
        "definition"?: string;
        "label"?: string;
        "provocation"?: string;
        "reference"?: string;
        "x"?: number;
        "y"?: number;
    }
    interface PTopicList {
    }
    interface VCatchAll {
        "history"?: RouterHistory;
    }
    interface VInit {
        "history"?: RouterHistory;
    }
    interface VOntology {
        "history"?: RouterHistory;
    }
    interface VReading {
        "history"?: RouterHistory;
        "match"?: MatchResults;
    }
    interface VSummary {
        "history"?: RouterHistory;
    }
    interface VUpload {
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "c-card": CCard;
        "c-fadebox": CFadebox;
        "c-page": CPage;
        "c-sidebar": CSidebar;
        "c-sticky-area": CStickyArea;
        "e-button": EButton;
        "e-input": EInput;
        "e-link": ELink;
        "e-list": EList;
        "e-list-item": EListItem;
        "e-select": ESelect;
        "e-text": EText;
        "l-row": LRow;
        "l-seperator": LSeperator;
        "l-spacer": LSpacer;
        "p-card-basic": PCardBasic;
        "p-card-compact": PCardCompact;
        "p-card-stack": PCardStack;
        "p-gallery": PGallery;
        "p-modal": PModal;
        "p-navigation": PNavigation;
        "p-search": PSearch;
        "p-tooltip": PTooltip;
        "p-topic-list": PTopicList;
        "v-catch-all": VCatchAll;
        "v-init": VInit;
        "v-ontology": VOntology;
        "v-reading": VReading;
        "v-summary": VSummary;
        "v-upload": VUpload;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "c-card": LocalJSX.CCard & JSXBase.HTMLAttributes<HTMLCCardElement>;
            "c-fadebox": LocalJSX.CFadebox & JSXBase.HTMLAttributes<HTMLCFadeboxElement>;
            "c-page": LocalJSX.CPage & JSXBase.HTMLAttributes<HTMLCPageElement>;
            "c-sidebar": LocalJSX.CSidebar & JSXBase.HTMLAttributes<HTMLCSidebarElement>;
            "c-sticky-area": LocalJSX.CStickyArea & JSXBase.HTMLAttributes<HTMLCStickyAreaElement>;
            "e-button": LocalJSX.EButton & JSXBase.HTMLAttributes<HTMLEButtonElement>;
            "e-input": LocalJSX.EInput & JSXBase.HTMLAttributes<HTMLEInputElement>;
            "e-link": LocalJSX.ELink & JSXBase.HTMLAttributes<HTMLELinkElement>;
            "e-list": LocalJSX.EList & JSXBase.HTMLAttributes<HTMLEListElement>;
            "e-list-item": LocalJSX.EListItem & JSXBase.HTMLAttributes<HTMLEListItemElement>;
            "e-select": LocalJSX.ESelect & JSXBase.HTMLAttributes<HTMLESelectElement>;
            "e-text": LocalJSX.EText & JSXBase.HTMLAttributes<HTMLETextElement>;
            "l-row": LocalJSX.LRow & JSXBase.HTMLAttributes<HTMLLRowElement>;
            "l-seperator": LocalJSX.LSeperator & JSXBase.HTMLAttributes<HTMLLSeperatorElement>;
            "l-spacer": LocalJSX.LSpacer & JSXBase.HTMLAttributes<HTMLLSpacerElement>;
            "p-card-basic": LocalJSX.PCardBasic & JSXBase.HTMLAttributes<HTMLPCardBasicElement>;
            "p-card-compact": LocalJSX.PCardCompact & JSXBase.HTMLAttributes<HTMLPCardCompactElement>;
            "p-card-stack": LocalJSX.PCardStack & JSXBase.HTMLAttributes<HTMLPCardStackElement>;
            "p-gallery": LocalJSX.PGallery & JSXBase.HTMLAttributes<HTMLPGalleryElement>;
            "p-modal": LocalJSX.PModal & JSXBase.HTMLAttributes<HTMLPModalElement>;
            "p-navigation": LocalJSX.PNavigation & JSXBase.HTMLAttributes<HTMLPNavigationElement>;
            "p-search": LocalJSX.PSearch & JSXBase.HTMLAttributes<HTMLPSearchElement>;
            "p-tooltip": LocalJSX.PTooltip & JSXBase.HTMLAttributes<HTMLPTooltipElement>;
            "p-topic-list": LocalJSX.PTopicList & JSXBase.HTMLAttributes<HTMLPTopicListElement>;
            "v-catch-all": LocalJSX.VCatchAll & JSXBase.HTMLAttributes<HTMLVCatchAllElement>;
            "v-init": LocalJSX.VInit & JSXBase.HTMLAttributes<HTMLVInitElement>;
            "v-ontology": LocalJSX.VOntology & JSXBase.HTMLAttributes<HTMLVOntologyElement>;
            "v-reading": LocalJSX.VReading & JSXBase.HTMLAttributes<HTMLVReadingElement>;
            "v-summary": LocalJSX.VSummary & JSXBase.HTMLAttributes<HTMLVSummaryElement>;
            "v-upload": LocalJSX.VUpload & JSXBase.HTMLAttributes<HTMLVUploadElement>;
        }
    }
}
