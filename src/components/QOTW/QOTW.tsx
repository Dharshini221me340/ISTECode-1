import React from 'react';
import Split from 'react-split';
import Topbar from "@/components/Topbar/Topbar";
import Timer from "../Timer/Timer";
import BackwardTimer from '../BackwardTimer/BackwardTimer';
import Date from '../Date/Date';
import ProblemDescription from '../Workspace/ProblemDescription/ProblemDescription';
import { Problem } from "@/utils/types/problem";
import Link from "next/link";
import { problems } from '@/mockProblems/problems';


type QOTWProps = {
	_solved: boolean;
  problem:{
    id: "two-sum",
		title: "Two Sum",
		difficulty: "Easy",
		category: "Array",
		order: 1,
		videoId: "8-k1C6ehKuw",
  };
  };
    

  const buttonStyle: React.CSSProperties = {
    position: 'relative',
    margin: '6px', 
  };
  

const QOTW:React.FC<QOTWProps> = ({problem}) => {
    
    
    return  (
      
        <div className='text white '>
          
        <div className='custom' key={`${problem.id}`}>

        
        <BackwardTimer 
        style={buttonStyle}
        duration={24*60*60*1000}  />
        
        <div className='custom_1 bg-gradient-to-b from-purple-700 to-black text-white px-20 py-10 sm:px-4 bg-dark-gray-1 to-black rounded-md text-white'> 
        <Date/>
        <div className='titlename hover:text-blue-600 cursor pointer absolute text-center text-lg ml-20' >
          {problem.title}
        </div>
        <button className ='buttonStyle bg-brand-purple text-white  position:absolute top:100px  px-100 py-3 sm:px-4 rounded-md text-sm font-medium
                hover:text-brand-purple hover:bg-white hover:border-3 hover:border-brand-purple border-3 border-transparent
                transition duration-300 ease-in-out type:_blank' >
                  
                  <Link  href={`/problems/${problem.id}`}>

        Solve Problem
        </Link>
        </button>
        <div className='diffStyle'>
         {problem.difficulty}
          </div>
        </div>
        </div>
    
        </div>
            
    
    );
}
export default QOTW;