import React from 'react'

const Login = () => {
  return (
    <>
    <form className='loginfront'>
      <div className="mb-3">
        <label for="exampleInputEmail1" class="form-label"><b>Usuario*</b></label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" class="form-label"><b>Contraseña*</b></label>
        <input type="password" class="form-control" id="exampleInputPassword1"></input>
      </div>
      <div className="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
          <label className="form-check-label" for="exampleCheck1"><b>Recuérdame</b></label>
      </div>
      <button type="submit" className="botongo">ENTRAR</button>
    </form>
  </>
  )
}

export default Login