export default function Footer ({posterURL, title, weekday, date, time}) {
    
    return(
        <div className={(!!posterURL || !!title) ? `footer` : `hidden`}>
            <div className={!!posterURL ? `poster` : `hidden`}>
                <img src={posterURL} alt="" />
            </div>
            <div className={!!title ? `text` : `hidden`}>
                <div>{title}</div>
                <div className={!!weekday ? `text` : `hidden`}>{weekday} - {time}</div>
            </div>
        </div>
    )
}