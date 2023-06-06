import React,{useState} from "react";


export default function Main(){
    const[SkuNo,setSkuNo] = useState('');
    const[SkuFile,setSkuFile] = useState('');

    const handleChange = (e) =>{
        setSkuNo(e.target.value);
        setSkuFile(e.target.value);
    }
    const handleClick = event => {
        event.preventDefault();
    
        if (SkuNo === '' && SkuFile === '') {
          alert("No input given for validation");
        }
      };
    return(
        <>
               <div className='main'>
                    <div className="container">
                        <h1 style={{color:"rgb(228, 240, 250)"}}><i>Sku Validate</i></h1>
                    </div>
                    <div className="hrr">

                    <hr/>
                    </div>
                    <div className="container">
                    <div className="row">
                        
                        <div className="form-group name1 col-md-5">
                            <form action="" name="myForm1">
                                <input type="text" name="SkuNo"  className="form-control" placeholder="Sku Number" onChange={handleChange}/>
                                <input className="btn btn-primary button" type="submit" onClick={handleClick} value="Submit"/>
                            </form>
                                
                            
                        </div>

                                

                        
                        <div className="form-group name1 col-md-2">
                            <div className="container">
                                <p style={{color:'aliceBlue'}}>OR</p>
                            </div>
                                
                        </div>

                        <div className="form-group name1 col-md-5">
                            <form action="" name="myForm2">
                                <input className="form-control" name="SkuFile" type="file" id="formFile" onChange={handleChange}/>
                                <input className="btn btn-primary button" type="submit" value="Submit" onClick={handleClick}/>
                            </form>
                        </div>

                        {/* </form> */}
                    </div>
                    </div>
                    
                    {/* <div className="button">

                        <input className="btn btn-primary" type="submit" value="Submit"/>
                    </div> */}
                        
                </div>
        
        </>
    )
}