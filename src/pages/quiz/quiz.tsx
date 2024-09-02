import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase'; 
import {CreateQuiz} from './createquiz'
import './createquiz.css'
import DogLoginImage from '../../images/dog.png'


export interface PostType {
    id: string;
    userId: string;
    title: string;
    username: string;
    description: string;
    hyperlink: string;
    pdflink: string;
    selectedSchoolOption: string;
    selectedThemeOption: string;
}
const DefaultScreen = () =>(
    <div className="defaultscreen">
        <div className="post-home-container">
        <img src={DogLoginImage} alt="original post" className="dog-image-size"/>
        <p className="pclarify">Image Courtesy of the Museum of The Cherokee People</p>
        <h1 className="mb-4 text-4xl font-inter leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white"><span className="gradient-text-cherokee">Welcome to the Information page!</span></h1>
                <div className="/underlined">
                <p className="mb-6 text-lg font-inter text-gray-300 lg:text-xl sm:px-16 xl:px-48 ligt:text-white dark:text-white">Select an APUSH theme to get started.</p>
                </div>
        </div>
    </div>
);

export const Quiz = () => {
    const [allPosts, setAllPosts] = useState<PostType[]>([]);
    const [filteredPosts, setFilteredPosts] = useState<PostType[]>([]);
    const [selectedSchool, setSelectedSchool] = useState('');
    /*const [selectedCourse, setSelectedCourse] = useState('');*/
  
    const postsRef = collection(db, "posts");
  
    useEffect(() => {
      const fetchAllPosts = async () => {
        const data = await getDocs(postsRef);
        const posts = data.docs.map((doc) => ({...doc.data(), id: doc.id})) as PostType[];
        setAllPosts(posts);
        setFilteredPosts(posts);
      };
      fetchAllPosts();
    }, []);
  
    useEffect(() => {
      const newFilteredPosts = allPosts.filter(post => 
        (!selectedSchool || post.selectedSchoolOption === selectedSchool)
      );
      setFilteredPosts(newFilteredPosts);
    }, [selectedSchool, allPosts]);
  
    const handleSchoolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      const newSchool = e.target.value;
      setSelectedSchool(newSchool);
    };
      // Check if the current course is valid for the new school
      /**const isCurrentCourseValid = allPosts.some(post => 
        post.selectedSchoolOption === newSchool && post.selectedCourseOption === selectedCourse
      );
      
      if (!isCurrentCourseValid) {
        setSelectedCourse('');
      }
    }; */
  
  
    const uniqueSchoolOptions = React.useMemo(() => {
      const schoolSet = new Set(allPosts.map(post => post.selectedSchoolOption));
      return Array.from(schoolSet);
    }, [allPosts]);
  
  
    return (
      <div>
        <select className="dropdownselect" value={selectedSchool} onChange={handleSchoolChange}>
          <option value="">Theme Select</option>
          {uniqueSchoolOptions.map((school, index) => (
            <option key={index} value={school}>{school}</option>
          ))}
        </select>
        <div className="rounded-lg">
         {selectedSchool === '' ? (
          <DefaultScreen />
        ) : (
          filteredPosts.map((post) => (
            <CreateQuiz key={post.id} post={post} />
          ))
        )}
        </div>
      </div>
    );
  };