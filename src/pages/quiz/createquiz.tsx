import {PostType} from './quiz'
//import {useState} from 'react'
import './createquiz.css';
//import Microlink from "@microlink/react";
import { useCollapse } from 'react-collapsed';
//import { useAuthState } from 'react-firebase-hooks/auth';

interface Props {
    post: PostType;
}


export const CreateQuiz = ({ post }: Props) => {

    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();


    return (
            
      <div className="backgroundcontainer">
        <div className={`post-container border border-gray-200 rounded-xl overflow-hidden ${isExpanded ? '' : 'hover:bg-gray-200'}`}>
            <div 
                className="title p-4 bg-white cursor-pointer hover:bg-gray-200"
                {...getToggleProps()}
            >
                <div className="flex-container1">
                <h2 className="posttitle">{post.title}</h2>
                    
                    
                </div>
                <p className="text-sm text-gray-600">{post.selectedThemeOption}</p>
            </div>

            <div {...getCollapseProps()}>
                <div className="expanded-content p-4 bg-darkred">
                    <hr className="my-2" />
                    <p className="text-sm text-gray-600 text-left ml-12">Posted by: {post.username} | {post.selectedSchoolOption}</p>
                    <div className="post-body mt-4 text-black">
                        <p>{post.description}</p>

                        
                        
               

                   
                </div>
                </div>
            </div>
        </div>
        </div>
    );
};