import { Fragment } from 'react'
import {Label} from '../Label'
export function PasswordInput(){

  return(
          <Fragment>
 <Label>Password</Label>
          <input type="password" name="password" className="form-control" id="yourPassword" required />
          <div className="invalid-feedback">Please enter your password!</div>
          </Fragment>
  )
         
};