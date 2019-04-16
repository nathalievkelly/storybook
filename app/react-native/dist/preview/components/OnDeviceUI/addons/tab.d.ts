import { PureComponent } from 'react';
export interface Props {
    id: string;
    title: string;
    onPress: (id: string) => void;
}
export default class Tab extends PureComponent<Props> {
    onPressHandler: () => void;
    render(): JSX.Element;
}
