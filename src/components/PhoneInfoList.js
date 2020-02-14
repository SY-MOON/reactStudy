import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
//default값을 정해줄땐 앞에 static 넣어주기
	static defaultProps = {
		data: []
	}
	render() {
		const {data} = this.props;
	
		const list = data.map(
			info => (<PhoneInfo info={info} key={info.id} />)
		)
		return (
			<div>
				{list}
			</div>
		);
	}
}

export default PhoneInfoList;