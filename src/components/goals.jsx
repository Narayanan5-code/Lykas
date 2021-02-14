import {React,useState} from "react";
import axios from 'axios';



function Goals() {

    const [goals,setGoals] = useState({goal1:"",goal2:""})

    const addData = async event =>{
        event.preventDefault();


        const initialdata = {
            "guid": "00111",
            "goals" : {
                "goal1" : {
                    "id": "1",
                    "type" : "vacation",
                    "name" : goals.goal1
                },
                "goal2" : {
                    "id": "",
                    "type" : "education",
                    "name" : goals.goal2
                }
            },
            "user" : {
                "name" : "",
                "maritalstatus" : "",
                "financialliteracy" : "",
                "birthdate" : "",
                "retirementage" : "",
                "retirmentyear" : "",
                "opentoworkadditionalyears" : "",
                "howmanyyearstoworkadditionalyears" : "",
                "childrens" : "",
                "childrencount" : "",
                "spouse" : {
                    "name" : "",
                    "financialliteracy" : "",
                    "birthdate" : "",
                    "retirementage" : "",
                    "retirmentyear" : "",
                    "opentoworkadditionalyears" : "",
                    "howmanyyearstoworkadditionalyears" : ""
                },
        
                "childrensco" : {
                    "children1" : {
                        "name" : "",
                        "birthdate" : "",
                        "planningforHigherEducation" : "",
                        "HaveYouSetMoneyAside" : ""
                    },
                    "children2" : {
                        "name" : "",
                        "birthdate" : "",
                        "planningforHigherEducation" : "",
                        "HaveYouSetMoneyAside" : ""
                    }
                }
        
            }

        }

        await axios.post(" https://djazfwin5d.execute-api.us-east-1.amazonaws.com/default/goals",initialdata).then(res =>{
            console.log(res)
        })

        console.log(initialdata)


    }

    return(
        <div className="container">
            <div className="row">
            <div className="clearfix col-xs-12 col-sm-12 col-md-6 login-left-pane">
            <form onSubmit ={addData}>
                <input type="text" onChange ={e => setGoals({...goals,goal1:e.target.value})} value={goals.goal1}/>

                <input type="text" onChange ={e => setGoals({...goals,goal2:e.target.value})} value={goals.goal2}/>
           

                <input type="submit" value="Next" />
            </form>
            </div>
            </div>
        </div>
    );
}

export default Goals;