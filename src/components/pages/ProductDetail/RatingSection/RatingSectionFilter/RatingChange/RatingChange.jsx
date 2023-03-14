import "./RatingChange.scss";

function RatingChange({ data }) {
    return (
        <>
            <div className="comment-info-container">
                <i className="fa fa-user"></i>
                <div className="comment-info-data">
                    <p>{data.username}</p>
                    <p>{data.mate}</p>
                    <p>{data.comment}</p>
                </div>

            </div>
        </>
    )
}

export default RatingChange;