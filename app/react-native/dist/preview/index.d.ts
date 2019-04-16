import React from 'react';
import { StoryStore, ClientApi } from '@storybook/client-api';
export interface Params {
    onDeviceUI: boolean;
    resetStorybook: boolean;
    disableWebsockets: boolean;
    query: string;
    host: string;
    port: number;
    secured: boolean;
    initialSelection: any;
    shouldPersistSelection: boolean;
    tabOpen: number;
    isUIHidden: boolean;
    shouldDisableKeyboardAvoidingView: boolean;
    keyboardAvoidingViewVerticalOffset: number;
}
export default class Preview {
    currentStory: any;
    _clientApi: ClientApi;
    _stories: StoryStore;
    _addons: any;
    _decorators: any[];
    constructor();
    api: () => any;
    configure: (loadStories: () => void, module: any) => void;
    getStorybookUI: (params?: Partial<Params>) => {
        new (props: Readonly<{}>): {
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        };
        new (props: {}, context?: any): {
            render(): JSX.Element;
            context: any;
            setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: Readonly<{}>) => {} | Pick<{}, K>) | Pick<{}, K>, callback?: () => void): void;
            forceUpdate(callBack?: () => void): void;
            readonly props: Readonly<{}> & Readonly<{
                children?: React.ReactNode;
            }>;
            state: Readonly<{}>;
            refs: {
                [key: string]: React.ReactInstance;
            };
            componentDidMount?(): void;
            shouldComponentUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean;
            componentWillUnmount?(): void;
            componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
            getSnapshotBeforeUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>): any;
            componentDidUpdate?(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void;
            componentWillMount?(): void;
            UNSAFE_componentWillMount?(): void;
            componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillReceiveProps?(nextProps: Readonly<{}>, nextContext: any): void;
            componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
            UNSAFE_componentWillUpdate?(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): void;
        };
        contextType?: React.Context<any>;
    };
    _sendSetStories(): void;
    _sendGetCurrentStory(): void;
    _setInitialStory: (initialSelection: any, shouldPersistSelection?: boolean) => Promise<void>;
    _getInitialStory: (initialSelection: any, shouldPersistSelection?: boolean) => () => Promise<{
        storyFn: any;
        kind: string;
        story: string;
    }>;
    _getStory(selection: {
        kind: string;
        story: string;
    }): {
        storyFn: any;
        kind: string;
        story: string;
    };
    _selectStoryEvent(selection: {
        kind: string;
        story: string;
    }): void;
    _selectStory(story: any): void;
    _checkStory(selection: any): {
        storyFn: any;
        kind: string;
        story: string;
    };
}
