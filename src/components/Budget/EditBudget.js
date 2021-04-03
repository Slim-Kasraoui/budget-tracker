import React, { useState } from 'react';

const EditBudget = (props) => {
	const [budget, setBudget] = useState(props.budget);
	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='name'
				placeholder={budget}
				onChange={(event) => setBudget(event.target.value)}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => {
          props.handleSaveClick(budget)
        }}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;