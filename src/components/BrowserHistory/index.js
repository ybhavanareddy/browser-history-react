import { Component } from "react";
import BrowserItem from "../BrowserItem";
import "./index.css";
import { FiSearch } from 'react-icons/fi'

const initialBrowserHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]
class BrowserHistory extends Component{
    
    state = {searchInput:"",
        browserHistoryList:initialBrowserHistoryList
    }

    onChangeSearchInput = (event) =>{
        this.setState({searchInput:event.target.value});
    }


    deleteTransaction = (id) => {
        const {browserHistoryList} = this.state;
        const updatedTransctionList = browserHistoryList.filter(
            eachHistoryDetails => eachHistoryDetails.id !== id,
        );
        this.setState({browserHistoryList:updatedTransctionList})

    }


    render(){
        const { isDarkMode } = this.props
        const themeClass = isDarkMode ? 'dark-mode' : 'light-mode'

        const {searchInput,browserHistoryList} = this.state;
        const searchResults = browserHistoryList.filter(eachHistory => 
            eachHistory.title.toLowerCase().includes(searchInput.toLowerCase())
        )
        return(
        <section className={`history-container ${themeClass}`}>
            <header className="history-header">
                    <img
                src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
                alt="app logo"
                className="history-logo"
            />
            <div className="search-container">
                <FiSearch className="search-icon" />
                <input
                    type="search"
                    placeholder="Search History"
                    className="search-box"
                    value={searchInput}
                    onChange={this.onChangeSearchInput}
                />
            </div>
            </header>
        <section className="history-results">
          {searchResults.length > 0 ? (
            <ul className="history-list">
              {searchResults.map(each => (
                <BrowserItem
                  key={each.id}
                  destinationDetails={each}
                  deleteTransaction={this.deleteTransaction}
                />
              ))}
            </ul>
          ) : (
            <p className="no-results">No matching history found</p>
          )}
        </section>
      </section>
    )
    }
}

export default BrowserHistory;