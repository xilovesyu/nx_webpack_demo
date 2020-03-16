import * as React from 'react'

export class CustomButton extends React.Component {
    render() {
        return <div className={'custom-button'}>
            {this.props.children}
        </div>
    }
}
