import "./index.css";
import { MdDelete } from 'react-icons/md';
import { FiExternalLink } from 'react-icons/fi'
const BrowserItem = (props) => {
    const {destinationDetails,deleteTransaction} =props
    const {id,timeAccessed,logoUrl,title,domainUrl} = destinationDetails;

    const onDeleteHistory = ()=>{
        deleteTransaction(id);
    }
    return (
        <li className="history-item">
      <article className="history-card">
        <time className="history-time">{timeAccessed}</time>
        <img src={logoUrl} alt={title} className="history-logo" />
        <div className="history-details">
          <h2 className="history-title-text">{title}</h2>
          <a
            href={`https://${domainUrl}`}
            target="_blank"
            rel="noreferrer"
            className="history-domain"
            >
            {domainUrl} <FiExternalLink className="external-icon" />
            </a>
        </div>
        <button className="delete-btn" onClick={onDeleteHistory} aria-label="Delete History">
            <MdDelete className="delete-icon" />
        </button>
      </article>
    </li>
    )

    
}

export default BrowserItem;