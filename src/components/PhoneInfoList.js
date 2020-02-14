import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
//default값을 정해줄땐 앞에 static 넣어주기
	static defaultProps = {
		data: []
	}
	render() {
		const {data, onRemove, onUpdate} = this.props;
	
		const list = data.map(
			info => (
				<PhoneInfo 
					onRemove={onRemove} 
					onUpdate={onUpdate}
					info={info} 
					key={info.id} />)
		)
		return (
			<div>
				{list}
			</div>
		);
	}
}

export default PhoneInfoList;