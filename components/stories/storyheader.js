import React from 'react'

export default ({heading, subheading, date}) => {
    const home = "/";
    return (
        <header className="custom-post-heading">

            <a className='home-link'
               href={ home }><h1>Max Rozen</h1></a>
            <hr/>
            <div className="container">
                <div className="row">
                    <h1 className="heading-txt">{ heading }</h1>
                    <h3 className="subheading">{ subheading }</h3>
                    <h4 className="heading-date"> Published - { date }</h4>
                </div>
            </div>
        </header>
    )
}
