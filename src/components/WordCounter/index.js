import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import './index.css'

class WordCounter extends Component {
  state = {items: [], search: ''}

  onChangeCharacter = event => {
    this.setState({search: event.target.value})
  }

  onAddWord = () => {
    const {search, items} = this.state
    const updated = [
      ...items,
      {id: uuidv4(), name: search, count: search.length},
    ]
    console.log(updated)
    this.setState({items: updated, search: ''})
  }

  render() {
    const {items, search} = this.state
    return (
      <div className="main-container">
        <div className="inner-first-container">
          <div className="inner-top-container">
            <h1 className="inner-top-title">
              Count the characters like a Boss..
            </h1>
          </div>
          {items.length > 0 ? (
            <ul className="unordered-list-container">
              {items.map(eachItem => (
                <li key={eachItem.id}>
                  <p>
                    {eachItem.name} : {eachItem.count}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <div className="image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="not-found-image"
              />
            </div>
          )}
        </div>
        <div className="inner-second-container">
          <h1 className="inner-second-title">Character Counter</h1>
          <form>
            <input
              type="text"
              className="input-design"
              placeholder="Enter the characters here.."
              onChange={this.onChangeCharacter}
              value={search}
            />
            <button
              type="button"
              className="button-style"
              onClick={this.onAddWord}
            >
              Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default WordCounter
