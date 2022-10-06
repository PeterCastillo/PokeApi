import { PropsProgressBar } from "../models/props"

const ProgressBar = ({ value , max }: PropsProgressBar) => {

    return (
        <>
            <progress value={value} max={max}></progress><span> {value}%</span>
        </>
    )
}

export default ProgressBar