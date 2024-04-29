const data=[
    {
        varaity:"FREE",
        title:"Free$0/month",
        features:[
            
                {title:"Single User",isEnabled:true},
                {title:"50GB Storage",isEnabled:true},
                {title:"Unlimited Public Projects",isEnabled:true},
                {title:"Community Access",isEnabled:true},
                {title:"Unlimited Private Projects",isEnabled:false},
                {title:"Dedicated Phone Support",isEnabled:false},
                {title:"Free Subdomain",isEnabled:false},
                {title:"Monthly Status Reports",isEnabled:false},
                 ],
    },
    {       
        varaity:"PLUS", 
        title:"Free$9/month",
        features:
           [
                {title:"5User",isEnabled:true},
                {title:"50GB Storage",isEnabled:true},
                {title:"Unlimited Public Projects",isEnabled:true},
                {title:"Community Access",isEnabled:true},
                {title:"Unlimited Private Projects",isEnabled:true},
                {title:"Dedicated Phone Support",isEnabled:true},
                {title:"Free Subdomain",isEnabled:true},
                {title:"Monthly Status Reports",isEnabled:false},
            ],
    },
    {    
        varaity:"PRO",    
        title:"Free$49/month",
        features:
           [
                {title:"UnlimitedUser",isEnabled:true},
                {title:"50GB Storage",isEnabled:true},
                {title:"Unlimited Public Projects",isEnabled:true},
                {title:"Community Access",isEnabled:true},
                {title:"Unlimited Private Projects",isEnabled:true},
                {title:"Dedicated Phone Support",isEnabled:true},
                {title:"Free Subdomain",isEnabled:true},
                {title:"Monthly Status Reports",isEnabled:true},
            ],
    },                     
    ];
    const Subscipt=()=>{
        return(
            <div
            style={{
                backgroundColor: "lightblue",
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                textAlign:"center",
                border: "2px solid black",
                borderRadius: "10px",
                padding: "10px",
                margin: "10px",
                width: "690px",
                height: "530px",
                marginLeft:"300px"
            
            }}
            >
          
              
               
        
        
        {data.map((val)=>(
            <div
            
            key={val.title}
             style={{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                border:"2px solid black",
                margin:"5px",
                padding: "10px",
                width: "500px",
                height: "510px",
                borderRadius: "5px",
                backgroundColor: "white",
               }}
            >
                <p className="text-muted">{val.varaity}</p>
                <h4>{val.title}</h4>
                {val.features.map((fact)=>(
                    <p
                    key={fact.title}
                    style={{

                        textDecoration:fact.isEnabled ? 'none' :{'color':'lightblue'},
                        textAlign:"left"

                    }}
                    >
                        
                        {fact.isEnabled && <i className="fa-solid fa-check fa-1x"></i>}
                        {!fact.isEnabled && <i className="fa-solid fa-xmark fa-1x"></i>}{" "}
                        {fact.title}
                    </p>
                    
                ))}
                
                <button className="btn btn-primary  btn-sm" style={{alignItems:"center",justifyContent:"center"}} >Click</button>
                </div>
                
        ))}
        </div>

        );
    };
export default Subscipt;