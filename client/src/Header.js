import React from "react"
import Dropdown from './components/useDropdown';

export default () => {
   const state = {
        navSublist: [
            {name:'Home', href:'/',
                // subMenu:[]
            },
            {name:'About', href:'/about',
                subMenu:[
                    {name:"About 1", href:"/about1" },
                    {name:"About 2", href:"/about2" },
                    {name:"About 3", href:"/about3" }
                ]
            },
            {name:'Services', href:'/services',
                subMenu:[
                    {name:"React", href:"/" },
                    {name:"SEO", href:"/" },
                    {name:"Web Development", href:"/" }
                ]
            },
            {name:'Projects', href:'/projects',
               subMenu:[
                   {name:"Registration", href:"/registration"},
                    {name: "Student Info", href:"/studentInfo"}
               ]
            },
            {name:'Contact', href:'/contact',
                subMenu:[
                    {name:"With State Full", href:"/conStateFull" },
                    {name:"Stateless Comp", href:"/conStateLess" }
                    
                ]
            }
        ]
    }
    
   const renderSubNavList = () => {
        return state.navSublist.map((item, i) => <Dropdown key ={i} subMenu={item.subMenu} navName={item.name} navLink={item.href} />)
    }
    
        return(
            <>
                <header>
                    <ul>
                        {renderSubNavList()}
                        {/* For Testing purpose <NavList key={22} navName="test Menu" subMenu="abc" navLink="/testmenu" /> */}
                    </ul>                    
                </header>
            </>
        )
}