import { Fragment, type ReactNode } from "react";

interface GenericListProps<T>{
    items: T[];
    renderItem: (item: T) => ReactNode;
}
export default function GenericList<T extends {id: string}> ({
    items,
    renderItem,
}: GenericListProps<T>) {
    return (
        <>
        {items.map((item)=>(
            <Fragment key={item.id}>{renderItem(item)}</Fragment>
        ))
        }</>
    );
}
