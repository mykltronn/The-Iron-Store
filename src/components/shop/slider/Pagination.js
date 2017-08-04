import React, { Component} from 'react'

export const Pagination = (props) => {
    let paginationNodes = props.data.map(paginationNode => {
        return (
            <Pager id={paginationNode.id} key={paginationNode.id} title={paginationNode.title} data={props.data}/>
            );
        });

    return (
        <div className="pagination">
            {paginationNodes}
        </div>
    )
}

class Pager extends Component {
    constructor(props) {
        super(props)
        this.toggleSlide = this.toggleSlide.bind(this)
    }

    toggleSlide(id) {
        console.log("toggleSlide runs");
        let index = this.props.data.map(element => {
          return (
            element.id
          );
        })
        let currentIndex = index.indexOf(id);
        this.setState({ currentSlide : currentIndex })
    }

    render() {
        return (
            <span className="pager" onClick={this.toggleSlide}>
                {this.props.title}
            </span>
        )
    }
}
