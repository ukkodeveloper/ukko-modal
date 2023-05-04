import { PropsWithChildren } from 'react';
interface props extends PropsWithChildren {
    trigger: JSX.Element;
}
declare const MyModal: ({ trigger, children }: props) => JSX.Element;
export default MyModal;
