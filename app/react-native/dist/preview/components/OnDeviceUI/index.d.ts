import { PureComponent } from 'react';
import { Animated } from 'react-native';
import Channel from '@storybook/channels';
import { PreviewDimens } from './absolute-positioned-keyboard-aware-view';
interface OnDeviceUIProps {
    stories: any;
    url?: string;
    tabOpen?: number;
    isUIHidden?: boolean;
    getInitialStory?: (...args: any[]) => any;
    shouldDisableKeyboardAvoidingView?: boolean;
    keyboardAvoidingViewVerticalOffset?: number;
}
interface OnDeviceUIState {
    selection: any;
    storyFn: any;
    tabOpen: number;
    slideBetweenAnimation: boolean;
    previewWidth: number;
    previewHeight: number;
}
export default class OnDeviceUI extends PureComponent<OnDeviceUIProps, OnDeviceUIState> {
    animatedValue: Animated.Value;
    channel: Channel;
    constructor(props: OnDeviceUIProps);
    componentWillMount(): Promise<void>;
    componentWillUnmount(): void;
    onLayout: ({ previewWidth, previewHeight }: PreviewDimens) => void;
    handleOpenPreview: () => void;
    forceReRender: () => void;
    handleStoryChange: (selection: any) => void;
    handleToggleTab: (newTabOpen: number) => void;
    render(): JSX.Element;
}
export {};
