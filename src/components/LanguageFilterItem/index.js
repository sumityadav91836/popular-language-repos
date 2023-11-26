// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {tabDetails, clickingTabItem, isActive} = props
  const {id, language} = tabDetails

  const onClickingTabItem = () => {
    clickingTabItem(id)
  }

  const activeTabClassName = isActive ? 'active-tab' : null

  return (
    <li className="language-name">
      <button
        type="button"
        className={`language-text ${activeTabClassName}`}
        onClick={onClickingTabItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
