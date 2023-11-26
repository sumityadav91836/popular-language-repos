import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeTabId: languageFiltersData[0].id,
    languageList: [],
    isLoading: false,
  }

  componentDidMount() {
    this.getApiResult()
  }

  clickingTabItem = tabValue => {
    this.setState(
      {
        activeTabId: tabValue,
      },
      this.getApiResult,
    )
  }

  getApiResult = async () => {
    const {activeTabId} = this.state
    this.setState({
      isLoading: true,
    })

    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeTabId}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    const fetchedData = await response.json()

    const updatedData = fetchedData.popular_repos.map(eachRepo => ({
      name: eachRepo.name,
      avatarUrl: eachRepo.avatar_url,
      issuesCount: eachRepo.issues_count,
      id: eachRepo.id,
      starsCount: eachRepo.stars_count,
      forksCount: eachRepo.forks_count,
    }))

    this.setState({languageList: updatedData, isLoading: false})
  }

  renderReposistoryPage = () => {
    const {languageList} = this.state

    return (
      <ul className="repos-container">
        {languageList.map(eachRepo => (
          <RepositoryItem key={eachRepo.id} repoDetails={eachRepo} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {activeTabId, isLoading} = this.state

    return (
      <div className="bg-cont">
        <h1 className="main-heading">Popular</h1>
        <ul className="tab-items">
          {languageFiltersData.map(eachTab => (
            <LanguageFilterItem
              key={eachTab.id}
              tabDetails={eachTab}
              clickingTabItem={this.clickingTabItem}
              isActive={activeTabId === eachTab.id}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoader() : this.renderReposistoryPage()}
      </div>
    )
  }
}

export default GithubPopularRepos
