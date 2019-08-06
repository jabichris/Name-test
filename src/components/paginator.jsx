import React, { Component } from 'react';
import _ from 'lodash';

class Paginator extends Component {
	state = {};
	render() {
		const { itemsCount, pageSize } = this.props;
		const pageCount = itemsCount / pageSize;
		const pages = _.range(1, pageCount + 1);

		return (
			<div>
				<div className="pagination">
                    {pages.map(page=>(
                        <a key={page} href="#">{page}</a>
                    ))}
				</div>
				<button>Next</button>
			</div>
		);
	}
}

export { Paginator };
