import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const LogOut = () => {
  const dispatchFunc = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn)

  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: 'logOut'})
  }
  return (
    <form onSubmit={submit} >
      {isLoggedIn && <button type="submit">Log out</button>}
    </form>
  )
}

export default LogOut