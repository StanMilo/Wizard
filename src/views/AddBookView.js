import React, {useContext} from 'react'
import BreadCrumbsList from '../components/BreadCrumbList'
import GenresList from '../components/GenresList'
import ScreenComponent from '../components/ScreenComponent'
import SubgenresList from '../components/SubgenresList'
import AddSubgenre from '../components/AddSubgenre'
import Information from '../components/Information'
import {StateContext} from '../stateContext'

function GenresView(props) {
  const {state} = useContext(StateContext)
  const { currentStepIndex, steps } = state

  const renderContent = (steps, index) => {
    switch (steps[index]) {
      case "Genre":
        return <GenresList />
      case "Subgenre":
        return <SubgenresList />
      case "Add new subgenre":
        return <AddSubgenre />
      case "Information" :
        return <Information />
    }
  }

    return (
      <ScreenComponent heading={"Add Book - New Book"}>
        <BreadCrumbsList />
        {renderContent(steps, currentStepIndex)}
      </ScreenComponent>
    )

}

export default GenresView;
