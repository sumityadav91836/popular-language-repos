// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repoDetails} = props
  const {avatarUrl, name, starsCount, forksCount, issuesCount} = repoDetails

  return (
    <li className="repo-list">
      <img src={avatarUrl} className="logo-img" alt={name} />
      <h1 className="language-name">{name}</h1>
      <div className="details-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="png"
        />
        <p className="count">{starsCount} stars</p>
      </div>
      <div className="details-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="png"
        />
        <p className="count">{forksCount} forks</p>
      </div>
      <div className="details-cont">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="png"
        />
        <p className="count">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
