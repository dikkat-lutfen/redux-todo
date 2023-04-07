import React from 'react'

function Header() {
  return (
    <div className="header">
      <h1>TODOS</h1>
     
      <form>
        <input className="new-todo" placeholder="What needs to be done" autofocus />
      </form>

    </div>
  )
}

export default Header;
