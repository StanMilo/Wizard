import React, {useReducer, createContext} from "react";

const initState = {
  selectedGenreID: null,
  selectedSubgenre: null,
  currentStepIndex: 0,
  steps: [ "Genre", "Subgenre", "Information" ],
  genres: [
    {
      id: 1,
      name: "Genre 1",
      subgenres: [
        {
          id: 10,
          name: "Subgenre 1",
          isDescriptionRequired: true
        },
        {
          id: 11,
          name: "Subgenre 2",
          isDescriptionRequired: false
        },
        {
          id: 12,
          name: "Subgenre 3",
          isDescriptionRequired: true
        },
        {
          id: 13,
          name: "Subgenre 4",
          isDescriptionRequired: true
        },
        {
          id: 14,
          name: "Subgenre 5",
          isDescriptionRequired: true
        }
      ]
    },
    {
      id: 2,
      name: "Genre 2",
      subgenres: [
        {
          id: 15,
          name: "Subgenre 1",
          isDescriptionRequired: true
        },
        {
          id: 16,
          name: "Subgenre 2",
          isDescriptionRequired: false
        },
        {
          id: 17,
          name: "Subgenre 3",
          isDescriptionRequired: true
        }
      ]
    },
    {
      id: 3,
      name: "Genre 3",
      subgenres: [
        {
          id: 18,
          name: "Subgenre 1",
          isDescriptionRequired: true
        },
        {
          id: 19,
          name: "Subgenre 2",
          isDescriptionRequired: true
        },
        {
          id: 20,
          name: "Subgenre 3",
          isDescriptionRequired: true
        }
      ]
    },
    {
      id: 4,
      name: "Genre 4",
      subgenres: [
        {
          id: 21,
          name: "Subgenre 1",
          isDescriptionRequired: false
        },
        {
          id: 22,
          name: "Subgenre 2",
          isDescriptionRequired: false
        },
        {
          id: 23,
          name: "Subgenre 3",
          isDescriptionRequired: false
        }
      ]
    },
    {
      id: 5,
      name: "Genre 5",
      subgenres: [
        {
          id: 24,
          name: "Subgenre 1",
          isDescriptionRequired: true
        }
      ]
    }
  ]
};


const reducer = (state, action) => {
  const {currentStepIndex, steps, selectedSubgenre, genres, selectedGenreID} = state
  switch (action.type) {
    case "genre-selected":
      return {...state, selectedGenreID: action.value}

    case "subgenre-selected":
      return {...state, selectedSubgenre: action.value}

    case "next-step":
      var index = currentStepIndex
      var newSteps = steps
      if (selectedSubgenre && selectedSubgenre.id === 1337) {
        newSteps.splice(2, 0, "Add new subgenre")
      }

      if (currentStepIndex < newSteps.length - 1) { index++ }
      
      return {...state, currentStepIndex: index, steps: newSteps}

    case "previous-step":
      var index = currentStepIndex
      if (currentStepIndex > 0) { index-- }
      
      return {...state, currentStepIndex: index}

    case "final-step":
      return {...state, currentStepIndex: steps.length -1}

    case "new-subgenre":
      const newGenres = genres.map(genre => {
        if (genre.id === selectedGenreID){
          genre.subgenres.push(action.value)
        }
      })
      return {...state, genres: newGenres}
    default:
      return state;
  }
}

export const StateContext = createContext();

export const StateContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <StateContext.Provider value={{state, dispatch}}>
      {props.children}
    </StateContext.Provider>
  )
};