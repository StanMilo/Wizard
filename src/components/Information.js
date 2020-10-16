import React, {useContext} from 'react'
import { StateContext } from '../stateContext'
import StepActions from './StepActions'

function Information(props) {
    const {state} = useContext(StateContext)
    const {selectedSubgenre} = state
    const {handleChange} = props

    return (
    <>
    <form>
      <div className="subgenre_wrapper">
      <div className="form_title">Book title</div>
        <input type="text" placeholder="Book title" />
      </div>
      <div className="subgenre_wrapper">
      <div className="form_title">Author</div>
        <input type="text" placeholder="Author" />
      </div>
      <div className="subgenre_wrapper">
      <div className="form_title">ISBN</div>
        <input type="text" placeholder="ISBN" />
      </div>
      <div className="subgenre_wrapper">
      <div className="form_title">Publisher</div>
        <input type="text" placeholder="Publisher" />
      </div>
      <div>
      <div className="form_title">Date publisher</div>
        <input type="date" id="birthday" name="birthday" />
      </div>
      <div>
      <div className="form_title">Number of pages</div>
        <label htmlFor="quantity"></label>
        <input type="number"  placeholder="Number of pages" id="quantity" name="quantity" min="1" max="1000"/>
      </div>
      <div className="format_wrapper">
      <div className="form_title">Format</div> 
        <select id="format" name="format" placeholder="Format">
          <option value="" disabled selected>Format</option>
          <option value="PDF">PDF</option>
          <option value="PDF/A">PDF/A</option>
          <option value="PDF/E">PDF/E</option>
          <option value="PDF/X">PDF/X</option>
        </select>
      </div>
      <div>
        <label htmlFor="quantity"></label>
        <div className="format_wrapper">
        <div className="form_title">Edition language</div>
          <input type="number"  placeholder="Edition" id="quantity" name="quantity" min="1" max="1000"/><select id="format" name="format" placeholder="Format" className="language">
            <option value=""  disabled selected>Edition language</option>
              <option value="English">English</option>
              <option value="German">German</option>
              <option value="Serbian">Serbian</option>
              <option value="French">French</option>
            </select>
        </div>
      </div>
      <div>
        { selectedSubgenre.isDescriptionRequired && <textarea placeholder="Type the description..." rows="5" cols="33"></textarea>}
       
        </div>
    </form>
      <StepActions/>
    </>
    )

}

export default Information;
