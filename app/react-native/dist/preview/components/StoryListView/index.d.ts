import { Component } from 'react';
interface Props {
    stories: any;
    selectedKind?: string;
    selectedStory?: string;
}
interface State {
    data: any[];
    originalData: any[];
}
export default class StoryListView extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    componentWillUnmount(): void;
    handleStoryAdded: () => void;
    handleChangeSearchText: (text: string) => void;
    changeStory(kind: string, story: string): void;
    render(): JSX.Element;
}
export {};
