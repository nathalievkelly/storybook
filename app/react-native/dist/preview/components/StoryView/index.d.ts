import { Component } from 'react';
interface Props {
    listenToEvents: boolean;
    selection?: any;
    storyFn?: any;
    url: string;
}
interface State {
    storyFn?: any;
    selection?: any;
}
export default class StoryView extends Component<Props, State> {
    state: {};
    componentDidMount(): void;
    componentWillUnmount(): void;
    forceReRender: () => void;
    selectStory: (selection: any) => void;
    renderHelp: () => JSX.Element;
    renderOnDeviceUIHelp: () => JSX.Element;
    render(): JSX.Element;
    renderListening: () => JSX.Element;
    renderOnDevice: () => JSX.Element;
}
export {};
