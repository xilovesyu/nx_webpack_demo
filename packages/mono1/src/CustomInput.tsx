import * as React from 'react'

export class CustomInput extends React.Component<any, any> {
    render(): any {
        return <div className={'custom-input'}>
            {this.props.children}
        </div>
    }
}