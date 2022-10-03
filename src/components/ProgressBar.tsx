const ProgressBar = ({ value , max }) => {

    return (
        <>
            <progress value={value} max={max}></progress><span> {value}%</span>
        </>
    )
}

export default ProgressBar