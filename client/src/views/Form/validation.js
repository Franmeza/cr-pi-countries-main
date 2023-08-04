
const regexDifficulty = /^[1-5]$/;

function validate(formData) {    
    
    var errors = {};    
    if(!formData.name) errors.name = 'Please enter an activity name';    
    if(!regexDifficulty.test(formData.difficulty)) errors.difficulty = 'Difficulty must be a number between 1 and 5';
    if(!formData.difficulty) errors.difficulty = 'Please enter difficulty level'
    if(!formData.duration) errors.duration = 'Please enter the duration of the activity'
    if(!formData.season) errors.season = 'Please select season'
    if(formData.countries.length === 0) errors.countries = 'You must select at least one country'
    return errors;
}

export default validate