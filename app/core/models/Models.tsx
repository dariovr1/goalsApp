interface IGoal {
    id : string,
    value : string
}

//PropsComponent

interface IGoalItem {
    item : IGoal,
}

interface IGoalItemProps {
    item : IGoal,
    delete : (id : string) => void
}

interface currentElement {
    item : IGoal,
    onDelete : (id : string) => void
}


interface IGoalListProps {
    courseList : IGoal[],
    onDelete : (id : string) => void,
}


export {
    IGoal,
    IGoalItem,
    IGoalListProps,
    IGoalItemProps,
    currentElement
}