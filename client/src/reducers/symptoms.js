const initialState = {
    symptoms: [],
    recentSymptoms: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { symptoms: action.symptoms })
        case 'GET_RECENT_SYMPTOMS_SUCCESS':
            return Object.assign({}, state, { recentSymptoms: action.recentSymptoms });
        case 'UPDATE_SYMPTOM_SUCCESS':
            let updatedSymptomsArray = state.recentSymptoms.map(symptom => {
                return symptom.id !== action.symptom.id ? symptom : action.symptom
            });

            return Object.assign({}, state, { recentSymptoms: updatedSymptomsArray })
        case 'CREATE_SYMPTOM_SUCCESS':
            return Object.assign({}, state, { 
                recentSymptoms: [action.symptom, ...state.recentSymptoms]
            })
        default:
            return state;
    }
}