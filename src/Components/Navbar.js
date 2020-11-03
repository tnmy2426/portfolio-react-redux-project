import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
            <>
                <nav className='navbar_container'>
                    <div className='navbar_logo'>
                        <h3>Portfolio</h3>
                    </div>
                    <form>
                        <input type='text' placeholder="Search Here..." onChange={()=>console.log("done")} />
                    </form>
                </nav>
            </>
        )
    }
}

export default Navbar
