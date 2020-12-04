import './App.css';
import { useForm } from "react-hook-form";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useEffect} from 'react';
function App() {
  const { register, handleSubmit, errors, getValues, reset } = useForm();
  const onSubmit = data => console.log(data);
 
  const loadUser = async ()=>{
      const res=  await axios.get("https://jsonplaceholder.typicode.com/users/1");
      console.log(res)
      reset(res.data)
  }

  useEffect(()=>{
loadUser()
  },[])


  return (
    <div className="App">
      <div className="container py-5">
        <div className="card shadow mx-auto">
          <div className="card-header">
            Update Reset
          </div>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input type="text" name="name" placeholder="Enter Your Name" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="username" placeholder="Enter Your User Name" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="email" placeholder="Enter Your Email Address" className="form-control" ref={register} />
              </div>
              <div className="form-group form-row">
                <div className="col">
                  <input type="text" name="address.street" placeholder="Street" className="form-control" ref={register} />
                </div>
                <div className="col">
                  <input type="text" name="address.suite" placeholder="Suite" className="form-control" ref={register} />
                </div>
              </div>
              <div className="form-group form-row">
                <div className="col">
                  <input type="text" name="address.city" placeholder="City" className="form-control" ref={register} />
                </div>
                <div className="col">
                  <input type="text" name="address.zipcode" placeholder="zipcode" className="form-control" ref={register} />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="phone" placeholder="Enter Your Phone Number" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="website" placeholder="Enter Your website name" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="company.name" placeholder="Enter Your Company Name" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="company.catchPhrase" placeholder="Enter Your Company Catch Phrase" className="form-control" ref={register} />
              </div>
              <div className="form-group">
                <input type="text" name="company.bs" placeholder="Enter Your Company Bs" className="form-control" ref={register} />
              </div>
              <button type="submit" className="btn btn-primary">Update User</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
